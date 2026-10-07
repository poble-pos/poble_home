"use client";

import { useState } from "react";

import { ContactButton } from "@/components/site/ContactButton";
import {
  PLAN_BASE,
  PLAN_GROUPS,
  PLAN_OPTIONS,
  calculatePlan,
  type PlanOption,
} from "@/data/plan-options";

const ICONS: Record<string, string> = {
  staff:
    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  kds: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M12 18v4M6 8h5M6 12h9"/>',
  "table-order":
    '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4M7 9h10M7 13h5"/>',
  kiosk:
    '<rect x="6" y="2" width="12" height="16" rx="2"/><path d="M9 22h6M12 18v4M10 6h4M10 10h4"/>',
  crm: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 4a3 3 0 0 1 0 6M21 21v-3a6 6 0 0 0-3-5"/>',
  online:
    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><path d="M15 15h6v6h-6v-3M12 3v6M3 12h6M12 12h9M12 15v6"/>',
  uber: '<path d="M3 6h11v12H3zM14 10h4l4 5v3h-8"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
  extra:
    '<rect x="2" y="3" width="16" height="12" rx="2"/><path d="M5 20h10M10 15v5M20 4v6M17 7h6"/>',
  management:
    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  booking:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 11h18M8 16l3 3 5-5"/>',
  waitlist: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
};

const FAQS = [
  {
    q: "Are all features included in $60?",
    a: "The $60 Basic plan is the starting price. Staff POS, Kitchen Display, Table Ordering and Extra POS are charged per device. Other selected options update your monthly estimate; Kiosk, Table Booking and WaitList require a quote.",
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

function OptionCard({
  option,
  checked,
  count,
  onToggle,
  onCount,
}: {
  option: PlanOption;
  checked: boolean;
  count: number;
  onToggle: (checked: boolean) => void;
  onCount: (count: number) => void;
}) {
  const quantityId = `plan-${option.id}-quantity`;
  return (
    <div className={`plan-option${checked ? " is-selected" : ""}`}>
      <label className="option-select">
        <input
          className="sr-only"
          type="checkbox"
          role="switch"
          value={option.id}
          aria-label={option.name}
          checked={checked}
          onChange={(event) => onToggle(event.target.checked)}
        />
        <svg
          className="option-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: ICONS[option.id] }}
        />
        <span className="option-copy">
          <strong>{option.name}</strong>
          {option.note ? <small>{option.note}</small> : null}
        </span>
        <span className="option-toggle" aria-hidden="true">
          <svg viewBox="0 0 12 12" fill="none">
            <path d="m3 6 2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </label>
      {option.quantity && checked ? (
        <div className="option-quantity">
          <label htmlFor={quantityId}>Devices</label>
          <div className="quantity-stepper">
            <button
              type="button"
              aria-label={`Decrease ${option.name} devices`}
              disabled={count <= 1}
              onClick={() => onCount(count - 1)}
            >
              −
            </button>
            <input
              id={quantityId}
              type="number"
              min={1}
              step={1}
              inputMode="numeric"
              aria-label={`${option.name} device quantity`}
              value={count}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (
                  event.target.value &&
                  Number.isSafeInteger(next) &&
                  next >= 1
                )
                  onCount(next);
              }}
            />
            <button
              type="button"
              aria-label={`Increase ${option.name} devices`}
              onClick={() => onCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function PricingCalculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quantities, setQuantities] = useState<Record<string, number>>({
    kds: 1,
    "table-order": 1,
    extra: 1,
  });
  const result = calculatePlan(selected, quantities);
  const total = result.quote ? "Contact us" : `$${result.total}`;

  const toggle = (id: string, checked: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });

  return (
    <section
      id="pricing"
      className="pricing-section compact-section"
      aria-labelledby="price-h"
    >
      <div className="wrap pricing-layout">
        <div className="price-summary">
          <h2 id="price-h">
            Your venue.
            <br /> Your setup.
          </h2>
          <p className="price-label">
            {result.quote
              ? "Your tailored setup"
              : selected.size
                ? "Your monthly estimate"
                : "Poble Basic Plan"}
          </p>
          <div
            className={`price${result.quote ? " is-quote" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <strong>{total}</strong>
            {result.quote ? null : <span>/month</span>}
          </div>
          <p className="price-meta">AUD per venue · Month-to-month</p>
          <p className="plan-breakdown">
            {result.quote
              ? "Your selected tools require a quote. Your other selections are saved."
              : `Poble Basic $${PLAN_BASE} + selected options $${result.addOns}`}
          </p>
          <p className="trial-note">1-month free trial</p>
          <ContactButton className="btn">Contact us</ContactButton>
        </div>

        <div className="plan-content">
          <div className="mobile-estimate" aria-hidden="true">
            <span>Monthly estimate</span>
            <strong>
              {total}
              {result.quote ? null : <span data-plan-suffix>/month</span>}
            </strong>
          </div>
          <h3>Add the tools your venue needs.</h3>
          <p className="addon-intro">
            Start with Poble Basic at ${PLAN_BASE}/month. Select your options to
            see your monthly estimate. All prices are in AUD.
          </p>

          <fieldset className="plan-options">
            <legend className="sr-only">Choose your monthly options</legend>
            {PLAN_GROUPS.map((group, index) => (
              <section
                className="plan-option-group"
                key={group}
                aria-labelledby={`plan-group-${index}`}
              >
                <h4 className="option-group-heading" id={`plan-group-${index}`}>
                  {group}
                </h4>
                <div className="option-grid">
                  {PLAN_OPTIONS.filter((option) => option.group === group).map(
                    (option) => (
                      <OptionCard
                        key={option.id}
                        option={option}
                        checked={result.ids.has(option.id)}
                        count={quantities[option.id] ?? 1}
                        onToggle={(checked) => toggle(option.id, checked)}
                        onCount={(count) =>
                          setQuantities((prev) => ({
                            ...prev,
                            [option.id]: count,
                          }))
                        }
                      />
                    ),
                  )}
                </div>
              </section>
            ))}
          </fieldset>

          <p className="addon-note">
            Kiosk, Table Booking and WaitList are quoted to suit your venue.
            Your other selections stay on this page while you enquire.
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
