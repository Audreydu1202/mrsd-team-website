(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  const closeMenu = () => {
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('open');
    document.body.classList.remove('nav-open');
    const label = toggle?.querySelector('.sr-only');
    if (label) label.textContent = 'Open navigation';
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu?.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    const label = toggle.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Close navigation' : 'Open navigation';
  });

  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
})();
