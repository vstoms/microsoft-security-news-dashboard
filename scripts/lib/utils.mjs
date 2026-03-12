export function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function stripHtml(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script\b[^>]*>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

export function cleanLines(text) {
  const noise = [
    /^skip to main content$/i,
    /^ask learn$/i,
    /^table of contents$/i,
    /^feedback$/i,
    /^read in english$/i,
    /^add to plan$/i,
    /^summarize this article/i,
    /^access to this page requires authorization/i
  ];
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !noise.some((pattern) => pattern.test(line)));
}

export function monthNameToNumber(name) {
  const months = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
  };
  return months[name.toLowerCase()] || null;
}

export function norwegianMonthLabel(month) {
  const labels = {
    '01': 'Januar', '02': 'Februar', '03': 'Mars', '04': 'April', '05': 'Mai', '06': 'Juni',
    '07': 'Juli', '08': 'August', '09': 'September', '10': 'Oktober', '11': 'November', '12': 'Desember'
  };
  return labels[month] || month;
}

export function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

export function sanitizeTitle(value) {
  return normalizeWhitespace(value)
    .replace(/^[:\-|]+/, '')
    .replace(/^\((preview|ga)\)\s*/i, '')
    .replace(/^(preview\/?ga|preview|ga|new feature|type|date|category|update|description|data governance)$/i, '')
    .replace(/\s*:\s*$/, '')
    .trim();
}

export function sanitizeSummary(value) {
  return normalizeWhitespace(value)
    .replace(/^[:\-|]+/, '')
    .replace(/^(type|feature|preview\/ga|date|category|update|service category|product capability):?/i, '')
    .replace(/\s*learn more\.?$/i, '')
    .replace(/\s*for more information.*$/i, '')
    .trim();
}

export function inferReleaseStage(text) {
  const haystack = text.toLowerCase();
  if (/action required|call to action|required action|must update|to avoid service disruption/.test(haystack)) return 'Action required';
  if (/deprecation|deprecated|retired|retirement|end of support|out of support|no longer supported/.test(haystack)) return 'Deprecation';
  if (/general availability|generally available|is now generally available|now ga|\(ga\)/.test(haystack)) return 'GA';
  if (/public preview|preview|in preview/.test(haystack)) return 'Preview';
  return 'Ikke oppgitt';
}

export function inferOperationalImpactLevel(text) {
  const haystack = text.toLowerCase();
  if (/action required|call to action|required action|must update|service disruption|will fail|before \w+ \d{1,2},? 2026|before june|before july|migrate|migration|deprecated|retired|out of support/.test(haystack)) return 'Høy';
  if (/generally available|preview|new alert|contain user|runtime|policy|onboarding|hard match|private link|data lake|ueba|oauth|mfa/.test(haystack)) return 'Middels';
  return 'Lav';
}

export function impactLabel(level) {
  if (level === 'Høy') return 'Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.';
  if (level === 'Middels') return 'Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.';
  return 'Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.';
}

export function inferThemeTags(text) {
  const haystack = text.toLowerCase();
  const tags = [];
  const map = {
    Identitet: /entra|identity|oauth|mfa|account|user containment|hard match/,
    Hunting: /hunting|ueba|behavior|kql|query/,
    Automatisering: /automation|automatisering|playbook|source control|api|repository/,
    AI: /\bai\b|copilot|agent(s)?\b/,
    Container: /container|kubernetes|aks|eks|gke|binary drift/,
    Endpoint: /endpoint|device|windows|macos|linux|avd|antivirus/,
    Teams: /teams/,
    Governance: /purview|data quality|governance|classification/,
    Cloud: /cloud|aws|azure|gcp|private link|sql|ciem/,
    Lifecycle: /retire|retired|deprecation|out of support|migrate|migration/
  };
  for (const [tag, regex] of Object.entries(map)) if (regex.test(haystack)) tags.push(tag);
  return tags.length ? tags : ['Generelt'];
}

export function priorityScore({ releaseStage, impactLevel, title, summary, themeTags }) {
  let score = 0;
  score += ({ 'Action required': 90, Deprecation: 75, GA: 45, Preview: 30, 'Ikke oppgitt': 15 }[releaseStage] || 10);
  score += ({ Høy: 30, Middels: 18, Lav: 8 }[impactLevel] || 0);
  const haystack = `${title} ${summary}`.toLowerCase();
  if (/service disruption|will fail|deadline|before june|before july/.test(haystack)) score += 15;
  if (themeTags.includes('Lifecycle')) score += 10;
  if (themeTags.includes('Identitet') || themeTags.includes('Automatisering')) score += 5;
  return score;
}
