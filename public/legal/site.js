/* Poble: progressive interaction, no animation dependency. */
(() => {
  if (document.body.classList.contains('home')) return;
  const button = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const headerCta = document.querySelector('.box-cta');
  if (!button || !drawer) return;
  const links = [...drawer.querySelectorAll('a[href]')];
  const setOpen = (open, restoreFocus = true) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    drawer.dataset.open = String(open);
    drawer.inert = !open;
    [main, footer, headerCta].forEach(el => { if (el) el.inert = open; });
    document.documentElement.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) links[0]?.focus({ preventScroll: true });
    else if (restoreFocus) button.focus({ preventScroll: true });
  };
  button.addEventListener('click', () => setOpen(drawer.dataset.open !== 'true'));
  drawer.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false, false);
  });
  document.addEventListener('keydown', event => {
    if (drawer.dataset.open !== 'true') return;
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
    if (event.key === 'Tab') {
      const order = [button, ...links];
      const current = order.indexOf(document.activeElement);
      // Keep keyboard focus in the open menu, including its close button.
      event.preventDefault();
      order[(current + (event.shiftKey ? -1 : 1) + order.length) % order.length].focus();
    }
  });
  matchMedia('(min-width:900px)').addEventListener('change', event => {
    if (event.matches && drawer.dataset.open === 'true') {
      setOpen(false, false);
      document.querySelector('.nav-links')?.focus({ preventScroll: true });
    }
  });
})();
