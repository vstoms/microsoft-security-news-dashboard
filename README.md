# Microsoft Security News Dashboard

Statisk nettside som viser Microsoft Security-nyheter med filtrering per produkt og kort analyse av hvorfor oppdateringene betyr noe.

## Kjør lokalt

```bash
npm run refresh
cd dist
python3 -m http.server 4173
```

Åpne deretter <http://localhost:4173>.

## V2 fase 1–3

Prosjektet er nå satt opp med en enkel ingest-pipeline og automatisering via GitHub Actions / GitHub Pages:

- `sources/source-config.js` – kilderegister
- `data/raw/` – lagrede råkilder fra Microsoft Learn / TechCommunity
- `data/normalized/news-items.json` – normalisert datasett
- `data/normalized/schema.json` – schema for normaliserte nyhetselementer
- `scripts/fetch-sources.mjs` – henter råkilder
- `scripts/normalize-items.mjs` – normaliserer råkildene
- `scripts/build-dataset.mjs` – bygger `app/data/news-data.js`
- `scripts/build-changelog.mjs` – genererer en enkel changelog for siste saker
- `scripts/build.mjs` – kopierer appen til `dist/`
- `.github/workflows/update-news.yml` – henter nye kilder, regenererer data og committer endringer automatisk
- `.github/workflows/deploy-pages.yml` – bygger og publiserer `dist/` til GitHub Pages

## NPM-scripts

```bash
npm run fetch
npm run normalize
npm run dataset
npm run changelog
npm run build
npm run refresh
```

## GitHub Actions / Pages

For å få automatisk publisering i GitHub:

1. Gå til **Settings → Pages**
2. Sett **Source** til **GitHub Actions**
3. La workflowene kjøre fra `main`

Da vil repoet:
- oppdatere datagrunnlaget automatisk hver morgen
- committe endringer hvis Microsoft-kildene har endret seg
- publisere ny versjon til GitHub Pages ved push til `main`

## Kilder

Kildene kommer fra Microsoft Learn “What’s new” / release notes og Microsoft Tech Community-blogger. Første v2-fase prioriterer automatisk innhenting og normalisering; finere parsing og bedre prioritering kommer i neste fase.
