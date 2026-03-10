export const newsItems = [
  {
    product: 'Defender XDR',
    month: 'Mars',
    date: 'Mars 2026',
    title: 'Proactive user containment er nå GA',
    summary: 'Microsoft har gjort contain user-handlingen i predictive shielding allment tilgjengelig. Den kombinerer aktivitetsdata og exposure-data for å stoppe kontoer med høy kompromitteringsrisiko raskere.',
    url: 'https://learn.microsoft.com/en-us/defender-xdr/whats-new',
    tags: ['XDR', 'Identity', 'Containment', 'GA'],
    analysis: [
      'Dette flytter respons nærmere identiteten i stedet for bare enheten, noe som er mer relevant ved moderne kontoangrep og token-misbruk.',
      'Når exposure-data brukes sammen med aktivitet, blir containment mer risikobasert og mindre avhengig av ren IOC-detektering.',
      'For SOC betyr det raskere blast-radius-begrensning før en kompromittert bruker rekker å bevege seg videre i miljøet.'
    ]
  },
  {
    product: 'Defender XDR',
    month: 'Februar',
    date: 'Februar 2026',
    title: 'Nye advanced hunting-tabeller for identitet og Entra-sign-ins',
    summary: 'IdentityAccountInfo og EntraIdSignInEvents er nå GA i advanced hunting. Det gir bedre korrelasjon mellom kontoer, identiteter og innlogginger.',
    url: 'https://learn.microsoft.com/en-us/defender-xdr/whats-new',
    tags: ['Hunting', 'Entra', 'Telemetry'],
    analysis: [
      'Dette er en viktig datafundament-endring: bedre tabeller betyr bedre KQL, bedre detections og mindre behov for manuell joins mot andre kilder.',
      'Microsoft fortsetter å gjøre identitet til en førsteklasses datastrøm i SecOps-plattformen.',
      'Kombinert med UEBA og Sentinel peker dette mot en mer enhetlig detection stack på tvers av portalene.'
    ]
  },
  {
    product: 'Defender for Office 365',
    month: 'Februar',
    date: 'Februar 2026',
    title: 'User reporting i Teams utvides til Plan 1',
    summary: 'Brukere kan rapportere eksterne og interne Teams-meldinger som mistenkelige direkte til Microsoft eller til rapporteringsmailbox.',
    url: 'https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new',
    tags: ['Teams', 'Phishing', 'User Reporting'],
    analysis: [
      'Dette er viktig fordi Teams nå er en fullverdig angrepsflate for sosial manipulering, ikke bare e-post.',
      'Microsoft presser post-delivery og user-reporting dypere inn i samarbeidskanalene der angrep faktisk skjer.',
      'Operativt gjør det det enklere å bruke samme rapporteringsmønster for e-post og chat.'
    ]
  },
  {
    product: 'Defender for Office 365',
    month: 'Januar',
    date: 'Januar 2026',
    title: 'Blokkering av avsender og domener i Teams fra Defender-portalen',
    summary: 'SOC-team kan blokkere ondsinnede domener og avsendere i Teams direkte fra Defender-portalen med nær sanntidseffekt.',
    url: 'https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new',
    tags: ['Teams', 'Response', 'SOC'],
    analysis: [
      'Dette er et godt eksempel på Microsofts portal-konsolidering: handlinger som tidligere lå mer separat flyttes inn i Defender-opplevelsen.',
      'Lavere friksjon mellom deteksjon og blokkering betyr raskere MTTR ved BEC-lignende og sosialt drevne hendelser i Teams.',
      'Løsningen knytter kommunikasjonskontroll tettere til sikkerhetsoperasjoner, ikke bare samarbeid/IT-administrasjon.'
    ]
  },
  {
    product: 'Defender for Endpoint',
    month: 'Mars',
    date: 'Mars 2026',
    title: 'Proactive user containment også i Endpoint-sporet',
    summary: 'Defender for Endpoint viser samme GA-funksjon for contain user som del av predictive shielding.',
    url: 'https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint',
    tags: ['Endpoint', 'Containment', 'Identity'],
    analysis: [
      'Det interessante her er ikke bare funksjonen, men at Microsoft presenterer identitetsbeskyttelse som en naturlig del av endpoint-forsvaret.',
      'Det bekrefter at porteføljen er på vei bort fra punktprodukter og mot en felles kontrollflate for bruker, enhet og signaler.',
      'For kunder betyr det færre hopp mellom verktøy under hendelseshåndtering.'
    ]
  },
  {
    product: 'Defender for Identity',
    month: 'Februar',
    date: 'Februar 2026',
    title: 'Nye Defender for Identity-varsler relatert til Entra ID',
    summary: 'Nye alarmer inkluderer blant annet mistenkelig konfigurasjonsendring fra Entra ID sync-applikasjon og anomale OAuth device code-aktiviteter.',
    url: 'https://learn.microsoft.com/en-us/defender-for-identity/whats-new',
    tags: ['Identity', 'Alerts', 'OAuth'],
    analysis: [
      'Fokus på sync-applikasjoner og device code-flow er svært relevant gitt moderne identity tradecraft.',
      'Dette signaliserer at Microsoft flytter dypere inn i hybrid-identitet og misbruk av legitime auth-mekanismer.',
      'Det gir bedre dekning for angrep som tradisjonelle AD-orienterte deteksjoner ofte ikke fanger godt nok.'
    ]
  },
  {
    product: 'Defender for Cloud',
    month: 'Februar',
    date: '22. februar 2026',
    title: 'Container runtime antimalware detection and blocking (Preview)',
    summary: 'Preview-funksjon for sanntidsdeteksjon og blokkering av malware i container-workloads på AKS, EKS og GKE.',
    url: 'https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes',
    tags: ['Cloud', 'Containers', 'Malware', 'Preview'],
    analysis: [
      'Dette er strategisk viktig fordi Microsoft beveger seg fra statisk skanning til runtime prevention i containermiljøer.',
      'Støtte på tvers av Azure, AWS og GCP viser at Microsoft ønsker å være kontrollplanet selv i multicloud-scenarier.',
      'For modne team betyr det nye muligheter for preventive guardrails, men også behov for tuning for å unngå støy og utilsiktet blokkering.'
    ]
  },
  {
    product: 'Defender for Cloud',
    month: 'Februar',
    date: '3. februar 2026',
    title: 'Threat protection for AI agents (Preview)',
    summary: 'Defender for Cloud introduserer trusselbeskyttelse for AI-agenter bygget med Foundry som del av Defender for AI Services.',
    url: 'https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes',
    tags: ['AI', 'Cloud', 'Preview'],
    analysis: [
      'Dette er Microsofts tydelige forsøk på å gjøre agentisk AI til et sikkerhetsdomene på linje med containere og identitet.',
      'OWASP-referansen tyder på at løsningen prøver å operasjonalisere nye AI-trusler i en tradisjonell SOC-modell.',
      'Verdien er størst for organisasjoner som allerede eksperimenterer med AI-agenter og trenger styring før disse havner i produksjon.'
    ]
  },
  {
    product: 'Unified SecOps',
    month: 'Januar',
    date: 'Januar 2026',
    title: 'Sentinel i Azure-portalen fases videre ut til fordel for Defender-portalen',
    summary: 'Microsoft tydeliggjør at Sentinel skal leve i Defender-portalen, og at Azure-portalen går mot utfasing med overgangsplan mot 2027.',
    url: 'https://learn.microsoft.com/en-us/unified-secops-platform/whats-new',
    tags: ['SecOps', 'Portal', 'Sentinel'],
    analysis: [
      'Dette er kanskje den viktigste plattformendringen i listen: Microsoft vil at SOC-et skal operere i én portal.',
      'Det handler ikke bare om UI, men om sammensmelting av data, analyst workflows og responskontroller.',
      'Kunder som fortsatt tenker Sentinel som et rent Azure-produkt bør planlegge prosess- og kompetanseendringer nå.'
    ]
  },
  {
    product: 'Exposure Management',
    month: 'Januar',
    date: 'Januar 2026',
    title: 'Ny predefined classification: WSUS Server',
    summary: 'Exposure Management har lagt til WSUS Server som forhåndsdefinert device classification for kritiske eiendeler.',
    url: 'https://learn.microsoft.com/en-us/security-exposure-management/whats-new',
    tags: ['Exposure Management', 'Critical Assets', 'WSUS'],
    analysis: [
      'Dette virker lite, men er egentlig et eksempel på at Microsoft prøver å gjøre attack surface-prioritering mer operativ.',
      'WSUS er en høyrisiko-komponent fordi kompromittering kan påvirke patch-distribusjon bredt i miljøet.',
      'Automatisk klassifisering av slike systemer hjelper med å løfte sårbarheter fra ren CVE-liste til faktisk forretningskritisk risiko.'
    ]
  },
  {
    product: 'Sentinel',
    month: 'Mars',
    date: 'Mars 2026',
    title: 'Call to action: oppdater eldre Sentinel repository API-versjoner før juni 2026',
    summary: 'Eldre API-versjoner for Source Control / repositories blir ikke lenger støttet fra 1. juni 2026.',
    url: 'https://learn.microsoft.com/en-us/azure/sentinel/whats-new',
    tags: ['Sentinel', 'API', 'Deprecation'],
    analysis: [
      'Dette er en klassisk operativ nyhet som mange overser: detections kan være fine, men CI/CD rundt innhold kan brekke først.',
      'Microsoft tvinger frem modernisering av content-as-code-prosesser, noe som særlig treffer modne SOC-er med repository-baserte deploys.',
      'Her bør nettstedet tydelig løfte frem frister og påvirkning, ikke bare produktnavn og featuretekst.'
    ]
  },
  {
    product: 'Sentinel',
    month: 'Februar',
    date: 'Februar 2026',
    title: 'UEBA behaviors layer er nå GA',
    summary: 'Sentinel gjør behavior-laget generelt tilgjengelig for å oversette store rålogg-volumer til mer menneskelesbare atferdsinnsikter.',
    url: 'https://learn.microsoft.com/en-us/azure/sentinel/whats-new',
    tags: ['Sentinel', 'UEBA', 'Analytics'],
    analysis: [
      'Dette er viktig fordi SOC-er drukner i rå data; atferdslag reduserer kognitiv last og gjør hendelser mer forståelige.',
      'Samtidig understøtter det Microsofts AI/SecOps-strategi: rike, normaliserte mellomlag er bedre drivstoff for både analytikere og Copilot-lignende funksjoner.',
      'For kunder kan dette gi raskere triage hvis workbook- og hunting-innholdet faktisk tilpasses det nye laget.'
    ]
  },
  {
    product: 'Entra',
    month: 'Januar',
    date: 'Januar 2026',
    title: 'Object-level Source of Authority switching er nå GA',
    summary: 'Administratorer kan konvertere enkelte synkede AD-brukere til skyadministrerte Entra-brukere uten full engangs-migrasjon.',
    url: 'https://learn.microsoft.com/en-us/entra/fundamentals/whats-new',
    tags: ['Entra', 'Identity Governance', 'Hybrid'],
    analysis: [
      'Dette er en praktisk bro mellom gammel AD-avhengighet og cloud-first identitet.',
      'Det reduserer migrasjonsrisiko ved å tillate gradvis overgang i stedet for store cutovers.',
      'Samtidig passer det inn i Microsofts bredere strategi: mindre avhengighet av lokal identitet, mer kontroll i skyen.'
    ]
  },
  {
    product: 'Entra',
    month: 'Februar',
    date: 'Februar 2026',
    title: 'External Authentication Methods er nå GA',
    summary: 'EAM gjør det mulig å integrere tredjeparts MFA-løsninger tettere med Microsoft Entra ID.',
    url: 'https://learn.microsoft.com/en-us/entra/fundamentals/whats-new',
    tags: ['Entra', 'MFA', 'GA'],
    analysis: [
      'Dette er viktig for virksomheter som ønsker Entra som kontrollplan, men ikke nødvendigvis Microsoft som eneste MFA-leverandør.',
      'Microsoft viser mer pragmatisme her: økosystem-integrasjon kan være viktigere enn full vertikal lock-in i enkelte kundesegmenter.',
      'I praksis kan dette redusere motstanden mot å standardisere på Entra-policyer selv i heterogene IAM-miljøer.'
    ]
  },
  {
    product: 'Intune',
    month: 'Januar',
    date: 'Januar 2026',
    title: 'ESP kan installere Windows quality updates under OOBE',
    summary: 'Nytt valg i Enrollment Status Page lar Intune installere siste sikkerhetsoppdateringer under out-of-box experience.',
    url: 'https://learn.microsoft.com/en-us/mem/intune/fundamentals/whats-new',
    tags: ['Intune', 'Windows', 'OOBE', 'Patch'],
    analysis: [
      'Dette er en solid sikkerhetsforbedring fordi nye enheter blir mindre eksponert mellom oppstart og første bruk.',
      'Det viser også hvordan Microsoft prøver å flytte sikkerhet tidligere i device lifecycle, ikke bare etter enrolment.',
      'For IT-drift må dette balanseres mot provisioning-tid og brukeropplevelse.'
    ]
  },
  {
    product: 'Intune',
    month: 'Februar',
    date: 'Uke 9. februar 2026',
    title: 'Endpoint Privilege Management-støtte på Azure Virtual Desktop',
    summary: 'EPM-policyer kan nå deployeres til brukere på single-session AVD-maskiner.',
    url: 'https://learn.microsoft.com/en-us/mem/intune/fundamentals/whats-new',
    tags: ['Intune', 'EPM', 'AVD'],
    analysis: [
      'Least privilege i VDI/AVD er ofte et praktisk hull; dette tetter noe av gapet mellom moderne endpoint-styring og virtuelle skrivebord.',
      'Det betyr at Microsoft ser privilegiekontroll som en bred flate, ikke bare fysisk klient.',
      'Verdien er størst i miljøer som vil redusere lokal admin uten å ødelegge appkompatibilitet.'
    ]
  },
  {
    product: 'Purview',
    month: 'Mars',
    date: 'Mars 2026',
    title: 'Custom data quality rules med SQL expression er nå GA',
    summary: 'Purview Data Governance støtter nå generelt tilgjengelig forfatting av egendefinerte data quality-regler med SQL expression language.',
    url: 'https://learn.microsoft.com/en-us/purview/whats-new',
    tags: ['Purview', 'Data Governance', 'GA'],
    analysis: [
      'Purview-nyheten er ikke ren SOC, men viktig for sikkerhet fordi datastyring og datakvalitet påvirker hva sikkerhets- og compliance-team faktisk kan stole på.',
      'Mer fleksible regler betyr at virksomheter kan operationalisere egne kvalitetskrav uten å vente på ferdige maler.',
      'Dette viser at Microsoft ser sikkerhet, compliance og governance som stadig mer sammenvevde domener.'
    ]
  }
];

export const products = [...new Set(newsItems.map((item) => item.product))].sort((a, b) => a.localeCompare(b, 'no'));
export const months = ['Januar', 'Februar', 'Mars'];
