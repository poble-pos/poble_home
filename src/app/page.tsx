import type { Metadata } from "next";

import { HomeView } from "@/components/home/HomeView";
import { OG_LOCALES } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { SALES_EMAIL, SALES_PHONE, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Document title matches the export's index.html, in the visitor's language, and
 * does not change while scrolling. The canonical URL is the same for every language.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { locale, m } = await getI18n();
  const { title, description } = m.meta.home;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, url: "/", type: "website", locale: OG_LOCALES[locale] },
    twitter: { title, description },
  };
}

/** Organization and WebSite details, taken from the site's own contact information. */
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-full.png`,
      email: SALES_EMAIL,
      telephone: SALES_PHONE,
      contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: SALES_PHONE, email: SALES_EMAIL, areaServed: "AU" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-AU",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

/**
 * Homepage route. Typefaces are registered on <html> in the root layout. All
 * interactive sections live in client components under components/home.
 */
export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
      />
      <HomeView />
    </>
  );
}
