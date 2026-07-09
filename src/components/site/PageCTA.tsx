import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Container } from "./Container";

const DEFAULT_BULLETS = [
  "No lock-in contracts",
  "No hidden fees",
  "Local support, 7 days",
];

export function PageCTA({
  title = "Ready to clear the counter?",
  description = "Join the growing network of Australian venues who have swapped complex, slow systems for the speed of Poble.",
  primaryLabel = "Get started free",
  primaryHref = "https://backoffice.poble.com.au/",
  secondaryLabel = "Talk to sales",
  secondaryHref = "tel:1300966963",
  bullets = DEFAULT_BULLETS,
  dataTitle,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bullets?: string[];
  dataTitle?: string;
}) {
  return (
    <section id="cta" data-title={dataTitle} className="pb-24 md:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#111111] p-10 text-center text-white md:p-20">
          <Image
            src="/images/object/Translucent Blue Owl.png"
            alt=""
            width={400}
            height={492}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-32 w-auto opacity-80 md:h-48"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">{description}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F9F8F3] px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            </div>

            {bullets.length > 0 && (
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/55">
                {bullets.map((b) => (
                  <li key={b} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#D5A06F]" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
