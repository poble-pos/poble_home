"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

const SystemVisual: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`relative w-full aspect-square max-w-sm opacity-20 ${className}`}
  >
    <div className="absolute inset-0 border border-slate-900/10 rounded-full"></div>
    <div className="absolute inset-4 border border-slate-900/5 rounded-full"></div>
    <div className="absolute inset-1/2 -translate-x-px w-px h-full bg-gradient-to-b from-transparent via-slate-900 to-transparent"></div>
    <div className="absolute top-1/2 left-0 -translate-y-px w-full h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent"></div>
    {/* System Node Indicators - Professionally Placed */}
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1.5 h-1.5 bg-poble-gold rounded-full transition-all duration-700 left-1/2 -translate-x-1/2 ${i === 0 ? "top-[20%]" : i === 1 ? "top-[40%]" : i === 2 ? "top-[60%]" : "top-[80%]"}`}
      ></div>
    ))}
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-poble-cream">
      <Navbar />
      <main className="flex-grow pt-0 animate-in fade-in duration-1000">
        {/* 1) Split Hero Section - Full Height & Dynamic */}
        <section className="relative flex flex-col lg:flex-row overflow-clip border-b border-slate-100">
          {/* LEFT: Our Story Narrative */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative overflow-hidden">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
                backgroundSize: "400px 400px",
              }}
            />
            {/* Decorative star */}
            <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={14} height={36} className="absolute top-10 right-10 animate-float opacity-15" style={{ animationDuration: "9s" }} />

            <div className="max-w-xl w-full relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-10 font-heading leading-[0.95] text-poble-charcoal">
                <span className="block animate-reveal-text [animation-delay:200ms]">
                  Our
                </span>
                <span className="block animate-reveal-text [animation-delay:400ms]">
                  <span className="text-slate-400 block transition-transform hover:translate-x-6 duration-700 cursor-default">
                    Story
                  </span>
                </span>
              </h1>
              <div className="signature-bar mb-12">
                <div className="signature-bar-inner"></div>
              </div>
              <div className="space-y-6 animate-reveal-text [animation-delay:700ms]">
                <p className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-poble-charcoal/80 leading-snug max-w-md tracking-tight">
                  POS,{" "}
                  <span className="text-poble-gold font-black">
                    made capable
                  </span>{" "}
                  <br className="hidden md:block" />
                  Designed so your focus <br className="hidden md:block" />
                  belongs to the customer.
                </p>
                <div className="flex items-center gap-4 text-slate-400/60 w-full overflow-hidden">
                  <div className="w-8 h-px bg-slate-200 shrink-0"></div>
                  <div className="flex-grow overflow-hidden relative">
                    <div className="flex whitespace-nowrap animate-marquee">
                      {[1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className="text-[10px] font-black uppercase tracking-[0.3em] pr-8"
                        >
                          Sydney • Melbourne • Brisbane • Perth • Adelaide
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: pos+able Visual Panel */}
          <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center relative p-12 overflow-hidden bg-poble-cream">
            {/* Animated background blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-100 to-amber-50 animate-gradient-flow" />
            <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-white/40 blur-[120px] rounded-full animate-mesh" />
            <div className="absolute bottom-[-15%] right-[-5%] w-[80%] h-[80%] bg-poble-gold/20 blur-[160px] rounded-full animate-mesh [animation-direction:reverse]" />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
                backgroundSize: "400px 400px",
              }}
            />

            {/* Decorative stars */}
            <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={22} height={57} className="absolute top-[8%] left-[12%] animate-float" style={{ opacity: 0.35, animationDuration: "8s" }} />
            <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={16} height={42} className="absolute bottom-[12%] right-[18%] animate-float" style={{ opacity: 0.25, animationDuration: "14s", animationDelay: "3s" }} />

            {/* Central pos+able typographic lockup */}
            <div className="relative z-10 text-center select-none">
              {/* Ghost watermark */}
              <span
                className="absolute inset-0 flex items-center justify-center text-[14vw] lg:text-[10vw] font-black tracking-tighter text-poble-charcoal/[0.04] leading-none pointer-events-none"
                aria-hidden="true"
              >
                poble
              </span>
              <div className="relative flex flex-col items-center gap-6">
                <div className="flex items-center gap-0 font-black tracking-tighter leading-none">
                  <span className="text-[4.5rem] md:text-[6rem] text-poble-charcoal font-roboto">
                    pos
                  </span>
                  {/* Star connector */}
                  <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={28} height={72} className="animate-float mx-1 md:mx-2" style={{ animationDuration: "6s" }} />
                  <span className="text-[4.5rem] md:text-[6rem] text-poble-charcoal font-roboto">
                    able
                  </span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-poble-charcoal/50">
                  Point of Sale — Made Capable
                </p>
                <div className="flex items-center gap-3 opacity-30 mt-4">
                  <div className="w-12 h-px bg-poble-charcoal"></div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-poble-charcoal">
                    Established 2024
                  </div>
                  <div className="w-12 h-px bg-poble-charcoal"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Brand Meaning Section */}
        <section className="py-24 px-8 bg-white border-y border-slate-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          {/* Decorative star */}
          <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={20} height={52} className="absolute bottom-10 right-[10%] animate-float opacity-25" style={{ animationDuration: "12s" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-poble-gold mb-12">
              The Story Behind Poble
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight mb-10 leading-[1.1] font-heading">
              Derived from <br />
              <span className="text-slate-500">POS + able</span>
            </h2>
            <div className="w-12 h-1 bg-poble-gold/60 mb-10 mx-auto"></div>
            <div className="max-w-2xl mx-auto space-y-10">
              <p className="text-xl text-poble-charcoal font-bold leading-relaxed tracking-tight">
                Our name reflects our core mission:{" "}
                <span className="text-poble-gold">
                  enabling merchants to do more.
                </span>
              </p>
              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                We believe technology should empower your team, giving you the
                ability to serve your customers with excellence and ease.
              </p>
            </div>
          </div>
        </section>

        {/* 3) Focus Today / Built for What's Next */}
        <section className="py-24 px-8 relative overflow-hidden bg-white">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          <img src="/images/graphic/star.png" alt="" aria-hidden="true" width={18} height={47} className="absolute top-16 right-[12%] animate-float opacity-20" style={{ animationDuration: "9s" }} />
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-24 lg:gap-40">
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-slate-200"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-poble-gold mb-10">
                  Strategic Focus
                </h3>
                <p className="text-2xl font-black text-poble-charcoal leading-tight mb-6 tracking-tight font-heading">
                  Perfecting your <br />
                  Service Counter
                </p>
                <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>
                <p className="text-slate-600 font-bold text-lg leading-relaxed tracking-tight">
                  Your peak hour is our primary benchmark. We dedicate our
                  development cycles to touch-latency and payment speed, so your
                  queue never stops moving because of your POS.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-slate-200"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
                  Modular Growth
                </h3>
                <p className="text-2xl font-black text-poble-charcoal leading-tight mb-6 tracking-tight font-heading">
                  Built for <br />
                  Your Next Step
                </p>
                <div className="w-12 h-1 bg-poble-gold/60 mb-8"></div>
                <p className="text-slate-600 font-bold text-lg leading-relaxed tracking-tight">
                  As your venue grows, <span className="font-logo">poble</span>{" "}
                  scales with you. Our modular architecture allows you to add
                  capabilities thoughtfully, without introducing unnecessary
                  operational noise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4) Principles Section */}
        <section className="py-24 px-8 overflow-hidden relative bg-[#e0e0e0]">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, #c8c8c8 1px, transparent 1px), linear-gradient(to bottom, #c8c8c8 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-24 font-heading leading-[1.1] text-poble-charcoal">
              What stays{" "}
              <span className="text-poble-charcoal/40">constant for you</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
              {[
                {
                  title: "Visual Clarity",
                  desc: "Interfaces designed for your split-second decisions at the counter.",
                },
                {
                  title: "High-Peak Speed",
                  desc: "Zero-lag responsiveness that keeps up with your busiest hours.",
                },
                {
                  title: "Silent Reliability",
                  desc: "A system so quiet and dependable you can forget it's there.",
                },
                {
                  title: "Ethical Scale",
                  desc: "New features added to help you grow, never to slow you down.",
                },
              ].map((principle, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-poble-charcoal/30 font-black mb-6">
                    0{i + 1}
                  </span>
                  <h4 className="text-xl font-black mb-4 tracking-tight leading-tight text-poble-charcoal">
                    {principle.title}
                  </h4>
                  <p className="text-poble-charcoal/60 font-bold leading-relaxed tracking-tight text-base">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Closing Section */}
        {/* <section className="pt-24 pb-32 px-8 text-center bg-poble-cream relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)', backgroundSize: '400px 400px' }} />
                    <svg viewBox="0 0 20 52" width="18" height="47" fill="#F9C835" aria-hidden="true" className="absolute top-12 right-[8%] animate-float opacity-25" style={{ animationDuration: '10s' }}><path d="M10,0 L13,21 L20,26 L13,31 L10,52 L7,31 L0,26 L7,21 Z" /></svg>
                    <div className="max-w-3xl mx-auto relative z-10">
                        <p className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight leading-[1.1] mb-12 font-heading">
                            Built for the rush <br />
                            <span className="text-slate-400">Engineered for your peace of mind</span>
                        </p>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.3em] opacity-60">
                            Proudly serving venues across Australia
                        </p>
                    </div>
                </section> */}
      </main>
      <Footer />
    </div>
  );
}
