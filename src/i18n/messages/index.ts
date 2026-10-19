import { DEFAULT_LOCALE, resolveLocale, type Locale } from "../config";

import { en, type Messages } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";
import { zhCN } from "./zh-CN";

export type { Messages };

export const DICTIONARIES: Record<Locale, Messages> = {
  en,
  ko,
  "zh-CN": zhCN,
  ja,
};

/**
 * Fills every gap in `value` from `fallback`, so a missing, mistyped or empty
 * translation shows the English text instead of a blank or a key. The shape always
 * follows the English dictionary.
 */
export function withFallback<T>(value: unknown, fallback: T): T {
  if (typeof fallback === "string") {
    return (typeof value === "string" && (value !== "" || fallback === "") ? value : fallback) as T;
  }
  if (Array.isArray(fallback)) {
    const list = Array.isArray(value) ? value : [];
    return fallback.map((item, index) => withFallback(list[index], item)) as T;
  }
  if (fallback && typeof fallback === "object") {
    const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(fallback)) {
      result[key] = withFallback(source[key], (fallback as Record<string, unknown>)[key]);
    }
    return result as T;
  }
  return (value ?? fallback) as T;
}

const cache = new Map<Locale, Messages>();

/** Messages for a locale, completed from English. Unknown locales get English. */
export function getMessages(locale: unknown): Messages {
  const resolved = resolveLocale(locale);
  let messages = cache.get(resolved);
  if (!messages) {
    messages = resolved === DEFAULT_LOCALE ? en : withFallback(DICTIONARIES[resolved], en);
    cache.set(resolved, messages);
  }
  return messages;
}

/** Replaces `{name}` placeholders. Unknown placeholders are left out rather than shown. */
export function format(template: string, values: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => (key in values ? String(values[key]) : ""));
}
