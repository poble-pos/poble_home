"use client";

import Image from "next/image";

import { useI18n } from "@/i18n/I18nProvider";
import { format } from "@/i18n/messages";

import { PartnershipButton } from "./PartnershipButton";

const PAYMENT_PARTNERS = [
  { label: "Tyro EFTPOS", href: "https://www.tyro.com/payments/in-person/eftpos/", src: "/images/home/tyro-logo.png", width: 250, height: 120, name: "Tyro" },
  { label: "Linkly", href: "https://linkly.com.au/", src: "/images/home/linkly-logo.png", width: 370, height: 148, name: "Linkly" },
  { label: "Stripe", href: "https://stripe.com/au/pricing", src: "/images/home/stripe-logo.png", width: 227, height: 154, name: "Stripe" },
];

/** Payment partners and the partnership invitation, as in the export. */
export function Payments() {
  const { m } = useI18n();
  const t = m.home.payments;
  return (
    <section id="integrations" className="integrations-section compact-section" aria-labelledby="integrations-h">
      <div className="wrap payment-layout">
        <div className="payment-copy">
          <h2 id="integrations-h">{t.heading}</h2>
          <p>{t.intro}</p>
        </div>
        <div className="payment-logos">
          {PAYMENT_PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={format(m.common.opensInNewTab, { label: partner.label })}
            >
              <Image src={partner.src} alt={partner.name} width={partner.width} height={partner.height} />
              <span>{format(t.explorePartner, { label: partner.label })}</span>
            </a>
          ))}
        </div>
        <div className="partnership-invite">
          <div>
            <h3>{t.partnerHeading}</h3>
            <p>{t.partnerBody}</p>
          </div>
          <PartnershipButton />
        </div>
      </div>
    </section>
  );
}
