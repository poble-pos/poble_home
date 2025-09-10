import React from "react";
import PricingCard from "@/components/pricing-card";
import { Metadata } from "next";
import { pricingPlans } from "@/lib";

export const metadata: Metadata = {
  title: "Poble - POS Pricing",
  description:
    "View Poble's transparent pricing plans for POS hardware and software solutions. Choose the plan that fits your business needs and scale with ease.",
  creator: "Poble",
  keywords: [
    "Poble",
    "POS pricing",
    "POS plans",
    "POS hardware cost",
    "POS software pricing",
    "business solutions pricing",
    "retail POS pricing",
    "restaurant POS pricing",
  ],
  authors: [{ name: "Poble", url: "https://poble.com.au" }],
  openGraph: {
    title: "Poble POS Pricing - Plans for Hardware & Software",
    description:
      "Explore Poble's POS pricing plans designed to suit businesses of all sizes. Transparent costs for hardware, software, and support.",
    url: "https://poble.com.au/pricing",
    siteName: "Poble",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Poble POS Pricing Plans",
      },
    ],
    locale: "en_US",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose the Perfect
            <span className="text-primary"> Plan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="max-w-md mx-auto mb-20 w-full">
          {pricingPlans.map((plan, index) => {
            return <PricingCard key={index} plan={plan} />;
          })}
        </div>
        {/*<FAQ />*/}
      </div>
    </div>
  );
}
