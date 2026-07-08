import React from "react";

import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />

      <Container className="text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/55 md:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
