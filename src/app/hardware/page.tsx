"use client";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { PageCTA } from "@/components/site/PageCTA";
import { PageShell } from "@/components/site/PageShell";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { ArrowRight, Check, Plus } from "lucide-react";
import Image from "next/image";

const CATEGORIES = [
  {
    id: "stand",
    label: "iPad Stands",
    description: "Premium mounts for your point of sale",
  },
  {
    id: "printer",
    label: "Printers",
    description: "Reliable thermal printing for dockets and receipts",
  },
  {
    id: "accessory",
    label: "Accessories",
    description: "Essential add-ons for a complete setup",
  },
] as const;

const SUPPORT_ITEMS = [
  {
    title: "Poble verified",
    body: "Every item is selected for compatibility with Poble POS and common hospitality workflows.",
  },
  {
    title: "Venue-ready setup",
    body: "Choose the essentials for counter service, dockets, receipts, cash handling and table ordering.",
  },
  {
    title: "Local advice",
    body: "Need help matching hardware to your venue? Our team can recommend a setup before you buy.",
  },
];

export default function HardwarePage() {
  const { addToCart } = useCart();

  return (
    <PageShell>
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />

        <Container className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Hardware</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl">
              POS hardware.
              <br />
              <span className="text-black/45">Ready for service.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/55 md:text-lg">
              Curated stands, printers and accessories verified for Poble POS.
              Build a counter setup that works from day one.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#stand"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Browse hardware
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:sales@poble.com.au"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                Ask about setup
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/55 p-5 shadow-xl shadow-black/5 backdrop-blur lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#F1EDE5]">
              <Image
                src="/images/hardware/geminidual.png"
                alt="Gemini Dual Stand for Poble POS"
                width={720}
                height={540}
                priority
                className="h-full w-full object-contain p-8"
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="sticky top-16 z-30 border-y border-black/10 bg-[#F9F8F3]/85 backdrop-blur-xl">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="whitespace-nowrap rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm font-medium text-black/60 transition hover:bg-white hover:text-black"
            >
              {category.label}
            </a>
          ))}
        </Container>
      </div>

      <Container className="space-y-20 py-20 md:space-y-28 md:py-28">
        {CATEGORIES.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id,
          );

          if (categoryProducts.length === 0) return null;

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36"
            >
              <div className="mb-8 grid gap-3 md:grid-cols-12 md:items-end">
                <div className="md:col-span-5">
                  <Eyebrow>{category.label}</Eyebrow>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                    {category.label}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-black/55 md:col-span-7 md:justify-self-end md:text-base">
                  {category.description}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE5]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={450}
                        className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                            Out of stock
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium tracking-tight">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-black/55">
                            {product.description}
                          </p>
                        </div>
                        <span className="shrink-0 text-lg font-medium tracking-tight">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      {product.features && (
                        <ul className="mt-5 space-y-2">
                          {product.features.slice(0, 3).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-xs text-black/55"
                            >
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F9F8F3]">
                                <Check className="h-3 w-3 text-[#B9855B]" />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-6">
                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium transition ${
                            product.inStock
                              ? "bg-[#111111] text-white hover:bg-black"
                              : "cursor-not-allowed bg-black/5 text-black/35"
                          }`}
                        >
                          Add to cart
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </Container>

      <section className="border-t border-black/10 bg-[#F1EDE5]">
        <Container className="grid gap-10 py-20 md:grid-cols-3 md:py-24">
          {SUPPORT_ITEMS.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/55">
                {item.body}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <div className="pt-24 md:pt-32">
        <PageCTA
          title="Need a full venue setup?"
          description="Tell us how your counter, kitchen and floor service work. We will help you choose the hardware that fits."
          primaryLabel="Contact sales"
          primaryHref="mailto:sales@poble.com.au"
          secondaryLabel="Call 1300 966 963"
          secondaryHref="tel:1300966963"
        />
      </div>
    </PageShell>
  );
}
