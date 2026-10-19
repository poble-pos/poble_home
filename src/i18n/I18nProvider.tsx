"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, useTransition, type ReactNode } from "react";

import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, resolveLocale, type Locale } from "./config";
import { getMessages, type Messages } from "./messages";

interface I18nContextValue {
  locale: Locale;
  m: Messages;
  /** True while server-rendered parts of the page are being re-rendered in the new language. */
  pending: boolean;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/** Saves the preference for the server and the static pages. Blocked cookies only lose persistence. */
export function saveLocale(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
  } catch {
    // The choice still applies to this page view.
  }
}

/**
 * Holds the visitor's language on the client. It starts from the locale the
 * server rendered with, so hydration matches. Choosing a language updates client
 * components at once, stores the cookie and refreshes the server components
 * (page copy and metadata) without a full reload, so form input and other client
 * state are kept.
 */
export function I18nProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [pending, startTransition] = useTransition();

  // A server render in another language (for example after a refresh) wins.
  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback(
    (value: Locale) => {
      const next = resolveLocale(value);
      saveLocale(next);
      document.documentElement.lang = next;
      startTransition(() => {
        setLocaleState(next);
        router.refresh();
      });
    },
    [router],
  );

  const value = useMemo(() => ({ locale, m: getMessages(locale), pending, setLocale }), [locale, pending, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within an I18nProvider");
  return context;
}
