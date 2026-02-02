"use client";

import React, { useState } from "react";
import {
    Cloud,
    Zap,
    CreditCard,
    RefreshCcw,
    LayoutGrid,
    Users,
    Plus,
    Minus,
} from "lucide-react";
import { useAdmin } from "@/context/AdminContext";

interface FeatureCardProps {
    title: string[];
    collapsedDesc: string;
    expandedDesc: string;
    icon: React.ElementType;
    isExpanded: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    onToggleClick: () => void;
    uiMockup: React.ReactNode;
    image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    collapsedDesc,
    expandedDesc,
    icon: Icon,
    isExpanded,
    onHoverStart,
    onHoverEnd,
    onToggleClick,
    uiMockup,
    image,
}) => {
    return (
        <div
            className={`group border-2 rounded-[2.5rem] transition-all duration-500 overflow-hidden select-none cursor-pointer
      ${isExpanded
                    ? "border-poble-gold bg-white shadow-[0_40px_80px_-15px_rgba(255,184,0,0.15)]"
                    : "border-slate-100 bg-slate-50 hover:border-poble-gold/40 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
                }`}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            onFocus={onHoverStart}
            onBlur={onHoverEnd}
            onClick={onToggleClick}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
        >
            <div className="p-10 flex flex-col h-[560px]">
                <div className="flex items-start gap-5 mb-8">
                    <div className="flex flex-col items-center gap-4 shrink-0">
                        <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isExpanded
                                ? "bg-poble-gold text-poble-charcoal shadow-lg shadow-poble-gold/20"
                                : "bg-white text-slate-400 border border-slate-100 group-hover:text-poble-gold"
                                }`}
                        >
                            <Icon className="w-6 h-6" strokeWidth={2.5} />
                        </div>

                        <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-sm ${isExpanded
                            ? 'bg-white border-slate-200 text-slate-400'
                            : 'bg-poble-gold border-poble-gold text-poble-charcoal shadow-poble-gold/20'
                            }`}>
                            {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                    </div>

                    <h3 className="text-2xl font-black text-poble-charcoal tracking-tight leading-[1.1] font-heading pt-1.5">
                        {title[0]} <br />
                        <span className="text-slate-500">{title[1]}</span>
                    </h3>
                </div>

                <div className="relative h-[170px]">
                    <p
                        className={`absolute inset-0 text-poble-charcoal/80 font-bold text-lg leading-relaxed transition-all duration-300
            ${isExpanded ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}
            `}
                    >
                        {collapsedDesc}
                    </p>
                    <p
                        className={`absolute inset-0 text-poble-charcoal font-bold text-lg leading-relaxed transition-all duration-300
            ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
            `}
                    >
                        {expandedDesc}
                    </p>
                </div>

                <div
                    className={`mt-auto relative w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 h-[210px]
          transition-all duration-300
          ${isExpanded ? "opacity-100" : "opacity-70 group-hover:opacity-90"}
          `}
                >
                    <div
                        className={`h-full w-full transition-all duration-300
            ${isExpanded ? "scale-100" : "scale-[0.98]"}
            `}
                    >
                        {image ? (
                            <img src={image} alt={title.join(' ')} className="w-full h-full object-cover" />
                        ) : uiMockup}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* -------------------- UI Mockups (from 3009) -------------------- */
const MockupCloud = () => (
    <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
            <div className="h-6 w-12 bg-poble-gold rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {[1, 2].map((i) => (
                <div key={i} className="h-12 bg-white rounded-xl border border-slate-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-slate-50"></div>
                    <div className="h-2 w-12 bg-slate-100 rounded-full"></div>
                </div>
            ))}
        </div>
    </div>
);

const MockupOrder = () => (
    <div className="p-4 flex gap-4 h-full">
        <div className="flex-1 space-y-3">
            {[1, 2].map((i) => (
                <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center shadow-sm">
                    <div className="h-1.5 w-16 bg-slate-100 rounded-full"></div>
                    <div className="h-1.5 w-8 bg-poble-gold/40 rounded-full"></div>
                </div>
            ))}
        </div>
        <div className="w-1/3 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-end">
            <div className="h-3 w-full bg-poble-charcoal rounded-lg"></div>
        </div>
    </div>
);

const MockupPayment = () => (
    <div className="p-8 flex flex-col items-center justify-center gap-4 h-full">
        <div className="w-20 h-28 bg-slate-800 rounded-2xl p-3 flex flex-col gap-2 relative border border-slate-700">
            <div className="h-6 w-full bg-slate-700 rounded-lg"></div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-1 bg-slate-600 rounded-full"></div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-poble-gold">Terminal Connected</div>
    </div>
);

const MockupMenu = () => (
    <div className="p-4 grid grid-cols-3 gap-2 relative">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center border relative ${i === 3 ? "bg-red-50 border-red-100" : "bg-white border-slate-100"
                    }`}
            >
                <div className={`w-[85%] h-[85%] rounded-lg ${i === 3 ? "bg-red-200/50" : "bg-slate-50"}`} />
            </div>
        ))}
    </div>
);

const MockupTable = () => (
    <div className="p-6 grid grid-cols-3 gap-6 h-full place-content-center">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${i % 3 === 0
                    ? "bg-poble-gold/10 border-poble-gold text-poble-gold"
                    : "bg-white border-slate-200 text-slate-300"
                    }`}
            >
                <span className="text-[10px] font-black">{i}</span>
            </div>
        ))}
    </div>
);

