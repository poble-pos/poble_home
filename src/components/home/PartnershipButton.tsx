"use client";

import { useRef, useState, type FormEvent } from "react";

import { postJson } from "@/lib/api";
import type { SubmitStatus } from "@/types/forms";

/**
 * "Partner with Poble" control and its proposal dialog, as in the export. The dialog
 * uses the shared enquiry styles (contact.css) and posts to /api/partnership.
 */
export function PartnershipButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

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
        Partner with Poble
      </button>
      <dialog
        ref={dialogRef}
        className="inquiry-dialog partnership-dialog"
        aria-labelledby="partnership-title"
        onClose={handleClose}
        onClick={handleBackdropClick}
      >
        <div className="inquiry-heading">
          <h2 id="partnership-title">Partner with Poble</h2>
          <button type="button" className="inquiry-close" aria-label="Close partnership enquiry" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {status === "done" ? (
          <div className="inquiry-success" role="status">
            <h3>Thank you for your proposal.</h3>
            <p>Your partnership enquiry has been submitted. For follow-up, contact support@posnet.com.au.</p>
            <button type="button" className="inquiry-submit inquiry-done" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="inquiry-intro">Tell us about your company and how we could work together.</p>
            <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
              <label>
                Your name
                <input name="name" autoComplete="name" maxLength={120} required />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="04xx xxx xxx" maxLength={24} required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com.au" maxLength={254} required />
              </label>
              <label>
                Company name
                <input name="company" autoComplete="organization" maxLength={200} required />
              </label>
              <label>
                Your partnership proposal
                <textarea name="message" rows={5} placeholder="Tell us about the partnership you have in mind" maxLength={4000} required />
              </label>
              <label className="partnership-honey" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && (
                <p className="inquiry-status" role="alert">
                  We could not confirm your proposal was sent. Your details are still here. Please try again or email
                  support@posnet.com.au.
                </p>
              )}

              <button className="inquiry-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send inquiry"}
              </button>
              <p className="inquiry-consent">
                Your details will be sent to support@posnet.com.au via FormSubmit to respond to your proposal.
              </p>
            </form>
            <p className="inquiry-help">
              Prefer email?{" "}
              <a className="inquiry-fallback" href="mailto:support@posnet.com.au?subject=Poble%20partnership%20enquiry">
                support@posnet.com.au
              </a>
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
