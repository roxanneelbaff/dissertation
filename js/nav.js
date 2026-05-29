/* Injects the shared top nav and marks the active link */
(function () {
  const inMaterials = window.location.pathname.includes('/materials/');
  const base        = inMaterials ? '../' : '';
  const current     = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: base + 'index.html',                                   label: 'Home',             key: 'home' },
    { href: base + 'read.html',                                    label: 'Read',             key: 'read' },
    { href: base + 'listen.html',                                  label: 'Listen',           key: 'listen' },
    { href: inMaterials ? 'index.html' : 'materials/index.html',   label: 'Code &amp; Materials', key: 'materials' },
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
  }
})();
