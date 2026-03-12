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
  template: document.querySelector('#card-template'),
  criticalTemplate: document.querySelector('#critical-template')
};

const state = {
  search: '', product: 'Alle', month: 'Alle', stage: 'Alle', source: 'Alle', theme: 'Alle', impact: 'Alle', sort: 'priority'
};

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
  const critical = newsItems.filter((item) => item.releaseStage === 'Action required' || item.releaseStage === 'Deprecation' || item.impactLevel === 'Høy').slice(0, 6);
  el.criticalList.innerHTML = '';
  for (const item of critical) {
    const node = el.criticalTemplate.content.firstElementChild.cloneNode(true);
    const badges = node.querySelectorAll('.badge');
    badges[0].textContent = item.releaseStage;
    badges[0].classList.add(stageClass(item.releaseStage));
    badges[1].textContent = impactLabel(item.impactLevel);
    badges[1].classList.add(impactClass(item.impactLevel));
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.highlight-meta').textContent = `${item.product} • ${item.publishedAt}`;
    const summary = item.summary.length > 220 ? `${item.summary.slice(0, 217).trim()}…` : item.summary;
    node.querySelector('.highlight-summary').textContent = summary;
    node.querySelector('.source-link').href = item.url;
    el.criticalList.appendChild(node);
  }
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

populateFilters();
render();
