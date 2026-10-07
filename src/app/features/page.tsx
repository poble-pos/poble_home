import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Poble POS, Staff POS, Kitchen Display System, Dual Screen, Self Ordering Kiosk, Table Ordering and Membership CRM — one connected system for your whole venue.",
};

const PRODUCTS = [
  {
    slug: "pos",
    kicker: "Point of sale",
    name: "Poble POS",
    body: "Orders, payments and end-of-day reports on one uncluttered screen.",
    image: { src: "/images/pos/Poble%20POS.png", alt: "Poble POS on screen", width: 2960, height: 2290 },
  },
  {
    slug: "staff-pos",
    kicker: "Handheld",
    name: "Staff POS",
    body: "Take orders at the table and send them straight to the kitchen.",
    image: { src: "/images/pos/Staff%20POS.png", alt: "Poble Staff POS on screen", width: 2960, height: 2290 },
  },
  {
    slug: "kds",
    kicker: "Kitchen",
    name: "Kitchen Display",
    body: "Every order in one queue, colour-coded by waiting time.",
    image: { src: "/images/pos/KDS.png", alt: "Kitchen Display on screen", width: 2960, height: 2290 },
  },
  {
    slug: "dual-screen",
    kicker: "Customer display",
    name: "Dual Screen",
    body: "Customers see every item as it is rung up.",
    image: { src: "/images/pos/Dual%20Screen.png", alt: "Dual Screen on screen", width: 2960, height: 2290 },
  },
  {
    slug: "kiosk",
    kicker: "Self service",
    name: "Self Ordering Kiosk",
    body: "Let guests order for themselves and explore suggested extras.",
    image: { src: "/images/pos/Kiosk.png", alt: "Self Ordering Kiosk on screen", width: 2290, height: 2960 },
  },
  {
    slug: "table-ordering",
    kicker: "Table ordering",
    name: "Table Ordering",
    body: "Guests browse the menu and place orders at their table.",
    image: { src: "/images/pos/Table%20Order.png", alt: "Table Ordering on screen", width: 2960, height: 2290 },
  },
  {
    slug: "crm",
    kicker: "Loyalty",
    name: "Membership CRM",
    body: "Points, vouchers, online orders and the waitlist in one profile.",
    image: { src: "/images/pos/CRM.png", alt: "Membership CRM on screen", width: 1857, height: 3096 },
  },
];

/**
 * Product overview from the approved export (features.html). Each product links to
 * its detail page under /features/[product].
 */
export default function FeaturesPage() {
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">Product</p>
          <h1 className="display rv" id="ph">One system. Every corner of your venue.</h1>
          <p className="lede rv">Seven products that behave like one.</p>
        </section>

        <section className="wrap blocks">
          {PRODUCTS.map((product, index) => (
            <Link key={product.slug} className={index % 2 === 1 ? "blk flip" : "blk"} href={`/features/${product.slug}`}>
              <div className="blk-media rv contain">
                <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div className="blk-copy">
                <p className="kicker rv">{product.kicker}</p>
                <h2 className="h3 rv">{product.name}</h2>
                <p className="rv">{product.body}</p>
                <span className="link rv">
                  <span>Explore</span>
                  <svg aria-hidden="true"><use href="#arrow-r" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="yellow-sec pad" aria-labelledby="cta-h">
          <div className="wrap cta-in">
            <h2 className="display-xl rv" id="cta-h">One system. Your choice of tools.</h2>
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
