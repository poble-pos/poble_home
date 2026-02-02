/**
 * @component PricingCarousel
 * @description Symmetrically balanced pricing explorer. 
 * Refined with "No-Nonsense" Aussie hospitality language. 
 * Focused on practical, immediate benefits to avoid redundancy with technical showcases.
 */

"use client";

import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Sparkles, X, Eye, Zap } from 'lucide-react';

interface FeatureDetail {
    title: string;
    benefit: string;
    description: string;
    image: string;
}

const FEATURE_DETAILS: Record<string, FeatureDetail> = {
    'Takeaway & Quick Service': {
        title: 'Optimised for Speed',
        benefit: 'Keep the queue moving.',
        description: 'Dedicated flows for takeaway orders. Clear alerts help your team serve pickup customers fast without blocking the counter.',
        image: 'https://images.unsplash.com/photo-1507133750040-4a8f9489d35f?auto=format&fit=crop&q=80&w=600&h=400'
    },
    'Complete Order Management': {
        title: 'Handle the Rush',
        benefit: 'No more missed orders.',
        description: 'Reliable, high-speed ordering that keeps up with your team during peak service. Designed to reduce taps and human errors.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=400'
    },
    'Basic Reports & Analytics': {
        title: 'Daily Pocket Summary',
        benefit: 'Know your profit in seconds.',
        description: 'No more complex spreadsheets. Get a simple summary of your sales and top-selling items sent straight to your phone every afternoon.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400'
    },
    'Menu & Category Management': {
        title: 'Change Prices Instantly',
        benefit: 'Out of stock? Fix it in seconds.',
        description: 'Update your entire menu or adjust a price across all terminals instantly. Simple controls that anyone on your team can learn in minutes.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600&h=400'
    },
    'Dual Screen / Customer Display': {
        title: 'Professional Checkout',
        benefit: 'Build trust with customers.',
        description: 'Give customers confidence with a real-time view of their order. Professional, transparent checkout that reduces disputes.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600&h=400'
    }
};

import { useAdmin } from '@/context/AdminContext';

