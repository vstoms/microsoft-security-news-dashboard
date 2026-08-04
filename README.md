# Microsoft Security News Dashboard

En statisk, norskspråklig oversikt over produktnyheter fra Microsoft Security. Dashboardet samler oppdateringer fra Microsoft Learn og Microsoft Tech Community, normaliserer dem til ett datasett og lar brukeren filtrere på blant annet produkt, måned, lanseringsstatus, tema og operasjonell betydning.

## Kom i gang

Forutsetninger:

- Node.js 22
- npm

Installer avhengighetene, bygg nettsiden og start den lokale serveren:

```bash
npm ci
npm run build
npm run dev
```

Åpne deretter <http://localhost:4173>.

`npm run build` bruker datasettet som allerede ligger i repoet. For å hente de nyeste kildene og regenerere alle avledede filer før serveren startes, kjør i stedet:

```bash
npm run refresh
npm run dev
```

> `npm run refresh` krever internettilgang og skriver oppdaterte, genererte data til arbeidskopien.

## Funksjoner

- Samler nyheter fra flere Microsoft Security-produkter
- Filtrerer og søker i et statisk, nettleservennlig datasett
- Klassifiserer lanseringsstatus, tema og operasjonell betydning
- Skiller mellom publiseringsdato, ikrafttredelse og frist når kilden oppgir dette
- Validerer normaliserte elementer mot et JSON Schema
- Bygges uten backend og kan publiseres direkte til GitHub Pages

## Datapipeline

```text
sources/source-config.js
        │
        ▼
data/raw/*.json                 npm run fetch
        │
        ▼
data/normalized/news-items.json npm run normalize
        │
        ├─► app/data/news-data.js       npm run dataset
        └─► data/normalized/CHANGELOG.md npm run changelog
                                           │
                                           ▼
                                      dist/ npm run build
```

Viktige filer og mapper:

- `sources/source-config.js` – register over produkter og kilder
- `scripts/fetch-sources.mjs` – henter rå HTML-kilder
- `scripts/normalize-items.mjs` – parser, normaliserer, dedupliserer og validerer elementer
- `scripts/build-dataset.mjs` – bygger datasettet som frontend-koden importerer
- `scripts/build-changelog.mjs` – lager en oversikt over de 20 nyeste elementene
- `scripts/build.mjs` – kopierer den statiske appen til `dist/`
- `app/` – HTML, CSS, JavaScript og genererte frontend-data
- `data/normalized/` – JSON Schema, normalisert datasett og generert changelog
- `data/raw/` og `dist/` – lokale, genererte mapper som ikke versjoneres

## NPM-kommandoer

| Kommando | Beskrivelse |
| --- | --- |
| `npm run dev` | Serverer `dist/` på port 4173 med utviklingsmodus |
| `npm start` | Serverer `dist/` på port 4173 |
| `npm run fetch` | Henter alle konfigurerte kilder til `data/raw/` |
| `npm run normalize` | Normaliserer og validerer rådata |
| `npm run dataset` | Bygger `app/data/news-data.js` |
| `npm run changelog` | Bygger `data/normalized/CHANGELOG.md` |
| `npm run build` | Bygger den statiske nettsiden i `dist/` |
| `npm run refresh` | Kjører hele pipelinen fra innhenting til bygg |
| `npm test` | Kjører testene med Node.js sin innebygde test runner |

## Tester

Kjør testene med:

```bash
npm test
```

Testene dekker sentrale deler av normaliseringen, inkludert månedsoverskrifter, tabeller, metadata, datoklassifisering og avvisning av generiske titler.

## Automatisering og GitHub Pages

Repoet inneholder to GitHub Actions-workflower:

- `update-news.yml` kjøres daglig kl. 06:00 UTC, oppdaterer datasettet og committer endringer tilbake til `main` når innholdet har endret seg.
- `deploy-pages.yml` bygger og publiserer `dist/` ved push til `main` eller manuell kjøring.

Slik aktiveres publisering:

1. Gå til **Settings → Pages** i GitHub-repoet.
2. Sett **Source** til **GitHub Actions**.
3. Kontroller at workflowene har tillatelse til å kjøre på `main`.

Begge workflowene kan også startes manuelt fra fanen **Actions**.

## Feilhåndtering

Innhentingen forsøker alle konfigurerte kilder selv om én eller flere feiler. Resultatet lagres i `data/raw/fetch-failures.json`, og normaliseringen hopper over kilder som mangler rådata.

Hvis Microsoft endrer HTML-strukturen på en kildeside, kan parseren måtte justeres. Kildekonfigurasjonen og normaliseringstestene er de naturlige startpunktene ved feilsøking.

## Kilder

Kildene er Microsoft Learn-sider for «What's new» og release notes, samt utvalgte blogger i Microsoft Tech Community. Den fullstendige og gjeldende listen ligger i `sources/source-config.js`.
