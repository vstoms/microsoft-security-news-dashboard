import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCandidate, parseLearnHtml } from '../scripts/normalize-items.mjs';

test('preserves Learn month headings and item heading boundaries', () => {
  const candidates = parseLearnHtml(`
    <main><div class="content"><h2>August 2026</h2>
    <h3>Microsoft Sentinel data lake is generally available</h3>
    <p>Available August 14, 2026. A structured description.</p>
    <h4>More information</h4><p>Not an item.</p></div></main>`);
  assert.equal(candidates[0].month, '2026-08');
  assert.equal(candidates[0].rawTitle, 'Microsoft Sentinel data lake is generally available');
  assert.match(candidates[0].text, /structured description/);
  assert.match(candidates[0].text, /Not an item/);
});

test('maps table headers to row candidates instead of flattening cells', () => {
  const candidates = parseLearnHtml(`
    <article><div class="content"><h2>July 2026</h2><table>
    <thead><tr><th>Feature</th><th>Preview/GA</th><th>Date</th></tr></thead>
    <tbody><tr><td>Container runtime threat protection</td><td>GA</td><td>July 8, 2026</td></tr></tbody>
    </table></div></article>`);
  assert.deepEqual(candidates[0].metadata, {
    feature: 'Container runtime threat protection',
    'preview/ga': 'GA',
    date: 'July 8, 2026'
  });
  assert.equal(candidates[0].rawTitle, 'Container runtime threat protection');
});

test('captures definition-list and page metadata', () => {
  const [candidate] = parseLearnHtml(`<html><head><meta name="ms.date" content="2026-08-03"></head><body>
    <main><div class="content"><h2>August 2026</h2><h3>Structured identity protection update</h3>
    <dl><dt>Effective date</dt><dd>August 20, 2026</dd></dl></div></main></body></html>`);
  assert.equal(candidate.metadata.page_published, '2026-08-03');
  assert.equal(candidate.metadata.effective_date, 'August 20, 2026');
});

test('separates publication, effective, and deadline dates and marks month estimates', () => {
  const source = { id: 'sentinel-whats-new', productSlug: 'sentinel', product: 'Sentinel', category: 'SIEM', sourceType: 'whats-new', sourceName: 'Learn', url: 'https://learn.microsoft.com/test' };
  const dated = normalizeCandidate(source, {
    month: '2026-07', rawTitle: 'Update repository API versions', metadata: {},
    text: 'Published July 2, 2026. Effective July 10, 2026. You must migrate before July 31, 2026.'
  }, 0);
  assert.equal(dated.published_at, '2026-07-02');
  assert.equal(dated.source_id, 'sentinel-whats-new');
  assert.equal(dated.effective_at, '2026-07-10');
  assert.equal(dated.deadline_at, '2026-07-31');
  assert.equal(dated.date_precision, 'day');
  assert.equal(dated.estimated_date, false);

  const estimated = normalizeCandidate(source, { month: '2026-08', rawTitle: 'A sufficiently descriptive update', metadata: {}, text: 'No exact date supplied.' }, 1);
  assert.equal(estimated.published_at, '2026-08-01');
  assert.equal(estimated.date_precision, 'month');
  assert.equal(estimated.estimated_date, true);
});

test('rejects generic titles', () => {
  const source = { id: 'sentinel-whats-new', productSlug: 'sentinel', product: 'Sentinel', category: 'SIEM', sourceType: 'whats-new', sourceName: 'Learn', url: 'https://learn.microsoft.com/test' };
  assert.equal(normalizeCandidate(source, { month: '2026-08', rawTitle: 'Required action', metadata: {}, text: 'Useful content' }, 0), null);
});
