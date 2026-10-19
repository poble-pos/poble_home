"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ContactButton } from "@/components/site/ContactButton";
import { useI18n } from "@/i18n/I18nProvider";

import { OWL_LID_CLIP_PATH } from "./owl-paths";

/**
 * Hero from the approved export. The product film plays once while the hero is
 * visible and reduced motion is off. Reduced motion, a hidden tab or an offscreen
 * hero keep the settled composition. Copy and actions are always present.
 */
export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { m } = useI18n();
  const t = m.home.hero;
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(reduce.matches);
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const away = !inView || hidden;

  return (
    <div className="hero-banners">
      <div className="banner-slides">
        <section
          ref={heroRef}
          className={`brand-hero banner-panel is-active${away ? " is-away" : ""}`}
          id="product-banner"
          aria-labelledby="hero-title"
          data-motion={reducedMotion ? "paused" : "playing"}
        >
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span className="hero-line">{t.line1}</span>{" "}
                <span className="hero-line">{t.line2}</span>
              </h1>
              <p className="hero-description">{t.description}</p>
              <div className="hero-buttons">
                <ContactButton className="btn">{m.common.contactUs}</ContactButton>
                <a className="link" href="#features">
                  {t.explore}
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div
                className="product-film"
                role="img"
                aria-label={t.filmLabel}
              >
                <div className="film-components" aria-hidden="true">
                  <div className="film-photo film-piece">
                    <Image src="/images/home/photo-1.webp" alt={t.photoAlt} width={970} height={941} sizes="26vw" />
                  </div>
                  <div className="film-pos film-piece">
                    <Image
                      src="/images/home/asset-5.webp"
                      alt={t.posAlt}
                      width={1400}
                      height={1083}
                      priority
                      sizes="(min-width: 1024px) 330px, 70vw"
                    />
                  </div>
                  <div className="film-order film-piece">
                    <Image src="/images/home/asset-9.webp" alt={t.orderAlt} width={1083} height={1400} sizes="24vw" />
                  </div>
                  <div className="film-kitchen film-piece">
                    <Image src="/images/home/asset-7.webp" alt={t.kitchenAlt} width={1400} height={1083} sizes="49vw" />
                  </div>
                </div>

                <div className="brand-stage" aria-hidden="true">
                  <div className="intro-disc">
                    <div className="intro-face">
                      <svg viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
                        <defs>
                          <clipPath id="introEyeClip">
                            <circle cx="418" cy="588" r="138" />
                          </clipPath>
                          <clipPath id="introLidClip">
                            <path d={OWL_LID_CLIP_PATH} transform="translate(418 588) scale(.9) translate(-418 -588)" />
                          </clipPath>
                        </defs>
                        <image href="/logo-transparent.svg" width={1024} height={1024} style={{ filter: "brightness(0)" }} />
                        <g clipPath="url(#introEyeClip)">
                          <path d={OWL_LID_CLIP_PATH} fill="#FBBD00" />
                          <g id="introFeathers">
                            <image href="/logo-transparent.svg" width={1024} height={1024} style={{ filter: "brightness(0)" }} />
                          </g>
                          <g id="introEye">
                            <circle id="introPupil" cx="418" cy="588" r="62" fill="#111" />
                            <g clipPath="url(#introLidClip)">
                              <path id="introLid" d="M270,430H566V720Q418,764 270,720Z" fill="#111" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="intro-wordmark" aria-label="Poble">
                    <span>P</span>
                    <span>o</span>
                    <span>b</span>
                    <span>l</span>
                    <span>e</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
