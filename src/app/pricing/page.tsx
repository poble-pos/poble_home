import type { Metadata } from "next";
import Link from "next/link";

import { ContactButton } from "@/components/site/ContactButton";
import { CtaTicks } from "@/components/site/CtaTicks";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { m } = await getI18n();
  return m.meta.pricing;
}

/**
 * Pricing page from the approved export (pricing.html). "Contact us" controls open
 * the shared enquiry panel, as the export's data-contact links did.
 */
export default async function PricingPage() {
  const { m } = await getI18n();
  const t = m.pricingPage;
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">{t.kicker}</p>
          <h1 className="display rv" id="ph">{t.heading}</h1>
        </section>

        <section className="wrap pad-s" style={{ paddingTop: 0 }}>
          <div className="plan rv">
            <div className="plan-a">
              <span className="badge">{t.badge}</span>
              <div className="price">
                <b>$60</b>
                <span>{t.perMonth}</span>
              </div>
              <p className="body-grey">{t.perVenue}</p>
              <div className="cta-actions" style={{ marginTop: 26 }}>
                <ContactButton className="btn">
                  {t.askFreeMonth} <svg aria-hidden="true"><use href="#arrow" /></svg>
                </ContactButton>
              </div>
            </div>
            <div>
              <h2 className="h3">{t.addHeading}</h2>
              <p className="body-grey" style={{ margin: "16px 0 24px" }}>
                {t.addBody}
              </p>
              <p>
                <Link className="btn" href="/#pricing">{t.buildPlan}</Link>
              </p>
              <p className="body-grey" style={{ marginTop: 20 }}>
                {t.builderNote}
              </p>
            </div>
          </div>

          <div className="trio-2" style={{ marginTop: "clamp(36px,4vw,60px)" }}>
            <div className="tcard rv">
              <h3>{t.paymentsHeading}</h3>
              <p>{t.paymentsBody}</p>
            </div>
            <div className="tcard rv">
              <h3>{t.venuesHeading}</h3>
              <p>{t.venuesBody}</p>
              <ContactButton className="link" style={{ marginTop: 12 }}>
                <span>{t.contactSales}</span>
                <svg aria-hidden="true"><use href="#arrow-r" /></svg>
              </ContactButton>
            </div>
          </div>
        </section>

        <section className="pad wrap rule" aria-labelledby="faq-h">
          <h2 className="display rv" id="faq-h" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
            {t.faqHeading}
          </h2>
          <div className="faq">
            {t.faqs.map((item, index) => (
              <details key={index} className="rv">
                <summary>
                  {item.q}
                  <span className="sign" aria-hidden="true" />
                </summary>
                <p className="ans">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="yellow-sec pad" aria-labelledby="cta-h">
          <div className="wrap cta-in">
            <h2 className="display-xl rv" id="cta-h">{t.ctaHeading}</h2>
            <div className="cta-actions rv">
              <ContactButton className="btn">
                {t.askFreeMonth} <svg aria-hidden="true"><use href="#arrow" /></svg>
              </ContactButton>
              <ContactButton className="btn btn-2">{m.common.contactUs}</ContactButton>
            </div>
            <CtaTicks items={m.common.ticks} />
          </div>
        </section>
      </ExportPage>
    </PageShell>
  );
}
