/**
 * Supported site languages. English is the default and the fallback for any
 * missing or unrecognised value. The chosen language is kept in a cookie so the
 * server renders the same language the visitor last picked.
 */
export const LOCALES = ["en", "ko", "zh-CN", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie shared by the Next.js pages and the static pages in public/legal. */
export const LOCALE_COOKIE = "poble-locale";

/** One year; the preference is refreshed every time it is chosen. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Each language in its own name, as shown in the selector. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  "zh-CN": "中文",
  ja: "日本語",
};

/** Short label for narrow headers. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
  "zh-CN": "中文",
  ja: "JA",
};

/** Open Graph locale for each language. English keeps the site's existing en_AU. */
export const OG_LOCALES: Record<Locale, string> = {
  en: "en_AU",
  ko: "ko_KR",
  "zh-CN": "zh_CN",
  ja: "ja_JP",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Any stored value that is not a supported locale resolves to English. */
export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
