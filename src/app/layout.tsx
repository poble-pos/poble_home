import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://poble.com.au"),
  title: "Poble",
  description:
    "Poble provides modern, reliable, and easy-to-use POS systems to help businesses manage sales, inventory, and customer experience efficiently.",
  creator: "Poble",
  keywords: [
    "POS system",
    "Point of Sale",
    "retail software",
    "restaurant POS",
    "inventory management",
  ],
  authors: [{ name: "Poble", url: "https://poble.com.au" }],
  openGraph: {
    title: "Poble - POS Solutions for Your Business",
    description:
      "Modern POS systems to streamline sales, inventory, and customer management for your business.",
    url: "https://poble.com.au",
    siteName: "Poble",
    type: "website",
    images: [
      {
        url: "/png",
        width: 1200,
        height: 630,
        alt: "Poble POS System",
      },
    ],
    locale: "en_US",
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
