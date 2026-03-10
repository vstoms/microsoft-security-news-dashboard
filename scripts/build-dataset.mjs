import { readFile, writeFile } from 'node:fs/promises';

const items = JSON.parse(await readFile(new URL('../data/normalized/news-items.json', import.meta.url), 'utf8'));

const mapped = items.map((item) => ({
  id: item.id,
  product: item.product,
  month: item.month_label,
  date: item.month_label + ' 2026',
  title: item.title,
  summary: item.summary_no,
  url: item.url,
  tags: [item.release_stage, ...item.theme_tags].filter(Boolean),
  analysis: [item.impact_no, `Kildetype: ${item.source_name} / ${item.source_type}`, `Kategori: ${item.category}`]
}));

const products = [...new Set(mapped.map((item) => item.product))].sort((a, b) => a.localeCompare(b, 'no'));
const months = [...new Set(mapped.map((item) => item.month))];
const moduleText = `export const newsItems = ${JSON.stringify(mapped, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\nexport const months = ${JSON.stringify(months, null, 2)};\n`;
await writeFile(new URL('../app/data/news-data.js', import.meta.url), moduleText);
console.log(`Built app/data/news-data.js with ${mapped.length} items`);
