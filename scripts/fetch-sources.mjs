import { mkdir, writeFile } from 'node:fs/promises';
import { sourceCatalog } from '../sources/source-config.js';

const rawDir = new URL('../data/raw/', import.meta.url);
await mkdir(rawDir, { recursive: true });

const failures = [];

for (const source of sourceCatalog) {
  try {
    const response = await fetch(source.url, { headers: { 'user-agent': 'Mozilla/5.0 OpenClaw' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const payload = {
      fetchedAt: new Date().toISOString(),
      source,
      html
    };
    await writeFile(new URL(`${source.id}.json`, rawDir), JSON.stringify(payload, null, 2));
    console.log(`Fetched ${source.id}`);
  } catch (error) {
    failures.push({ source: source.id, error: String(error) });
    console.warn(`Failed ${source.id}: ${error}`);
  }
}

if (failures.length) {
  await writeFile(new URL('fetch-failures.json', rawDir), JSON.stringify({ generatedAt: new Date().toISOString(), failures }, null, 2));
  console.warn(`Fetch completed with ${failures.length} failed source(s)`);
} else {
  await writeFile(new URL('fetch-failures.json', rawDir), JSON.stringify({ generatedAt: new Date().toISOString(), failures: [] }, null, 2));
}
