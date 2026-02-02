"use client";

import React from 'react';

const partners = [
    { name: "Uber Eats", logo: "/images/partners/ubereats.svg" },
    { name: "Tyro", logo: "/images/partners/tyro.png" },
    { name: "Stripe", logo: "/images/partners/stripe.svg" }
];

const Column = ({ items, direction = 'up' }: { items: typeof partners, direction?: 'up' | 'down' }) => (
    <div className="relative h-[320px] md:h-[480px] overflow-hidden group/col px-1 md:px-2">
        <div className={`flex flex-col shrink-0 will-change-transform ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}>
            {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((p, i) => (
                <div
                    key={i}
                    className={`h-16 w-20 md:h-24 md:w-32 rounded-xl md:rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-300 mb-4 md:mb-6 group ${p.name === 'Tyro'
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-100'
                        } ${p.name === 'Uber Eats' ? 'p-1.5 md:p-2' : 'p-4 md:p-5'
                        }`}
                >
                    <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            ))}
        </div>
    </div>
);

import { useAdmin } from '@/context/AdminContext';

export const Integrations: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'integrations')?.content || {};

    const title = config.title || "Connected Ecosystem";
    const description = config.description || "We play well with the tools you already love. Direct integrations ensure your data flows where it needs to go.";
    return (
        <section id="integrations" className="py-24 bg-white overflow-hidden border-y border-slate-100">
            <style jsx global>{`
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes scroll-down {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .animate-scroll-up { animation: scroll-up 80s linear infinite; }
                .animate-scroll-down { animation: scroll-down 80s linear infinite; }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-1">
                        <span className="text-poble-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-[1.1] text-poble-charcoal font-heading">
                            {title.split(' ').slice(0, 2).join(' ')} <br />
                            <span className="text-slate-400">{title.split(' ').slice(2).join(' ')}</span>
                        </h2>

                        <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>

                        <p className="text-xl text-poble-charcoal font-bold leading-relaxed mb-10">
                            {description}
                        </p>

                        <div className="space-y-4 pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="text-[10px] font-black text-poble-gold uppercase tracking-[0.3em]">
                                    New integrations added monthly
                                </p>
                            </div>
                            <p className="text-sm font-extrabold text-poble-charcoal opacity-60 leading-relaxed">
                                We are continuously partnering with local Australian platforms <br className="hidden md:block" />
                                to ensure <span className="font-logo">poble</span> adapts to your specific venue needs.
                            </p>
                        </div>
                    </div>

                    <div className="relative order-2 flex justify-center gap-6 md:gap-8 max-h-[480px]">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                        <div className="flex gap-6 md:gap-8 overflow-hidden pt-4 pb-4">
                            <Column items={partners} direction="up" />
                            <Column items={[...partners].reverse()} direction="down" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
