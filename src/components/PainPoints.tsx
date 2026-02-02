/**
 * @file PainPoints.tsx
 * @description Operational performance showcase highlighting key business impacts.
 */

"use client";

import React from 'react';
import { Zap, Activity, Sparkles } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

export const PainPoints: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'pain-points')?.content || {};

    return (
        <section className="py-16 bg-slate-50 overflow-hidden relative border-y border-slate-100">
            <div className="absolute inset-0 opacity-40 bg-grid-slate-900/[0.05]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Visual Performance Metric Card */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 border-2 border-slate-100 transition-all duration-500 hover:border-poble-gold hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden group mx-auto max-w-lg lg:max-w-none">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-amber-50/20 rounded-full blur-3xl transition-colors"></div>

                            <div className="relative z-10">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Performance Snapshot</h3>

                                <div className="space-y-12">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-black text-poble-charcoal mb-4 uppercase tracking-[0.25em]">
                                            <span>Touch Response</span>
                                            <span className="text-poble-gold">ULTRA-FAST</span>
                                        </div>
                                        <div className="h-3 bg-white border border-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-poble-gold w-[98%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-black text-poble-charcoal mb-4 uppercase tracking-[0.25em]">
                                            <span>Sync Reliability</span>
                                            <span className="text-poble-gold">99.9%</span>
                                        </div>
                                        <div className="h-3 bg-white border border-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-poble-gold w-[96%]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-10 bg-white rounded-3xl border-2 border-slate-100 shadow-sm text-center transition-all group-hover:border-poble-gold/20">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">poble Engine Status</p>
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                        </div>
                                        <p className="text-xl font-black text-poble-charcoal tracking-tight uppercase leading-none">Peak Performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Value Narrative Section */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 order-1 lg:order-2">
                        <p className="text-poble-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block">Business Impact</p>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1] text-poble-charcoal font-heading">
                            {config.title?.split(' ').slice(0, 2).join(' ')} <br />
                            <span className="text-slate-400">{config.title?.split(' ').slice(2).join(' ')}</span>
                        </h2>

                        <div className="w-12 h-1 bg-poble-gold/60 mb-10"></div>

                        <p className="text-xl text-poble-charcoal leading-relaxed mb-16 max-w-xl font-bold tracking-tight">
                            {config.subtitle}
                        </p>

                        <div className="space-y-8 font-sans">
                            {[
                                { title: config.feature1_title || "The Balancing Act", desc: config.feature1_desc || "End your day in seconds. Automated reconciliation ensures your dockets and payments always match.", icon: Activity },
                                { title: config.feature2_title || "Ready for the Rush", desc: config.feature2_desc || "Never miss a docket. Our high-performance brain stays responsive even when the queue is out the door.", icon: Zap },
                                { title: config.feature3_title || "Zero Training", desc: config.feature3_desc || "Staff ready on Day 1. An interface so intuitive that new team members hit the ground running.", icon: Sparkles }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-poble-gold transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-poble-charcoal group-hover:text-poble-gold" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-poble-charcoal mb-2 tracking-tight leading-tight">{item.title}</h4>
                                        <p className="text-poble-charcoal/80 text-base leading-relaxed font-bold tracking-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
