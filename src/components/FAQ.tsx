"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const defaultFaqItems = [
    {
        q: "I'm already using a POS. Is switching complicated?",
        a: "We make it seamless. Our support team is here to guide you through the transition and ensure you're ready to trade without stress.",
    },
    {
        q: "What hardware do I need?",
        a: "You can use standard iPads you may already own. For reliability, we supply and recommend POSBANK receipt printers, ensuring your hardware works perfectly together from day one.",
    },
    {
        q: "Is it hard to set up my menu?",
        a: "No. We help you with the initial configuration and show you exactly how to manage your items, so you can make updates easily whenever you need to.",
    },
    {
        q: "How long does it take staff to learn the system?",
        a: "We've stripped away the clutter found in older systems. Because it looks and feels like a modern app, staff pick it up intuitively, significantly reducing training time.",
    },
    {
        q: "What happens if my internet disconnects?",
        a: "You can keep taking orders because poble is built to handle local interruptions, allowing you to continue service. Data syncs automatically as soon as you're back online.",
    },
];

interface FAQProps {
    content?: {
        title?: string;
        description?: string;
        faq?: Array<{ q: string; a: string; visible: boolean }>;
    };
    className?: string;
}

import { useAdmin } from "@/context/AdminContext";

export const FAQ: React.FC<FAQProps> = ({ className, content: propContent }) => {
    const { siteContent } = useAdmin();
    const adminConfig = siteContent.sections.find(s => s.id === 'faq')?.content || {};

    // Use propContent if provided, otherwise fallback to adminConfig
    const config = propContent || adminConfig;
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const title = config.title || "Seamless Setup & Ongoing Support.";
    const description = config.description || "Getting started is simple with our guided installation process. And once you're live, our expert team is available 7 days a week to keep you trading smoothly.";
    const items = config.faq?.filter((f: any) => f.visible !== false) || defaultFaqItems;

    return (
        <section id="faq" className={className || "py-24 bg-white border-b border-slate-100"}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column: Title & Description */}
                    <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
                        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                            <span className="text-poble-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">
                                Expert Onboarding
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-poble-charcoal mb-8 leading-[1.1] font-heading">
                                {title.includes(" & ") ? (
                                    <>
                                        {title.split(" & ")[0]} & <br />
                                        <span className="text-slate-400">{title.split(" & ")[1]}</span>
                                    </>
                                ) : (
                                    <>
                                        {title.split(' ').slice(0, 2).join(' ')} <br />
                                        <span className="text-slate-400">{title.split(' ').slice(2).join(' ')}</span>
                                    </>
                                )}
                            </h2>
                            <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>
                            {description.includes(". ") ? (
                                <>
                                    <p className="text-xl text-poble-charcoal font-bold leading-relaxed max-w-md mb-4">
                                        {description.split(". ")[0]}.
                                    </p>
                                    <p className="text-base text-slate-600 font-bold leading-relaxed max-w-md">
                                        {description.split(". ").slice(1).join(". ")}
                                    </p>
                                </>
                            ) : (
                                <p className="text-xl text-poble-charcoal font-bold leading-relaxed max-w-md mb-4">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right Column: FAQ List */}
                    <div className="lg:col-span-7 order-2 lg:order-2">
                        <div className="space-y-4">
                            {items.map((item, idx) => {
                                const isOpen = openIdx === idx;

                                return (
                                    <div
                                        key={idx}
                                        className={`group rounded-[2.5rem] bg-white transition-all duration-300 border-2 bg-clip-padding ${isOpen
                                            ? "border-poble-gold shadow-[0_20px_40px_-15px_rgba(255,184,0,0.15)]"
                                            : "border-slate-100 hover:border-poble-gold/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIdx(isOpen ? null : idx)}
                                            className="w-full p-6 md:p-7 flex items-center justify-between text-left"
                                        >
                                            <span className="text-lg font-black tracking-tight text-poble-charcoal font-heading">
                                                {item.q}
                                            </span>

                                            <div
                                                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen
                                                    ? "bg-poble-gold text-poble-charcoal"
                                                    : "bg-slate-100 text-slate-500"
                                                    }`}
                                            >
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4" strokeWidth={3} />
                                                ) : (
                                                    <Plus className="w-4 h-4" strokeWidth={3} />
                                                )}
                                            </div>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-7 pb-7 md:px-8 md:pb-8 text-slate-700 font-bold text-base leading-relaxed border-t border-slate-100 pt-5">
                                                    {item.a}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
