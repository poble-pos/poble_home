/**
 * @file PricingSection.tsx
 * @description Commercial plan showcase.
 * Highlighting the single, transparent "poble" package for Aussie venues.
 */

"use client";

import React from 'react';
import { Check, Crown } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

export const PricingSection: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.type === 'Pricing')?.content || {};

    // Core features specifically curated for the Australian market
    const defaultFeatures = [
        { text: "Takeaway & Quick Service", included: true },
        { text: "Complete Order Management", included: true },
        { text: "Basic Reports & Analytics", included: true },
        { text: "Menu & Category Management", included: true },
        { text: "Dual Screen / Customer Display", included: true },
    ];

    const plans = config.items || [
        {
            id: 'basic',
            title: 'Basic',
            price: '60',
            description: 'Perfect for individuals and small businesses',
            features: defaultFeatures
        }
    ];

    const title = config.title || "Powerful Tools,";
    const subtitle = config.subtitle || "Simple Support";
    const description = config.description || "Everything your venue needs for one transparent price.";

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-white border-b border-slate-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] bg-dot-pattern"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-poble-gold font-black text-xs uppercase tracking-[0.3em] mb-6">
                        Transparent Commercials
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-poble-charcoal leading-tight font-heading">
                        {title} <br />
                        <span className="text-slate-400">{subtitle}</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px] opacity-60">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {plans.map((plan: any, pIdx: number) => (
                        <div key={plan.id} className={`relative p-8 sm:p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] border-2 transition-all duration-700 flex flex-col w-full max-w-2xl bg-white border-poble-gold shadow-2xl z-10 group hover:-translate-y-2`}>
                            {/* Recommendation Badge (Show for first item or if marked) */}
                            {(plan.isRecommended || pIdx === 0) && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-xl flex items-center gap-2 whitespace-nowrap bg-poble-charcoal text-white">
                                    <Crown className="w-3.5 h-3.5 text-poble-gold" />
                                    {plan.badge || "Core Package"}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-8 mb-10">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl font-black mb-3 tracking-tight text-poble-charcoal font-heading">{plan.title}</h3>
                                    <p className="text-sm font-bold leading-relaxed text-slate-500">
                                        {plan.description}
                                    </p>
                                    <div className="mt-8">
                                        <div className="flex items-baseline justify-center md:justify-start gap-2">
                                            <span className="text-3xl font-black opacity-40 text-poble-charcoal">from</span>
                                            <span className="text-7xl md:text-8xl font-black tracking-tighter text-poble-charcoal">{plan.price}</span>
                                            <span className="font-black uppercase text-[11px] tracking-[0.2em] ml-2 text-slate-400">/ {plan.period || 'month'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shrink-0 shadow-inner group-hover:shadow-md transition-all">
                                    <img
                                        src={(pIdx === 0 ? config.item1_image : config.item2_image) || 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800'}
                                        alt={plan.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>

                            <div className="w-full h-px mb-12 bg-slate-100"></div>

                            <ul className="space-y-6 mb-16 flex-grow">
                                {(plan.features || defaultFeatures).map((feature: any, fIdx: number) => (
                                    <li key={fIdx} className="flex items-start gap-4 group/item">
                                        <div className="mt-1.5 p-1 rounded-full bg-slate-50 group-hover/item:bg-poble-gold/10 transition-colors">
                                            <Check className="w-3.5 h-3.5 text-poble-charcoal group-hover/item:text-poble-gold" strokeWidth={4} />
                                        </div>
                                        <span className={`text-lg font-bold tracking-tight text-poble-charcoal ${feature.included === false ? 'opacity-30' : ''}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full py-5 rounded-[2rem] text-[11px] font-extrabold uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95 bg-poble-charcoal text-white hover:bg-poble-gold hover:text-poble-charcoal cursor-pointer"
                            >
                                Start Your Trial Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Secondary verification */}
                <div className="mt-20 text-center">
                    <p className="text-sm font-bold text-slate-400 tracking-tight">
                        *Hardware sold separately. Compatible with standard thermal printers. <br className="hidden md:block" />
                        No lock-in contracts. Cancel anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};
