/**
 * @component BrandMeaning
 * @description Explains the linguistic origin of "Poble" (POS + Able).
 */

"use client";

import React from 'react';

export const BrandMeaning: React.FC = () => {
    return (
        <section className="py-24 px-8 bg-white border-y border-slate-100">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-poble-gold mb-12">The Story Behind Poble</p>
                <h2 className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight mb-10 leading-[1.1] font-heading">
                    Derived from <br />
                    <span className="text-slate-500">POS + able</span>
                </h2>

                <div className="w-12 h-1 bg-poble-gold/40 mb-10 mx-auto"></div>

                <div className="max-w-2xl mx-auto space-y-10">
                    <p className="text-xl text-poble-charcoal font-bold leading-relaxed tracking-tight break-keep">
                        Our name reflects our core mission: <span className="text-poble-gold">enabling merchants to do more.</span>
                    </p>
                    <p className="text-lg text-slate-500 font-bold leading-relaxed opacity-80">
                        We believe technology should empower your team, giving you the ability to serve your customers with excellence and ease.
                    </p>
                </div>
            </div>
        </section>
    );
};
