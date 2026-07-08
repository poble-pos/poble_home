"use client";

import {
    Cloud,
    CreditCard,
    LayoutGrid,
    RefreshCcw,
    Users,
    Zap,
} from "lucide-react";

import { useAdmin } from "@/context/AdminContext";
import React from "react";

interface FeatureCardProps {
  title: string[];
  desc: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  desc,
  icon: Icon,
}) => (
  <div className="p-6 border border-slate-100 bg-white rounded-2xl hover:border-slate-200 hover:shadow-sm transition-all duration-200">
    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">
      <Icon className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
    </div>
    <h3 className="text-base font-bold text-poble-charcoal tracking-tight mb-2 font-heading">
      {title[0]}
      {title[1] ? <span className="text-slate-400"> {title[1]}</span> : null}
    </h3>
    <p className="text-sm text-slate-400 leading-relaxed font-medium">{desc}</p>
  </div>
);

export const InteractiveFeatures: React.FC = () => {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.type === "InteractiveFeatures")
      ?.content || {};

  const getSplitTitle = (titleStr?: string) => {
    if (!titleStr) return ["", ""];
    if (titleStr.includes("|")) return titleStr.split("|");
    const parts = titleStr.split(" ");
    if (parts.length <= 1) return [titleStr, ""];
    return [parts[0], parts.slice(1).join(" ")];
  };

  const features = [
    {
      title: getSplitTitle(config.feature1_title),
      desc:
        config.feature1_collapsed ||
        "Control menus and staff access with ease. Everything stays in sync across your POS.",
      icon: Cloud,
    },
    {
      title: getSplitTitle(config.feature2_title),
      desc:
        config.feature2_collapsed ||
        "Built for peak-hour service. Orders move fast without slowing your team.",
      icon: Zap,
    },
    {
      title: getSplitTitle(config.feature3_title),
      desc:
        config.feature3_collapsed ||
        "Native EFTPOS integration for Australian venues. No double handling.",
      icon: CreditCard,
    },
    {
      title: getSplitTitle(config.feature4_title),
      desc:
        config.feature4_collapsed ||
        "Edit menus instantly. Updates apply right away.",
      icon: RefreshCcw,
    },
    {
      title: getSplitTitle(config.feature5_title),
      desc:
        config.feature5_collapsed ||
        "Clear table layouts and kitchen display support. Keep service flowing.",
      icon: LayoutGrid,
    },
    {
      title: getSplitTitle(config.feature6_title),
      desc:
        config.feature6_collapsed ||
        "Built-in loyalty and online ordering to support repeat customers.",
      icon: Users,
    },
  ];

  const description =
    config.description ||
    "A seamless bridge between your counter, your kitchen, and your back office. Through poble, you gain the system-wide visibility you need to run a flawless operation.";

  return (
    <section
      id="features"
      className="scroll-mt-28 py-16 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-poble-charcoal leading-[1.1] font-heading">
            {config.title || "Smart Tools"}{" "}
            <span className="text-slate-400">
              {config.subtitle || "for your Venue."}
            </span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-medium max-w-xl">
            {description.includes("poble") ? (
              <>
                {description.split("poble")[0]}
                <span className="font-logo">poble</span>
                {description.split("poble")[1]}
              </>
            ) : (
              description
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
