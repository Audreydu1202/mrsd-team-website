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

  const cards = [...document.querySelectorAll('.member-card')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    cards.forEach((card, index) => {
      card.classList.add('reveal-ready');
      card.style.setProperty('--reveal-delay', `${(index % 2) * 90}ms`);
    });

    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        entry.target.addEventListener('animationend', () => {
          entry.target.classList.remove('reveal-ready', 'revealed');
          entry.target.style.removeProperty('--reveal-delay');
        }, { once: true });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    cards.forEach(card => cardObserver.observe(card));
  }
})();
