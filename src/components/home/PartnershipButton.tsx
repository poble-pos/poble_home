"use client";

import { useRef, useState, type FormEvent } from "react";

import { useI18n } from "@/i18n/I18nProvider";
import { format } from "@/i18n/messages";
import { postJson } from "@/lib/api";
import type { SubmitStatus } from "@/types/forms";

const PARTNERSHIP_EMAIL = "support@posnet.com.au";

/**
 * "Partner with Poble" control and its proposal dialog, as in the export. The dialog
 * uses the shared enquiry styles (contact.css) and posts to /api/partnership.
 */
export function PartnershipButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const { m } = useI18n();
  const t = m.partnership;

  const open = () => {
    setStatus("idle");
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    document.body.style.overflow = "";
    opener.current?.focus({ preventScroll: true });
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target !== dialogRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) close();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("sending");
    try {
      const result = await postJson<{ success?: boolean }>("/api/partnership", Object.fromEntries(new FormData(form)));
      if (result.success !== true) throw new Error("Not confirmed");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button ref={opener} type="button" className="partnership-link" onClick={open}>
        {t.open}
      </button>
      <dialog
        ref={dialogRef}
        className="inquiry-dialog partnership-dialog"
        aria-labelledby="partnership-title"
        onClose={handleClose}
        onClick={handleBackdropClick}
      >
        <div className="inquiry-heading">
          <h2 id="partnership-title">{t.title}</h2>
          <button type="button" className="inquiry-close" aria-label={t.close} onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {status === "done" ? (
          <div className="inquiry-success" role="status">
            <h3>{t.successTitle}</h3>
            <p>{format(t.successBody, { email: PARTNERSHIP_EMAIL })}</p>
            <button type="button" className="inquiry-submit inquiry-done" onClick={close}>
              {m.common.done}
            </button>
          </div>
        ) : (
          <>
            <p className="inquiry-intro">{t.intro}</p>
            <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
              <label>
                {t.name}
                <input name="name" autoComplete="name" maxLength={120} required />
              </label>
              <label>
                {t.phone}
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="04xx xxx xxx" maxLength={24} required />
              </label>
              <label>
                {t.email}
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com.au" maxLength={254} required />
              </label>
              <label>
                {t.company}
                <input name="company" autoComplete="organization" maxLength={200} required />
              </label>
              <label>
                {t.proposal}
                <textarea name="message" rows={5} placeholder={t.proposalPlaceholder} maxLength={4000} required />
              </label>
              <label className="partnership-honey" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && (
                <p className="inquiry-status" role="alert">
                  {format(t.error, { email: PARTNERSHIP_EMAIL })}
                </p>
              )}

              <button className="inquiry-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? m.common.sending : t.submit}
              </button>
              <p className="inquiry-consent">
                {format(t.consent, { email: PARTNERSHIP_EMAIL })}
              </p>
            </form>
            <p className="inquiry-help">
              {t.preferEmail}{" "}
              <a className="inquiry-fallback" href={`mailto:${PARTNERSHIP_EMAIL}?subject=Poble%20partnership%20enquiry`}>
                {PARTNERSHIP_EMAIL}
              </a>
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
