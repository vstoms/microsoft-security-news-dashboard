import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { sourceCatalog } from '../sources/source-config.js';
import { cleanLines, inferOperationalImpact, inferReleaseStage, inferThemeTags, monthNameToNumber, norwegianMonthLabel, slugify, stripHtml } from './lib/utils.mjs';

const rawDir = new URL('../data/raw/', import.meta.url);
const normalizedDir = new URL('../data/normalized/', import.meta.url);
await mkdir(normalizedDir, { recursive: true });

function parseMonthSections(lines) {
  const monthHeader = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+2026$/i;
  const sections = [];
  let current = null;
  for (const line of lines) {
    if (monthHeader.test(line)) {
      if (current) sections.push(current);
      current = { heading: line, lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);
  return sections;
}

function chunkSection(section) {
  const text = section.lines.join(' | ');
  return text
    .split(/\|\s*(?=(?:Action required|Call to action|General Availability|Public Preview|Preview|GA|New|Updated date|Deprecation|Expanding|Block|New predefined|Container runtime|Threat protection|UEBA|Object-level|External Authentication|ESP|Endpoint Privilege|Custom data quality|Monthly news))/)
    .map((part) => part.trim())
    .filter((part) => part.length > 40);
}

function deriveTitle(rawChunk) {
  const parts = rawChunk.split('|').map((part) => part.trim()).filter(Boolean);
  let title = (parts[0] || '').replace(/^[^A-Za-z]+/, '').trim();
  if (!title || title.length < 5 || /^(the|new|updated|preview\)|ga\)|microsoft sentinel data)$/i.test(title)) {
    const joined = parts.join(' ');
    const sentence = joined.split(/\.\s+/)[0].trim();
    title = sentence.split(/\s+/).slice(0, 12).join(' ');
  }
  return title.replace(/^\((preview|ga)\)\s*/i, '').trim();
}

function normalizeChunk(source, section, chunk, index) {
  const monthMatch = section.heading.match(/^(\w+)\s+2026$/i);
  const month = monthNameToNumber(monthMatch[1]);
  const title = deriveTitle(chunk);
  const summary = chunk.split('|').slice(1, 5).join(' ').replace(/\s+/g, ' ').trim();
  const idBase = `${source.productSlug}-${month}-${slugify(title || `${source.id}-${index}`)}`;
  const basis = `${title} ${summary}`;
  return {
    id: idBase,
    product_slug: source.productSlug,
    product: source.product,
    category: source.category,
    source_type: source.sourceType,
    source_name: source.sourceName,
    title: title || `${source.product} update ${index + 1}`,
    summary_no: summary || section.heading,
    impact_no: inferOperationalImpact(basis) === 'Høy'
      ? 'Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.'
      : inferOperationalImpact(basis) === 'Medium'
        ? 'Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.'
        : 'Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.',
    published_at: `2026-${month}-01`,
    month: `2026-${month}`,
    month_label: norwegianMonthLabel(month),
    release_stage: inferReleaseStage(basis),
    platforms: inferThemeTags(basis).filter((tag) => ['Cloud', 'Endpoint'].includes(tag)),
    theme_tags: inferThemeTags(basis),
    url: source.url
  };
}

const items = [];
for (const source of sourceCatalog) {
  const raw = JSON.parse(await readFile(new URL(`${source.id}.json`, rawDir), 'utf8'));
  const lines = cleanLines(stripHtml(raw.html));
  const sections = parseMonthSections(lines);
  for (const section of sections) {
    const chunks = chunkSection(section).slice(0, 5);
    chunks.forEach((chunk, index) => items.push(normalizeChunk(source, section, chunk, index)));
  }
}

const unique = [];
const seen = new Set();
for (const item of items) {
  const key = `${item.product}|${item.title}|${item.month}`;
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(item);
}

await writeFile(new URL('news-items.json', normalizedDir), JSON.stringify(unique, null, 2));
console.log(`Normalized ${unique.length} items`);
