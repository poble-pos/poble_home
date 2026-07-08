import React from "react";

/**
 * Single source of truth for legal copy. Rendered by both the standalone
 * /terms, /privacy and /cookies pages and the in-page LegalDialog.
 */

export type LegalSlug = "privacy" | "terms" | "cookies";

export interface LegalSection {
  title: string;
  body: React.ReactNode;
}

export interface LegalDoc {
  slug: LegalSlug;
  label: string;
  title: string;
  description: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

export const LEGAL_DOCS: Record<LegalSlug, LegalDoc> = {
  privacy: {
    slug: "privacy",
    label: "Privacy",
    title: "Privacy Policy",
    description:
      "How ECNESOFT PTY LTD (trading as Poble) collects, uses and protects your personal information.",
    updated: "February 1, 2026",
    intro: (
      <>
        <strong>ECNESOFT PTY LTD</strong> (trading as <strong>Poble</strong>)
        is committed to protecting your privacy in accordance with the{" "}
        <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.
      </>
    ),
    sections: [
      {
        title: "1. Information We Collect",
        body: "Identity, contact, financial, and technical usage data necessary to provide our platform and support services.",
      },
      {
        title: "2. How We Collect It",
        body: "Through direct interactions, automated technologies (cookies, server logs), and third-party partners such as payment providers.",
      },
      {
        title: "3. How We Use It",
        body: "Service provision, billing, support, platform improvement, and optional marketing (opt-out anytime).",
      },
      {
        title: "4. Disclosure",
        body: "We share data only with service providers, professional advisers, and regulators as required by law. We never sell your data.",
      },
      {
        title: "5. Security",
        body: "Industry-standard TLS/SSL encryption in transit and secure storage protocols at rest.",
      },
      {
        title: "6. Your Rights",
        body: (
          <>
            You may request access to or correction of your personal
            information by emailing{" "}
            <a
              href="mailto:privacy@poble.com.au"
              className="text-[#8B735C] underline underline-offset-2 hover:text-black"
            >
              privacy@poble.com.au
            </a>
            .
          </>
        ),
      },
    ],
  },

  terms: {
    slug: "terms",
    label: "Terms",
    title: "Terms of Service",
    description:
      "The agreement between you and ECNESOFT PTY LTD governing your use of the Poble POS platform.",
    updated: "February 1, 2026",
    intro: (
      <>
        These Terms constitute a binding agreement between you and{" "}
        <strong>ECNESOFT PTY LTD</strong> governing your use of the Poble POS
        platform.
      </>
    ),
    sections: [
      {
        title: "1. Acceptance",
        body: "By using the Service you agree to these Terms. If acting on behalf of a company, you confirm authority to bind that entity.",
      },
      {
        title: "2. License",
        body: "A limited, non-exclusive, non-transferable license to use the Service for internal business operations. You may not resell, reverse-engineer, or replicate the platform.",
      },
      {
        title: "3. Free Trial",
        body: "Trial duration is specified at sign-up. Unless cancelled before the trial ends, your account converts to a paid subscription automatically.",
      },
      {
        title: "4. Fees & Billing",
        body: "All fees are in AUD and inclusive of GST. Add-ons may incur usage-based charges billed monthly in arrears. Payments are non-refundable unless required by Australian law.",
      },
      {
        title: "5. Cancellation",
        body: "Cancel anytime via your dashboard. Effective at end of the current billing cycle — no partial refunds.",
      },
      {
        title: "6. Liability",
        body: 'Our aggregate liability is capped at the total fees paid in the preceding 12 months. Service is provided "AS IS".',
      },
      {
        title: "7. Governing Law",
        body: "New South Wales, Australia.",
      },
    ],
  },

  cookies: {
    slug: "cookies",
    label: "Cookies",
    title: "Cookie Policy",
    description:
      "How Poble uses cookies and similar tracking technologies on our website and platform.",
    updated: "February 1, 2026",
    intro: (
      <>
        This policy explains how <strong>Poble</strong> uses cookies and
        similar tracking technologies on our website and platform.
      </>
    ),
    sections: [
      {
        title: "Strictly Necessary",
        body: "Auth tokens, session IDs, and CSRF tokens required for secure operation. These cannot be disabled.",
      },
      {
        title: "Performance & Analytics",
        body: "We use tools like Google Analytics to understand how you use our platform and improve it.",
      },
      {
        title: "Functional",
        body: "Cookies that remember your preferences (language, region) for a more personalised experience.",
      },
      {
        title: "Managing Cookies",
        body: (
          <>
            You can control cookies through your browser settings. Disabling
            some cookies may limit dashboard functionality.{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B735C] underline underline-offset-2 hover:text-black"
            >
              Opt out of Google Analytics.
            </a>
          </>
        ),
      },
    ],
  },
};
