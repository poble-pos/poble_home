import { describe, expect, it } from "vitest";

import { About } from "@/components/home/About";
import { Customers } from "@/components/home/Customers";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeHero } from "@/components/home/HomeHero";
import { PartnershipButton } from "@/components/home/PartnershipButton";
import { Payments } from "@/components/home/Payments";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { ProductFeatures } from "@/components/home/ProductFeatures";
import { UberEats } from "@/components/home/UberEats";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { LOCALES, type Locale } from "@/i18n/config";
import { DICTIONARIES } from "@/i18n/messages";
import { en } from "@/i18n/messages/en";

import { renderWithLocale } from "./render";

/** Every text a visitor can read or hear: text nodes plus labels, alt text, placeholders and titles. */
function readableText(root: HTMLElement): string {
  const parts = [root.textContent ?? ""];
  root.querySelectorAll("[aria-label],[alt],[placeholder],[title]").forEach((el) => {
    for (const attr of ["aria-label", "alt", "placeholder", "title"]) {
      const value = el.getAttribute(attr);
      if (value) parts.push(value);
    }
  });
  // Closed <dialog> content is still part of the page and must be translated too.
  return parts.join("\n");
}

function leaves(value: unknown, prefix = ""): [string, string][] {
  if (typeof value === "string") return [[prefix, value]];
  if (Array.isArray(value)) return value.flatMap((item, index) => leaves(item, `${prefix}.${index}`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => leaves(item, prefix ? `${prefix}.${key}` : key));
  }
  return [];
}

/**
 * English texts the language translates, long enough to be unambiguous. Text the
 * translation deliberately keeps (brand names, or "Suburb" next to its
 * translation) is allowed.
 */
function englishOnlyTexts(locale: Locale): string[] {
  const translatedLeaves = leaves(DICTIONARIES[locale]);
  const translated = new Map(translatedLeaves);
  const kept = (text: string) => translatedLeaves.some(([, value]) => value.includes(text));
  return leaves(en)
    .filter(([key, text]) => text.length > 3 && translated.get(key) !== text && !text.includes("{") && !kept(text))
    .map(([, text]) => text);
}

const KEY_PATTERN = /\b(?:meta|common|nav|language|footer|products|stories|home|inquiry|partnership|pricingPage|featuresPage|productPage|customersPage|hardwarePage|enquiry)\.[a-zA-Z-]+(?:\.[\w-]+)*/;

const SECTIONS = {
  SiteNav: () => <SiteNav variant="home" />,
  SiteNavPage: () => <SiteNav variant="page" />,
  SiteFooter: () => <SiteFooter />,
  HomeHero: () => <HomeHero />,
  ProductFeatures: () => <ProductFeatures />,
  Payments: () => <Payments />,
  PartnershipButton: () => <PartnershipButton />,
  UberEats: () => <UberEats />,
  PricingCalculator: () => <PricingCalculator />,
  Customers: () => <Customers />,
  About: () => <About />,
  HomeContact: () => <HomeContact />,
  EnquiryForm: () => <EnquiryForm />,
};

describe.each(LOCALES.filter((locale) => locale !== "en"))("%s translation coverage", (locale) => {
  const forbidden = englishOnlyTexts(locale);

  it.each(Object.keys(SECTIONS) as (keyof typeof SECTIONS)[])("%s shows no untranslated English or raw keys", (name) => {
    const Section = SECTIONS[name];
    const { container } = renderWithLocale(<Section />, locale);
    const text = readableText(container);
    expect(text.trim().length).toBeGreaterThan(0);
    expect(forbidden.filter((english) => text.includes(english))).toEqual([]);
    expect(text).not.toMatch(KEY_PATTERN);
  });
});

describe("English rendering", () => {
  it.each(Object.keys(SECTIONS) as (keyof typeof SECTIONS)[])("%s shows no raw keys", (name) => {
    const Section = SECTIONS[name];
    const { container } = renderWithLocale(<Section />, "en");
    expect(readableText(container)).not.toMatch(KEY_PATTERN);
  });

  it("keeps the original homepage copy", () => {
    const { container } = renderWithLocale(<HomeHero />, "en");
    expect(container.textContent).toContain("A calmer counter.");
    expect(container.textContent).toContain("Bring your counter, kitchen and back office into one flow.");
  });
});
