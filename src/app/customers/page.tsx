import { Container } from "@/components/site/Container";
import { PageCTA } from "@/components/site/PageCTA";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "How Australian venues like Woojeong, Kidsday and Wind & Flour run faster, calmer service on Poble.",
};

interface CaseStudy {
  id: string;
  name: string;
  location: string;
  industry: string;
  logo?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  products: string[];
  quote: string;
  attribution: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "woojeong",
    name: "Woojeong",
    location: "Perth",
    industry: "Korean restaurant",
    logo: "/images/customer/Woojeong.jpg",
    overview:
      "Woojeong is one of Perth's busiest Korean restaurants — a full-table-service venue where dinner rush means every table turning, orders flying to a hot kitchen, and no room for error.",
    challenge:
      "Table service was slowing down under the old system. Orders were written by hand, walked to the kitchen, and re-keyed at the counter — and by close, dockets and payments rarely matched on the first count.",
    solution:
      "Woojeong moved to Poble POS with visual floor plans and the Kitchen Display System. Orders now go from the table straight to the pass, and every terminal stays in sync through the whole dinner rush.",
    results: [
      "Simplified table service from the first shift",
      "Orders reach the kitchen the moment they're taken",
      "End-of-day reconciliation done in seconds",
    ],
    products: ["Poble POS", "Kitchen Display", "Table Ordering"],
    quote:
      "Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.",
    attribution: "Min-ji Park, Woojeong — Perth",
  },
  {
    id: "kidsday",
    name: "Kidsday",
    location: "Sydney",
    industry: "Play cafe",
    logo: "/images/customer/Kidsday.png",
    overview:
      "Kidsday is a Sydney play cafe with an unusual workload: one counter sells entry tickets while another runs a full cafe. Weekends bring queues of families who won't wait twice.",
    challenge:
      "Two terminals doing two different jobs meant double the chances of things drifting apart — ticket sales on one side, coffees and meals on the other, and a single kitchen behind both.",
    solution:
      "Kidsday runs two Poble terminals synced in real time. Ticketing and cafe orders flow into one system, one kitchen queue, and one end-of-day — no matter which counter took the sale.",
    results: [
      "Two terminals, one always-in-sync system",
      "Ticketing and cafe volume handled with ease",
      "One combined view of the whole day's trade",
    ],
    products: ["Poble POS", "Dual Screen", "Kitchen Display"],
    quote:
      "We run two terminals for ticketing and café orders. The sync is instant, and the system handles volume with ease.",
    attribution: "Sarah Lee, Kidsday — Sydney",
  },
  {
    id: "wind-and-flour",
    name: "Wind & Flour",
    location: "Sydney",
    industry: "Bakery & cafe",
    overview:
      "Wind & Flour is a Sydney bakery-cafe where the morning window decides the day. Pastries sell out by lunch, and the counter has to keep pace with a line that starts before the doors open.",
    challenge:
      "A fast-moving menu was the problem: items sell out hourly, and the old POS needed a manager in the back office to change anything. The counter was selling pastries that were already gone.",
    solution:
      "With Poble, the team marks items sold-out right at the counter and the menu updates on every screen instantly. High-speed order flow keeps the morning line moving without a second terminal.",
    results: [
      "Sold-out items updated from the counter, instantly",
      "Morning queue moves without a dedicated order-taker",
      "New staff taking orders on their first shift",
    ],
    products: ["Poble POS", "Self Ordering Kiosk"],
    quote:
      "Our menu changes by the hour. Being able to update it from the counter — mid-rush — changed our mornings completely.",
    attribution: "The team at Wind & Flour — Sydney",
  },
];

function CaseStudyMark({ study }: { study: CaseStudy }) {
  if (study.logo) {
    return (
      <Image
        src={study.logo}
        alt={`${study.name} logo`}
        width={112}
        height={112}
        className="h-32 w-72 rounded-2xl border border-black/10 bg-white object-contain"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white text-lg font-medium text-[#8B735C]"
    >
      {study.name
        .split("&")
        .map((part) => part.trim()[0])
        .join("&")}
    </div>
  );
}

function CaseStudySection({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const alt = index % 2 === 1;

  return (
    <section
      id={study.id}
      className={`scroll-mt-20 ${
        alt ? "border-y border-black/10 bg-[#F1EDE5]" : ""
      }`}
    >
      <Container className="py-24 md:py-32">
        {/* Venue header */}
        <div className="flex flex-wrap items-center gap-5">
          {/* <CaseStudyMark study={study} /> */}
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              {study.name}
            </h2>
            <p className="mt-1 text-sm text-black/45">
              {study.industry} · {study.location}
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative */}
          <div className="space-y-10 lg:col-span-7">
            {[
              ["Overview", study.overview],
              ["The challenge", study.challenge],
              ["The solution", study.solution],
            ].map(([label, body]) => (
              <div key={label}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B735C]">
                  {label}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-black/70">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Results rail */}
          <div className="lg:col-span-5">
            <div
              className={`sticky top-24 rounded-3xl border border-black/10 p-8 shadow-xl shadow-black/5 md:p-10 ${
                alt ? "bg-white" : "bg-[#F1EDE5]"
              }`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                Results
              </h3>
              <ul className="mt-5 space-y-4">
                {study.results.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        alt ? "bg-[#F1EDE5]" : "bg-white"
                      }`}
                    >
                      <Check className="h-3 w-3 text-[#B9855B]" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                Running on
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.products.map((p) => (
                  <span
                    key={p}
                    className={`rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 ${
                      alt ? "bg-[#F9F8F3]" : "bg-white"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Pull quote */}
        <figure className="mt-16 border-l-2 border-[#B9855B] pl-6 md:pl-10">
          <blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm text-black/45">
            {study.attribution}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

export default function CustomersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customers"
        title={
          <>
            Real venues.
            <br />
            <span className="text-black/45">Real service.</span>
          </>
        }
        description="From Perth to Sydney, hospitality teams run their busiest days on Poble. Here's how three of them made the switch."
      >
        <nav
          aria-label="Case studies on this page"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {CASE_STUDIES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-black/70 transition hover:bg-white hover:text-black"
            >
              {s.name} · {s.location}
            </a>
          ))}
        </nav>
      </PageHero>

      {CASE_STUDIES.map((s, i) => (
        <CaseStudySection key={s.id} study={s} index={i} />
      ))}

      <div className="pt-24 md:pt-32">
        <PageCTA
          title="Your venue could be next."
          description="Join Woojeong, Kidsday, Wind & Flour and hundreds of other Australian venues running faster, calmer service on Poble."
        />
      </div>
    </PageShell>
  );
}
