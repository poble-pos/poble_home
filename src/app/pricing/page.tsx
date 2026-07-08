/**
 * @file PricingPage.tsx
 * @description Integrated pricing overview for Poble software and hardware.
 * Features a simplified plan model and a preview of upcoming high-value add-ons.
 */

"use client";

import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PricingCarousel } from "@/components/PricingCarousel";
import { useAdmin } from "@/context/AdminContext";
import dynamic from "next/dynamic";

const PRICING_FAQ = [
  {
    q: "How does the 30-day free trial work?",
    a: "You get full access to the Basic plan for 30 days. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.",
    visible: true,
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.",
    visible: true,
  },
  {
    q: "Am I locked into a contract?",
    a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.",
    visible: true,
  },
  {
    q: "Can I use my own iPad?",
    a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.",
    visible: true,
  },
];

function PricingPageContent() {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.type === "Pricing")?.content || {};

  const faqItems = config.faq || [
    {
      q: "How does the 30-day free trial work?",
      a: "You get full access to the Basic plan for 30 days. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.",
      visible: true,
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.",
      visible: true,
    },
    {
      q: "Am I locked into a contract?",
      a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.",
      visible: true,
    },
    {
      q: "Can I use my own iPad?",
      a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.",
      visible: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F3]">
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Hero Header: Dynamic from Config */}
        <section className="pt-20 pb-10 md:pt-36 md:pb-16 px-6 bg-gray-50 border-slate-100">
          <div className="max-w-7xl mx-auto text-start">
            <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-light text-poble-charcoal tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-[0.95]">
              {config.hero_title || "Pricing"}
            </h1>
            <p className="mt-3 text-slate-400 text-xl md:text-2xl lg:text-[2rem] font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {config.hero_subtitle || "Add On, Any Time."}
            </p>
          </div>
        </section>

        {/* Main Plan Display */}
        <section className="py-16 bg-white">
          <PricingCarousel />
        </section>

        {/* Commercial FAQ Section - Dynamic from Config */}
        <FAQ
          className="py-16 bg-slate-50 border-t border-slate-200"
          content={{
            title: config.faq_title || "Pricing Questions",
            description:
              config.faq_desc ||
              "Everything you need to know about trials, plans, and billing.",
            faq: faqItems as any,
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default dynamic(() => Promise.resolve(PricingPageContent), {
  ssr: false,
});
