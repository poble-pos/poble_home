/**
 * @component HeroSection
 * @description Renders the brand intro with high-performance CSS animations.
 */

"use client";

import React from "react";

// ---------------------------------------------------------------------------
// Floating 4-pointed star SVG
// ---------------------------------------------------------------------------
const Star: React.FC<{
  size: number;
  style?: React.CSSProperties;
  opacity?: number;
}> = ({ size, style, opacity = 1 }) => (
  <svg
    viewBox="0 0 20 52"
    width={size}
    height={size * 2.6}
    fill="#2a2a2a"
    aria-hidden="true"
    style={{ opacity, ...style }}
  >
    <path d="M10,0 L13,21 L20,26 L13,31 L10,52 L7,31 L0,26 L7,21 Z" />
  </svg>
);

// Small decorative ring / circle outline accent
const Ring: React.FC<{ size: number; style?: React.CSSProperties }> = ({
  size,
  style,
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    aria-hidden="true"
    style={style}
  >
    <circle cx="50" cy="50" r="46" stroke="#2a2a2a" strokeWidth="4" />
    <circle cx="50" cy="50" r="30" stroke="#2a2a2a" strokeWidth="2" strokeDasharray="6 6" />
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row overflow-clip border-b border-slate-100">

      {/* ── LEFT: Our Story Narrative ── */}
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

        {/* Decorative stars — left panel */}
        <div className="absolute top-10 right-10 animate-float" style={{ animationDuration: "9s" }}>
          <Star size={14} opacity={0.15} />
        </div>
        <div className="absolute bottom-16 left-8 animate-float" style={{ animationDuration: "13s", animationDelay: "2s" }}>
          <Star size={9} opacity={0.1} />
        </div>

        <div className="max-w-xl w-full relative z-10">
          <h1 className="text-3xl md:text-3xl lg:text-[4rem] font-black tracking-tighter mb-5 leading-[0.95] text-poble-charcoal">
            <span className="block animate-reveal-text [animation-delay:200ms]">
              Our
            </span>
            <span className="text-slate-300 block transition-transform hover:translate-x-6 duration-700 animate-reveal-text [animation-delay:400ms]">
              Story
            </span>
          </h1>

          <div className="signature-bar mb-12">
            <div className="signature-bar-inner"></div>
          </div>

          <div className="space-y-6 animate-reveal-text [animation-delay:700ms]">
            <p className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-poble-charcoal/80 leading-snug tracking-tight">
              POS,{" "}
              <span className="text-poble-gold font-black">made capable</span>{" "}
              <br />
              Designed so your focus belongs to the customer.
            </p>

            {/* Scale Indicator */}
            <div className="flex items-center gap-4 text-slate-400/60 w-full overflow-hidden">
              <div className="w-8 h-px bg-slate-200 shrink-0"></div>
              <div className="flex-grow overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[...Array(4)].map((_, i) => (
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

      {/* ── RIGHT: pos+able Visual Panel ── */}
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

        {/* Scattered floating stars */}
        <div className="absolute top-[8%] left-[12%] animate-float" style={{ animationDuration: "8s" }}>
          <Star size={22} opacity={0.55} />
        </div>
        <div className="absolute top-[15%] right-[14%] animate-float" style={{ animationDuration: "11s", animationDelay: "1.5s" }}>
          <Star size={11} opacity={0.3} />
        </div>
        <div className="absolute bottom-[12%] right-[18%] animate-float" style={{ animationDuration: "14s", animationDelay: "3s" }}>
          <Star size={28} opacity={0.45} />
        </div>
        <div className="absolute bottom-[22%] left-[8%] animate-float" style={{ animationDuration: "10s", animationDelay: "0.8s" }}>
          <Star size={13} opacity={0.25} />
        </div>
        <div className="absolute top-[45%] right-[6%] animate-float" style={{ animationDuration: "16s", animationDelay: "4s" }}>
          <Star size={8} opacity={0.2} />
        </div>

        {/* Decorative ring accents */}
        <div className="absolute top-[5%] right-[8%] animate-float opacity-20" style={{ animationDuration: "20s", animationDelay: "2s" }}>
          <Ring size={80} />
        </div>
        <div className="absolute bottom-[8%] left-[5%] animate-float opacity-15" style={{ animationDuration: "24s", animationDelay: "6s" }}>
          <Ring size={120} />
        </div>

        {/* Central typographic brand mark */}
        <div className="relative z-10 text-center select-none">
          {/* Large background wordmark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="text-[14vw] lg:text-[10vw] font-black tracking-tighter text-poble-charcoal/[0.04] leading-none"
              aria-hidden="true"
            >
              poble
            </span>
          </div>

          {/* Main pos+able lockup */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex items-center gap-0 font-black tracking-tighter leading-none">
              <span className="text-[4.5rem] md:text-[6rem] text-poble-charcoal font-roboto">
                pos
              </span>
              {/* Plus-star connector */}
              <span className="relative mx-1 md:mx-2">
                <svg
                  viewBox="0 0 20 52"
                  width="28"
                  height="72"
                  fill="#F9C835"
                  aria-hidden="true"
                  className="animate-float"
                  style={{ animationDuration: "6s" }}
                >
                  <path d="M10,0 L13,21 L20,26 L13,31 L10,52 L7,31 L0,26 L7,21 Z" />
                </svg>
              </span>
              <span className="text-[4.5rem] md:text-[6rem] text-poble-charcoal font-roboto">
                able
              </span>
            </div>

            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-poble-charcoal/50">
              Point of Sale — Made Capable
            </p>

            {/* Branding bar */}
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
  );
};
