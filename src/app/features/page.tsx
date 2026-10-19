import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaTicks } from "@/components/site/CtaTicks";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import { EXPORT_PRODUCTS } from "@/data/export-products";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { m } = await getI18n();
  return m.meta.features;
}

/**
 * Product overview from the approved export (features.html). Each product links to
 * its detail page under /features/[product].
 */
export default async function FeaturesPage() {
  const { m } = await getI18n();
  const t = m.featuresPage;
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">{t.kicker}</p>
          <h1 className="display rv" id="ph">{t.heading}</h1>
          <p className="lede rv">{t.lede}</p>
        </section>

        <section className="wrap blocks">
          {EXPORT_PRODUCTS.map((product, index) => {
            const copy = m.products[product.slug];
            return (
              <Link key={product.slug} className={index % 2 === 1 ? "blk flip" : "blk"} href={`/features/${product.slug}`}>
                <div className="blk-media rv contain">
                  <Image src={product.image.src} alt={copy.imageAlt} width={product.image.width} height={product.image.height} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div className="blk-copy">
                  <p className="kicker rv">{copy.kicker}</p>
                  <h2 className="h3 rv">{copy.name}</h2>
                  <p className="rv">{copy.lede}</p>
                  <span className="link rv">
                    <span>{m.common.explore}</span>
                    <svg aria-hidden="true"><use href="#arrow-r" /></svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

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
