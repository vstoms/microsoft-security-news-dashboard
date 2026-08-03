import { newsItems, products, months, releaseStages, sourceTypes, themes, impacts } from './data/news-data.js';

const el = {
  search: document.querySelector('#search'),
  product: document.querySelector('#product-filter'),
  month: document.querySelector('#month-filter'),
  stage: document.querySelector('#stage-filter'),
  source: document.querySelector('#source-filter'),
  theme: document.querySelector('#theme-filter'),
  impact: document.querySelector('#impact-filter'),
  sort: document.querySelector('#sort-filter'),
  list: document.querySelector('#news-list'),
  count: document.querySelector('#result-count'),
  chips: document.querySelector('#product-chips'),
  stats: document.querySelector('#hero-stats'),
  activeFilters: document.querySelector('#active-filters'),
  priorityList: document.querySelector('#priority-list'),
  criticalList: document.querySelector('#critical-list'),
  queueEmpty: document.querySelector('#queue-empty'),
  queueSummary: document.querySelector('#queue-summary'),
  deadlineFilters: document.querySelector('#deadline-filters'),
  selectionCount: document.querySelector('#selection-count'),
  exportCsv: document.querySelector('#export-csv'),
  exportMarkdown: document.querySelector('#export-markdown'),
  template: document.querySelector('#card-template'),
  criticalTemplate: document.querySelector('#critical-template')
};

const state = {
  search: '', product: 'Alle', month: 'Alle', stage: 'Alle', source: 'Alle', theme: 'Alle', impact: 'Alle', sort: 'priority', due: 'all', selected: new Set()
};

const STORAGE_KEY = 'ms-security-action-queue-v1';
const workflowStatuses = ['Ikke behandlet', 'Vurdert', 'Tildelt', 'Ignorert', 'Fullført'];
const teamByCategory = {
  'SIEM/SOAR': 'SOC-plattform',
  'Identity & Access': 'Identitet og tilgang',
  'Cloud Security': 'Skyplattform',
  'Data Security': 'Informasjonsforvaltning'
};
let workflow = loadWorkflow();

const stageWeight = { 'Action required': 4, Deprecation: 3, GA: 2, Preview: 1, 'Ikke oppgitt': 0 };
const stageClass = (value) => ({ 'Action required': 'stage-action', Deprecation: 'stage-deprecation', GA: 'stage-ga', Preview: 'stage-preview' }[value] || 'stage-unknown');
const impactClass = (value) => value === 'Høy' ? 'impact-high' : value === 'Middels' ? 'impact-medium' : 'impact-low';
const sourceLabel = (value) => ({ 'whats-new': 'What\'s new', 'release-notes': 'Release notes', blog: 'Blogg' }[value] || value);
const impactLabel = (value) => value === 'Høy' ? 'Høy påvirkning' : value === 'Middels' ? 'Middels påvirkning' : 'Lav påvirkning';

function fillSelect(select, values) {
  select.innerHTML = ['Alle', ...values].map((value) => `<option value="${value}">${value}</option>`).join('');
}

function buildStats() {
  const urgent = newsItems.filter((item) => stageWeight[item.releaseStage] >= 3 || item.impactLevel === 'Høy').length;
  el.stats.innerHTML = [
    `Totalt ${newsItems.length} normaliserte oppdateringer`,
    `${products.length} produkter`,
    `${urgent} saker med høy prioritet`,
    `${sourceTypes.length} kildetyper`
  ].map((text) => `<div class="stat">${text}</div>`).join('');
}

function populateFilters() {
  fillSelect(el.product, products);
  fillSelect(el.month, months);
  fillSelect(el.stage, releaseStages);
  fillSelect(el.source, sourceTypes.map(sourceLabel));
  fillSelect(el.theme, themes);
  fillSelect(el.impact, impacts);

  el.chips.innerHTML = products.map((product) => `<button class="chip" data-product="${product}">${product}</button>`).join('');
  buildStats();
  renderPriorityList();
  renderCriticalList();
}

