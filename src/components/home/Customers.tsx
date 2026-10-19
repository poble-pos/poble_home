"use client";

import Image from "next/image";

import { CUSTOMER_STORIES } from "@/data/customer-stories";
import { useI18n } from "@/i18n/I18nProvider";
import { format } from "@/i18n/messages";

/** Three venue stories from the export, with optional setup disclosures. */
export function Customers() {
  const { m } = useI18n();
  return (
    <section id="customers" className="customers-section compact-section" aria-labelledby="customers-h">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <h2 id="customers-h">{m.home.customers.heading}</h2>
          </div>
        </div>

        <div className="customer-grid">
          {CUSTOMER_STORIES.map((customer) => {
            const story = m.stories[customer.id];
            return (
              <article key={customer.id} className="customer-story">
                <Image src={customer.image} alt={story.imageAlt} width={987} height={423} sizes="240px" />
                <div className="customer-caption">
                  <div className="customer-identity">
                    <h3>{customer.name}</h3>
                    <p>{story.venue}</p>
                  </div>
                  <figure className="customer-feedback">
                    <blockquote>“{story.quote}”</blockquote>
                    <figcaption>{story.author}</figcaption>
                  </figure>
                  <details>
                    <summary>
                      {m.home.customers.seeSetup}
                      <span className="sr-only">{format(m.home.customers.setupFor, { name: customer.name })}</span>
                    </summary>
                    <ul className="customer-setup-features">
                      {customer.products.map((item) => (
                        <li key={item}>
                          <svg aria-hidden="true" viewBox="0 0 16 16">
                            <path d="M3 8.4 6.2 11.6 13 4.8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{m.products[item].name}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
