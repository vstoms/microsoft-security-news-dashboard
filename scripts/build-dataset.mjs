import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { sourceCatalog } from '../sources/source-config.js';

export function mapItem(item) {
  return {
    id: item.id,
    product: item.product,
    productSlug: item.product_slug,
    month: item.month_label,
    monthKey: item.month,
    date: `${item.month_label} ${item.published_at.slice(0, 4)}`,
    publishedAt: item.published_at,
    effectiveAt: item.effective_at,
    deadlineAt: item.deadline_at,
    datePrecision: item.date_precision,
    estimatedDate: item.estimated_date,
    title: item.title,
    summary: item.summary_no,
    url: item.url,
    releaseStage: item.release_stage,
    impact: item.impact_no,
    impactLevel: item.impact_level,
    sourceType: item.source_type,
    sourceName: item.source_name,
    sourceId: item.source_id,
    category: item.category,
    themes: item.theme_tags,
    platforms: item.platforms,
    priorityScore: item.priority_score,
    tags: [item.release_stage, ...item.theme_tags].filter(Boolean),
    analysis: [
      item.impact_no,
      item.effective_at && `Ikrafttredelse: ${item.effective_at}`,
      item.deadline_at && `Frist: ${item.deadline_at}`,
      `Kildetype: ${item.source_name} / ${item.source_type}`,
      `Kategori: ${item.category}`
    ].filter(Boolean)
  };
}

export function sourceIdFor(item, sources = sourceCatalog) {
  const matches = sources.filter((source) => source.product === item.product
    && source.sourceType === item.source_type
    && source.sourceName === item.source_name);
  return matches.length === 1 ? matches[0].id : null;
}

export function buildDataHealth(mapped, sources, fetchHealth, generatedAt = new Date().toISOString()) {
  const coveredSourceIds = new Set(mapped.map((item) => item.sourceId).filter(Boolean));
  const failedSourceIds = new Set(fetchHealth.failures.map((failure) => failure.source));
  const sourceCoverage = sources.map((source) => ({
    id: source.id,
    product: source.product,
    sourceName: source.sourceName,
    sourceType: source.sourceType,
    status: failedSourceIds.has(source.id) ? 'failed' : coveredSourceIds.has(source.id) ? 'covered' : 'missing'
  }));

  return {
    generatedAt,
    newestPublishedAt: mapped.reduce((latest, item) => !latest || item.publishedAt > latest ? item.publishedAt : latest, ''),
    fetchStatusAvailable: fetchHealth.available,
    sourcesConfigured: sources.length,
    sourcesCovered: sourceCoverage.filter((source) => source.status === 'covered').length,
    sourcesFailed: sourceCoverage.filter((source) => source.status === 'failed').length,
    sourcesMissing: sourceCoverage.filter((source) => source.status === 'missing').length,
    sourceCoverage
  };
}

async function readFetchHealth() {
  try {
    const payload = JSON.parse(await readFile(new URL('../data/raw/fetch-failures.json', import.meta.url), 'utf8'));
    return { available: true, failures: Array.isArray(payload.failures) ? payload.failures : [] };
  } catch {
    return { available: false, failures: [] };
  }
}

export async function buildDataset() {
  const items = JSON.parse(await readFile(new URL('../data/normalized/news-items.json', import.meta.url), 'utf8'));
  const mapped = items.map((item) => mapItem({ ...item, source_id: item.source_id || sourceIdFor(item) }));
  const products = [...new Set(mapped.map((item) => item.product))].sort((a, b) => a.localeCompare(b, 'no'));
  const months = [...new Set(mapped.map((item) => item.month))];
  const releaseStages = [...new Set(mapped.map((item) => item.releaseStage))];
  const sourceTypes = [...new Set(mapped.map((item) => item.sourceType))];
  const themes = [...new Set(mapped.flatMap((item) => item.themes))].sort((a, b) => a.localeCompare(b, 'no'));
  const impacts = ['Høy', 'Middels', 'Lav'];
  const dataHealth = buildDataHealth(mapped, sourceCatalog, await readFetchHealth());
  const moduleText = `export const newsItems = ${JSON.stringify(mapped, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\nexport const months = ${JSON.stringify(months, null, 2)};\nexport const releaseStages = ${JSON.stringify(releaseStages, null, 2)};\nexport const sourceTypes = ${JSON.stringify(sourceTypes, null, 2)};\nexport const themes = ${JSON.stringify(themes, null, 2)};\nexport const impacts = ${JSON.stringify(impacts, null, 2)};\nexport const dataHealth = ${JSON.stringify(dataHealth, null, 2)};\n`;
  await writeFile(new URL('../app/data/news-data.js', import.meta.url), moduleText);
  console.log(`Built app/data/news-data.js with ${mapped.length} items`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await buildDataset();
}