function loadWorkflow() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

function saveWorkflow() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(workflow)); } catch { /* Browser storage may be disabled. */ }
}

function parseVendorDeadline(item) {
  const text = `${item.title} ${item.summary}`;
  const months = { january: 0, february: 1, march: 2, april: 3, may: 4, june: 5, july: 6, august: 7, september: 8, october: 9, november: 10, december: 11 };
  const match = text.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?[,]?\s+(20\d{2})\b/i);
  if (match) return { date: new Date(Number(match[3]), months[match[1].toLowerCase()], Number(match[2])), vendor: true };
  const monthYear = text.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})\b/i);
  if (monthYear) return { date: new Date(Number(monthYear[2]), months[monthYear[1].toLowerCase()] + 1, 0), vendor: true };
  return null;
}

function operationalize(item) {
  const vendorDeadline = parseVendorDeadline(item);
  const published = new Date(`${item.publishedAt}T12:00:00`);
  const reviewDays = item.releaseStage === 'Action required' ? 7 : 30;
  const deadline = vendorDeadline || { date: new Date(published.getTime() + reviewDays * 86400000), vendor: false };
  const suggestedAction = item.releaseStage === 'Deprecation'
    ? `Kartlegg bruk av ${item.product}, vurder erstatning og planlegg utfasing.`
    : item.releaseStage === 'Action required'
      ? `Bekreft om endringen gjelder miljøet, test berørte arbeidsflyter og opprett endringssak.`
      : `Vurder operasjonell påvirkning og dokumenter om tiltak er nødvendig.`;
  const saved = workflow[item.id] || {};
  return { ...item, deadline: deadline.date, vendorDeadline: deadline.vendor, suggestedAction, team: saved.team || teamByCategory[item.category] || `${item.product}-ansvarlig`, status: saved.status || workflowStatuses[0] };
}

const actionItems = newsItems
  .filter((item) => item.releaseStage === 'Action required' || item.releaseStage === 'Deprecation' || item.impactLevel === 'Høy')
  .map(operationalize);

function dayDifference(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / 86400000);
}

function deadlineBadge(item) {
  const days = dayDifference(item.deadline);
  if (days < 0) return { text: `Forfalt ${Math.abs(days)} d`, className: 'deadline-overdue' };
  if (days === 0) return { text: 'Forfaller i dag', className: 'deadline-overdue' };
  if (days <= 7) return { text: `${days} d igjen`, className: 'deadline-soon' };
  if (days <= 30) return { text: `${days} d igjen`, className: 'deadline-upcoming' };
  return { text: `${days} d igjen`, className: 'deadline-later' };
}

const dateFormatter = new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'short', year: 'numeric' });

function filteredActionItems() {
  const limit = Number(state.due);
  return actionItems.filter((item) => {
    const days = dayDifference(item.deadline);
    if (state.due === 'overdue') return days < 0;
    if (state.due === 'all') return true;
    return days >= 0 && days <= limit;
  }).sort((a, b) => a.deadline - b.deadline || b.priorityScore - a.priorityScore);
}

function matchesImpact(item, selected) {
  return selected === 'Alle' || item.impactLevel === selected;
}

function filterItems() {
  const q = state.search.trim().toLowerCase();
  return newsItems.filter((item) => {
    const haystack = [item.title, item.summary, item.product, item.category, item.sourceName, item.sourceType, item.releaseStage, item.impact, item.analysis.join(' '), item.themes.join(' ')].join(' ').toLowerCase();
    return (!q || haystack.includes(q))
      && (state.product === 'Alle' || item.product === state.product)
      && (state.month === 'Alle' || item.month === state.month)
      && (state.stage === 'Alle' || item.releaseStage === state.stage)
      && (state.source === 'Alle' || sourceLabel(item.sourceType) === state.source)
      && (state.theme === 'Alle' || item.themes.includes(state.theme))
      && matchesImpact(item, state.impact);
  });
}

