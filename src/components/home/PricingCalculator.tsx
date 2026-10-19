"use client";

import { useState } from "react";

import { ContactButton } from "@/components/site/ContactButton";
import { useI18n } from "@/i18n/I18nProvider";
import { format } from "@/i18n/messages";
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
  const { m } = useI18n();
  const t = m.home.pricing;
  const { name, note } = t.options[option.id];
  return (
    <div className={`plan-option${checked ? " is-selected" : ""}`}>
      <label className="option-select">
        <input
          className="sr-only"
          type="checkbox"
          role="switch"
          value={option.id}
          aria-label={name}
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
          <strong>{name}</strong>
          {note ? <small>{note}</small> : null}
        </span>
        <span className="option-toggle" aria-hidden="true">
          <svg viewBox="0 0 12 12" fill="none">
            <path d="m3 6 2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </label>
      {option.quantity && checked ? (
        <div className="option-quantity">
          <label htmlFor={quantityId}>{t.devices}</label>
          <div className="quantity-stepper">
            <button
              type="button"
              aria-label={format(t.decrease, { name })}
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
              aria-label={format(t.quantity, { name })}
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
              aria-label={format(t.increase, { name })}
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
  const { m } = useI18n();
  const t = m.home.pricing;
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quantities, setQuantities] = useState<Record<string, number>>({
    kds: 1,
  });
  const result = calculatePlan(selected, quantities);
  const total = result.quote ? m.common.contactUs : `$${result.total}`;

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
            {t.line1}
            <br /> {t.line2}
          </h2>
          <p className="price-label">
            {result.quote
              ? t.labelQuote
              : selected.size
                ? t.labelEstimate
                : t.labelBasic}
          </p>
          <div
            className={`price${result.quote ? " is-quote" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <strong>{total}</strong>
            {result.quote ? null : <span>{t.perMonth}</span>}
          </div>
          <p className="price-meta">{t.meta}</p>
          <p className="plan-breakdown">
            {result.quote
              ? t.breakdownQuote
              : format(t.breakdown, { base: PLAN_BASE, addOns: result.addOns })}
          </p>
          <p className="trial-note">{t.trial}</p>
          <ContactButton className="btn">{m.common.contactUs}</ContactButton>
        </div>

        <div className="plan-content">
          <div className="mobile-estimate" aria-hidden="true">
            <span>{t.mobileEstimate}</span>
            <strong>
              {total}
              {result.quote ? null : <span data-plan-suffix>{t.perMonth}</span>}
            </strong>
          </div>
          <h3>{t.addHeading}</h3>
          <p className="addon-intro">{format(t.addIntro, { base: PLAN_BASE })}</p>

          <fieldset className="plan-options">
            <legend className="sr-only">{t.legend}</legend>
            {PLAN_GROUPS.map((group, index) => (
              <section
                className="plan-option-group"
                key={group}
                aria-labelledby={`plan-group-${index}`}
              >
                <h4 className="option-group-heading" id={`plan-group-${index}`}>
                  {t.groups[group]}
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

          <p className="addon-note">{t.addNote}</p>

          <section className="compact-faq" aria-labelledby="faq-h">
            <h3 id="faq-h">{t.faqHeading}</h3>
            {t.faqs.map((item, index) => (
              <details key={index}>
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
