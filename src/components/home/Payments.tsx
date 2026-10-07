import Image from "next/image";

import { PartnershipButton } from "./PartnershipButton";

const PAYMENT_PARTNERS = [
  { label: "Tyro EFTPOS", href: "https://www.tyro.com/payments/in-person/eftpos/", src: "/images/home/tyro-logo.png", width: 250, height: 120, name: "Tyro" },
  { label: "Linkly", href: "https://linkly.com.au/", src: "/images/home/linkly-logo.png", width: 370, height: 148, name: "Linkly" },
  { label: "Stripe", href: "https://stripe.com/au/pricing", src: "/images/home/stripe-logo.png", width: 227, height: 154, name: "Stripe" },
];

/** Payment partners and the partnership invitation, as in the export. */
export function Payments() {
  return (
    <section id="integrations" className="integrations-section compact-section" aria-labelledby="integrations-h">
      <div className="wrap payment-layout">
        <div className="payment-copy">
          <h2 id="integrations-h">Payments, connected.</h2>
          <p>Explore payment options for your Poble setup.</p>
        </div>
        <div className="payment-logos">
          {PAYMENT_PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.label} — opens in a new tab`}
            >
              <Image src={partner.src} alt={partner.name} width={partner.width} height={partner.height} />
              <span>Explore {partner.label}</span>
            </a>
          ))}
        </div>
        <div className="partnership-invite">
          <div>
            <h3>Let’s build the next connection.</h3>
            <p>Have a payment or technology partnership in mind? We’d like to hear from you.</p>
          </div>
          <PartnershipButton />
        </div>
      </div>
    </section>
  );
}
