/**
 * @file Showcase.tsx
 * @description Hardware and interface showcase featuring visual device narratives.
 */

"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

export const Showcase: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'showcase')?.content || {};
    const [activeIndex, setActiveIndex] = useState(0);

    const PREVIEW_IMAGES = config.images && Array.isArray(config.images) ? config.images : [
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800&h=1000",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800&h=1000",
        "https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&q=80&w=800&h=1000",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=1000",
        "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&q=80&w=800&h=1000"
    ];

    /**
     * Mnemonic Branding Logic:
     * If exactly 5 images are present, we show "P-O-B-L-E" letters as indicators.
     * If more or less than 5 images are present, we show plain thumbnails to avoid breaking design.
     */
    const isPobleGallery = PREVIEW_IMAGES.length === 5;
    const BRAND_LETTERS = ['P', 'O', 'B', 'L', 'E'];

    return (
        <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden border-y border-white/5 relative">
            {/* Dark Aesthetic Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a] opacity-80 pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-slate-900/[0.05]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24 items-center">

                    {/* Left Column: Visual Carousel Segment */}
                    <div className="relative order-2 lg:order-1 group">
                        <div className="relative z-10 w-full max-w-[420px] mx-auto rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-3xl bg-white/5 aspect-[4/5] overflow-hidden transition-all duration-500">
                            {PREVIEW_IMAGES.map((src, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <img src={src} alt={`Showcase ${i + 1}`} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                </div>
                            ))}
                        </div>

                        {/* P-O-B-L-E Interactive Markers */}
                        <div className="flex justify-center gap-2 md:gap-6 mt-8 md:mt-12 relative z-20 items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                                <img
                                    src="/logo-transparent.svg"
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain max-w-none opacity-80"
                                    alt="Poble Symbol"
                                />
                            </div>

                            {PREVIEW_IMAGES.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`relative w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl overflow-hidden transition-all duration-500 shadow-md group/thumb cursor-pointer 
                                        ${activeIndex === i
                                            ? 'scale-110 shadow-[0_0_20px_rgba(251,189,0,0.3)] ring-2 ring-poble-gold/50'
                                            : 'opacity-80 hover:opacity-100 hover:scale-105'
                                        }`}
                                >
                                    <img src={src} className="w-full h-full object-cover" alt={`Thumb ${i + 1}`} />

                                    {isPobleGallery && (
                                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black/30 backdrop-blur-[2px]
                                            ${activeIndex === i ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100'}`}>
                                            <span className="text-xl md:text-2xl font-black text-poble-gold font-mono tracking-tighter">
                                                {BRAND_LETTERS[i]}
                                            </span>
                                        </div>
                                    )}

                                    {activeIndex === i && (
                                        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Hardware Strategy Segment */}
                    <div className="order-1 lg:order-2">
                        <p className="text-poble-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Hardware Compatibility</p>

                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight text-white font-heading">
                            {config.title?.split(' ').slice(0, 2).join(' ')} <br />
                            <span className="text-slate-400">{config.title?.split(' ').slice(2).join(' ')}</span>
                        </h2>

                        <div className="w-12 h-1 bg-poble-gold/60 mb-10"></div>

                        <p className="text-xl text-slate-300 mb-16 leading-relaxed font-bold tracking-tight">
                            {config.description}
                        </p>

                        <div className="grid grid-cols-2 gap-12 font-sans">
                            <div>
                                <h4 className="font-black text-white text-lg mb-4 tracking-tight leading-tight">{config.feature1_title || "Universal iPad Support"}</h4>
                                <p className="text-slate-400 text-base font-bold leading-relaxed tracking-tight">{config.feature1_desc || "Compatible with iPad (7th Gen) and later. No need for proprietary, expensive touchscreens."}</p>
                            </div>
                            <div>
                                <h4 className="font-black text-white text-lg mb-4 tracking-tight leading-tight">{config.feature2_title || "Industry Standard"}</h4>
                                <p className="text-slate-400 text-base font-bold leading-relaxed tracking-tight">{config.feature2_desc || "We support proven thermal printers like POSBANK & Epson for bulletproof reliability."}</p>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
                            <a
                                href="/hardware"
                                className="group bg-poble-gold text-poble-charcoal pl-8 pr-3 py-3.5 rounded-full font-black text-sm tracking-tight hover:bg-white hover:scale-105 transition-all flex items-center gap-4 shadow-xl shadow-poble-gold/10 cursor-pointer"
                            >
                                Shop Hardware
                                <div className="bg-poble-charcoal/10 rounded-full p-1 group-hover:bg-poble-charcoal/20 transition-colors">
                                    <svg className="w-4 h-4 text-poble-charcoal group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
