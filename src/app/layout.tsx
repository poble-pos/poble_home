import "./globals.css";

import type { Metadata, Viewport } from "next";
import {
  Albert_Sans,
  Inter,
  Outfit,
  Playfair_Display,
  Poiret_One,
  Roboto,
} from "next/font/google";

import { CartDrawer } from "@/components/CartDrawer";
import { DigitalCursor } from "@/components/DigitalCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AdminProvider } from "@/context/AdminContext";
import { CartProvider } from "@/context/CartContext";
import { InquiryProvider } from "@/context/InquiryContext";
import { InquirySidebar } from "@/components/site/InquirySidebar";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Poble",
    default: "Poble",
  },
  description:
    "Experience the fastest, most reliable iPad POS tailored for modern Australian venues.",
  icons: {
    icon: "/logo-transparent.svg",
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
      className={`${albertSans.variable} ${outfit.variable} ${roboto.variable} ${poiretOne.variable} ${inter.variable} ${playfairDisplay.variable}`}
    >
      <body
        className="font-sans antialiased text-[#0D0D0D] bg-[#F9F8F3]"
        suppressHydrationWarning
      >
        <DigitalCursor />
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
