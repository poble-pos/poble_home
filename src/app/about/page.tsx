import { Compass, HeartHandshake, MapPin, Zap } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { PageCTA } from "@/components/site/PageCTA";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";

function Story() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Built beside
              <br />
              the counter.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-black/55 lg:col-span-7">
            <p>
              ECNESOFT is an Australian software company with one obsession:
              the moment a customer reaches the counter. We watched venues
              wrestle with bloated, expensive POS systems built for boardrooms
              rather than baristas — and decided hospitality deserved better.
            </p>
            <p>
              So we built Poble side by side with the cafes, restaurants and
              bars that use it. Every screen has been shaped by real service:
              the morning rush, the split bill, the docket that can&apos;t go
              missing. If a feature slows the counter down, it doesn&apos;t
              ship.
            </p>
            <p>
              Today Poble runs venues across Australia — from Korean BBQ in
              Perth to play cafes in Sydney — backed by a local team that picks
              up the phone seven days a week.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="border-y border-black/10 bg-[#F1EDE5]">
      <Container className="py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-xl shadow-black/5 md:p-14">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1EDE5] text-[#B9855B]">
              <Zap className="h-5 w-5" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B735C]">
              Mission
            </p>
            <h3 className="mt-3 text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
              Remove every second of friction between a venue and its
              customers.
            </h3>
            <p className="mt-4 leading-relaxed text-black/55">
              Technology should disappear into good service. We build tools
              that staff learn in a shift and owners trust with their busiest
              days.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#191715] p-10 text-white shadow-xl shadow-black/5 md:p-14">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#D5A06F]">
              <Compass className="h-5 w-5" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#D5A06F]">
              Vision
            </p>
            <h3 className="mt-3 text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
              Every Australian venue running on software that feels made for
              it.
            </h3>
            <p className="mt-4 leading-relaxed text-white/65">
              Because it is. Local payments, local support, local
              understanding of how Aussies eat, drink and queue.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyPoble() {
  const reasons = [
    {
      title: "POS systems grew complicated",
      body: "Legacy systems stacked features until the counter became a cockpit. Training took weeks, and mistakes took minutes off every order.",
    },
    {
      title: "Hospitality can't wait",
      body: "A queue doesn't pause while software loads. Poble exists because speed at the counter is the difference between a good shift and a lost customer.",
    },
    {
      title: "Owners deserve clarity",
      body: "One simple plan, live numbers from anywhere, and an end-of-day that reconciles itself. No decoder ring required.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Why Poble exists</Eyebrow>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Because the counter
            <br />
            deserved better.
          </h2>
        </div>

        <ul className="mt-14 space-y-10 lg:max-w-3xl">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex gap-6">
              <div className="shrink-0 text-2xl tabular-nums text-black/35">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 leading-relaxed text-black/55">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function AustralianFocus() {
  const commitments = [
    {
      icon: MapPin,
      title: "Local by design",
      body: "GST, surcharging, Tyro and Linkly EFTPOS — the Australian details are built in, not bolted on.",
    },
    {
      icon: HeartHandshake,
      title: "Support that answers",
      body: "Our team is here in Australia, seven days a week, and knows your venue by name — not by ticket number.",
    },
    {
      icon: Zap,
      title: "Made for the rush",
      body: "Flat whites at 8am, parmas at 7pm. Poble is tuned for the rhythms of Australian service.",
    },
  ];

  return (
    <section className="border-y border-black/10 bg-[#F1EDE5]">
      <Container className="py-24 md:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>Australian hospitality</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
              For Aussie venues, full stop.
            </h2>
            <p className="mt-5 text-lg text-black/55">
              We don&apos;t adapt overseas software for Australia. We build for
              Australian hospitality first — and only.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="flex gap-6 rounded-3xl border border-black/10 bg-white p-8 shadow-xl shadow-black/5"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1EDE5] text-[#B9855B]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About ECNESOFT"
        title={
          <>
            The people behind
            <br />
            <span className="text-black/45">the counter.</span>
          </>
        }
        description="ECNESOFT builds Poble — the lightweight POS made in Australia, for Australian hospitality."
      />

      <Story />
      <MissionVision />
      <WhyPoble />
      <AustralianFocus />

      <div className="pt-24 md:pt-32">
        <PageCTA
          title="Run your venue with us."
          description="Join the Australian venues who trust Poble at their counter every day."
        />
      </div>
    </PageShell>
  );
}
