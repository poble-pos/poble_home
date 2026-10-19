import { cookies } from "next/headers";

import { LOCALE_COOKIE, resolveLocale, type Locale } from "./config";
import { getMessages, type Messages } from "./messages";

/**
 * The visitor's language for this request, from the preference cookie. A missing
 * or unsupported value is English, so the server and the first client render
 * always agree.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return resolveLocale(store.get(LOCALE_COOKIE)?.value);
}

/** Locale and its messages, for server components and metadata. */
export async function getI18n(): Promise<{ locale: Locale; m: Messages }> {
  const locale = await getLocale();
  return { locale, m: getMessages(locale) };
}
