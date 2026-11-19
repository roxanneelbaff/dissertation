/* Injects the shared top nav and marks the active link */
(function () {
  const inMaterials = window.location.pathname.includes('/materials/');
  const base        = inMaterials ? '../' : '';
  const current     = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: base + 'index.html',                                   label: 'Home',             key: 'home' },
    { href: inMaterials ? 'index.html' : 'materials/index.html',   label: 'Code &amp; Materials', key: 'materials' },
    { href: base + 'read.html',                                    label: 'Read',             key: 'read' },
    { href: base + 'listen.html',                                  label: 'Listen',           key: 'listen' },
    { href: base + 'glossary.html',                                label: 'Glossary',         key: 'glossary' },
  ];

  function activeKey() {
    if (inMaterials)           return 'materials';
    if (current === 'index.html' || current === '') return 'home';
    if (current === 'read.html')    return 'read';
    if (current === 'listen.html')  return 'listen';
    if (current === 'glossary.html') return 'glossary';
    return '';
  }

  const active = activeKey();
  const hasSidebar = !!document.getElementById('sidebar');

  const hamburger = hasSidebar ? `
    <button id="hamburger" class="nav-hamburger" aria-label="Toggle sidebar">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 5h14M3 10h14M3 15h14"/>
      </svg>
    </button>` : '';

  const navLinks = links.map(l =>
    `<a class="nav-link${l.key === active ? ' active' : ''}" href="${l.href}">${l.label}</a>`
  ).join('\n      ');

  const html = `
    <a class="nav-brand" href="${base}index.html">Roxanne El Baff — Dissertation Guide</a>
    <div class="nav-links">
      ${hamburger}
      ${navLinks}
    </div>`;

  const nav = document.getElementById('site-nav');
  if (nav) {
    nav.className = 'site-nav';
    nav.innerHTML = html;

    const banner = document.createElement('div');
    banner.style.cssText = 'position:sticky;top:0;z-index:51;background:#fef9ec;border-bottom:1px solid #fde68a;padding:0.45rem 2rem;text-align:center;display:flex;align-items:center;justify-content:center;gap:0.75rem;flex-wrap:wrap;';
    banner.innerHTML = '<span style="background:#b45309;color:#fff;font-size:0.65rem;font-weight:800;letter-spacing:0.08em;padding:0.2rem 0.5rem;border-radius:4px;text-transform:uppercase;">Under Review</span>'
      + '<p style="font-size:0.875rem;font-weight:600;color:#78350f;margin:0;">Dissertation submitted in June 2026</p>';
    document.body.insertBefore(banner, document.body.firstChild);
  }
})();
