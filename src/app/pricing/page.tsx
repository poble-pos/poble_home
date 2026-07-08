import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { FAQList } from "@/components/site/FAQList";
import { PageCTA } from "@/components/site/PageCTA";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";

const INCLUDED = [
  "Poble POS on your iPad",
  "Cloud back office & reporting",
  "Real-time menu management",
  "Kitchen Display System",
  "Table map & floor plans",
  "Tyro & Linkly EFTPOS integration",
  "Automatic updates",
  "Local Aussie support, 7 days",
];

const PRICING_FAQ = [
  {
    q: "How does the 1 month free trial work?",
    a: "You get full access to the Basic plan for a month. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.",
  },
  {
    q: "Can I use my own iPad?",
    a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.",
  },
];

function PricingCard() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center rounded-full bg-[#F1EDE5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8B735C]">
                1 month free trial
              </div>

              <h2 className="mt-6 text-2xl font-medium tracking-tight">
                Basic Plan
              </h2>
              <p className="mt-2 text-sm text-black/55">
                Everything you need to run your venue. One plan, no surprises.
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-black/45">
                  Starting from
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-6xl font-medium tracking-[-0.03em]">
                    $60
                  </span>
                  <span className="text-black/55">/month</span>
                </p>
                <p className="mt-2 text-xs text-black/45">
                  Per venue, in AUD. Month-to-month, cancel anytime.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <a
                  href="https://backoffice.poble.com.au/"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Start your free month
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:1300966963"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#F9F8F3]"
                >
                  Talk to sales
                </a>
              </div>
            </div>

            <div className="border-t border-black/10 bg-[#F9F8F3] p-8 md:border-l md:border-t-0 md:p-12">
              <p className="text-xs uppercase tracking-[0.18em] text-black/45">
                Included in every plan
              </p>
              <ul className="mt-6 space-y-3.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
                      <Check className="h-3 w-3 text-[#B9855B]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-black/10 pt-6 text-xs leading-relaxed text-black/45">
                Need printers, terminals or stands?{" "}
                <Link
                  href="/hardware"
                  className="text-black/70 underline underline-offset-2 hover:text-black"
                >
                  Browse hardware
                </Link>{" "}
                — sold separately, no markup games.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingFAQ() {
  return (
    <section className="border-y border-black/10 bg-[#F1EDE5]">
      <Container className="grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Pricing questions</Eyebrow>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Before you
            <br />
            commit.
          </h2>
          <p className="mt-5 text-black/55">
            Everything you need to know about trials, plans, and billing.
          </p>
        </div>

        <div className="lg:col-span-8">
          <FAQList items={PRICING_FAQ} />
        </div>
      </Container>
    </section>
  );
}

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            One plan.
            <br />
            <span className="text-black/45">Everything included.</span>
          </>
        }
        description="No tiers to decode, no features held hostage. Try Poble free for a month, then pay one simple monthly price."
      />

      <PricingCard />
      <PricingFAQ />

      <div className="pt-24 md:pt-32">
        <PageCTA
          title="Not sure yet? Talk it through."
          description="Our local team will walk you through a live demo and help you work out exactly what your venue needs — no pressure, no obligation."
          primaryLabel="Contact sales"
          primaryHref="mailto:sales@poble.com.au"
          secondaryLabel="Call 1300 966 963"
          secondaryHref="tel:1300966963"
        />
      </div>
    </PageShell>
  );
}
