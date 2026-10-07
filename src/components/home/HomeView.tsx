"use client";

import { useEffect, useMemo } from "react";

import { useAdmin } from "@/context/AdminContext";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import "@/styles/home.css";

import { About } from "./About";
import { Customers } from "./Customers";
import { HomeContact } from "./HomeContact";
import { HomeHero } from "./HomeHero";
import { Payments } from "./Payments";
import { PricingCalculator } from "./PricingCalculator";
import { ProductFeatures } from "./ProductFeatures";
import { UberEats } from "./UberEats";

const DEFAULT_SECTIONS = [
  { id: "hero", type: "Hero", visible: true, order: 0 },
  { id: "interactive", type: "InteractiveFeatures", visible: true, order: 1 },
  { id: "integrations", type: "Integrations", visible: true, order: 2 },
  { id: "pricing", type: "Pricing", visible: true, order: 3 },
  { id: "testimonials", type: "Testimonials", visible: true, order: 4 },
  { id: "pain-points", type: "PainPoints", visible: true, order: 5 },
  { id: "cta", type: "CTASection", visible: true, order: 7 },
];

/**
 * Homepage shell. Section order and visibility come from the admin content
 * (AdminContext). The `home-page` wrapper is rendered on the server, so home.css
 * applies on the first paint, and body/html state follows it with :has().
 */
export function HomeView() {
  const { siteContent } = useAdmin();

  const visibleSections = useMemo(() => {
    const sections = siteContent?.sections?.length ? siteContent.sections : DEFAULT_SECTIONS;
    return sections
      .filter((section) => section.visible)
      .sort((a, b) => a.order - b.order);
  }, [siteContent]);

  // In-page links move focus to their target, as in the export.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const renderSection = (section: { id: string; type: string }) => {
    switch (section.type) {
      case "Hero":
        return <HomeHero key={section.id} />;
      case "InteractiveFeatures":
        return <ProductFeatures key={section.id} />;
      case "Integrations":
        return (
          <div key={section.id}>
            <Payments />
            <UberEats />
          </div>
        );
      case "Pricing":
        return <PricingCalculator key={section.id} />;
      case "Testimonials":
        return <Customers key={section.id} />;
      case "PainPoints":
        return <About key={section.id} />;
      case "CTASection":
        return <HomeContact key={section.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="home-page">
      <SiteNav variant="home" />
      <main id="top" tabIndex={-1}>
        {visibleSections.map(renderSection)}
      </main>
      <SiteFooter />
    </div>
  );
}
