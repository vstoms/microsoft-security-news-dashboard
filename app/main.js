import { newsItems, products, months, releaseStages, sourceTypes, themes, datasetMeta } from './data/news-data.js';

const STORAGE_KEY = 'ms-security-dashboard-v1';
const el = {
  search: document.querySelector('#search'),
  product: document.querySelector('#product-filter'),
  month: document.querySelector('#month-filter'),
  stage: document.querySelector('#stage-filter'),
  source: document.querySelector('#source-filter'),
  theme: document.querySelector('#theme-filter'),
  impact: document.querySelector('#impact-filter'),
  view: document.querySelector('#view-filter'),
  sort: document.querySelector('#sort-filter'),
  list: document.querySelector('#news-list'),
  count: document.querySelector('#result-count'),
  chips: document.querySelector('#product-chips'),
  stats: document.querySelector('#hero-stats'),
  freshness: document.querySelector('#data-freshness'),
  activeFilters: document.querySelector('#active-filters'),
  priorityList: document.querySelector('#priority-list'),
  myProductList: document.querySelector('#my-product-list'),
  showMyProducts: document.querySelector('#show-my-products'),
  showNew: document.querySelector('#show-new'),
  visitSummary: document.querySelector('#visit-summary'),
  resetFilters: document.querySelector('#reset-filters'),
  template: document.querySelector('#card-template')
};

const state = {
  search: '', product: 'Alle', month: 'Alle', stage: 'Alle', source: 'Alle', theme: 'Alle', impact: 'Alle', view: 'all', sort: 'priority'
};

const priorityWeight = {
  'Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.': 3,
  'Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.': 2,
  'Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.': 1
};
const stageWeight = { 'Action required': 4, Deprecation: 3, GA: 2, Preview: 1, 'Ikke oppgitt': 0 };
const stageClass = (value) => ({ 'Action required': 'stage-action', Deprecation: 'stage-deprecation', GA: 'stage-ga', Preview: 'stage-preview' }[value] || 'stage-unknown');
const impactClass = (value) => value.startsWith('Høy') ? 'impact-high' : value.startsWith('Middels') ? 'impact-medium' : 'impact-low';
const sourceLabel = (value) => ({ 'whats-new': 'What\'s new', 'release-notes': 'Release notes', blog: 'Blogg' }[value] || value);
const viewLabels = { all: 'Alle oppdateringer', new: 'Nytt siden sist', products: 'Mine produkter', saved: 'Lagret', unreviewed: 'Ikke gjennomgått', handled: 'Håndtert' };

function loadPersonalization() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      lastVisitedAt: typeof stored.lastVisitedAt === 'string' ? stored.lastVisitedAt : null,
      myProducts: Array.isArray(stored.myProducts) ? stored.myProducts.filter((product) => products.includes(product)) : [],
      itemStates: stored.itemStates && typeof stored.itemStates === 'object' ? stored.itemStates : {}
    };
  } catch {
    return { lastVisitedAt: null, myProducts: [], itemStates: {} };
  }
}

const personalization = loadPersonalization();
const previousVisitAt = personalization.lastVisitedAt;
const sessionStartedAt = new Date().toISOString();
const myProducts = new Set(personalization.myProducts);
const itemStates = personalization.itemStates;

function savePersonalization() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lastVisitedAt: sessionStartedAt,
      myProducts: [...myProducts],
      itemStates
    }));
  } catch {
    // The dashboard remains usable when browser storage is unavailable.
  }
}

function formatDate(value, includeTime = false) {
  if (!value) return 'Ikke oppgitt';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Ikke oppgitt';
  return new Intl.DateTimeFormat('no-NO', includeTime
    ? { dateStyle: 'medium', timeStyle: 'short' }
    : { dateStyle: 'medium' }).format(date);
}

function isNewSinceLastVisit(item) {
  if (!previousVisitAt) return false;
  const cutoff = Date.parse(previousVisitAt);
  return [item.firstSeenAt, item.updatedAt].some((value) => value && Date.parse(value) > cutoff);
}

function getItemState(id) {
  return itemStates[id] || { saved: false, reviewed: false, handled: false };
}

function fillSelect(select, values) {
  select.replaceChildren();
  for (const value of ['Alle', ...values]) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
}

function buildStats() {
  const urgent = newsItems.filter((item) => stageWeight[item.releaseStage] >= 3 || priorityWeight[item.impact] >= 3).length;
  const saved = newsItems.filter((item) => getItemState(item.id).saved).length;
  el.stats.replaceChildren();
  for (const text of [
    `Totalt ${newsItems.length} normaliserte oppdateringer`,
    `${products.length} produkter`,
    `${urgent} saker med høy prioritet`,
    `${saved} lagret av deg`
  ]) {
    const node = document.createElement('div');
    node.className = 'stat';
    node.textContent = text;
    el.stats.appendChild(node);
  }
}

