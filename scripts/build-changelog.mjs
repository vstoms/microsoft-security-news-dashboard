import { readFile, writeFile } from 'node:fs/promises';

const items = JSON.parse(await readFile(new URL('../data/normalized/news-items.json', import.meta.url), 'utf8'));
const sorted = [...items].sort((a, b) => b.published_at.localeCompare(a.published_at) || a.product.localeCompare(b.product));
const top = sorted.slice(0, 20);
const generatedAt = new Date().toISOString();

const lines = [
  '# Latest Microsoft Security News Changes',
  '',
  `Generated: ${generatedAt}`,
  '',
  ...top.map((item) => `- ${item.published_at} • ${item.product} • ${item.release_stage} • ${item.title}`)
];

await writeFile(new URL('../data/normalized/CHANGELOG.md', import.meta.url), lines.join('\n') + '\n');
console.log(`Built changelog with ${top.length} items`);
