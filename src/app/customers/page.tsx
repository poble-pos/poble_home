import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaTicks } from "@/components/site/CtaTicks";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import { CUSTOMER_STORIES } from "@/data/customer-stories";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { m } = await getI18n();
  return m.meta.customers;
}

/**
 * Customer stories from the approved export (customers.html).
 */
export default async function CustomersPage() {
  const { m } = await getI18n();
  const t = m.customersPage;
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">{t.kicker}</p>
          <h1 className="display rv" id="ph">{t.heading}</h1>
        </section>

        {CUSTOMER_STORIES.map(({ id, name, image, products }) => {
          const story = m.stories[id];
          return (
            <section key={id} className="pad-s wrap rule" id={id} aria-labelledby={`${id}-h`}>
              <div className="story-grid">
                <div className="story-shot rv">
                  <Image src={image} alt={`${name}, ${story.venue}`} width={987} height={423} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div>
                  <p className="kicker rv">{story.venue}</p>
                  <h2 className="h3 rv" id={`${id}-h`}>{name}</h2>
                  <p className="pull rv">“{story.quote}”</p>
                  <p className="cite rv">{story.author}</p>
                  <p className="body-grey rv" style={{ marginTop: 22, maxWidth: "44ch" }}>
                    {story.body}
                  </p>
                  <ul className="res rv">
                    {story.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                  <div className="runs rv">
                    {products.map((product) => (
                      <span key={product}>{m.products[product].name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="yellow-sec pad" aria-labelledby="cta-h">
          <div className="wrap cta-in">
            <h2 className="display-xl rv" id="cta-h">{t.ctaHeading}</h2>
            <div className="cta-actions rv">
              <Link className="btn" href="/pricing">
                {m.common.viewPricing} <svg aria-hidden="true"><use href="#arrow" /></svg>
              </Link>
              <a className="btn btn-2" href="tel:1300966963">{m.common.talkToSales}</a>
            </div>
            <CtaTicks items={m.common.ticks} />
          </div>
        </section>
      </ExportPage>
    </PageShell>
  );
}
