import { describe, expect, it } from "vitest";

import { DEFAULT_LOCALE, LOCALES, LOCALE_NAMES, isLocale, resolveLocale } from "@/i18n/config";
import { DICTIONARIES, format, getMessages, withFallback } from "@/i18n/messages";
import { en } from "@/i18n/messages/en";

/** Every leaf path in a dictionary, with array indices, e.g. `home.pricing.faqs.0.q`. */
function leaves(value: unknown, prefix = ""): Map<string, string> {
  const out = new Map<string, string>();
  if (typeof value === "string") {
    out.set(prefix, value);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => leaves(item, prefix ? `${prefix}.${index}` : String(index)).forEach((v, k) => out.set(k, v)));
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      leaves(item, prefix ? `${prefix}.${key}` : key).forEach((v, k) => out.set(k, v));
    }
  }
  return out;
}

const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();

const english = leaves(en);

describe("locale config", () => {
  it("supports exactly English, Korean, Simplified Chinese and Japanese, English first", () => {
    expect(LOCALES).toEqual(["en", "ko", "zh-CN", "ja"]);
    expect(DEFAULT_LOCALE).toBe("en");
    expect(LOCALE_NAMES).toEqual({ en: "English", ko: "한국어", "zh-CN": "中文", ja: "日本語" });
  });

  it.each([undefined, null, "", "fr", "zh", "KO", "en-AU", "zh-cn", 42, {}])("falls back to English for %j", (value) => {
    expect(isLocale(value)).toBe(false);
    expect(resolveLocale(value)).toBe("en");
  });

  it.each(LOCALES)("accepts %s", (locale) => {
    expect(resolveLocale(locale)).toBe(locale);
  });
});

describe.each(LOCALES.filter((locale) => locale !== "en"))("%s dictionary", (locale) => {
  const translated = leaves(DICTIONARIES[locale]);

  it("has exactly the English keys", () => {
    expect([...translated.keys()].sort()).toEqual([...english.keys()].sort());
  });

  it("has no blank text where English has text", () => {
    const blank = [...english].filter(([key, text]) => text !== "" && !translated.get(key)?.trim()).map(([key]) => key);
    expect(blank).toEqual([]);
  });

  it("keeps the same placeholders as English", () => {
    const mismatched = [...english]
      .filter(([key, text]) => placeholders(text).join() !== placeholders(translated.get(key) ?? "").join())
      .map(([key]) => key);
    expect(mismatched).toEqual([]);
  });

  it("keeps prices, phone numbers and emails unchanged", () => {
    const facts = /\$\d+(?:\.\d+)?|1300 966 963|[\w.+-]+@[\w.-]+\.\w+/g;
    const changed = [...english]
      .filter(([key, text]) => {
        const expected = (text.match(facts) ?? []).sort().join();
        const actual = (translated.get(key)?.match(facts) ?? []).sort().join();
        return expected !== actual;
      })
      .map(([key]) => key);
    expect(changed).toEqual([]);
  });
});

describe("getMessages", () => {
  it("returns English for unsupported or missing locales", () => {
    expect(getMessages("fr")).toBe(en);
    expect(getMessages(undefined)).toBe(en);
  });

  it("returns the translated text for supported locales", () => {
    expect(getMessages("ko").nav.pricing).toBe("요금");
    expect(getMessages("zh-CN").nav.pricing).toBe("价格");
    expect(getMessages("ja").nav.pricing).toBe("料金");
  });

  it("fills missing, blank or mistyped translations from English instead of showing a key or nothing", () => {
    const partial = { nav: { pricing: "요금", products: "", customers: 7 }, common: { ticks: ["약정 없음"] } };
    const merged = withFallback(partial, en);
    expect(merged.nav.pricing).toBe("요금");
    expect(merged.nav.products).toBe(en.nav.products);
    expect(merged.nav.customers).toBe(en.nav.customers);
    expect(merged.nav.about).toBe(en.nav.about);
    expect(merged.common.ticks).toEqual(["약정 없음", en.common.ticks[1], en.common.ticks[2]]);
    expect(merged.home.hero.line1).toBe(en.home.hero.line1);
  });

  it("keeps intentionally empty English values empty", () => {
    expect(withFallback({ note: "" }, { note: "" })).toEqual({ note: "" });
  });
});

describe("format", () => {
  it("fills placeholders and drops unknown ones", () => {
    expect(format("Poble Basic ${base} + selected options ${addOns}", { base: 60, addOns: 40 })).toBe(
      "Poble Basic $60 + selected options $40",
    );
    expect(format("Hello {name}{missing}", { name: "Poble" })).toBe("Hello Poble");
  });
});