function sortItems(items) {
  const sorted = [...items];
  if (state.sort === 'newest') return sorted.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title, 'no'));
  if (state.sort === 'product') return sorted.sort((a, b) => a.product.localeCompare(b.product, 'no') || b.priorityScore - a.priorityScore);
  return sorted.sort((a, b) => b.priorityScore - a.priorityScore || b.publishedAt.localeCompare(a.publishedAt));
}

function renderActiveFilters() {
  const active = [['Produkt', state.product], ['Måned', state.month], ['Status', state.stage], ['Kilde', state.source], ['Tema', state.theme], ['Påvirkning', state.impact]].filter(([, value]) => value !== 'Alle');
  el.activeFilters.innerHTML = active.length ? active.map(([label, value]) => `<span class="chip active-chip">${label}: ${value}</span>`).join('') : '<span class="chip">Ingen aktive filtre</span>';
}

function renderPriorityList() {
  const top = sortItems(newsItems).slice(0, 5);
  el.priorityList.innerHTML = top.map((item) => `<li><strong>${item.product}</strong>: ${item.title}</li>`).join('');
}

function renderCriticalList() {
  const critical = filteredActionItems();
  el.criticalList.innerHTML = '';
  el.queueEmpty.hidden = critical.length > 0;
  const overdue = actionItems.filter((item) => dayDifference(item.deadline) < 0 && item.status !== 'Fullført' && item.status !== 'Ignorert').length;
  const open = actionItems.filter((item) => item.status !== 'Fullført' && item.status !== 'Ignorert').length;
  el.queueSummary.innerHTML = `<strong>${open}</strong><span>åpne</span><strong>${overdue}</strong><span>forfalt</span>`;
  for (const item of critical) {
    const node = el.criticalTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.id = item.id;
    const deadline = deadlineBadge(item);
    const badges = node.querySelectorAll('.badge');
    badges[0].textContent = deadline.text;
    badges[0].classList.add(deadline.className);
    badges[1].textContent = item.releaseStage;
    badges[1].classList.add(stageClass(item.releaseStage));
    badges[2].textContent = item.status;
    badges[2].classList.add('status-badge');
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.action-suggestion').textContent = item.suggestedAction;
    node.querySelector('.action-deadline').textContent = `${dateFormatter.format(item.deadline)} · ${item.vendorDeadline ? 'Microsoft-frist' : 'Intern vurderingsfrist'}`;
    node.querySelector('.action-service').textContent = item.product;
    node.querySelector('.action-team').textContent = item.team;
    const statusSelect = node.querySelector('.status-select');
    statusSelect.innerHTML = workflowStatuses.map((status) => `<option${status === item.status ? ' selected' : ''}>${status}</option>`).join('');
    node.querySelector('.team-input').value = item.team;
    node.querySelector('.action-checkbox').checked = state.selected.has(item.id);
    node.querySelector('.source-link').href = item.url;
    el.criticalList.appendChild(node);
  }
  updateExportControls();
}

function updateItem(id, changes) {
  const item = actionItems.find((candidate) => candidate.id === id);
  if (!item) return;
  Object.assign(item, changes);
  workflow[id] = { status: item.status, team: item.team };
  saveWorkflow();
  renderCriticalList();
}

function updateExportControls() {
  const count = state.selected.size;
  el.selectionCount.textContent = `${count} valgt`;
  el.exportCsv.disabled = el.exportMarkdown.disabled = count === 0;
}

function selectedActions() {
  return actionItems.filter((item) => state.selected.has(item.id));
}

function downloadFile(filename, content, type) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 0);
}

function exportCsv() {
  const rows = [['Tittel', 'Foreslått tiltak', 'Berørt tjeneste', 'Ansvarlig team', 'Frist', 'Status', 'Kilde']];
  for (const item of selectedActions()) rows.push([item.title, item.suggestedAction, item.product, item.team, item.deadline.toISOString().slice(0, 10), item.status, item.url]);
  const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\r\n');
  downloadFile('security-actions.csv', `\uFEFF${csv}`, 'text/csv;charset=utf-8');
}

