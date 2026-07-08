/**
 * @file CTASection.tsx
 * @description Closing conversion point for the landing page.
 * Features a high-contrast design to drive final merchant registrations.
 */

"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useAdmin } from '@/context/AdminContext';

export const CTASection: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'cta')?.content || {};

    const title = config.title || "Ready to Clear the Counter?";
    const subtitle = config.subtitle || "Join the growing network of Australian venues who have swapped complex systems for speed.";
    const buttonText = config.buttonText || "Get Started Free";

    const [typedTitle, setTypedTitle] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        let i = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const type = () => {
            setTypingDone(false);
            setTypedTitle('');
            i = 0;
            const interval = setInterval(() => {
                i++;
                setTypedTitle(title.slice(0, i));
                if (i >= title.length) {
                    clearInterval(interval);
                    setTypingDone(true);
                    // Pause then restart
                    timeout = setTimeout(type, 2000);
                }
            }, 55);
        };

        type();
        return () => clearTimeout(timeout);
    }, [title]);
    return (
        <section
            id="demo"
            className="py-24 relative overflow-hidden"
            style={{ background: '#94a3b8' }}
        >
            {/* Line grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)', backgroundSize: '400px 400px' }} />
            {/* Design Tokens: Abstract visual layers */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-200 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Terminal window */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-black/20" style={{ fontFamily: 'monospace' }}>
                    {/* Title bar */}
                    <div className="bg-[#1e1e1e] px-5 py-3 flex items-center gap-2 border-b border-white/5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                        <span className="ml-4 text-[11px] text-white/30 tracking-widest uppercase">poble — bash</span>
                    </div>

                    {/* Terminal body */}
                    <div className="bg-[#0d0d0d] px-8 py-10 text-left">
                        {/* Prompt lines */}
                        <p className="text-[#4ade80] text-sm mb-1"><span className="text-white/30">venue@poble</span><span className="text-white/20">:</span><span className="text-[#60a5fa]">~</span><span className="text-white/20">$</span> <span className="text-white/70">poble init --venue</span></p>
                        <p className="text-white/40 text-sm mb-6">✔ System ready. Launching your POS...</p>

                        <style>{`
                            @keyframes flicker {
                                0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
                                20%, 22%, 24%, 55% { opacity: 0; }
                            }
                        `}</style>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1] text-white">
                            {typedTitle}
                            <span
                                className="text-[#febc2e]"
                                style={{ animation: 'flicker 1.2s infinite' }}
                            >▊</span>
                        </h2>
                        <p className="text-white/60 mb-10 leading-relaxed font-bold tracking-tight text-base max-w-2xl">
                            {subtitle}
                        </p>

                        {/* CTA prompt line */}
                        <p className="text-[#4ade80] text-sm mb-6"><span className="text-white/30">venue@poble</span><span className="text-white/20">:</span><span className="text-[#60a5fa]">~</span><span className="text-white/20">$</span> <span className="text-white/70">poble start --trial</span><span className="animate-pulse text-white ml-1">▊</span></p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="https://backoffice.poble.com.au"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#febc2e] text-[#0d0d0d] pl-8 pr-4 py-3 text-sm font-black hover:bg-white transition-all w-full sm:w-auto flex items-center justify-center gap-4 group tracking-widest uppercase cursor-pointer"
                            >
                                {buttonText}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <Link
                                href="/pricing"
                                className="border border-white/20 text-white/60 px-8 py-3 text-sm font-black hover:border-white/60 hover:text-white transition-all w-full sm:w-auto flex items-center justify-center tracking-widest uppercase"
                            >
                                View Pricing
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-6 flex-wrap">
                            {[
                                "No lock-in contracts",
                                "No hidden fees",
                                "Local Australian support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="text-[#4ade80] text-xs">✔</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
