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
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
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

export function inferReleaseStage(text) {
  const haystack = text.toLowerCase();
  if (haystack.includes('action required') || haystack.includes('call to action')) return 'Action required';
  if (haystack.includes('deprecation') || haystack.includes('retired')) return 'Deprecation';
  if (haystack.includes('general availability') || haystack.includes(' is now ga') || haystack.includes('(ga)')) return 'GA';
  if (haystack.includes('preview')) return 'Preview';
  return 'Ikke oppgitt';
}

export function inferOperationalImpact(text) {
  const haystack = text.toLowerCase();
  if (/action required|deprecation|retired|block|fail|migration|before june|before july/.test(haystack)) return 'Høy';
  if (/ga|generally available|new alert|contain|runtime|policy|onboarding/.test(haystack)) return 'Medium';
  return 'Lav';
}

export function inferThemeTags(text) {
  const haystack = text.toLowerCase();
  const tags = [];
  const map = {
    Identitet: /entra|identity|oauth|mfa|account|user containment/,
    Hunting: /hunting|ueba|behavior|kql/,
    Automatisering: /automation|automatisering|playbook|source control|api/,
    AI: /\bai\b|copilot|agent(s)?\b/,
    Container: /container|kubernetes|aks|eks|gke/,
    Endpoint: /endpoint|device|windows|macos|linux|avd/,
    Teams: /teams/,
    Governance: /purview|data quality|governance/,
    Cloud: /cloud|aws|azure|gcp|private link/
  };
  for (const [tag, regex] of Object.entries(map)) if (regex.test(haystack)) tags.push(tag);
  return tags.length ? tags : ['Generelt'];
}
