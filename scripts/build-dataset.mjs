import { readFile, writeFile } from 'node:fs/promises';

const items = JSON.parse(await readFile(new URL('../data/normalized/news-items.json', import.meta.url), 'utf8'));

const mapped = items.map((item) => ({
  id: item.id,
  product: item.product,
  productSlug: item.product_slug,
  month: item.month_label,
  monthKey: item.month,
  date: item.month_label + ' 2026',
  publishedAt: item.published_at,
  title: item.title,
  summary: item.summary_no,
  url: item.url,
  releaseStage: item.release_stage,
  impact: item.impact_no,
  sourceType: item.source_type,
  sourceName: item.source_name,
  category: item.category,
  themes: item.theme_tags,
  platforms: item.platforms,
  tags: [item.release_stage, ...item.theme_tags].filter(Boolean),
  analysis: [item.impact_no, `Kildetype: ${item.source_name} / ${item.source_type}`, `Kategori: ${item.category}`]
}));

const products = [...new Set(mapped.map((item) => item.product))].sort((a, b) => a.localeCompare(b, 'no'));
const months = [...new Set(mapped.map((item) => item.month))];
const releaseStages = [...new Set(mapped.map((item) => item.releaseStage))];
const sourceTypes = [...new Set(mapped.map((item) => item.sourceType))];
const themes = [...new Set(mapped.flatMap((item) => item.themes))].sort((a, b) => a.localeCompare(b, 'no'));
const impacts = [...new Set(mapped.map((item) => item.impact))];
const moduleText = `export const newsItems = ${JSON.stringify(mapped, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\nexport const months = ${JSON.stringify(months, null, 2)};\nexport const releaseStages = ${JSON.stringify(releaseStages, null, 2)};\nexport const sourceTypes = ${JSON.stringify(sourceTypes, null, 2)};\nexport const themes = ${JSON.stringify(themes, null, 2)};\nexport const impacts = ${JSON.stringify(impacts, null, 2)};\n`;
await writeFile(new URL('../app/data/news-data.js', import.meta.url), moduleText);
console.log(`Built app/data/news-data.js with ${mapped.length} items`);
