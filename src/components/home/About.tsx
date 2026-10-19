"use client";

import { useI18n } from "@/i18n/I18nProvider";

/** Company statement from the export. Headline statistics are not shown; see the review notes. */
export function About() {
  const { m } = useI18n();
  const t = m.home.about;
  return (
    <section id="about" className="about-section compact-section" aria-labelledby="about-h">
      <div className="wrap about-layout" id="poble-about">
        <div className="about-content">
          <h2 id="about-h">{t.heading}</h2>
          <p>{t.body1}</p>
          <p>{t.body2}</p>
        </div>
        <div className="about-signature">
          <svg viewBox="0 0 1024 1024" aria-hidden="true" focusable="false" fill="currentColor">
            <image href="/logo-transparent.svg" width={1024} height={1024} />
          </svg>
          <p>
            {t.signature1}
            <br />
            {t.signature2}
          </p>
          <span>{t.byline}</span>
        </div>
      </div>
    </section>
  );
}
