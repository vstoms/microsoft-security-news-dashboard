# Microsoft Security News Dashboard

Statisk nettside som viser kuraterte Microsoft Security-nyheter for 2026 med filtrering per produkt og kort analyse av hvorfor oppdateringene betyr noe.

## Kjør lokalt

```bash
npm run build
cd dist
python3 -m http.server 4173
```

Åpne deretter <http://localhost:4173>.

## Struktur

- `app/` – kildefiler for nettsiden
- `app/data/news-data.js` – kuratert 2026-datasett
- `scripts/build.mjs` – enkel build som kopierer app til `dist/`

## Kilder

Datasettet er bygget fra Microsoft Learn / TechCommunity-kildene som ble oppgitt i bestillingen. Første versjon prioriterer 2026-oppdateringer og kort kontekstuell analyse per sak.
