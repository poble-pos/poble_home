import React from "react";
import { Package } from "lucide-react";
import ProductCard from "@/components/product-card";
import { fetchStripeOneOffProductList } from "@/lib/restApis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poble - POS products",
  description:
    "Explore Poble's range of POS hardware, including terminals, printers, scanners, and accessories to optimize your business operations.",
  creator: "Poble",
  keywords: [
    "Poble",
    "POS hardware",
    "POS terminals",
    "receipt printers",
    "barcode scanners",
    "retail POS equipment",
    "restaurant POS hardware",
    "business solutions",
  ],
  authors: [{ name: "Poble", url: "https://poble.com.au" }],
  openGraph: {
    title: "Poble POS Hardware - Terminals, Printers, Scanners",
    description:
      "Discover high-quality POS hardware from Poble to enhance sales, inventory, and customer management for your business.",
    url: "https://poble.com.au/hardware",
    siteName: "Poble",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Poble POS Hardware Products",
      },
    ],
    locale: "en_US",
  },
};

export default async function HardwarePage() {
  const stripeOneOffProductList = await fetchStripeOneOffProductList({});

  console.log(stripeOneOffProductList);

  return (
    <div className="bg-gradient-to-b from-background to-accent/5 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center py-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            Hardware Store
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Premium <span className="text-primary">Hardware</span> Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Discover our curated selection of cutting-edge technology and hardware products designed
            for professionals, gamers, and tech enthusiasts.
          </p>
        </div>
        {/* Products Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {stripeOneOffProductList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
