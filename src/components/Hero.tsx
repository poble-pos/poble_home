/**
 * @file Hero.tsx
 * @description High-fidelity landing section featuring an interactive iPad POS simulation.
 */

"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, ClipboardList, BarChart2, Settings, Monitor, CheckCircle2, Trash2, Bell, User } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import DOMPurify from 'isomorphic-dompurify';

interface MenuItem {
    id: string;
    name: string;
    icon: React.ElementType;
}

const DEMO_MENU: MenuItem[] = [
    { id: '1', name: 'Fast Takeaways', icon: ShoppingBag },
    { id: '2', name: 'Smart Ordering', icon: ClipboardList },
    { id: '3', name: 'Live Reports', icon: BarChart2 },
    { id: '4', name: 'Instant Menu', icon: Settings },
    { id: '5', name: 'Customer Screen', icon: Monitor },
];

export const Hero: React.FC = () => {
    const { siteContent } = useAdmin();
    const content = siteContent.sections.find(s => s.id === 'hero')?.content || {};
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [venueName, setVenueName] = useState("Enter venue name");
    const [setupProgress, setSetupProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const toggleItem = (id: string) => {
        setHasInteracted(true);
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const isAllSelected = selectedIds.length === DEMO_MENU.length;

    useEffect(() => {
        if (!isSuccess) {
            setSetupProgress(0);
            setShowButton(false);
        } else {
            const timer1 = setTimeout(() => setSetupProgress(33), 500);
            const timer2 = setTimeout(() => setSetupProgress(66), 1500);
            const timer3 = setTimeout(() => {
                setSetupProgress(100);
                setTimeout(() => setShowButton(true), 500);
            }, 2500);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [isSuccess]);

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-center md:justify-start lg:justify-center overflow-hidden bg-white pt-36 pb-20 md:pt-40 lg:pt-32 lg:pb-16">
            {/* Design Tokens: Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-50/40 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute inset-0 opacity-20 -z-10" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex flex-col justify-center">
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-2 lg:gap-12 xl:gap-16 items-center">
                    {/* Primary Proposition */}
                    <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700 relative z-20">
                        <h1 className="text-5xl sm:text-5xl md:text-[5rem] lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tighter text-poble-charcoal leading-[0.9] mb-8 lg:mb-10 font-heading"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.title?.replace('Clutter', '<span class="text-poble-gold">Clutter</span>').replace('Speed', '<span class="text-slate-300 inline-block transform -skew-x-[8deg]">Speed</span>') || '') }}>
                        </h1>

                        <div className="mb-6 lg:mb-8 font-sans">
                            <p className="text-xl text-poble-charcoal leading-relaxed max-w-2xl font-bold"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.description || '') }}>
                            </p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-4 lg:mt-6 opacity-80">
                                *Compatible with iPad 7th Gen and later.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-8">
                            <button
                                onClick={() => {
                                    if (content.ctaLink) {
                                        window.location.href = content.ctaLink;
                                    } else {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-teal-600 text-white pl-10 pr-3 py-3 rounded-full text-lg font-extrabold hover:bg-poble-charcoal hover:text-white transition-all flex items-center justify-center gap-5 shadow-2xl shadow-slate-200 group tracking-tight cursor-pointer"
                            >
                                {content.ctaText || 'Start Free Trial'}
                                <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
                            </button>

                            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 border border-slate-100 backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-[10px] font-black text-poble-charcoal/60 uppercase tracking-widest">No lock-in contracts</span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive iPad Simulation */}
                    <div className="hidden md:block relative animate-in fade-in zoom-in-95 duration-1000 delay-200 md:scale-[1.05] xl:scale-[1.1] md:origin-center lg:origin-right md:mx-0 lg:mx-0 md:mt-6 lg:mt-0 max-w-3xl lg:translate-x-0">
                        <div className="relative mx-auto w-full aspect-[4/3] bg-gradient-to-b from-[#e2e2e2] via-[#d1d1d1] to-[#b8b8b8] rounded-[2.8rem] md:rounded-[3.2rem] p-[1.5px] shadow-[0_60px_100px_-30px_rgba(0,0,0,0.25),inset_0_1.5px_1px_rgba(255,255,255,0.8)] transition-transform duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-10"></div>

                            {/* Hardware Details */}
                            <div className="absolute top-20 -left-[2.5px] w-[3.5px] h-14 bg-[#999] rounded-l-md border-r border-black/10 z-20 shadow-sm"></div>
                            <div className="absolute -top-[2px] left-24 h-[3.5px] w-14 bg-[#999] rounded-t-lg border-b border-black/10 z-20 shadow-sm"></div>
                            <div className="absolute -top-[2px] left-44 h-[3.5px] w-14 bg-[#999] rounded-t-lg border-b border-black/10 z-20 shadow-sm"></div>

                            <div className="relative w-full h-full bg-[#050505] rounded-[2.5rem] md:rounded-[3.15rem] p-3 md:p-5 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col items-center overflow-hidden">
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[2.5rem] md:rounded-[3.15rem] pointer-events-none"></div>

                                <div className="absolute top-[0.5rem] left-1/2 -translate-x-1/2 z-[60]">
                                    <div className="relative w-2 h-2 rounded-full bg-[#2a2a2a] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                                        <div className="w-0.5 h-0.5 rounded-full bg-slate-400 opacity-80"></div>
                                    </div>
                                </div>

                                <div className="relative flex-grow w-full bg-white rounded-[1.8rem] overflow-hidden flex flex-col shadow-inner">
                                    <div className="absolute inset-0 pointer-events-none z-20">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/[0.03]"></div>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-poble-charcoal/10 rounded-full"></div>
                                    </div>

                                    {/* App Header Simulation */}
                                    <div className="px-10 pt-7 pb-4 flex justify-between items-start relative z-10 md:flex hidden">
                                        <div className="relative group/input">
                                            <div className="flex items-center max-w-[320px] lg:max-w-[420px]">
                                                <div className="relative grid place-items-start overflow-hidden">
                                                    <span className="text-4xl font-black tracking-tight font-heading opacity-0 whitespace-pre pointer-events-none min-w-[50px] py-1">
                                                        {venueName || (content.ipad_venue_name || "Enter Venue Name")}
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={venueName}
                                                        onChange={(e) => setVenueName(e.target.value)}
                                                        onFocus={() => {
                                                            setHasInteracted(true);
                                                            if (venueName === (content.ipad_venue_name || "Enter venue name")) setVenueName("");
                                                        }}
                                                        onBlur={() => { if (!venueName.trim()) setVenueName(content.ipad_venue_name || "Enter venue name"); }}
                                                        className="absolute inset-0 w-full h-full text-4xl font-black text-poble-charcoal tracking-tight font-heading bg-transparent border-none outline-none p-0 focus:ring-0 placeholder:text-slate-200"
                                                        placeholder={content.ipad_venue_name || "Enter venue name"}
                                                    />
                                                </div>
                                                <div className="w-[2.5px] h-[36px] bg-slate-400 cursor-blink mb-0.5 ml-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.3)]"></div>
                                            </div>
                                            <p className="text-base text-slate-600 font-extrabold tracking-tight">
                                                {content.ipad_status_text || <>Management Solution by <span className="text-sm text-red-500">ECNESOFT</span></>}
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm text-slate-500">
                                                <Bell className="w-5 h-5" />
                                            </div>
                                            <div className="w-10 h-10 bg-poble-charcoal rounded-xl flex items-center justify-center shadow-sm text-white">
                                                <User className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex px-3 md:px-10 pb-6 md:pb-12 gap-2 md:gap-8 relative z-10">
                                        <div className="flex-1 flex flex-col justify-center space-y-1.5 md:space-y-2.5">
                                            {DEMO_MENU.map((item) => {
                                                const isSelected = selectedIds.includes(item.id);
                                                return (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => toggleItem(item.id)}
                                                        className={`w-full h-7 md:h-12 rounded-lg md:rounded-2xl border transition-all duration-300 flex items-center px-1.5 md:px-5 gap-1.5 md:gap-4 text-left group whitespace-nowrap relative cursor-pointer ${isSelected
                                                            ? 'bg-white border-poble-gold shadow-sm scale-[1.01]'
                                                            : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-poble-gold/30 hover:shadow-sm'
                                                            }`}
                                                    >
                                                        <div className={`w-4 h-4 md:w-8 md:h-8 rounded-md md:rounded-xl flex items-center justify-center transition-colors shrink-0 cursor-pointer ${isSelected ? 'bg-poble-gold text-white' : 'bg-slate-50 text-slate-500 group-hover:text-poble-gold'
                                                            }`}>
                                                            <item.icon className="w-2.5 h-2.5 md:w-4 md:h-4 cursor-pointer" />
                                                        </div>
                                                        <span className={`text-[8px] md:text-[11px] font-black uppercase tracking-tight transition-colors ${isSelected ? 'text-poble-charcoal' : 'text-slate-600'
                                                            }`}>
                                                            {item.name}
                                                        </span>

                                                        {item.id === '3' && selectedIds.length === 0 && (
                                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none animate-pulse">
                                                                <div className="bg-indigo-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
                                                                    {content.ipad_hint_text || "Click it"}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div className="flex-1 flex flex-col">
                                            <div className="flex-grow bg-[#FBFBFB] border border-slate-100 rounded-[1.8rem] md:rounded-[2.5rem] flex flex-col overflow-hidden relative">
                                                <div className="flex-[0.25] p-2 md:p-7 flex flex-col relative z-10">
                                                    <div className="flex justify-between items-center">
                                                        <span className={`text-[6px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-1000 ease-out ${isAllSelected ? 'text-poble-charcoal' : 'text-slate-400 opacity-20'}`}>Basic Plan</span>
                                                        {selectedIds.length > 0 && (
                                                            <button onClick={() => setSelectedIds([])} className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
                                                                <Trash2 className="w-2.5 h-2.5 md:w-4 md:h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex-[0.75] p-2 md:p-7 pt-0 flex flex-col justify-center items-end relative z-10">
                                                    <div className="text-right w-full">
                                                        <div className="relative flex items-baseline justify-end gap-0.5 min-h-[1.5rem] md:min-h-[4rem]">
                                                            <div className={`flex items-baseline gap-0.5 md:gap-1.5 transition-all duration-1000 ease-out transform ${isAllSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                                                <span className="text-2xl md:text-6xl font-black text-poble-charcoal tracking-tighter">$60</span>
                                                                <span className="text-slate-600 font-black uppercase text-[6px] md:text-[11px] tracking-widest">/ mo</span>
                                                            </div>
                                                            <div className={`absolute right-0 top-0 flex items-baseline gap-0.5 md:gap-1.5 transition-all duration-1000 ease-out transform ${!isAllSelected ? 'opacity-20 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                                                <span className="text-2xl md:text-6xl font-black text-slate-500 tracking-tighter">$0</span>
                                                                <span className="text-slate-500 font-black uppercase text-[6px] md:text-[11px] tracking-widest">/ mo</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => isAllSelected && setIsSuccess(true)}
                                                disabled={!isAllSelected}
                                                className={`mt-1 md:mt-4 w-full py-1.5 md:py-5 rounded-full font-black text-[8px] md:text-[14px] tracking-wide transition-all duration-1000 ease-out cursor-pointer ${isAllSelected
                                                    ? 'bg-poble-gold text-poble-charcoal hover:bg-poble-charcoal hover:text-white shadow-md shadow-slate-200 active:scale-95 translate-y-0'
                                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                Start Sales
                                            </button>
                                        </div>
                                    </div>

                                    {isSuccess && (
                                        <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in-100 duration-500 px-4 md:px-16 overflow-y-auto">
                                            <div className="text-center mb-4 md:mb-8 w-full max-w-sm">
                                                <div className="relative h-12 md:h-16 w-full flex justify-center mb-1 md:mb-2 text-poble-charcoal font-black text-2xl md:text-3xl tracking-tighter">
                                                    <h3 className={`absolute w-full text-center transition-all duration-1000 ease-out ${setupProgress < 100 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                                        {setupProgress < 100 ? (content.ipad_success_title || `Setting Up ${(venueName === "Enter venue name" || !venueName.trim()) ? "Your Venue" : venueName}...`) : (content.ipad_success_ready || `${(venueName === "Enter venue name" || !venueName.trim()) ? "Your Venue" : venueName} is Ready`)}
                                                    </h3>
                                                </div>

                                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-6 mb-2">
                                                    <div className="h-full bg-poble-gold transition-all duration-700 ease-out rounded-full" style={{ width: `${setupProgress}%` }}></div>
                                                </div>
                                                <div className="flex justify-between text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    <span>Initializing</span>
                                                    <span>{setupProgress}% Ready</span>
                                                </div>
                                            </div>

                                            <div className="w-full max-w-[260px] space-y-4 mb-10">
                                                {[
                                                    { label: 'Menu Synced', threshold: 33 },
                                                    { label: 'Printers Connected', threshold: 66 },
                                                    { label: 'Payments Linked', threshold: 100 }
                                                ].map((step, i) => (
                                                    <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${setupProgress >= step.threshold ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${setupProgress >= step.threshold ? 'bg-green-500 scale-100' : 'bg-slate-100 scale-90'}`}>
                                                            {setupProgress >= step.threshold && <CheckCircle2 className="w-4 h-4 text-white animate-in zoom-in duration-300" />}
                                                        </div>
                                                        <span className={`text-sm md:text-base font-extrabold tracking-tight ${setupProgress >= step.threshold ? 'text-poble-charcoal' : 'text-slate-400'}`}>
                                                            {step.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => { setIsSuccess(false); setSelectedIds([]); setSetupProgress(0); setShowButton(false); }}
                                                className={`w-full max-w-[200px] md:max-w-[240px] py-4 bg-poble-gold text-poble-charcoal rounded-full font-black text-[12px] shadow-xl hover:bg-poble-charcoal hover:text-white transition-all duration-1000 ease-out active:scale-95 cursor-pointer ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                                            >
                                                Open Register
                                            </button>

                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-poble-charcoal/10 rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
