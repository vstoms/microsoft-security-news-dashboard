# Microsoft Security News Dashboard

Statisk nettside som viser Microsoft Security-nyheter med filtrering per produkt og kort analyse av hvorfor oppdateringene betyr noe.

## Kjør lokalt

```bash
npm run refresh
cd dist
python3 -m http.server 4173
```

Åpne deretter <http://localhost:4173>.

## V2 fase 1

Prosjektet er nå satt opp med en enkel ingest-pipeline:

- `sources/source-config.js` – kilderegister
- `data/raw/` – lagrede råkilder fra Microsoft Learn / TechCommunity
- `data/normalized/news-items.json` – normalisert datasett
- `data/normalized/schema.json` – schema for normaliserte nyhetselementer
- `scripts/fetch-sources.mjs` – henter råkilder
- `scripts/normalize-items.mjs` – normaliserer råkildene
- `scripts/build-dataset.mjs` – bygger `app/data/news-data.js`
- `scripts/build.mjs` – kopierer appen til `dist/`

## NPM-scripts

```bash
npm run fetch
npm run normalize
npm run dataset
npm run build
npm run refresh
```

## Kilder

Kildene kommer fra Microsoft Learn “What’s new” / release notes og Microsoft Tech Community-blogger. Første v2-fase prioriterer automatisk innhenting og normalisering; finere parsing og bedre prioritering kommer i neste fase.
