"use client";

import { Mail, Phone, X } from "lucide-react";
import { useEffect } from "react";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-[2rem] border border-black/10 bg-[#F9F8F3] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-black/45 transition hover:bg-black/5 hover:text-black"
        >
          <X className="h-4 w-4" />
        </button>

        <h2
          id="contact-dialog-title"
          className="text-2xl font-medium tracking-[-0.02em] text-[#111111]"
        >
          Get in touch
        </h2>
        <p className="mt-2 text-sm text-black/55">
          We&apos;re here to help. Reach out and our team will get back to you
          shortly.
        </p>

        <div className="mt-7 space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-[#B9855B]" />
            <span className="text-sm text-black/55">Call us</span>
            <a
              href="tel:1300966963"
              className="ml-auto text-sm font-medium text-black hover:underline"
            >
              1300 966 963
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-[#B9855B]" />
            <span className="text-sm text-black/55">Email us</span>
            <a
              href="mailto:sales@poble.com.au"
              className="ml-auto text-sm font-medium text-black hover:underline"
            >
              sales@poble.com.au
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-black/45">
          Local support, 7 days a week.
        </p>
      </div>
    </div>
  );
}
