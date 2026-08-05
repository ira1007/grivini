
(() => {
  const body = document.body;
  const button = document.querySelector('.menu-button');
  const menu = document.getElementById('site-menu');
  const active = body.dataset.page;
  const activeLink = document.querySelector(`[data-nav="${active}"]`);
  if (activeLink) activeLink.setAttribute('aria-current', 'page');
  if (!button || !menu) return;
  const close = () => {
    body.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
  };
  button.addEventListener('click', () => {
    const open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) close(); });
})();
