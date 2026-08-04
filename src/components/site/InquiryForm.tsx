"use client";

import { ArrowRight, Check, Phone } from "lucide-react";

import { useState } from "react";

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

type Status = "idle" | "sending" | "done" | "error";

/**
 * Self-contained venue-enquiry form. Posts to /api/inquiry, which emails a
 * receipt to the customer and a copy to the sales inbox. Rendered inside
 * InquirySidebar, triggered from the "Start free trial" / CTA buttons.
 */
export function InquiryForm({
  onDone,
  bare = false,
}: {
  onDone?: () => void;
  /** Drop the card's own margin/background/shadow when it's already
   *  placed inside another container, e.g. InquirySidebar. */
  bare?: boolean;
}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const cardClass = bare
    ? "text-left"
    : "mx-auto mt-9 w-full max-w-md rounded-2xl bg-[#F9F8F3] p-6 text-left shadow-xl shadow-black/10 md:p-8";

  if (status === "done") {
    return (
      <div className={cardClass}>
        <div className="text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-medium tracking-[-0.02em] text-[#111111]">
            Thanks — we&apos;ll be in touch.
          </h3>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-black/55">
            A Poble sales specialist will contact you shortly. We&apos;ve also
            emailed a copy of your enquiry to{" "}
            <span className="font-medium text-black/75">{form.email}</span>.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-black/55">
            <Phone className="h-4 w-4 text-[#B9855B]" />
            Urgent? Call
            <a href="tel:1300966963" className="font-medium text-black">
              1300&nbsp;966&nbsp;963
            </a>
          </div>
          {onDone && (
            <div>
              <button
                type="button"
                onClick={onDone}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cardClass}>
      <p className="text-sm text-black/55">
        Tell us about your venue and a sales specialist will get back to you.
        Call us now on{" "}
        <span className="font-medium text-black/75">1300 966 963</span> ·
        Weekdays 9am–8pm, Weekends 10am–8pm.
      </p>

      <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
        <Field
          label="Name"
          value={form.name}
          onChange={update("name")}
          placeholder="Your Name"
          required
        />
        <Field
          label="Mobile Number"
          value={form.mobile}
          onChange={update("mobile")}
          placeholder="04xx xxx xxx"
          type="tel"
          required
        />
        <Field
          label="Email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@yourvenue.com.au"
          type="email"
          required
        />
        <Field
          label="Shop Name & Address"
          value={form.shop}
          onChange={update("shop")}
          placeholder="Your venue's name & address"
          required
        />
        <Field
          label="Suburb"
          value={form.suburb}
          onChange={update("suburb")}
          placeholder="Suburb"
          required
        />
        <textarea
          aria-label="Message"
          value={form.message}
          onChange={update("message")}
          placeholder="Your inquiry (optional)"
          rows={4}
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-black/30 focus:outline-none focus:ring-1 focus:ring-black/20"
        />

        {status === "error" && (
          <p className="text-sm text-rose-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#f9b600] px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#eabb21] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send a message"}
          {status !== "sending" && <ArrowRight className="h-4 w-4" />}
        </button>
        <p className="text-center text-[11px] leading-relaxed text-black/40">
          By submitting, you agree to be contacted about your enquiry.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      aria-label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-black/30 focus:outline-none focus:ring-1 focus:ring-black/20"
    />
  );
}
