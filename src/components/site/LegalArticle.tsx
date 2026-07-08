import Link from "next/link";
import React from "react";

import { LEGAL_DOCS, type LegalSlug } from "@/data/legal";

import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { PageShell } from "./PageShell";

/** Full-page rendering of a legal document in the site design language. */
export function LegalArticle({ slug }: { slug: LegalSlug }) {
  const doc = LEGAL_DOCS[slug];
  const others = Object.values(LEGAL_DOCS).filter((d) => d.slug !== slug);

  return (
    <PageShell>
      <section className="relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              {doc.title}
            </h1>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/45">
              Last updated: {doc.updated}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-black/70">
              {doc.intro}
            </p>

            <div className="mt-12 space-y-10 border-t border-black/10 pt-12">
              {doc.sections.map((s) => (
                <section key={s.title}>
                  <h2 className="text-xl font-medium tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-black/55">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-black/10 bg-[#F1EDE5] p-8 md:p-10">
              <p className="text-sm text-black/55">
                Questions about this policy? Contact us at{" "}
                <a
                  href="mailto:info@poble.com.au"
                  className="text-[#8B735C] underline underline-offset-2 hover:text-black"
                >
                  info@poble.com.au
                </a>
                . ECNESOFT PTY LTD.
              </p>
              <p className="mt-4 text-sm text-black/55">
                See also:{" "}
                {others.map((d, i) => (
                  <React.Fragment key={d.slug}>
                    <Link
                      href={`/${d.slug}`}
                      className="text-black/70 underline underline-offset-2 hover:text-black"
                    >
                      {d.title}
                    </Link>
                    {i < others.length - 1 && " · "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </article>
        </Container>
      </section>
    </PageShell>
  );
}
