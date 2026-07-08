import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import React from "react";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { PageCTA } from "@/components/site/PageCTA";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Poble POS, Staff POS, Kitchen Display System, Dual Screen, Self Ordering Kiosk and Table Ordering — one connected system for your whole venue.",
};

interface Product {
  id: string;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  benefits: { title: string; body: string }[];
  screenshotLabel: string;
  screenshotSrc?: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
}

const PRODUCTS: Product[] = [
  {
    id: "pos",
    eyebrow: "Point of Sale",
    name: "Poble POS",
    tagline: "The heart of your counter.",
    description:
      "A lightweight iPad POS that keeps up with your busiest service. Orders, payments and end-of-day reconciliation — all in one calm, uncluttered screen.",
    benefits: [
      {
        title: "Built for the rush",
        body: "Ultra-fast touch response and offline resilience keep orders moving, even when the queue is out the door.",
      },
      {
        title: "Aussie payments, native",
        body: "Tyro and Linkly EFTPOS integration sends amounts straight to the terminal — no double handling, no mistakes.",
      },
      {
        title: "Live menu control",
        body: "Change prices or mark items sold-out from the counter. Every terminal updates instantly.",
      },
      {
        title: "End the day in seconds",
        body: "Automated reconciliation means dockets and payments always match.",
      },
    ],
    screenshotLabel: "Poble POS screenshot",
    screenshotSrc: "/images/pos/Poble POS.png",
    screenshotWidth: 916,
    screenshotHeight: 761,
  },
  {
    id: "staff-pos",
    eyebrow: "Handheld ordering",
    name: "Poble Staff POS",
    tagline: "Take the counter to the table.",
    description:
      "A handheld companion for your floor staff. Take orders tableside and send them straight to the kitchen — no scribbled notes, no return trips.",
    benefits: [
      {
        title: "Order at the table",
        body: "Staff take orders on a phone-sized device that mirrors the main POS, so there is nothing new to learn.",
      },
      {
        title: "Straight to the kitchen",
        body: "Orders fire to the KDS and printers the moment they are confirmed, cutting minutes off every table.",
      },
      {
        title: "Fewer mistakes",
        body: "Modifiers, allergies and seat numbers captured at the source — exactly as the customer said them.",
      },
    ],
    screenshotLabel: "Staff POS screenshot",
    screenshotSrc: "/images/pos/Staff POS.png",
    screenshotWidth: 853,
    screenshotHeight: 713,
  },
  {
    id: "kds",
    eyebrow: "Kitchen Display System",
    name: "Kitchen Display",
    tagline: "A calm pass, even at capacity.",
    description:
      "Replace the printer chaos with a clear, colour-coded screen. Every docket from every channel — dine-in, takeaway and online — lands in one organised queue.",
    benefits: [
      {
        title: "Never miss a docket",
        body: "Every order arrives instantly and stays on screen until it is bumped. No curled paper, no lost tickets.",
      },
      {
        title: "Colour-coded urgency",
        body: "Tickets change colour as they age, so the kitchen always knows what to fire next.",
      },
      {
        title: "Bump and recall",
        body: "Clear finished orders with a tap — and bring them back just as easily when something changes.",
      },
    ],
    screenshotLabel: "Kitchen Display screenshot",
    screenshotSrc: "/images/pos/KDS.png",
    screenshotWidth: 2960,
    screenshotHeight: 2290,
  },
  {
    id: "dual-screen",
    eyebrow: "Customer display",
    name: "Dual Screen",
    tagline: "Transparency at the counter.",
    description:
      "A customer-facing display that shows every item as it is rung up. Fewer disputes, faster checkouts, and a premium counter presence for your brand.",
    benefits: [
      {
        title: "Live order view",
        body: "Customers see items and prices in real time, building trust with every transaction.",
      },
      {
        title: "Your brand, front and centre",
        body: "Show promotions, imagery and loyalty prompts between transactions.",
      },
      {
        title: "Smoother handover",
        body: "Totals, savings and payment status are always visible — no repeating yourself over the coffee machine.",
      },
    ],
    screenshotLabel: "Dual Screen screenshot",
    screenshotSrc: "/images/pos/Dual Screen.png",
    screenshotWidth: 2960,
    screenshotHeight: 2290,
  },
  {
    id: "kiosk",
    eyebrow: "Self service",
    name: "Self Ordering Kiosk",
    tagline: "Shorter queues. Bigger baskets.",
    description:
      "Let customers order and pay at their own pace. The kiosk absorbs the queue during peak hour and upsells consistently on every order.",
    benefits: [
      {
        title: "Beat the queue",
        body: "Customers who would have walked away order themselves — your counter staff focus on service.",
      },
      {
        title: "Consistent upsell",
        body: "Every order is offered the extras, every time. Kiosks never forget to ask.",
      },
      {
        title: "Straight into the flow",
        body: "Kiosk orders land in the same POS and KDS queue as everything else — one system, one truth.",
      },
    ],
    screenshotLabel: "Kiosk screenshot",
  },
  {
    id: "table-ordering",
    eyebrow: "QR ordering",
    name: "Table Ordering",
    tagline: "The menu is already on the table.",
    description:
      "Customers scan a QR code, browse your menu and order from their seat — no app download, no waiting to catch a waiter's eye.",
    benefits: [
      {
        title: "No app required",
        body: "A QR code opens your live menu in the browser. Ordering takes seconds.",
      },
      {
        title: "Always the live menu",
        body: "Sold-out items disappear and price changes apply instantly — the QR menu is the POS menu.",
      },
      {
        title: "More rounds, less waiting",
        body: "Reordering another round takes one tap, so tables spend more without flagging anyone down.",
      },
    ],
    screenshotLabel: "Table Ordering screenshot",
  },
];

