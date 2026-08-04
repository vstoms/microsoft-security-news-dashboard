import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { load } from 'cheerio';
import { sourceCatalog } from '../sources/source-config.js';
import {
  impactLabel,
  inferOperationalImpactLevel,
  inferReleaseStage,
  inferThemeTags,
  monthNameToNumber,
  norwegianMonthLabel,
  priorityScore,
  sanitizeSummary,
  sanitizeTitle,
  slugify
} from './lib/utils.mjs';

const rawDir = new URL('../data/raw/', import.meta.url);
const normalizedDir = new URL('../data/normalized/', import.meta.url);
const monthHeader = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})$/i;
const fullDate = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(20\d{2})\b/i;
const isoDate = /\b(20\d{2})-(\d{2})-(\d{2})\b/;
const titleNoise = /^(action required|call to action|required action|overview|details?|description|update|feature|date|category|more information|learn more|next steps?|preview|general availability|ga)$/i;
const titleWarning = /^(updated|new|announcement)\b|^(microsoft learn|what'?s new)\b/i;

function textOf($, element) {
  return $(element).text().replace(/\s+/g, ' ').trim();
}

function dateValue(value) {
  const iso = value.match(isoDate);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const named = value.match(fullDate);
  if (named) return `${named[3]}-${monthNameToNumber(named[1])}-${named[2].padStart(2, '0')}`;
  return null;
}

function classifyDates(text, fallbackMonth) {
  const result = { published_at: `${fallbackMonth}-01`, effective_at: null, deadline_at: null, date_precision: 'month', estimated_date: true };
  const snippets = text.split(/(?<=[.!?;])\s+|\n+/);
  for (const snippet of snippets) {
    const date = dateValue(snippet);
    if (!date) continue;
    if (/\b(deadline|by|before|no later than|must.*(?:by|before))\b/i.test(snippet)) result.deadline_at ??= date;
    else if (/\b(effective|takes? effect|available|availability|roll(?:ing)? out|starting|beginning)\b/i.test(snippet)) result.effective_at ??= date;
    else if (/\b(published|posted|updated|date)\b/i.test(snippet)) {
      result.published_at = date;
      result.date_precision = 'day';
      result.estimated_date = false;
    }
  }
  return result;
}

function titleAssessment(value) {
  const title = sanitizeTitle(value);
  const warnings = [];
  if (!title || title.length < 12 || titleNoise.test(title) || !/[a-z]{3}/i.test(title)) return { rejected: true, title, warnings: ['suspicious_title'] };
  if (titleWarning.test(title) || title.length > 180) warnings.push('suspicious_title');
  return { rejected: false, title, warnings };
}

function metadataFromTable($, table) {
  const rows = [];
  const headers = $(table).find('thead th').map((_, cell) => textOf($, cell).toLowerCase()).get();
  $(table).find('tbody tr').each((_, row) => {
    const cells = $(row).find('th,td').map((__, cell) => textOf($, cell)).get();
    if (!cells.length) return;
    const effectiveHeaders = headers.length === cells.length ? headers : cells.map((__, index) => index === 0 ? 'title' : `column_${index}`);
    rows.push(Object.fromEntries(effectiveHeaders.map((header, index) => [header, cells[index] || ''])));
  });
  return rows;
}

function tableTitle(row) {
  const key = Object.keys(row).find((name) => /^(title|feature|update|name|change|announcement|description)$/.test(name));
  return key ? row[key] : Object.values(row)[0];
}

function tableText(row) {
  return Object.entries(row).map(([key, value]) => `${key}: ${value}`).join('. ');
}

function definitionMetadata($, nodes) {
  const metadata = {};
  nodes.filter('dl').find('dt').each((_, term) => {
    const key = textOf($, term).toLowerCase().replace(/\s+/g, '_');
    const value = textOf($, $(term).next('dd'));
    if (key && value) metadata[key] = value;
  });
  nodes.filter('p').add(nodes.find('p')).each((_, paragraph) => {
    const label = $(paragraph).find('strong').first();
    if (!label.length) return;
    const key = textOf($, label).replace(/:$/, '').toLowerCase().replace(/\s+/g, '_');
    const value = textOf($, paragraph).slice(textOf($, label).length).replace(/^:\s*/, '');
    if (key && value) metadata[key] = value;
  });
  return metadata;
}

/** Extract item candidates while preserving Microsoft Learn's heading and table structure. */
export function parseLearnHtml(html) {
  const $ = load(html);
  $('script,style,nav,footer,.feedback-section,.metadata.page-metadata').remove();
  const root = $('main .content, article .content, main, article').first();
  const scope = root.length ? root : $('body');
  const candidates = [];
  let month = null;
  const pagePublished = $('meta[name="ms.date"],meta[name="date"],meta[property="article:published_time"]').first().attr('content');

  scope.find('h2,h3,table').each((_, element) => {
    const tag = element.tagName.toLowerCase();
    if (tag !== 'table') {
      const heading = textOf($, element).replace(/^#+\s*/, '');
      const match = heading.match(monthHeader);
      if (match) { month = `${match[2]}-${monthNameToNumber(match[1])}`; return; }
      if (!month || tag !== 'h3') return;
      const bodyNodes = $(element).nextUntil('h2,h3');
      const body = bodyNodes.map((__, node) => textOf($, node)).get().filter(Boolean).join('\n');
      candidates.push({
        month,
        rawTitle: heading,
        text: body,
        metadata: { ...(pagePublished ? { page_published: pagePublished } : {}), ...definitionMetadata($, bodyNodes) }
      });
      return;
    }
    if (!month || $(element).prevAll('h2,h3').first().is('h3')) return;
    for (const row of metadataFromTable($, element)) candidates.push({ month, rawTitle: tableTitle(row), text: tableText(row), metadata: row });
  });
  return candidates;
}

export function normalizeCandidate(source, candidate, index) {
  const assessment = titleAssessment(candidate.rawTitle);
  if (assessment.rejected) return null;
  const summary = sanitizeSummary(candidate.text) || assessment.title;
  const basis = `${assessment.title} ${summary}`;
  const releaseStage = inferReleaseStage(basis);
  const impactLevel = inferOperationalImpactLevel(basis);
  const themeTags = inferThemeTags(basis);
  const dates = classifyDates(`${tableText(candidate.metadata)}. ${basis}`, candidate.month);
  return {
    id: `${source.productSlug}-${candidate.month.slice(-2)}-${slugify(assessment.title || `${source.id}-${index}`)}`,
    product_slug: source.productSlug, product: source.product, category: source.category,
    source_id: source.id, source_type: source.sourceType, source_name: source.sourceName,
    title: assessment.title, summary_no: summary,
    impact_level: impactLevel, impact_no: impactLabel(impactLevel),
    ...dates,
    month: candidate.month, month_label: norwegianMonthLabel(candidate.month.slice(-2)),
    release_stage: releaseStage,
    platforms: themeTags.filter((tag) => ['Cloud', 'Endpoint'].includes(tag)),
    theme_tags: themeTags,
    priority_score: priorityScore({ releaseStage, impactLevel, title: assessment.title, summary, themeTags }),
    normalization_warnings: assessment.warnings,
    url: source.url
  };
}

export async function normalizeAll() {
  await mkdir(normalizedDir, { recursive: true });
  const schema = JSON.parse(await readFile(new URL('../data/normalized/schema.json', import.meta.url), 'utf8'));
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const items = [];
  for (const source of sourceCatalog) {
    let raw;
    try { raw = JSON.parse(await readFile(new URL(`${source.id}.json`, rawDir), 'utf8')); }
    catch { console.warn(`Skipping ${source.id}: raw file not found (source may have failed during fetch)`); continue; }
    parseLearnHtml(raw.html).forEach((candidate, index) => {
      const item = normalizeCandidate(source, candidate, index);
      if (!item) { console.warn(`Rejected suspicious title from ${source.id}: ${candidate.rawTitle}`); return; }
      if (!validate(item)) throw new Error(`Schema validation failed for ${item.id}: ${JSON.stringify(validate.errors)}`);
      items.push(item);
    });
  }
  const bestByKey = new Map();
  for (const item of items) {
    const key = `${item.product}|${item.month}|${slugify(item.title.replace(/^Microsoft\s+/i, ''))}`;
    const existing = bestByKey.get(key);
    if (!existing || item.priority_score > existing.priority_score || item.summary_no.length > existing.summary_no.length) bestByKey.set(key, item);
  }
  const unique = [...bestByKey.values()].sort((a, b) => b.priority_score - a.priority_score || b.published_at.localeCompare(a.published_at));
  await writeFile(new URL('news-items.json', normalizedDir), JSON.stringify(unique, null, 2));
  console.log(`Normalized and schema-validated ${unique.length} items`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await normalizeAll();
