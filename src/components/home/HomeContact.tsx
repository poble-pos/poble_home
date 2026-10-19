"use client";

import Link from "next/link";

import { useI18n } from "@/i18n/I18nProvider";

/**
 * Closing contact section from the export. Other Contact us buttons scroll here;
 * Send Enquiry opens the enquiry page.
 */
export function HomeContact() {
  const { m } = useI18n();
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-h">
      <div className="wrap contact-layout">
        <div>
          <h2 id="contact-h">{m.home.contact.heading}</h2>
          <p>{m.home.contact.body}</p>
        </div>
        <div className="contact-options">
          <Link className="btn" href="/enquiry">
            {m.home.contact.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
