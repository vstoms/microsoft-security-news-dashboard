import test from 'node:test';
import assert from 'node:assert/strict';
import { buildDataHealth, mapItem } from '../scripts/build-dataset.mjs';

test('retains the normalized publication year for month-only dates', () => {
  const item = mapItem({
    id: 'sentinel-2025-11-example',
    product: 'Microsoft Sentinel',
    product_slug: 'microsoft-sentinel',
    month: '2025-11',
    month_label: 'November',
    published_at: '2025-11-01',
    effective_at: null,
    deadline_at: null,
    date_precision: 'month',
    estimated_date: true,
    title: 'A sufficiently descriptive historical update',
    summary_no: 'Et sammendrag.',
    url: 'https://learn.microsoft.com/example',
    release_stage: 'GA',
    impact_no: 'Lav operasjonell påvirkning.',
    impact_level: 'Lav',
    source_type: 'whats-new',
    source_id: 'sentinel-whats-new',
    source_name: 'Microsoft Learn',
    category: 'SIEM/SOAR',
    theme_tags: ['Analyse'],
    platforms: [],
    priority_score: 1,
    normalization_warnings: []
  });

  assert.equal(item.date, 'November 2025');
});

test('reports covered, failed, and missing sources separately', () => {
  const sources = [
    { id: 'sentinel', product: 'Microsoft Sentinel', sourceName: 'Microsoft Learn', sourceType: 'whats-new' },
    { id: 'entra', product: 'Microsoft Entra', sourceName: 'Microsoft Learn', sourceType: 'whats-new' },
    { id: 'intune', product: 'Microsoft Intune', sourceName: 'Microsoft Learn', sourceType: 'whats-new' }
  ];
  const health = buildDataHealth(
    [{ sourceId: 'sentinel', publishedAt: '2026-08-03' }],
    sources,
    { available: true, failures: [{ source: 'entra' }] },
    '2026-08-04T06:00:00.000Z'
  );

  assert.equal(health.sourcesConfigured, 3);
  assert.equal(health.sourcesCovered, 1);
  assert.equal(health.sourcesFailed, 1);
  assert.equal(health.sourcesMissing, 1);
  assert.equal(health.newestPublishedAt, '2026-08-03');
  assert.deepEqual(health.sourceCoverage.map(({ id, status }) => ({ id, status })), [
    { id: 'sentinel', status: 'covered' },
    { id: 'entra', status: 'failed' },
    { id: 'intune', status: 'missing' }
  ]);
});
