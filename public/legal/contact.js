/* Contact requests use the existing Poble enquiry API through a same-origin server route. */
(() => {
  if (!document.querySelector('[data-contact]')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'inquiry-dialog';
  dialog.id = 'inquiryDialog';
  dialog.setAttribute('aria-labelledby', 'inquiry-title');
  const t = key => window.PobleI18n ? window.PobleI18n.t(key) : '';
  const esc = value => value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const tx = key => esc(t(key));
  dialog.innerHTML = `
    <div class="inquiry-heading"><h2 id="inquiry-title">${tx('inquiry.title')}</h2><button class="inquiry-close" type="button" aria-label="${tx('inquiry.close')}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
    <p class="inquiry-intro">${tx('inquiry.intro')} <a href="tel:1300966963">1300 966 963</a>.</p>
    <form class="inquiry-form">
      <label>${tx('inquiry.name')}<input name="name" autocomplete="name" placeholder="${tx('inquiry.namePlaceholder')}" maxlength="120" required></label>
      <label>${tx('inquiry.phone')}<input name="mobile" type="tel" autocomplete="tel" inputmode="tel" placeholder="04xx xxx xxx" maxlength="24" required></label>
      <label>${tx('inquiry.email')}<input name="email" type="email" autocomplete="email" placeholder="you@yourvenue.com.au" maxlength="254" required></label>
      <label>${tx('inquiry.shop')}<input name="shop" autocomplete="organization" placeholder="${tx('inquiry.shopPlaceholder')}" maxlength="300" required></label>
      <label>${tx('inquiry.suburb')}<input name="suburb" autocomplete="address-level2" placeholder="${tx('inquiry.suburbPlaceholder')}" maxlength="120" required></label>
      <label>${tx('inquiry.message')}<textarea name="message" rows="3" placeholder="${tx('inquiry.messagePlaceholder')}" maxlength="3000"></textarea></label>
      <p class="inquiry-status" role="alert" hidden></p>
      <button class="inquiry-submit" type="submit">${tx('inquiry.submit')}</button>
      <p class="inquiry-consent">${tx('inquiry.consent')}</p>
    </form>
    <div class="inquiry-success" role="status" hidden><h3>${tx('inquiry.successTitle')}</h3><p>${tx('inquiry.successBody')}</p><button class="inquiry-submit inquiry-done" type="button">${tx('inquiry.done')}</button></div>
    <p class="inquiry-help">${tx('inquiry.help')} <a class="inquiry-fallback" href="mailto:sales@poble.com.au">sales@poble.com.au</a>.</p>`;
  document.body.append(dialog);
  const form = dialog.querySelector('form');
  const submit = dialog.querySelector('[type=submit]');
  const status = dialog.querySelector('.inquiry-status');
  const success = dialog.querySelector('.inquiry-success');
  let opener, sending = false, overflowBefore = '';
  function open(trigger) {
    if (dialog.open) return;
    opener = trigger;
    overflowBefore = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    // On phones start on the heading, avoiding an immediate keyboard covering the form.
    dialog.querySelector('.inquiry-close').focus({preventScroll:true});
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-contact]');
    if (!trigger) return;
    event.preventDefault();
    open(trigger);
  });
  dialog.querySelector('.inquiry-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.inquiry-done').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = overflowBefore;
    const target = opener?.closest('[inert]') ? document.querySelector('#menuBtn') : opener;
    target?.focus({preventScroll:true});
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const payload = Object.fromEntries(new FormData(form));
    sending = true;
    submit.disabled = true;
    submit.textContent = t('inquiry.sending');
    form.setAttribute('aria-busy','true');
    status.hidden = true;
    try {
      const response = await fetch('/api/inquiry', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload), signal:AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.error) throw new Error('Request not accepted');
      form.hidden = true;
      success.hidden = false;
      dialog.querySelector('.inquiry-done').focus();
      form.reset();
    } catch {
      status.textContent = `${t('inquiry.error')} sales@poble.com.au.`;
      status.hidden = false;
      status.setAttribute('tabindex','-1');
      status.focus();
    } finally {
      sending = false;
      submit.disabled = false;
      submit.textContent = t('inquiry.submit');
      form.removeAttribute('aria-busy');
    }
  });
})();
