import "./globals.css";
import "@/styles/chrome.css";
import "@/styles/contact.css";

import type { Metadata, Viewport } from "next";
import {
  Albert_Sans,
  Outfit,
} from "next/font/google";

import { CartDrawer } from "@/components/CartDrawer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AdminProvider } from "@/context/AdminContext";
import { CartProvider } from "@/context/CartContext";
import { InquiryProvider } from "@/context/InquiryContext";
import { InquirySidebar } from "@/components/site/InquirySidebar";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Poble",
    default: "Poble",
  },
  description:
    "Experience the fastest, most reliable iPad POS tailored for modern Australian venues.",
  applicationName: SITE_NAME,
  icons: {
    icon: "/logo-transparent.svg",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${albertSans.variable} ${outfit.variable} ${jakarta.variable} ${barlow.variable}`}
    >
      <body
        suppressHydrationWarning
      >
        <AdminProvider>
          <CartProvider>
            <InquiryProvider>
              <CartDrawer />
              <InquirySidebar />
              {children}
            </InquiryProvider>
          </CartProvider>
        </AdminProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