const MockupCRM = () => (
    <div className="p-6 space-y-4 h-full flex flex-col justify-center">
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-200"></div>
            <div className="space-y-1">
                <div className="h-2.5 w-16 bg-slate-300 rounded-full"></div>
                <div className="h-1.5 w-24 bg-slate-100 rounded-full"></div>
            </div>
        </div>
        <div className="h-7 w-full bg-poble-gold/20 rounded-xl flex items-center justify-center">
            <div className="h-1.5 w-32 bg-poble-gold/60 rounded-full"></div>
        </div>
    </div>
);

export const InteractiveFeatures: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.type === 'InteractiveFeatures')?.content || {};
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const getSplitTitle = (titleStr?: string) => {
        if (!titleStr) return ["", ""];
        if (titleStr.includes('|')) return titleStr.split('|');
        const parts = titleStr.split(' ');
        if (parts.length <= 1) return [titleStr, ""];
        return [parts[0], parts.slice(1).join(' ')];
    };

    const features = [
        {
            title: getSplitTitle(config.feature1_title),
            collapsedDesc: config.feature1_collapsed || "Control menus and staff access with ease. Everything stays in sync across your POS.",
            expandedDesc: config.feature1_desc || "Manage menus, prices, and staff permissions directly on the POS. No separate back office, no delays — changes sync smoothly across your store.",
            icon: Cloud,
            mockup: <MockupCloud />,
            image: config.feature1_image,
        },
        {
            title: getSplitTitle(config.feature2_title),
            collapsedDesc: config.feature2_collapsed || "Built for peak-hour service. Orders move fast without slowing your team.",
            expandedDesc: config.feature2_desc || "Designed for busy service counters. Takeaway, dine-in, and phone orders flow smoothly so staff stay focused on service, not the screen.",
            icon: Zap,
            mockup: <MockupOrder />,
            image: config.feature2_image,
        },
        {
            title: getSplitTitle(config.feature3_title),
            collapsedDesc: config.feature3_collapsed || "Native EFTPOS integration for Australian venues. No double handling.",
            expandedDesc: config.feature3_desc || "Integrated with Tyro and Linkly for a direct terminal workflow. The amount is sent straight from the iPad to EFTPOS, reducing errors and speeding up checkout.",
            icon: CreditCard,
            mockup: <MockupPayment />,
            image: config.feature3_image,
        },
        {
            title: getSplitTitle(config.feature4_title),
            collapsedDesc: config.feature4_collapsed || "Edit menus instantly. Updates apply right away.",
            expandedDesc: config.feature4_desc || "Update prices or mark items sold out directly on the POS. All terminals stay aligned in real time, without reloading or manual refresh.",
            icon: RefreshCcw,
            mockup: <MockupMenu />,
            image: config.feature4_image,
        },
        {
            title: getSplitTitle(config.feature5_title),
            collapsedDesc: config.feature5_collapsed || "Clear table layouts and kitchen display support. Keep service flowing.",
            expandedDesc: config.feature5_desc || "Visual table layouts help manage dine-in service at a glance. Orders are sent straight to the kitchen display, reducing missed tickets and confusion.",
            icon: LayoutGrid,
            mockup: <MockupTable />,
            image: config.feature5_image,
        },
        {
            title: getSplitTitle(config.feature6_title),
            collapsedDesc: config.feature6_collapsed || "Built-in loyalty and online ordering to support repeat customers.",
            expandedDesc: config.feature6_desc || "Reward regulars with points and vouchers. Online orders flow directly into the POS, without third-party complexity.",
            icon: Users,
            mockup: <MockupCRM />,
            image: config.feature6_image,
        },
    ];

    const description = config.description || "A seamless bridge between your counter, your kitchen, and your back office. Through poble, you gain the system-wide visibility you need to run a flawless operation.";

    return (
        <section id="features" className="scroll-mt-28 py-16 bg-white relative overflow-hidden border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-24">
                    <p className="text-poble-gold font-black text-xs uppercase tracking-[0.3em] mb-6">
                        Hospitality Intelligence
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-poble-charcoal leading-[1.1] font-heading">
                        {config.title || "Smart Tools"} <br />
                        <span className="text-slate-400">{config.subtitle || "for your Venue."}</span>
                    </h2>
                    <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>
                    <p className="text-xl text-poble-charcoal leading-relaxed font-bold max-w-2xl">
                        {description.includes('poble') ? (
                            <>
                                {description.split('poble')[0]}
                                <span className="font-logo">poble</span>
                                {description.split('poble')[1]}
                            </>
                        ) : description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            title={feature.title}
                            collapsedDesc={feature.collapsedDesc}
                            expandedDesc={feature.expandedDesc}
                            icon={feature.icon}
                            isExpanded={expandedIndex === idx}
                            onHoverStart={() => setExpandedIndex(idx)}
                            onHoverEnd={() => setExpandedIndex((cur) => (cur === idx ? null : cur))}
                            onToggleClick={() => setExpandedIndex((cur) => (cur === idx ? null : idx))}
                            uiMockup={feature.mockup}
                            image={feature.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
