"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  CreditCard,
  Gauge,
  LayoutGrid,
  Menu,
  RefreshCw,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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

      case "ContactSection":
      case "CTASection":
        return <CTA key={section.id} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#111111] font-sans tracking-tight">
      <LandingNav />
      <main className="animate-in fade-in duration-700">
        {visibleSections.map(renderSection)}
      </main>
      <LandingFooter />
    </div>
  );
}

function Container({ children, className = "" }: any) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: any) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B735C]">
      {children}
    </p>
  );
}

function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Product" },
    { href: "#why", label: "Why Poble" },
    { href: "#customers", label: "Customers" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-[#F9F8F3]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-2 w-2 rounded-full bg-[#B9855B]" />
          poble
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/55 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://backoffice.poble.com.au/"
            className="text-sm text-black/55 hover:text-black"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            Start free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/10 bg-[#F9F8F3]/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-black/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white"
            >
              Start free
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      data-title="Poble"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />

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

        <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-black/10 bg-white p-4 shadow-2xl shadow-black/10 md:mt-20">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#191715] p-6 text-left md:p-10">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl bg-[#F9F8F3] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">Poble POS</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Coffee",
                    "Brunch",
                    "Lunch",
                    "Drinks",
                    "Bakery",
                    "Specials",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/10 bg-white p-4 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 text-white">
                <p className="text-sm text-white/60">Today</p>
                <p className="mt-2 text-4xl font-semibold">$4,280</p>
                <div className="mt-6 space-y-3">
                  {["Dine-in", "Takeaway", "Online"].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-white/70">{item}</span>
                      <span className="text-sm font-medium">
                        {[62, 28, 10][i]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  const stats = [
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "24/7", label: "Local Aussie support" },
    { value: "500+", label: "Venues on Poble" },
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

          <div className="rounded-3xl border border-black/10 bg-[#191715] p-8 text-white md:p-12">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-white/55">Kitchen Display</p>
              <div className="mt-5 space-y-3">
                {[
                  "Table 04 · 3 items",
                  "Takeaway · 2 items",
                  "Online · 5 items",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-4 text-sm font-medium text-black"
                  >
                    {item}
                  </div>
                ))}
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
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f, i) => {
              const open = openIdx === i;

              return (
                <button
                  key={f.q}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full py-6 text-left"
                  aria-expanded={open}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-lg font-medium tracking-tight">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-black/45 transition-transform duration-300 ${
                        open ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl leading-relaxed text-black/55">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  const bullets = [
    "No lock-in contracts",
    "No hidden fees",
    "Local support, 7 days",
  ];

  return (
    <section
      id="cta"
      data-title="Get Started | Poble"
      className="pb-24 md:pb-32"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#111111] p-10 text-center text-white md:p-20">
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Ready to clear the counter?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">
              Join the growing network of Australian venues who have swapped
              complex, slow systems for the speed of Poble.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://backoffice.poble.com.au/"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F9F8F3] px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                Get started free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:1300966963"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Talk to sales
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/55">
              {bullets.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#D5A06F]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#F1EDE5]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="h-2 w-2 rounded-full bg-[#B9855B]" />
              poble
            </div>
            <p className="mt-4 max-w-xs text-sm text-black/55">
              The lightweight POS built for Australian hospitality. Made in
              Australia.
            </p>
            <div className="mt-6 space-y-1 text-sm text-black/55">
              <a href="tel:1300966963" className="block hover:text-black">
                1300 966 963
              </a>
              <a
                href="mailto:sales@poble.com.au"
                className="block hover:text-black"
              >
                sales@poble.com.au
              </a>
            </div>
          </div>

          {[
            ["Product", "Features", "Integrations", "Pricing"],
            ["Company", "About", "Customers", "Contact"],
            ["Support", "Help centre", "Onboarding", "Privacy"],
          ].map(([title, ...links]) => (
            <div key={title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.14em] text-black/45">
                {title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-black/70 hover:text-black">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/45">
          <div>
            © {new Date().getFullYear()} Poble. Management solution by ECNESOFT.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
