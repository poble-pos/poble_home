/**
 * @file CTASection.tsx
 * @description Closing conversion point for the landing page.
 * Features a high-contrast design to drive final merchant registrations.
 */

"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useAdmin } from '@/context/AdminContext';

export const CTASection: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'cta')?.content || {};

    const title = config.title || "Ready to Clear the Counter?";
    const subtitle = config.subtitle || "Join the growing network of Australian venues who have swapped complex systems for speed.";
    const buttonText = config.buttonText || "Get Started Free";
    return (
        <section
            id="demo"
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(315deg, #FCD34D 0%, #FEF3C7 50%, #FFFBEB 100%)'
            }}
        >
            {/* Design Tokens: Abstract visual layers */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-200 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-poble-charcoal">
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] font-heading">
                    {title.includes(" ") ? (
                        <>
                            {title.split(" ").slice(0, 2).join(" ")} <br />
                            <span className="text-slate-400">{title.split(" ").slice(2).join(" ")}</span>
                        </>
                    ) : title}
                </h2>
                <p className="text-xl text-poble-charcoal/90 mb-12 leading-relaxed max-w-2xl mx-auto font-bold tracking-tight">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <a
                        href="https://backoffice.poble.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 text-white pl-10 pr-3 py-3 rounded-full text-lg font-black hover:bg-poble-charcoal hover:text-white transition-all shadow-2xl shadow-slate-900/10 w-full sm:w-auto flex items-center justify-center gap-5 group tracking-tight cursor-pointer"
                    >
                        {buttonText}
                        <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                        href="/pricing"
                        className="bg-white/40 backdrop-blur-md text-poble-charcoal border border-slate-900/10 px-8 py-3 rounded-full text-lg font-black hover:bg-white transition-all w-full sm:w-auto flex items-center justify-center"
                    >
                        View Pricing
                    </Link>
                </div>

                <div className="mt-12 flex items-center justify-center gap-6 flex-wrap opacity-60">
                    {[
                        "No lock-in contracts",
                        "No hidden fees",
                        "Local Australian support"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-poble-gold"></div>
                            <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
