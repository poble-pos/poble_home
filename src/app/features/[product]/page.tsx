import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import { EXPORT_PRODUCTS } from "@/data/export-products";

interface Props {
  params: Promise<{ product: string }>;
}

export function generateStaticParams() {
  return EXPORT_PRODUCTS.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const product = EXPORT_PRODUCTS.find((p) => p.slug === slug);
  return product ? { title: product.name, description: product.lede } : {};
}

/**
 * Product detail page from the approved export (product-*.html). Each product
 * links to the next in the export's order, wrapping at the end.
 */
export default async function ProductPage({ params }: Props) {
  const { product: slug } = await params;
  const index = EXPORT_PRODUCTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const product = EXPORT_PRODUCTS[index];
  const next = EXPORT_PRODUCTS[(index + 1) % EXPORT_PRODUCTS.length];

  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">{product.kicker}</p>
          <h1 className="display rv" id="ph">{product.title}</h1>
          <p className="lede rv">{product.lede}</p>
          <div className="phero-actions rv">
            <Link className="btn" href="/pricing">
              View pricing <svg aria-hidden="true"><use href="#arrow" /></svg>
            </Link>
          </div>
        </section>

        <section className="wrap" aria-label={product.name}>
          <div className="shot rv">
            <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="(min-width: 1024px) 60vw, 100vw" priority />
          </div>
        </section>

        <section className="pad wrap">
          <div className="trio">
            {product.points.map((point) => (
              <div key={point.title} className="tcard rv">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="wrap pager rule" aria-label="Product">
          <Link className="link rv" href="/features">
            <svg aria-hidden="true"><use href="#arrow-l" /></svg>
            <span>All products</span>
          </Link>
          <Link className="link rv" href={`/features/${next.slug}`}>
            <span>{next.name}</span>
            <svg aria-hidden="true"><use href="#arrow-r" /></svg>
          </Link>
        </nav>

        <section className="yellow-sec pad" aria-labelledby="cta-h">
          <div className="wrap cta-in">
            <h2 className="display-xl rv" id="cta-h">Try it on your counter.</h2>
            <div className="cta-actions rv">
              <Link className="btn" href="/pricing">
                View pricing <svg aria-hidden="true"><use href="#arrow" /></svg>
              </Link>
              <a className="btn btn-2" href="tel:1300966963">Talk to sales</a>
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
