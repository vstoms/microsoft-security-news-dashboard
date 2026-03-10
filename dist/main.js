import { newsItems, products, months } from './data/news-data.js';

const searchEl = document.querySelector('#search');
const productFilterEl = document.querySelector('#product-filter');
const monthFilterEl = document.querySelector('#month-filter');
const listEl = document.querySelector('#news-list');
const countEl = document.querySelector('#result-count');
const chipsEl = document.querySelector('#product-chips');
const statsEl = document.querySelector('#hero-stats');
const template = document.querySelector('#card-template');

const state = {
  search: '',
  product: 'Alle',
  month: 'Alle'
};

function populateFilters() {
  productFilterEl.innerHTML = ['Alle', ...products].map((value) => `<option>${value}</option>`).join('');
  monthFilterEl.innerHTML = ['Alle', ...months].map((value) => `<option>${value}</option>`).join('');
  chipsEl.innerHTML = products.map((product) => `<button class="chip" data-product="${product}">${product}</button>`).join('');

  const byProduct = new Map();
  for (const item of newsItems) byProduct.set(item.product, (byProduct.get(item.product) || 0) + 1);
  statsEl.innerHTML = [
    `Totalt ${newsItems.length} kuraterte oppdateringer`,
    `${products.length} produkter`,
    `${[...new Set(newsItems.map((item) => item.month))].length} måneder i 2026`
  ].map((text) => `<div class="stat">${text}</div>`).join('');
}

function filterItems() {
  const q = state.search.trim().toLowerCase();
  return newsItems.filter((item) => {
    const searchMatch = !q || [item.title, item.summary, item.product, item.analysis.join(' ')].join(' ').toLowerCase().includes(q);
    const productMatch = state.product === 'Alle' || item.product === state.product;
    const monthMatch = state.month === 'Alle' || item.month === state.month;
    return searchMatch && productMatch && monthMatch;
  });
}

function render() {
  const items = filterItems();
  countEl.textContent = `${items.length} treff`;
  listEl.innerHTML = '';
  if (!items.length) {
    listEl.innerHTML = '<div class="empty">Ingen treff. Prøv et annet produkt, måned eller søk.</div>';
    return;
  }
  for (const item of items) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.meta').textContent = `${item.product} • ${item.date}`;
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.summary').textContent = item.summary;
    const link = node.querySelector('.source-link');
    link.href = item.url;
    node.querySelector('.tags').innerHTML = item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
    node.querySelector('.analysis-list').innerHTML = item.analysis.map((line) => `<li>${line}</li>`).join('');
    listEl.appendChild(node);
  }
}

searchEl.addEventListener('input', (event) => { state.search = event.target.value; render(); });
productFilterEl.addEventListener('change', (event) => { state.product = event.target.value; render(); });
monthFilterEl.addEventListener('change', (event) => { state.month = event.target.value; render(); });
chipsEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  state.product = button.dataset.product;
  productFilterEl.value = state.product;
  render();
});

populateFilters();
render();