function renderProductPreferences() {
  el.myProductList.replaceChildren();
  for (const product of products) {
    const label = document.createElement('label');
    label.className = 'preference-option';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = product;
    input.checked = myProducts.has(product);
    input.addEventListener('change', () => {
      if (input.checked) myProducts.add(product);
      else myProducts.delete(product);
      savePersonalization();
      if (state.view === 'products') render();
    });
    const text = document.createElement('span');
    text.textContent = product;
    label.append(input, text);
    el.myProductList.appendChild(label);
  }
}

function renderProductChips() {
  el.chips.replaceChildren();
  for (const product of products) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.dataset.product = product;
    button.textContent = product;
    button.setAttribute('aria-pressed', String(state.product === product));
    el.chips.appendChild(button);
  }
}

function populateFilters() {
  fillSelect(el.product, products);
  fillSelect(el.month, months);
  fillSelect(el.stage, releaseStages);
  fillSelect(el.source, sourceTypes.map(sourceLabel));
  fillSelect(el.theme, themes);
  fillSelect(el.impact, ['Høy', 'Middels', 'Lav']);
  renderProductPreferences();
  renderProductChips();
  renderPriorityList();
}

function matchesImpact(item, selected) {
  if (selected === 'Alle') return true;
  if (selected === 'Høy') return item.impact.startsWith('Høy');
  if (selected === 'Middels') return item.impact.startsWith('Middels');
  return item.impact.startsWith('Lav');
}

function matchesPersonalView(item) {
  const personal = getItemState(item.id);
  if (state.view === 'new') return isNewSinceLastVisit(item);
  if (state.view === 'products') return myProducts.has(item.product);
  if (state.view === 'saved') return personal.saved;
  if (state.view === 'unreviewed') return !personal.reviewed;
  if (state.view === 'handled') return personal.handled;
  return true;
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
      && matchesImpact(item, state.impact)
      && matchesPersonalView(item);
  });
}

function sortItems(items) {
  const sorted = [...items];
  if (state.sort === 'newest') return sorted.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title, 'no'));
  if (state.sort === 'product') return sorted.sort((a, b) => a.product.localeCompare(b.product, 'no') || b.publishedAt.localeCompare(a.publishedAt));
  return sorted.sort((a, b) => (stageWeight[b.releaseStage] - stageWeight[a.releaseStage]) || (priorityWeight[b.impact] - priorityWeight[a.impact]) || b.publishedAt.localeCompare(a.publishedAt));
}

function renderActiveFilters() {
  const active = [
    ['Produkt', state.product], ['Måned', state.month], ['Status', state.stage], ['Kilde', state.source], ['Tema', state.theme], ['Påvirkning', state.impact]
  ].filter(([, value]) => value !== 'Alle');
  if (state.view !== 'all') active.push(['Visning', viewLabels[state.view]]);
  el.activeFilters.replaceChildren();
  if (!active.length) {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = 'Ingen aktive filtre';
    el.activeFilters.appendChild(chip);
    return;
  }
  for (const [label, value] of active) {
    const chip = document.createElement('span');
    chip.className = 'chip active-chip';
    chip.textContent = `${label}: ${value}`;
    el.activeFilters.appendChild(chip);
  }
}

function renderPriorityList() {
  el.priorityList.replaceChildren();
  for (const item of sortItems(newsItems).slice(0, 5)) {
    const row = document.createElement('li');
    const product = document.createElement('strong');
    product.textContent = item.product;
    row.append(product, `: ${item.title}`);
    el.priorityList.appendChild(row);
  }
}

function updatePersonalStatus(id, key) {
  const current = getItemState(id);
  const next = { ...current, [key]: !current[key] };
  if (key === 'handled' && next.handled) next.reviewed = true;
  if (!next.saved && !next.reviewed && !next.handled) delete itemStates[id];
  else itemStates[id] = next;
  savePersonalization();
  render();
}

function configureStatusButton(button, active, activeText, inactiveText, handler) {
  button.textContent = active ? activeText : inactiveText;
  button.classList.toggle('is-active', active);
  button.setAttribute('aria-pressed', String(active));
  button.addEventListener('click', handler);
}

