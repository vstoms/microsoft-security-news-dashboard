import test from 'node:test';
import assert from 'node:assert/strict';
import { mapItem } from '../scripts/build-dataset.mjs';

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
    source_name: 'Microsoft Learn',
    category: 'SIEM/SOAR',
    theme_tags: ['Analyse'],
    platforms: [],
    priority_score: 1,
    normalization_warnings: []
  });

  assert.equal(item.date, 'November 2025');
});
