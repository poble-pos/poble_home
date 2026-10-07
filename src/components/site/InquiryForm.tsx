"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { postJson } from "@/lib/api";
import type { SubmitStatus } from "@/types/forms";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  shop: string;
  suburb: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  mobile: "",
  email: "",
  shop: "",
  suburb: "",
  message: "",
};

/**
 * Venue enquiry form, styled by contact.css. Posts to /api/inquiry, which emails a
 * receipt to the customer and a copy to the sales inbox. Field names and the
 * request payload are unchanged.
 */
export function InquiryForm({ onDone }: { onDone?: () => void }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      await postJson("/api/inquiry", form);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="inquiry-success" role="status">
        <h3>Thanks for getting in touch.</h3>
        <p>Your enquiry has been submitted to Poble. Our team will be in touch.</p>
        <button type="button" className="inquiry-submit inquiry-done" onClick={onDone}>
          Done
        </button>
      </div>
    );
  }

  return (
    <>
      <p className="inquiry-intro">
        Tell us about your venue and a sales specialist will get back to you. Prefer to call?{" "}
        <a href="tel:1300966963">1300 966 963</a>.
      </p>

      <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
        <label>
          Your name
          <input name="name" autoComplete="name" placeholder="Your name" maxLength={120} required value={form.name} onChange={update("name")} />
        </label>
        <label>
          Phone number
          <input name="mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="04xx xxx xxx" maxLength={24} required value={form.mobile} onChange={update("mobile")} />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@yourvenue.com.au" maxLength={254} required value={form.email} onChange={update("email")} />
        </label>
        <label>
          Venue name &amp; address
          <input name="shop" autoComplete="organization" placeholder="Your venue's name & address" maxLength={300} required value={form.shop} onChange={update("shop")} />
        </label>
        <label>
          Suburb
          <input name="suburb" autoComplete="address-level2" placeholder="Suburb" maxLength={120} required value={form.suburb} onChange={update("suburb")} />
        </label>
        <label>
          Your enquiry (optional)
          <textarea name="message" rows={3} placeholder="Tell us what you need" maxLength={3000} value={form.message} onChange={update("message")} />
        </label>

        {status === "error" && (
          <p className="inquiry-status" role="alert">
            We could not confirm your enquiry was sent. Your details are still here. Please try again, or email{" "}
            <a className="inquiry-fallback" href="mailto:sales@poble.com.au">
              sales@poble.com.au
            </a>
            .
          </p>
        )}

        <button className="inquiry-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send a message"}
        </button>
        <p className="inquiry-consent">By submitting, you agree to be contacted about your enquiry.</p>
      </form>

      <p className="inquiry-help">
        You can also email <a className="inquiry-fallback" href="mailto:sales@poble.com.au">sales@poble.com.au</a>.
      </p>
    </>
  );
}