function renderCard(item) {
  const node = el.template.content.firstElementChild.cloneNode(true);
  const personal = getItemState(item.id);
  const badges = node.querySelectorAll('.badge');
  const newBadge = node.querySelector('.badge-new');
  newBadge.hidden = !isNewSinceLastVisit(item);
  badges[1].textContent = item.releaseStage;
  badges[1].classList.add(stageClass(item.releaseStage));
  badges[2].textContent = item.impact.startsWith('Høy') ? 'Høy påvirkning' : item.impact.startsWith('Middels') ? 'Middels påvirkning' : 'Lav påvirkning';
  badges[2].classList.add(impactClass(item.impact));
  badges[3].textContent = sourceLabel(item.sourceType);
  node.id = `update-${item.id}`;
  node.classList.toggle('is-handled', personal.handled);
  node.querySelector('.meta').textContent = `${item.product} • ${item.date}`;
  node.querySelector('h3').textContent = item.title;
  node.querySelector('.summary').textContent = item.summary;
  node.querySelector('.detail-product').textContent = item.product;
  node.querySelector('.detail-category').textContent = item.category;
  node.querySelector('.detail-source').textContent = `${item.sourceName} / ${sourceLabel(item.sourceType)}`;
  node.querySelector('.detail-date').textContent = item.datePrecision === 'month' ? `${item.date} (månedsnivå)` : formatDate(item.publishedAt);
  const link = node.querySelector('.source-link');
  link.href = item.url;
  const tags = node.querySelector('.tags');
  tags.replaceChildren(...item.themes.map((tag) => {
    const node = document.createElement('span');
    node.className = 'tag';
    node.textContent = tag;
    return node;
  }));
  const analysis = node.querySelector('.analysis-list');
  analysis.replaceChildren(...item.analysis.map((line) => {
    const node = document.createElement('li');
    node.textContent = line;
    return node;
  }));
  node.querySelector('.confidence-note').textContent = `Oppdaget ${formatDate(item.firstSeenAt)} • Kilde kontrollert ${formatDate(item.sourceFetchedAt)} • Status og påvirkning er maskinelt utledet`;
  configureStatusButton(node.querySelector('.save-button'), personal.saved, 'Lagret', 'Lagre', () => updatePersonalStatus(item.id, 'saved'));
  configureStatusButton(node.querySelector('.review-button'), personal.reviewed, 'Gjennomgått', 'Marker gjennomgått', () => updatePersonalStatus(item.id, 'reviewed'));
  configureStatusButton(node.querySelector('.handle-button'), personal.handled, 'Håndtert', 'Marker håndtert', () => updatePersonalStatus(item.id, 'handled'));
  return node;
}

function renderVisitSummary() {
  const newCount = newsItems.filter(isNewSinceLastVisit).length;
  if (!previousVisitAt) {
    el.visitSummary.textContent = 'Sporing starter med dette besøket. Nye og endrede saker vises neste gang.';
    el.showNew.disabled = true;
  } else {
    el.visitSummary.textContent = `${newCount} nye eller endrede saker siden ${formatDate(previousVisitAt, true)}.`;
    el.showNew.disabled = newCount === 0;
  }
}

function renderFreshness() {
  el.freshness.textContent = `Datakilder sist kontrollert ${formatDate(datasetMeta.sourceCheckedAt, true)}. Publiseringsdatoer er på månedsnivå; status og påvirkning er maskinelt utledet.`;
}

function render() {
  const items = sortItems(filterItems());
  el.count.textContent = `${items.length} treff`;
  renderActiveFilters();
  renderProductChips();
  buildStats();
  renderVisitSummary();
  el.list.replaceChildren();
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = state.view === 'products' && !myProducts.size
      ? 'Velg minst ett produkt under «Mine produkter».'
      : 'Ingen treff. Prøv et annet produkt, tema, status eller søk.';
    el.list.appendChild(empty);
    return;
  }
  el.list.append(...items.map(renderCard));
}

function setView(view) {
  state.view = view;
  el.view.value = view;
  render();
}

el.search.addEventListener('input', (event) => { state.search = event.target.value; render(); });
for (const [key, node] of Object.entries({ product: el.product, month: el.month, stage: el.stage, source: el.source, theme: el.theme, impact: el.impact, view: el.view, sort: el.sort })) {
  node.addEventListener('change', (event) => { state[key] = event.target.value; render(); });
}
el.chips.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  state.product = state.product === button.dataset.product ? 'Alle' : button.dataset.product;
  el.product.value = state.product;
  render();
});
el.showMyProducts.addEventListener('click', () => setView('products'));
el.showNew.addEventListener('click', () => setView('new'));
el.resetFilters.addEventListener('click', () => {
  Object.assign(state, { search: '', product: 'Alle', month: 'Alle', stage: 'Alle', source: 'Alle', theme: 'Alle', impact: 'Alle', view: 'all', sort: 'priority' });
  el.search.value = '';
  for (const [key, node] of Object.entries({ product: el.product, month: el.month, stage: el.stage, source: el.source, theme: el.theme, impact: el.impact, view: el.view, sort: el.sort })) node.value = state[key];
  render();
});

populateFilters();
renderFreshness();
savePersonalization();
render();
