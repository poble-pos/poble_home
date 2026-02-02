/**
 * @file PricingPage.tsx
 * @description Integrated pricing overview for Poble software and hardware.
 * Features a simplified plan model and a preview of upcoming high-value add-ons.
 */

"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PricingCarousel } from '@/components/PricingCarousel';
import { FAQ } from '@/components/FAQ';

const PRICING_FAQ = [
    {
        q: "How does the 30-day free trial work?",
        a: "You get full access to the Basic plan for 30 days. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.",
        visible: true
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.",
        visible: true
    },
    {
        q: "Am I locked into a contract?",
        a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.",
        visible: true
    },
    {
        q: "Can I use my own iPad?",
        a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.",
        visible: true
    }
];

import { useAdmin } from '@/context/AdminContext';
import dynamic from 'next/dynamic';

function PricingPageContent() {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.type === 'Pricing')?.content || {};

    const faqItems = config.faq || [
        {
            q: "How does the 30-day free trial work?",
            a: "You get full access to the Basic plan for 30 days. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.",
            visible: true
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.",
            visible: true
        },
        {
            q: "Am I locked into a contract?",
            a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.",
            visible: true
        },
        {
            q: "Can I use my own iPad?",
            a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.",
            visible: true
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#F9F8F3]">
            <Navbar />
            <main className="flex-grow bg-white">
                {/* Hero Header: Dynamic from Config */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-16 px-6 bg-slate-50 border-b border-slate-100 text-center">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-poble-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {config.hero_label || "Transparent Economics"}
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-poble-charcoal tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-[0.95] font-heading">
                            {config.hero_title || "Start Basic"} <br />
                            <span className="text-slate-400">{config.hero_subtitle || "Scale Tomorrow"}</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            {config.description || "Begin your 30-day trial with our core POS engine. As your venue grows, our rapidly expanding library of smart add-ons will be ready for you to toggle on instantly."}
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
                        description: config.faq_desc || "Everything you need to know about trials, plans, and billing.",
                        faq: faqItems as any
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}

export default dynamic(() => Promise.resolve(PricingPageContent), { ssr: false });
