import { mkdir, writeFile } from 'node:fs/promises';
import { sourceCatalog } from '../sources/source-config.js';

const rawDir = new URL('../data/raw/', import.meta.url);
await mkdir(rawDir, { recursive: true });

for (const source of sourceCatalog) {
  const response = await fetch(source.url, { headers: { 'user-agent': 'Mozilla/5.0 OpenClaw' } });
  if (!response.ok) throw new Error(`Failed to fetch ${source.id}: ${response.status}`);
  const html = await response.text();
  const payload = {
    fetchedAt: new Date().toISOString(),
    source,
    html
  };
  await writeFile(new URL(`${source.id}.json`, rawDir), JSON.stringify(payload, null, 2));
  console.log(`Fetched ${source.id}`);
}
