/* ── Sidebar mobile toggle ─── */
(function () {
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebar-overlay');

  if (!hamburger || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    if (overlay) overlay.style.display = 'block';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
  }

  hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  if (overlay) overlay.addEventListener('click', closeSidebar);
})();

/* ── Podcast language tabs ─── */
(function () {
  const tabs  = document.querySelectorAll('.podcast-tab');
  const panes = document.querySelectorAll('.podcast-pane');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('pane-' + tab.dataset.lang);
      if (target) target.classList.add('active');
    });
  });
})();

/* ── Active nav link ─── */
(function () {
  const path  = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    const isHome = href === '/' || href === '/index.html' || href === '../index.html';
    const normHref = href.replace(/^(\.\.\/)*/, '/').replace('index.html', '');
    const normPath = path.replace('index.html', '');
    if (
      (isHome && (normPath === '/' || normPath === '')) ||
      (!isHome && href !== '#' && normPath.includes(normHref) && normHref !== '/')
    ) {
      link.classList.add('active');
    }
  });
})();
