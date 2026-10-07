import type { Metadata } from "next";

import { HomeView } from "@/components/home/HomeView";
import { SALES_EMAIL, SALES_PHONE, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Poble — The lightweight POS built for Australian hospitality";
const DESCRIPTION =
  "The iPad POS for Australian cafés and restaurants. Bring your counter, kitchen and back office into one flow.";

/** Document title matches the export's index.html and does not change while scrolling. */
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

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
