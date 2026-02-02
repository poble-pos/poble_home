/**
 * @component HeroSection
 * @description Renders the brand intro with high-performance CSS animations.
 */

"use client";

import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative flex flex-col lg:flex-row overflow-clip border-b border-slate-100">
            {/* Left Side: Visual Identity Overlay */}
            <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center relative p-12 overflow-hidden bg-poble-cream">
                {/* Background mesh layers for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-100 to-amber-50 animate-gradient-flow" />
                <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-white/40 blur-[120px] rounded-full animate-mesh" />
                <div className="absolute bottom-[-15%] right-[-5%] w-[80%] h-[80%] bg-poble-gold/20 blur-[160px] rounded-full animate-mesh [animation-direction:reverse]" />

                <div className="relative z-10 w-full max-w-[450px] group">
                    <div className="animate-float">
                        <img
                            src="/logo-full.png"
                            alt="Poble Logo"
                            className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-1000 group-hover:drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Branding indicator */}
                    <div className="mt-16 flex justify-center items-center gap-3 opacity-20 group-hover:opacity-40 transition-all duration-1000">
                        <div className="w-12 h-px bg-poble-charcoal"></div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-poble-charcoal">Established 2024</div>
                        <div className="w-12 h-px bg-poble-charcoal"></div>
                    </div>
                </div>
            </div>

            {/* Right Side: Primary Narrative */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative">
                <div className="max-w-xl w-full relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-10 font-heading leading-[0.95] text-poble-charcoal">
                        <span className="block animate-reveal-text [animation-delay:200ms]">Our</span>
                        <span className="text-slate-300 block transition-transform hover:translate-x-6 duration-700 animate-reveal-text [animation-delay:400ms]">Story</span>
                    </h1>

                    <div className="signature-bar mb-12">
                        <div className="signature-bar-inner"></div>
                    </div>

                    <div className="space-y-6 animate-reveal-text [animation-delay:700ms]">
                        <p className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-poble-charcoal/80 leading-snug tracking-tight">
                            POS, <span className="text-poble-gold font-black">made capable</span> <br />
                            Designed so your focus belongs to the customer.
                        </p>

                        {/* Scale Indicator */}
                        <div className="flex items-center gap-4 text-slate-400/60 w-full overflow-hidden">
                            <div className="w-8 h-px bg-slate-200 shrink-0"></div>
                            <div className="flex-grow overflow-hidden relative">
                                <div className="flex whitespace-nowrap animate-marquee">
                                    {[...Array(4)].map((_, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] pr-8">
                                            Sydney • Melbourne • Brisbane • Perth • Adelaide
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
