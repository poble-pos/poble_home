"use client";

import {
  ArrowRight,
  Cloud,
  CreditCard,
  Gauge,
  LayoutGrid,
  RefreshCw,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useMemo } from "react";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { FAQList } from "@/components/site/FAQList";
import Image from "next/image";
import { PageCTA } from "@/components/site/PageCTA";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { useAdmin } from "@/context/AdminContext";

export default function LandingPage() {
  const { siteContent } = useAdmin();

  const visibleSections = useMemo(() => {
    const sections = siteContent?.sections ?? [];

    if (!sections.length) {
      return [
        { id: "hero", type: "Hero", visible: true, order: 1 },
        { id: "pain", type: "PainPoints", visible: true, order: 2 },
        {
          id: "features",
          type: "InteractiveFeatures",
          visible: true,
          order: 3,
        },
        { id: "testimonials", type: "Testimonials", visible: true, order: 4 },
        { id: "faq", type: "FAQ", visible: true, order: 5 },
        { id: "cta", type: "CTASection", visible: true, order: 6 },
      ];
    }

    return sections
      .filter((s: any) => s.visible)
      .sort((a: any, b: any) => a.order - b.order);
  }, [siteContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute("data-title");
            if (title) document.title = title;
          }
        });
      },
      { threshold: 0.3 },
    );

    document
      .querySelectorAll("section[data-title]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSections]);

  const renderSection = (section: any) => {
    switch (section.type) {
      case "Hero":
        return <Hero key={section.id} />;

      case "PainPoints":
        return (
          <section key={section.id} data-title="Why Poble? | Poble">
            <Trust />
            <Why />
          </section>
        );

      case "InteractiveFeatures":
        return (
          <section key={section.id} data-title="Features | Poble">
            <Features />
            <Showcase />
          </section>
        );

      case "Testimonials":
        return <Testimonials key={section.id} />;

      case "FAQ":
        return <FAQ key={section.id} />;

      // case "ContactSection":

      case "CTASection":
        return <PageCTA key={section.id} dataTitle="Get Started | Poble" />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#111111] font-sans tracking-tight">
      <SiteNav />
      <main className="animate-in fade-in duration-700">
        {visibleSections.map(renderSection)}
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section
      data-title="Poble"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />

      <Image
        src="/images/object/Futuristic Chef Robot.png"
        alt="Poble chef robot mascot"
        width={1884}
        height={2400}
        className="pointer-events-none absolute -bottom-6 right-4 hidden w-44 md:block lg:right-16 lg:w-56"
      />

      <Container className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs text-black/55 backdrop-blur">
          <Sparkles className="h-3 w-3 text-[#B9855B]" />
          Made for Australian hospitality
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl">
          Minus the clutter.
          <br />
          <span className="text-black/45">Plus the speed.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/55 md:text-lg">
          The lightweight iPad POS built for Aussie venues. Fast to learn, easy
          to run — even during the rush.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
          >
            See how it works
          </a>
        </div>

        <p className="mt-4 text-xs text-black/45">
          No lock-in contracts · Compatible with iPad 7th Gen and later
        </p>
      </Container>
    </section>
  );
}

function Trust() {
  const stats = [
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "24/7", label: "Local Aussie support" },
    { value: "10+", label: "Venues on Poble" },
    { value: "< 1 day", label: "Average go-live" },
  ];

  return (
    <section className="border-y border-black/10 bg-[#F1EDE5]">
      <Container className="py-14 md:py-16">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-black/45">
          Trusted by hundreds of Australian venues
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-medium tracking-tight md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-black/50 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const features = [
  {
    icon: Cloud,
    title: "Effortless cloud control",
    body: "Manage menus, prices and staff permissions from the POS. Every change syncs across terminals in real time.",
  },
  {
    icon: Gauge,
    title: "High-speed order flow",
    body: "Built for peak-hour service. Takeaway, dine-in and phone orders move without slowing your team.",
  },
  {
    icon: CreditCard,
    title: "Aussie payments, Tyro ready",
    body: "Native EFTPOS integration with Tyro and Linkly. Amounts go straight to the terminal — no double handling.",
  },
  {
    icon: RefreshCw,
    title: "Instant menu, live sync",
    body: "Edit prices or mark items sold-out from the counter. Updates land on every screen instantly.",
  },
  {
    icon: LayoutGrid,
    title: "Table & kitchen display",
    body: "Visual floor plans and a clear KDS keep the pass calm. Fewer missed tickets, faster service.",
  },
  {
    icon: Users,
    title: "Loyalty & online ordering",
    body: "Reward regulars with points and vouchers. Online orders flow straight into the POS.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Product</Eyebrow>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Smart tools for
            <br />
            your venue.
            <Image
              src="/images/object/Cosmic Arrow Object.png"
              alt=""
              width={2400}
              height={2332}
              className="ml-3 inline-block h-[0.95em] w-auto align-middle"
            />
          </h2>
          <p className="mt-5 max-w-lg text-lg text-black/55">
            A seamless bridge between your counter, your kitchen, and your back
            office.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-black/10 bg-black/10 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-[#F9F8F3] p-8 transition hover:bg-[#F1EDE5] md:p-10"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black/70 group-hover:text-[#B9855B]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Why() {
  const points = [
    {
      title: "The balancing act",
      body: "End your day in seconds. Automated reconciliation ensures dockets and payments always match.",
    },
    {
      title: "Ready for the rush",
      body: "Never miss a docket. Poble stays responsive even when the queue is out the door.",
    },
    {
      title: "Zero training",
      body: "Staff ready on day one. An interface so intuitive that new team members hit the ground running.",
    },
  ];

  return (
    <section id="why" className="border-y border-black/10 bg-[#F1EDE5]">
      <Container className="py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>Why Poble</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Make every second count.
            </h2>
            <p className="mt-5 text-lg text-black/55">
              Built for the reality of your day. We remove the friction from
              your counter, so your team stays focused on every customer.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-10">
              {points.map((p, i) => (
                <li key={p.title} className="flex gap-6">
                  <div className="shrink-0 text-2xl tabular-nums text-black/35">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-black/55">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <div className="hidden items-center justify-center lg:flex">
            <Image
              src="/images/object/Futuristic Barista Robot.png"
              alt="Poble barista robot mascot"
              width={1458}
              height={2400}
              className="pointer-events-none w-64 xl:w-72"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-10 md:p-14">
            <Eyebrow>Peak-hour performance</Eyebrow>
            <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
              Built to stay calm when the queue is not.
            </h3>
            <p className="mt-4 max-w-md text-black/55">
              A high-performance engine, offline resilience, and instant sync
              across every terminal in your venue.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-medium">Ultra-fast</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-black/45">
                  Touch response
                </div>
              </div>
              <div>
                <div className="text-3xl font-medium">99.9%</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-black/45">
                  Sync reliability
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "In the Sydney coffee scene, speed is everything. Poble lets us power through the morning rush without missing a beat.",
    name: "Chris Kim",
    venue: "The Little Parry — Sydney",
  },
  {
    quote:
      "Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.",
    name: "Min-ji Park",
    venue: "Woojeong — Perth",
  },
  {
    quote:
      "We run two terminals for ticketing and café orders. The sync is instant, and the system handles volume with ease.",
    name: "Sarah Lee",
    venue: "Kidsday — Sydney",
  },
];

function Testimonials() {
  return (
    <section
      id="customers"
      data-title="Reviews | Poble"
      className="border-y border-black/10 bg-[#F1EDE5]"
    >
      <Container className="py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Loved by locals</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Loved by Aussie venues.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-black/55">
            Join hundreds of cafes, bars and restaurants that have switched to
            Poble for faster, simpler service.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-10"
            >
              <blockquote className="text-lg leading-snug tracking-[-0.015em] md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="mt-1 text-xs text-black/45">{t.venue}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqs = [
  {
    q: "I'm already using a POS. Is switching complicated?",
    a: "We make it seamless. Our support team guides you through the transition so you're ready to trade without stress.",
  },
  {
    q: "What hardware do I need?",
    a: "Any standard iPad 7th Gen or later. We can also help with receipt printers and payment terminals.",
  },
  {
    q: "How long does it take staff to learn the system?",
    a: "Because Poble feels like a modern app, staff pick it up intuitively — often on their first shift.",
  },
  {
    q: "What happens if my internet drops?",
    a: "You keep taking orders. Poble handles local interruptions and syncs automatically once you're back online.",
  },
];

function FAQ() {
  return (
    <section id="faq" data-title="FAQ | Poble" className="py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Answers</Eyebrow>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Frequently
            <br />
            asked.
          </h2>
          <p className="mt-5 text-black/55">
            Everything you need to know before making the switch.
          </p>
        </div>

        <div className="lg:col-span-8">
          <FAQList items={faqs} />
        </div>
      </Container>
    </section>
  );
}
