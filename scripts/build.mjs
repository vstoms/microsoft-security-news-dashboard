import { mkdir, cp, rm } from 'node:fs/promises';

await rm(new URL('../dist', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('../dist', import.meta.url), { recursive: true });
await cp(new URL('../app', import.meta.url), new URL('../dist', import.meta.url), { recursive: true });
console.log('Built static site to dist/');
