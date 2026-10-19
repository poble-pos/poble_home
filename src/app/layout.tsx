import "./globals.css";
import "@/styles/chrome.css";
import "@/styles/contact.css";

import type { Metadata, Viewport } from "next";
import {
  Albert_Sans,
  Outfit,
} from "next/font/google";

import { AdminProvider } from "@/context/AdminContext";
import { OG_LOCALES } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getI18n, getLocale } from "@/i18n/server";
import { barlow, jakarta } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

/** Site-wide metadata in the visitor's language. Canonical URLs are unchanged: every language shares one URL. */
export async function generateMetadata(): Promise<Metadata> {
  const { locale, m } = await getI18n();
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s | Poble",
      default: "Poble",
    },
    description: m.meta.siteDescription,
    applicationName: SITE_NAME,
    icons: {
      icon: "/logo-transparent.svg",
    },
    openGraph: {
      siteName: SITE_NAME,
      locale: OG_LOCALES[locale],
      type: "website",
    },
    twitter: {
      card: "summary",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The language comes from the visitor's cookie, so pages render per request.
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${albertSans.variable} ${outfit.variable} ${jakarta.variable} ${barlow.variable}`}
    >
      <body
        suppressHydrationWarning
      >
        <I18nProvider initialLocale={locale}>
          <AdminProvider>
            {children}
          </AdminProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
