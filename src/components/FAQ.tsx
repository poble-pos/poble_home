"use client";

import React, { useState } from "react";

import { useAdmin } from "@/context/AdminContext";

const defaultFaqItems = [
  {
    q: "I'm already using a POS. Is switching complicated?",
    a: "We make it seamless. Our support team is here to guide you through the transition and ensure you're ready to trade without stress.",
  },
  {
    q: "What hardware do I need?",
    a: "You can use standard iPads you may already own. For reliability, we supply and recommend POSBANK receipt printers, ensuring your hardware works perfectly together from day one.",
  },
  {
    q: "Is it hard to set up my menu?",
    a: "No. We help you with the initial configuration and show you exactly how to manage your items, so you can make updates easily whenever you need to.",
  },
  {
    q: "How long does it take staff to learn the system?",
    a: "We've stripped away the clutter found in older systems. Because it looks and feels like a modern app, staff pick it up intuitively, significantly reducing training time.",
  },
  {
    q: "What happens if my internet disconnects?",
    a: "You can keep taking orders because poble is built to handle local interruptions, allowing you to continue service. Data syncs automatically as soon as you're back online.",
  },
];

interface FAQProps {
  content?: {
    title?: string;
    description?: string;
    faq?: Array<{ q: string; a: string; visible: boolean }>;
  };
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  className,
  content: propContent,
}) => {
  const { siteContent } = useAdmin();
  const adminConfig =
    siteContent.sections.find((s) => s.id === "faq")?.content || {};

  // Use propContent if provided, otherwise fallback to adminConfig
  const config = propContent || adminConfig;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const title = config.title || "Seamless Setup & Ongoing Support.";
  const description =
    config.description ||
    "Getting started is simple with our guided installation process. And once you're live, our expert team is available 7 days a week to keep you trading smoothly.";
  const items =
    config.faq?.filter((f: any) => f.visible !== false) || defaultFaqItems;

  return (
    <section
      id="faq"
      className={className || "py-24 bg-white border-b border-slate-100"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
            <div
              className="animate-in fade-in slide-in-from-left-4 duration-700"
              style={{ fontFamily: "monospace" }}
            >
              <p className="text-teal-600 text-xs font-black uppercase tracking-[0.3em] mb-6">
                <span className="text-slate-400">poble@support:~$</span> run
                --onboarding
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-poble-charcoal mb-8 leading-[1.1] font-heading">
                {title.includes(" & ") ? (
                  <>
                    {title.split(" & ")[0]} & <br />
                    <span className="text-slate-400">
                      {title.split(" & ")[1]}
                    </span>
                  </>
                ) : (
                  <>
                    {title.split(" ").slice(0, 2).join(" ")} <br />
                    <span className="text-slate-400">
                      {title.split(" ").slice(2).join(" ")}
                    </span>
                  </>
                )}
              </h2>
              <div className="w-12 h-1 bg-teal-400/60 mb-8"></div>
              {description.includes(". ") ? (
                <>
                  <p className="text-xl text-poble-charcoal font-bold leading-relaxed max-w-md mb-4">
                    {description.split(". ")[0]}.
                  </p>
                  <p className="text-base text-slate-500 font-bold leading-relaxed max-w-md">
                    {description.split(". ").slice(1).join(". ")}
                  </p>
                </>
              ) : (
                <p className="text-xl text-poble-charcoal font-bold leading-relaxed max-w-md mb-4">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Right Column — terminal accordion */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            {/* Terminal window */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              {/* Title bar */}
              <div className="bg-slate-100 px-5 py-3 flex items-center gap-2 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-[11px] text-slate-400 tracking-widest uppercase font-mono">
                  poble — support.sh
                </span>
              </div>

              {/* Body */}
              <div
                className="bg-white px-6 py-6"
                style={{ fontFamily: "monospace" }}
              >
                <p className="text-teal-600 text-xs mb-5 font-mono">
                  <span className="text-slate-400">poble@support:~$</span>{" "}
                  <span className="text-slate-500">./faq --interactive</span>
                </p>

                <div className="space-y-1">
                  {items.map((item: any, idx: number) => {
                    const isOpen = openIdx === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-100 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIdx(isOpen ? null : idx)}
                          className="w-full px-5 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-teal-500 text-xs shrink-0 select-none">
                              {isOpen ? "▼" : "▶"}
                            </span>
                            <span className="text-[11px] text-slate-400 shrink-0 select-none font-mono">
                              [{String(idx + 1).padStart(2, "0")}]
                            </span>
                            <span className="text-sm font-black tracking-tight text-poble-charcoal">
                              {item.q}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-black uppercase tracking-widest shrink-0 ml-4 ${isOpen ? "text-teal-500" : "text-slate-300"}`}
                          >
                            {isOpen ? "OPEN" : "CLOSED"}
                          </span>
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex gap-4">
                              <p className="text-sm text-slate-600 font-bold leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-slate-300 text-xs mt-5 font-mono">
                  — {items.length} entries loaded. Select to expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