export const PricingCarousel: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.type === 'Pricing')?.content || {};

    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [showImageModal, setShowImageModal] = useState(false);

    const carouselItems = config.carousel_items || [
        {
            label: 'Takeaway & Quick Service',
            title: 'Optimised for Speed',
            benefit: 'Keep the queue moving.',
            description: 'Dedicated flows for takeaway orders.',
            images: [
                'https://images.unsplash.com/photo-1507133750040-4a8f9489d35f?auto=format&fit=crop&q=80&w=600&h=400'
            ]
        },
        {
            label: 'Complete Order Management',
            title: 'Handle the Rush',
            benefit: 'No more missed orders.',
            description: 'Reliable, high-speed ordering.',
            images: [
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=400'
            ]
        },
        {
            label: 'Basic Reports & Analytics',
            title: 'Daily Pocket Summary',
            benefit: 'Know your profit in seconds.',
            description: 'Simple summary of your sales.',
            images: [
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400'
            ]
        },
        {
            label: 'Menu & Category Management',
            title: 'Change Prices Instantly',
            benefit: 'Out of stock? Fix it in seconds.',
            description: 'Update your entire menu instantly.',
            images: [
                'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600&h=400'
            ]
        },
        {
            label: 'Dual Screen / Customer Display',
            title: 'Professional Checkout',
            benefit: 'Build trust with customers.',
            description: 'Real-time view of their order.',
            images: [
                'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600&h=400'
            ]
        }
    ];

    const currentIdx = selectedIdx !== null ? selectedIdx : hoveredIdx;
    const currentItem = currentIdx !== null ? carouselItems[currentIdx] : null;

    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // Reset image index when changing feature
    useEffect(() => {
        setCurrentImageIdx(0);
    }, [currentIdx]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedIdx(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const PANEL_WIDTH = "max-w-[420px]";
    const PANEL_HEIGHT = "h-[660px]";

    return (
        <div className="w-full max-w-5xl mx-auto py-8 px-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 transition-all">

                {/* 1. Left Panel: Pricing Plan */}
                <div className={`w-full ${PANEL_WIDTH} ${PANEL_HEIGHT} shrink-0 bg-white text-poble-charcoal rounded-[2.5rem] p-8 md:p-10 md:pb-14 border-2 border-poble-gold shadow-xl relative z-20 flex flex-col`}>
                    <div className="mb-6">
                        <span className="bg-[#E9EEF2] text-[#718096] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1rem]">
                            {config.plan_badge || "30-Day Free Trial"}
                        </span>
                    </div>

                    <div className="mb-8 border-b border-slate-100 pb-8 shrink-0">
                        <h3 className="text-4xl font-black text-[#2D3748] mb-2 font-heading tracking-tight">
                            {config.plan_title || "Basic"}
                        </h3>
                        <div className="flex items-baseline gap-1.5 mb-3">
                            <span className="text-3xl font-black text-[#2D3748]">{config.plan_currency || '$'}{config.plan_price || '60'}</span>
                            <span className="text-lg font-bold text-[#4A5568]">/ {config.plan_period || 'mo'}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed">
                            {config.plan_desc || "Perfect for individuals and small businesses"}
                        </p>
                    </div>

                    <div className="mb-8 shrink-0">
                        <a
                            href={config.plan_ctaLink || "https://backoffice.poble.com.au"}
                            className="w-full py-4 rounded-full bg-[#4F9185] text-white font-extrabold text-lg tracking-tight transition-all flex items-center justify-center gap-5 hover:bg-[#3D7268] hover:scale-[1.02] shadow-xl shadow-[#4F9185]/20 active:scale-95 cursor-pointer no-underline"
                        >
                            {config.plan_ctaText || "Start free trial"}
                            <ArrowRight className="w-6 h-6 text-white" />
                        </a>
                    </div>

                    <ul className="space-y-1.5 flex-1 overflow-visible">
                        {carouselItems.map((item: any, idx: number) => (
                            <li
                                key={idx}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
                                className={`flex items-center gap-4 group p-2.5 -mx-2.5 rounded-xl transition-all cursor-pointer select-none ring-1 ring-inset ring-transparent
                                    ${currentIdx === idx ? 'bg-slate-50 ring-poble-gold/10' : ''}
                                    ${selectedIdx === idx ? 'bg-poble-gold/10 ring-poble-gold/30 shadow-inner' : ''}`}
                            >
                                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all 
                                    ${currentIdx === idx ? 'bg-poble-gold shadow-sm' : 'bg-[#FFF9E6]'}`}>
                                    <Check className={`w-3 h-3 transition-colors ${currentIdx === idx ? 'text-white' : 'text-[#F6AD55]'}`} strokeWidth={4} />
                                </div>
                                <span className={`text-[15px] font-bold tracking-tight transition-colors flex-1 leading-tight
                                    ${currentIdx === idx ? 'text-poble-charcoal' : 'text-[#2D3748]'}`}>
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Right Panel: Dynamic Showcase with Warm & Clean Aesthetics */}
                <div className={`w-full ${PANEL_WIDTH} ${PANEL_HEIGHT} shrink-0 relative lg:block`}>
                    <div className={`transition-all duration-500 rounded-[2.5rem] h-full flex flex-col overflow-hidden border-2 relative
                        ${currentItem ? 'bg-slate-900 border-white/5 shadow-2xl' : 'bg-[#FAF9F6] border-[#F2F0ED]'}`}>

                        {currentItem ? (
                            <div key={currentIdx} className="flex flex-col h-full animate-in fade-in duration-500">
                                <div
                                    className="h-80 shrink-0 relative overflow-hidden group/image cursor-zoom-in"
                                    onClick={() => setShowImageModal(true)}
                                >
                                    <img
                                        src={Array.isArray(currentItem.images) ? currentItem.images[currentImageIdx] : currentItem.image}
                                        alt={currentItem.label}
                                        className="w-full h-full object-cover saturate-[1.1] contrast-[1.05] transition-transform duration-700 ease-out group-hover/image:scale-[1.02]"
                                    />
                                    {/* Gradient overlay removed for clarity */}
                                    <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-poble-gold/90 backdrop-blur-md rounded-full shadow-lg">
                                        <Sparkles className="w-3.5 h-3.5 text-poble-charcoal" />
                                        <span className="text-poble-charcoal font-black text-[9px] uppercase tracking-[0.15rem]">Plan Highlight</span>
                                    </div>

                                    {/* Image Navigation Dots */}
                                    {(Array.isArray(currentItem.images) && currentItem.images.length > 1) && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                                            {currentItem.images.map((_: any, idx: number) => (
                                                <button
                                                    key={idx}
                                                    title={`View image ${idx + 1}`}
                                                    aria-label={`View image ${idx + 1}`}
                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIdx(idx); }}
                                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIdx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                                        <div className="bg-white/90 backdrop-blur text-poble-charcoal px-4 py-2 rounded-full font-bold text-xs shadow-xl transform translate-y-4 group-hover/image:translate-y-0 transition-all">
                                            Click to Expand
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 space-y-6 flex-1 flex flex-col justify-center bg-slate-900">
                                    <h4 className="text-3xl font-black text-white leading-tight tracking-tight font-heading">
                                        {currentItem.title}
                                    </h4>

                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                        <p className="text-poble-gold font-bold text-lg italic leading-snug">
                                            "{currentItem.benefit}"
                                        </p>
                                    </div>

                                    <p className="text-slate-300 text-base font-bold leading-relaxed">
                                        {currentItem.description}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* Welcoming State: Enhanced Visual Balance */
                            <div key="welcoming" className="flex flex-col h-full animate-in fade-in duration-700">
                                <div className="h-[55%] shrink-0 relative overflow-hidden">
                                    <img
                                        src={config.backgroundImage || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"}
                                        alt="Poble Venue"
                                        className="w-full h-full object-cover scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                    {/* Elevated Icon Overlay */}
                                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-white shadow-2xl rounded-2xl flex items-center justify-center border border-slate-50 transition-transform hover:scale-110">
                                        <Zap className="w-8 h-8 text-poble-gold" />
                                    </div>
                                </div>

                                <div className="p-10 space-y-6 flex-1 flex flex-col justify-center items-center text-center bg-[#FDFCF9] border-t border-slate-100">
                                    <div className="space-y-4">
                                        <h4 className="text-3xl font-black text-poble-charcoal tracking-tight font-heading leading-tight">
                                            Everything <br />
                                            <span className="text-[#4F9185]">for Day 1</span>
                                        </h4>
                                        <p className="text-poble-charcoal/60 text-base font-bold leading-relaxed max-w-[280px] mx-auto">
                                            Simple, powerful tools to run your venue. Scroll the list to see what's included.
                                        </p>
                                    </div>

                                    <div className="pt-4 flex items-center gap-3 text-xs font-black text-poble-gold uppercase tracking-[0.25rem] animate-pulse">
                                        <Eye className="w-4 h-4" />
                                        Explore features
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Full Screen Image Modal */}
            {
                showImageModal && currentItem && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200 p-4 md:p-8"
                        onClick={() => setShowImageModal(false)}
                    >
                        <button
                            onClick={() => setShowImageModal(false)}
                            title="Close modal"
                            aria-label="Close modal"
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div
                            className="relative max-w-5xl w-full max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={Array.isArray(currentItem.images) ? currentItem.images[currentImageIdx] : currentItem.image}
                                alt={currentItem.label}
                                className="w-full h-full object-contain bg-black"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-10 pt-20">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{currentItem.title}</h3>
                                <p className="text-slate-300 font-bold text-lg">{currentItem.benefit}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};
