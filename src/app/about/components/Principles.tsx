/**
 * @component Principles
 * @description Outlines the core operational standards that remain constant.
 */

"use client";

import React from 'react';

const PRINCIPLES = [
    { title: "Visual Clarity", desc: "Interfaces designed for your split-second decisions at the counter." },
    { title: "High-Peak Speed", desc: "Zero-lag responsiveness that keeps up with your busiest hours." },
    { title: "Silent Reliability", desc: "A system so quiet and dependable you can forget it's there." },
    { title: "Ethical Scale", desc: "New features added to help you grow, never to slow you down." }
];

export const Principles: React.FC = () => {
    return (
        <section className="py-24 px-8 text-white overflow-hidden relative bg-[#1a1a1a]">
            {/* Ambient Background Gradient (Spotlight Effect) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a] opacity-80 pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-0 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-24 font-heading leading-[1.1]">
                    What stays <span className="text-poble-gold">constant for you</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
                    {PRINCIPLES.map((principle, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-poble-gold font-black mb-6">0{i + 1}</span>
                            <h4 className="text-xl font-black mb-4 tracking-tight leading-tight">
                                {principle.title}
                            </h4>
                            <p className="text-slate-400 font-bold leading-relaxed tracking-tight text-base">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
