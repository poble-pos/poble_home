import { ContactButton } from "@/components/site/ContactButton";

const PLAN_BASE = 60;

const FAQS = [
  {
    q: "Are all features included in $60?",
    a: "The $60 Basic plan is the starting price. Staff POS has no additional monthly fee. Kitchen Display, Table Ordering and Extra POS are charged per device. Other selected options update your monthly estimate; Kiosk, Table Booking and WaitList require a quote.",
  },
  {
    q: "How does the free month work?",
    a: "The trial gives you one month on the Basic Plan. Your venue profile is verified before you begin. Contact our team for setup and billing details.",
  },
  {
    q: "Can I use my own iPad?",
    a: "Yes. Poble supports iPad 8th generation and later. Our team can help with printers, stands and payment terminals.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "The software plan runs month-to-month. You can cancel at any time.",
  },
];

/**
 * Pricing section with the export's markup. The add-on options are removed, so
 * the summary shows the Poble Basic plan and the FAQ.
 */
export function PricingCalculator() {
  return (
    <section id="pricing" className="pricing-section compact-section" aria-labelledby="price-h">
      <div className="wrap pricing-layout">
        <div className="price-summary">
          <h2 id="price-h">
            Your venue.
            <br /> Your setup.
          </h2>
          <p className="price-label">Poble Basic Plan</p>
          <div className="price">
            <strong>${PLAN_BASE}</strong>
            <span>/month</span>
          </div>
          <p className="price-meta">AUD per venue · Month-to-month</p>
          <p className="plan-breakdown">Poble Basic ${PLAN_BASE} + selected options $0</p>
          <p className="trial-note">1-month free trial</p>
          <ContactButton className="btn">Contact us</ContactButton>
        </div>

        <div className="plan-content">
          <div className="mobile-estimate" aria-hidden="true">
            <span>Monthly estimate</span>
            <strong>
              ${PLAN_BASE}
              <span>/month</span>
            </strong>
          </div>
          <h3>Add the tools your venue needs.</h3>
          <p className="addon-intro">
            Start with Poble Basic at ${PLAN_BASE}/month. Select your options to see your monthly estimate. All prices are in AUD.
          </p>

          <fieldset className="plan-options"></fieldset>
          <noscript>
            <p>Enable JavaScript to calculate your plan, or contact us for pricing.</p>
          </noscript>

          <p className="addon-note">
            Kiosk, Table Booking and WaitList are quoted to suit your venue. Your other selections are kept while you
            enquire.
          </p>

          <section className="compact-faq" aria-labelledby="faq-h">
            <h3 id="faq-h">Before you get started</h3>
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
