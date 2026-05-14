/* Injects the shared sidebar and sets the active link based on current page */
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';

  const html = `
    <div class="sidebar-label">Guide</div>
    <a class="sidebar-item" href="index.html" data-page="index.html">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 5.5L6.5 1 12 5.5V12H8.5V8.5H4.5V12H1z"/></svg>
      Overview
    </a>

    <div class="sidebar-divider"></div>
    <div class="sidebar-label">Code &amp; Materials</div>

    <!-- Chapter 2 -->
    <div class="sidebar-chapter-header">
      <span class="ch-dot ch-dot-2"></span>
      Chapter 2 &mdash; Background
    </div>
    <a class="sidebar-item sidebar-sub" href="chapter-2.html" data-page="chapter-2.html" data-ch="2">Background &amp; Related Work</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-2.html#pipeline" data-page="chapter-2.html" data-ch="2">Multi-Agent Pipeline</a>

    <!-- Chapter 3 -->
    <div class="sidebar-chapter-header">
      <span class="ch-dot ch-dot-3"></span>
      Chapter 3 &mdash; Argument Quality
    </div>
    <a class="sidebar-item sidebar-sub" href="chapter-3.html" data-page="chapter-3.html" data-ch="3">Overview</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-3.html#contribution" data-page="chapter-3.html" data-ch="3">Contribution: Audience Lens</a>

    <!-- Chapter 4 -->
    <div class="sidebar-chapter-header">
      <span class="ch-dot ch-dot-4"></span>
      Chapter 4 &mdash; Style &amp; Persuasion
    </div>
    <a class="sidebar-item sidebar-sub" href="chapter-4.html" data-page="chapter-4.html" data-ch="4">Overview</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-4.html#contribution" data-page="chapter-4.html" data-ch="4">Contribution: Style Analysis</a>

    <!-- Chapter 5 -->
    <div class="sidebar-chapter-header">
      <span class="ch-dot ch-dot-5"></span>
      Chapter 5 &mdash; Argument Generation
    </div>
    <a class="sidebar-item sidebar-sub" href="chapter-5.html" data-page="chapter-5.html" data-ch="5">Overview</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-5.html#contrib1" data-page="chapter-5.html" data-ch="5">Contribution 1: Rhetorical Strategy</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-5.html#bridging" data-page="chapter-5.html" data-ch="5" style="color:#be123c;">◈ Bridging Contribution</a>
    <a class="sidebar-item sidebar-sub2" href="chapter-5.html#contrib2" data-page="chapter-5.html" data-ch="5">Contribution 2: Argument Rewrite</a>
  `;

  const el = document.getElementById('sidebar');
  if (el) {
    el.innerHTML = html;
    /* mark active */
    el.querySelectorAll('.sidebar-item[data-page]').forEach(link => {
      if (link.dataset.page === current && !link.getAttribute('href').includes('#')) {
        link.classList.add('active');
      }
    });
  }
})();
