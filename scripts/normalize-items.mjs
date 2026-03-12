import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { sourceCatalog } from '../sources/source-config.js';
import {
  cleanLines,
  impactLabel,
  inferOperationalImpactLevel,
  inferReleaseStage,
  inferThemeTags,
  monthNameToNumber,
  norwegianMonthLabel,
  priorityScore,
  sanitizeSummary,
  sanitizeTitle,
  slugify,
  stripHtml
} from './lib/utils.mjs';

const rawDir = new URL('../data/raw/', import.meta.url);
const normalizedDir = new URL('../data/normalized/', import.meta.url);
await mkdir(normalizedDir, { recursive: true });

const monthHeader = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+2026$/i;
const splitMarkers = /\|\s*(?=(?:Action required|Call to action|Required action|General Availability|Public Preview|Preview|GA|Updated date|Deprecation|Expanding|Block|New predefined|Container runtime|Threat protection|UEBA|Object-level|External Authentication|ESP|Endpoint Privilege|Custom data quality|Monthly news|Microsoft Security Private Link|Top 5|Introducing|Unlocking|Disrupt|Transparent))/;

function parseMonthSections(lines) {
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
  return section.lines.join(' | ')
    .split(splitMarkers)
    .map((part) => part.trim())
    .filter((part) => part.length > 50);
}

function deriveTitleAndSummary(chunk) {
  const parts = chunk.split('|').map((part) => part.trim()).filter(Boolean);
  const cleaned = parts
    .map((part) => sanitizeTitle(part))
    .filter(Boolean)
    .filter((part) => !monthHeader.test(part))
    .filter((part) => !/^(preview\/ga|type|date|category|update|description|feature)$/i.test(part));

  let title = cleaned.find((part) => part.length >= 12) || '';
  if (!title) {
    const sentence = sanitizeTitle(parts.join(' ').split(/\.\s+/)[0] || '');
    title = sentence.split(/\s+/).slice(0, 18).join(' ');
  }

  const summary = parts
    .map((part) => sanitizeSummary(part))
    .find((part) => part.length >= 40 && part !== title) || sanitizeSummary(parts.slice(0, 3).join(' '));

  return { title, summary };
}

function derivePublishedAt(section, chunk, fallbackMonth) {
  const match = chunk.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+2026/i);
  if (match) return `2026-${monthNameToNumber(match[1])}-${match[2].padStart(2, '0')}`;
  return `2026-${fallbackMonth}-01`;
}

function normalizeChunk(source, section, chunk, index) {
  const fallbackMonth = monthNameToNumber(section.heading.match(/^(\w+)\s+2026$/i)[1]);
  const { title, summary } = deriveTitleAndSummary(chunk);
  const basis = `${title} ${summary} ${chunk}`;
  const releaseStage = inferReleaseStage(basis);
  const impactLevel = inferOperationalImpactLevel(basis);
  const themeTags = inferThemeTags(basis);
  const publishedAt = derivePublishedAt(section, chunk, fallbackMonth);
  const month = publishedAt.slice(0, 7);
  return {
    id: `${source.productSlug}-${month.slice(-2)}-${slugify(title || `${source.id}-${index}`)}`,
    product_slug: source.productSlug,
    product: source.product,
    category: source.category,
    source_type: source.sourceType,
    source_name: source.sourceName,
    title: title || `${source.product} update ${index + 1}`,
    summary_no: summary || section.heading,
    impact_level: impactLevel,
    impact_no: impactLabel(impactLevel),
    published_at: publishedAt,
    month,
    month_label: norwegianMonthLabel(month.slice(-2)),
    release_stage: releaseStage,
    platforms: themeTags.filter((tag) => ['Cloud', 'Endpoint'].includes(tag)),
    theme_tags: themeTags,
    priority_score: priorityScore({ releaseStage, impactLevel, title, summary, themeTags }),
    url: source.url
  };
}

const items = [];
for (const source of sourceCatalog) {
  const raw = JSON.parse(await readFile(new URL(`${source.id}.json`, rawDir), 'utf8'));
  const lines = cleanLines(stripHtml(raw.html));
  const sections = parseMonthSections(lines);
  for (const section of sections) {
    chunkSection(section).slice(0, 8).forEach((chunk, index) => items.push(normalizeChunk(source, section, chunk, index)));
  }
}

const bestByKey = new Map();
for (const item of items) {
  const key = `${item.product}|${item.month}|${slugify(item.title.replace(/^Microsoft\s+/i, ''))}`;
  const existing = bestByKey.get(key);
  if (!existing || item.priority_score > existing.priority_score || item.summary_no.length > existing.summary_no.length) bestByKey.set(key, item);
}

const unique = [...bestByKey.values()].sort((a, b) => b.priority_score - a.priority_score || b.published_at.localeCompare(a.published_at));
await writeFile(new URL('news-items.json', normalizedDir), JSON.stringify(unique, null, 2));
console.log(`Normalized ${unique.length} items`);