function ProductSection({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const alt = index % 2 === 1;

  return (
    <section
      id={product.id}
      className={`scroll-mt-20 ${
        alt ? "border-y border-black/10 bg-[#F1EDE5]" : ""
      }`}
    >
      <Container className="py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className={`lg:col-span-5 ${alt ? "lg:order-2" : ""}`}>
            <Eyebrow>{product.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {product.name}.
              <br />
              <span className="text-black/45">{product.tagline}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-black/55">
              {product.description}
            </p>

            <ul className="mt-10 space-y-6">
              {product.benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span
                    className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      alt ? "bg-white" : "bg-[#F1EDE5]"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 text-[#B9855B]" />
                  </span>
                  <div>
                    <h3 className="font-medium tracking-tight">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/55">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://backoffice.poble.com.au/"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#8B735C] transition-colors hover:text-black"
            >
              Start your free trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className={`lg:col-span-7 ${alt ? "lg:order-1" : ""}`}>
            {product.screenshotSrc ? (
              <div className="flex w-full items-center justify-center">
                <Image
                  src={product.screenshotSrc}
                  alt={product.screenshotLabel}
                  width={product.screenshotWidth}
                  height={product.screenshotHeight}
                  className="h-auto w-auto max-w-full mix-blend-multiply"
                />
              </div>
            ) : (
              <MediaPlaceholder
                label={product.screenshotLabel}
                aspect="aspect-[4/3]"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Features"
        title={
          <>
            One system.
            <br />
            <span className="text-black/45">Every corner of your venue.</span>
          </>
        }
        description="From the counter to the kitchen to the table — every Poble product speaks the same language, syncs in real time, and feels instantly familiar."
      >
        <nav
          aria-label="Products on this page"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-black/70 transition hover:bg-white hover:text-black"
            >
              {p.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.id} product={p} index={i} />
      ))}

      <div className="pt-24 md:pt-32">
        <PageCTA
          title="See it all working together."
          description="Start a free trial, or talk to our local team about the right mix of products for your venue."
        />
      </div>
    </PageShell>
  );
}
