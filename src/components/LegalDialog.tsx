"use client";

import React, { useEffect } from "react";

import { X } from "lucide-react";

type LegalTab = "privacy" | "terms" | "cookies";

interface LegalDialogProps {
  open: LegalTab | null;
  onClose: () => void;
}

const TABS: { id: LegalTab; label: string }[] = [
  { id: "privacy", label: "Privacy" },
  { id: "terms", label: "Terms" },
  { id: "cookies", label: "Cookies" },
];

const Privacy: React.FC = () => (
  <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
    <p className="text-base text-slate-700 font-medium">
      <strong>ECNESOFT PTY LTD</strong> (trading as <strong>poble</strong>) is
      committed to protecting your privacy in accordance with the{" "}
      <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.
    </p>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
      Last Updated: February 1, 2026
    </p>

    <Section title="1. Information We Collect">
      Identity, contact, financial, and technical usage data necessary to
      provide our platform and support services.
    </Section>
    <Section title="2. How We Collect It">
      Through direct interactions, automated technologies (cookies, server
      logs), and third-party partners such as payment providers.
    </Section>
    <Section title="3. How We Use It">
      Service provision, billing, support, platform improvement, and optional
      marketing (opt-out anytime).
    </Section>
    <Section title="4. Disclosure">
      We share data only with service providers, professional advisers, and
      regulators as required by law. We never sell your data.
    </Section>
    <Section title="5. Security">
      Industry-standard TLS/SSL encryption in transit and secure storage
      protocols at rest.
    </Section>
    <Section title="6. Your Rights">
      You may request access to or correction of your personal information by
      emailing{" "}
      <a
        href="mailto:privacy@poble.com.au"
        className="text-blue-600 hover:underline"
      >
        privacy@poble.com.au
      </a>
      .
    </Section>
  </div>
);

const Terms: React.FC = () => (
  <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
    <p className="text-base text-slate-700 font-medium">
      These Terms constitute a binding agreement between you and{" "}
      <strong>ECNESOFT PTY LTD</strong> governing your use of the poble POS
      platform.
    </p>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
      Last Updated: February 1, 2026
    </p>

    <Section title="1. Acceptance">
      By using the Service you agree to these Terms. If acting on behalf of a
      company, you confirm authority to bind that entity.
    </Section>
    <Section title="2. License">
      A limited, non-exclusive, non-transferable license to use the Service for
      internal business operations. You may not resell, reverse-engineer, or
      replicate the platform.
    </Section>
    <Section title="3. Free Trial">
      Trial duration is specified at sign-up. Unless cancelled before the trial
      ends, your account converts to a paid subscription automatically.
    </Section>
    <Section title="4. Fees & Billing">
      All fees are in AUD and inclusive of GST. Add-ons may incur usage-based
      charges billed monthly in arrears. Payments are non-refundable unless
      required by Australian law.
    </Section>
    <Section title="5. Cancellation">
      Cancel anytime via your dashboard. Effective at end of the current billing
      cycle — no partial refunds.
    </Section>
    <Section title="6. Liability">
      Our aggregate liability is capped at the total fees paid in the preceding
      12 months. Service is provided &quot;`AS IS&quot;`.
    </Section>
    <Section title="7. Governing Law">New South Wales, Australia.</Section>
  </div>
);

const Cookies: React.FC = () => (
  <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
    <p className="text-base text-slate-700 font-medium">
      This policy explains how <strong>poble</strong> uses cookies and similar
      tracking technologies on our website and platform.
    </p>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
      Last Updated: February 1, 2026
    </p>

    <Section title="Strictly Necessary">
      Auth tokens, session IDs, and CSRF tokens required for secure operation.
      These cannot be disabled.
    </Section>
    <Section title="Performance & Analytics">
      We use tools like Google Analytics to understand how you use our platform
      and improve it.
    </Section>
    <Section title="Functional">
      Cookies that remember your preferences (language, region) for a more
      personalised experience.
    </Section>
    <Section title="Managing Cookies">
      You can control cookies through your browser settings. Disabling some
      cookies may limit dashboard functionality.{" "}
      <a
        href="https://tools.google.com/dlpage/gaoptout"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Opt out of Google Analytics.
      </a>
    </Section>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <h3 className="text-[11px] font-black uppercase tracking-widest text-poble-charcoal mb-2">
      {title}
    </h3>
    <p>{children}</p>
  </div>
);

export const LegalDialog: React.FC<LegalDialogProps> = ({ open, onClose }) => {
  const [active, setActive] = React.useState<LegalTab>(open ?? "privacy");

  // Sync tab when opened from outside
  useEffect(() => {
    if (open) setActive(open);
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-0"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-[70vw] h-screen flex flex-col bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_32px_80px_rgba(0,0,0,0.18)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-12 pt-8 pb-5 border-b border-white/40">
          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  active === t.id
                    ? "bg-poble-charcoal text-white"
                    : "text-slate-500 hover:text-poble-charcoal"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100/80 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 pl-12 pr-96 py-10 no-scrollbar">
          {active === "privacy" && <Privacy />}
          {active === "terms" && <Terms />}
          {active === "cookies" && <Cookies />}
        </div>

        {/* Footer */}
        <div className="px-12 py-5 border-t border-white/40 text-[10px] font-black uppercase tracking-widest text-slate-400">
          ECNESOFT PTY LTD · info@poble.com.au
        </div>
      </div>
    </div>
  );
};
