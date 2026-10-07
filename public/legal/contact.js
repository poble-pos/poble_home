/* Contact requests use the existing Poble enquiry API through a same-origin server route. */
(() => {
  if (!document.querySelector('[data-contact]')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'inquiry-dialog';
  dialog.id = 'inquiryDialog';
  dialog.setAttribute('aria-labelledby', 'inquiry-title');
  dialog.innerHTML = `
    <div class="inquiry-heading"><h2 id="inquiry-title">Contact us</h2><button class="inquiry-close" type="button" aria-label="Close enquiry"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
    <p class="inquiry-intro">Tell us about your venue and a sales specialist will get back to you. Prefer to call? <a href="tel:1300966963">1300 966 963</a>.</p>
    <form class="inquiry-form">
      <label>Your name<input name="name" autocomplete="name" placeholder="Your name" maxlength="120" required></label>
      <label>Phone number<input name="mobile" type="tel" autocomplete="tel" inputmode="tel" placeholder="04xx xxx xxx" maxlength="24" required></label>
      <label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@yourvenue.com.au" maxlength="254" required></label>
      <label>Venue name &amp; address<input name="shop" autocomplete="organization" placeholder="Your venue's name &amp; address" maxlength="300" required></label>
      <label>Suburb<input name="suburb" autocomplete="address-level2" placeholder="Suburb" maxlength="120" required></label>
      <label>Your enquiry (optional)<textarea name="message" rows="3" placeholder="Tell us what you need" maxlength="3000"></textarea></label>
      <p class="inquiry-status" role="alert" hidden></p>
      <button class="inquiry-submit" type="submit">Send a message</button>
      <p class="inquiry-consent">By submitting, you agree to be contacted about your enquiry.</p>
    </form>
    <div class="inquiry-success" role="status" hidden><h3>Thanks for getting in touch.</h3><p>Your enquiry has been submitted to Poble. Our team will be in touch.</p><button class="inquiry-submit inquiry-done" type="button">Done</button></div>
    <p class="inquiry-help">You can also email <a class="inquiry-fallback" href="mailto:sales@poble.com.au">sales@poble.com.au</a>.</p>`;
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
    submit.textContent = 'Sending…';
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
      status.textContent = 'We could not confirm your enquiry was sent. Your details are still here. Please try again, or email sales@poble.com.au.';
      status.hidden = false;
      status.setAttribute('tabindex','-1');
      status.focus();
    } finally {
      sending = false;
      submit.disabled = false;
      submit.textContent = 'Send a message';
      form.removeAttribute('aria-busy');
    }
  });
})();
