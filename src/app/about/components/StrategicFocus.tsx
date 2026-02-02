/**
 * @component StrategicFocus
 * @description Highlights the technical and operational focus of the platform.
 */

"use client";

import React from 'react';

const FOCUS_AREAS = [
    {
        category: "Strategic Focus",
        title: <>Perfecting your <br />Service Counter</>,
        description: "Your peak hour is our primary benchmark. We dedicate our development cycles to touch-latency and payment speed, so your queue never stops moving because of your POS.",
        accent: "gold"
    },
    {
        category: "Modular Growth",
        title: <>Built for <br />Your Next Step</>,
        description: (
            <>
                As your venue grows, <span className="font-logo">poble</span> scales with you. Our modular architecture allows you to add capabilities thoughtfully, without introducing unnecessary operational noise.
            </>
        ),
        accent: "slate"
    }
];

export const StrategicFocus: React.FC = () => {
    return (
        <section className="py-24 px-8 bg-white border-b border-slate-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid md:grid-cols-2 gap-24 lg:gap-40">
                    {FOCUS_AREAS.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-8 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"></div>

                            <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-10 ${item.accent === 'gold' ? 'text-poble-gold' : 'text-slate-400'}`}>
                                {item.category}
                            </h3>

                            <p className="text-2xl font-black text-poble-charcoal leading-tight mb-6 tracking-tight font-heading">
                                {item.title}
                            </p>

                            <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>

                            <p className="text-slate-600 font-bold text-lg leading-relaxed tracking-tight max-w-md">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
