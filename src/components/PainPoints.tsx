/**
 * @file PainPoints.tsx
 * @description Scrolling news-ticker showcase of key business impacts.
 */

"use client";

import { useAdmin } from "@/context/AdminContext";
import React from "react";

export const PainPoints: React.FC = () => {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.id === "pain-points")?.content || {};

  const items = [
    {
      text:
        config.feature1_desc ||
        "End your day in seconds. Automated reconciliation ensures your dockets and payments always match.",
    },
    {
      text:
        config.feature2_desc ||
        "Never miss a docket. Our high-performance brain stays responsive even when the queue is out the door.",
    },
    {
      text:
        config.feature3_desc ||
        "Staff ready on Day 1. An interface so intuitive that new team members hit the ground running.",
    },
  ];

  // Duplicate for seamless loop
  const ticker = [...items, ...items, ...items];

  return (
    <section
      className="relative overflow-hidden py-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #032689 0%, #0a3aaa 45%, #1a4fc4 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "400px 400px",
        }}
      />

      <style>{`
        @keyframes twinkle {
          0%,100% { opacity: 0.08; transform: scale(0.8); }
          50%      { opacity: 0.55; transform: scale(1.2); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .ticker-track {
          animation: ticker 50s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ticker band */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/20 py-1">
        <div
          className="ticker-track flex items-center gap-0 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {ticker.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <span className="inline-flex items-center px-3">
                  <span className="font-mono font-bold text-white text-4xl">
                    {item.text}
                  </span>
                </span>
                {/* <img
                  src="/images/graphic/star.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="shrink-0 opacity-40"
                  style={{ filter: "brightness(0) invert(1)" }}
                /> */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