function exportMarkdown() {
  const lines = ['# Tiltak – Microsoft Security', '', `Eksportert ${dateFormatter.format(new Date())}`, ''];
  for (const item of selectedActions()) lines.push(`## ${item.title}`, '', `- **Status:** ${item.status}`, `- **Frist:** ${dateFormatter.format(item.deadline)} (${item.vendorDeadline ? 'Microsoft-frist' : 'intern vurderingsfrist'})`, `- **Berørt tjeneste:** ${item.product}`, `- **Ansvarlig team:** ${item.team}`, `- **Foreslått tiltak:** ${item.suggestedAction}`, `- **Kilde:** ${item.url}`, '');
  downloadFile('security-actions.md', lines.join('\n'), 'text/markdown;charset=utf-8');
}

function render() {
  const items = sortItems(filterItems());
  el.count.textContent = `${items.length} treff`;
  renderActiveFilters();
  el.list.innerHTML = '';
  if (!items.length) {
    el.list.innerHTML = '<div class="empty">Ingen treff. Prøv et annet produkt, tema, status eller søk.</div>';
    return;
  }
  for (const item of items) {
    const node = el.template.content.firstElementChild.cloneNode(true);
    const badges = node.querySelectorAll('.badge');
    badges[0].textContent = item.releaseStage;
    badges[0].classList.add(stageClass(item.releaseStage));
    badges[1].textContent = impactLabel(item.impactLevel);
    badges[1].classList.add(impactClass(item.impactLevel));
    badges[2].textContent = sourceLabel(item.sourceType);
    node.querySelector('.meta').textContent = `${item.product} • ${item.date} • score ${item.priorityScore}`;
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.summary').textContent = item.summary;
    node.querySelector('.detail-product').textContent = item.product;
    node.querySelector('.detail-category').textContent = item.category;
    node.querySelector('.detail-source').textContent = `${item.sourceName} / ${sourceLabel(item.sourceType)}`;
    node.querySelector('.detail-date').textContent = item.publishedAt;
    node.querySelector('.source-link').href = item.url;
    node.querySelector('.tags').innerHTML = item.themes.map((tag) => `<span class="tag">${tag}</span>`).join('');
    node.querySelector('.analysis-list').innerHTML = item.analysis.map((line) => `<li>${line}</li>`).join('');
    el.list.appendChild(node);
  }
}

el.search.addEventListener('input', (event) => { state.search = event.target.value; render(); });
for (const [key, node] of Object.entries({ product: el.product, month: el.month, stage: el.stage, source: el.source, theme: el.theme, impact: el.impact, sort: el.sort })) {
  node.addEventListener('change', (event) => { state[key] = event.target.value; render(); });
}
el.chips.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  state.product = button.dataset.product;
  el.product.value = state.product;
  render();
});
el.deadlineFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-due]');
  if (!button) return;
  state.due = button.dataset.due;
  el.deadlineFilters.querySelectorAll('[data-due]').forEach((candidate) => candidate.classList.toggle('active', candidate === button));
  renderCriticalList();
});
el.criticalList.addEventListener('change', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card) return;
  if (event.target.matches('.action-checkbox')) {
    event.target.checked ? state.selected.add(card.dataset.id) : state.selected.delete(card.dataset.id);
    updateExportControls();
  }
  if (event.target.matches('.status-select')) updateItem(card.dataset.id, { status: event.target.value });
  if (event.target.matches('.team-input')) updateItem(card.dataset.id, { team: event.target.value.trim() || 'Ikke tildelt' });
});
el.exportCsv.addEventListener('click', exportCsv);
el.exportMarkdown.addEventListener('click', exportMarkdown);

populateFilters();
render();
