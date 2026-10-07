import type { Metadata } from "next";
import Link from "next/link";

import { ContactButton } from "@/components/site/ContactButton";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Poble Basic is $60 per month. Optional features have additional monthly fees.",
};

const FAQ = [
  {
    q: "Is switching complicated?",
    a: "We rebuild your menu, train your staff and stand beside you on the first service.",
  },
  {
    q: "What hardware do I need?",
    a: "An iPad (8th generation or later). Explore compatible printers, stands and payment terminals on our hardware page.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. Month-to-month, cancel any time, and your data is yours to export.",
  },
  {
    q: "What happens after the free month?",
    a: "Unless you cancel before the trial ends, your account automatically converts to a paid subscription. Contact us for plan and billing details.",
  },
];

/**
 * Pricing page from the approved export (pricing.html). "Contact us" controls open
 * the shared enquiry panel, as the export's data-contact links did.
 */
export default function PricingPage() {
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">Pricing</p>
          <h1 className="display rv" id="ph">Poble Basic. Add what you need.</h1>
        </section>

        <section className="wrap pad-s" style={{ paddingTop: 0 }}>
          <div className="plan rv">
            <div className="plan-a">
              <span className="badge">Poble Basic Plan</span>
              <div className="price">
                <b>$60</b>
                <span>/month</span>
              </div>
              <p className="body-grey">Per venue, in AUD. Cancel anytime.</p>
              <div className="cta-actions" style={{ marginTop: 26 }}>
                <ContactButton className="btn">
                  Ask about your free month <svg aria-hidden="true"><use href="#arrow" /></svg>
                </ContactButton>
              </div>
            </div>
            <div>
              <h2 className="h3">Additional features, separate monthly fees.</h2>
              <p className="body-grey" style={{ margin: "16px 0 24px" }}>
                The $60 monthly price covers Poble Basic. Optional features are billed on top of the Basic plan. Contact us
                to confirm your add-ons and total monthly cost.
              </p>
              <p>
                <Link className="btn" href="/#pricing">Build your plan</Link>
              </p>
              <p className="body-grey" style={{ marginTop: 20 }}>
                Choose options and see your monthly estimate in our plan builder.
              </p>
            </div>
          </div>

          <div className="trio-2" style={{ marginTop: "clamp(36px,4vw,60px)" }}>
            <div className="tcard rv">
              <h3>Payments &amp; delivery</h3>
              <p>Tyro and Linkly card integrations. Uber Eats integration is available for +$30/month.</p>
            </div>
            <div className="tcard rv">
              <h3>More than one venue?</h3>
              <p>One back office across every location.</p>
              <ContactButton className="link" style={{ marginTop: 12 }}>
                <span>Contact sales</span>
                <svg aria-hidden="true"><use href="#arrow-r" /></svg>
              </ContactButton>
            </div>
          </div>
        </section>

        <section className="pad wrap rule" aria-labelledby="faq-h">
          <h2 className="display rv" id="faq-h" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
            Frequently asked.
          </h2>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.q} className="rv">
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
            <h2 className="display-xl rv" id="cta-h">Start your free month.</h2>
            <div className="cta-actions rv">
              <ContactButton className="btn">
                Ask about your free month <svg aria-hidden="true"><use href="#arrow" /></svg>
              </ContactButton>
              <ContactButton className="btn btn-2">Contact us</ContactButton>
            </div>
            <ul className="ticks rv">
              <li>No lock-in</li>
              <li>No hidden fees</li>
              <li>Support 7 days a week</li>
            </ul>
          </div>
        </section>
      </ExportPage>
    </PageShell>
  );
}
