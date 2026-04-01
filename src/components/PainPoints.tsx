/**
 * @file PainPoints.tsx
 * @description Full-screen slideshow showcasing key business impacts.
 */

"use client";

import { Activity, Sparkles, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

import { useAdmin } from "@/context/AdminContext";

export const PainPoints: React.FC = () => {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.id === "pain-points")?.content || {};

  const slides = [
    {
      label: config.feature1_title || "The Balancing Act",
      title:
        config.feature1_desc ||
        "End your day in seconds. Automated reconciliation ensures your dockets and payments always match.",
      icon: Activity,
      accent: "#febc2e",
    },
    {
      label: config.feature2_title || "Ready for the Rush",
      title:
        config.feature2_desc ||
        "Never miss a docket. Our high-performance brain stays responsive even when the queue is out the door.",
      icon: Zap,
      accent: "#60a5fa",
    },
    {
      label: config.feature3_title || "Zero Training",
      title:
        config.feature3_desc ||
        "Staff ready on Day 1. An interface so intuitive that new team members hit the ground running.",
      icon: Sparkles,
      accent: "#4ade80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [current, paused, animating]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #4692c8 0%, #66a6cc 45%, #86b9d5 100%)",
        height: "100vh",
        minHeight: "600px",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

      {/* Twinkling stars */}
      <style>{`
        @keyframes twinkle {
          0%,100% { opacity: 0.08; transform: scale(0.8); }
          50%      { opacity: 0.55; transform: scale(1.2); }
        }
        @keyframes slide-up-in {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-out {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-60px); }
        }
        .slide-enter { animation: slide-up-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        .slide-exit  { animation: slide-up-out 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
      {/* 
      {[
        { top: "8%", left: "5%", size: 10, delay: "0s", dur: "2.4s" },
        { top: "18%", left: "22%", size: 7, delay: "0.6s", dur: "3.1s" },
        { top: "6%", left: "42%", size: 9, delay: "1.2s", dur: "2.8s" },
        { top: "12%", left: "78%", size: 11, delay: "1.8s", dur: "2.2s" },
        { top: "75%", left: "68%", size: 7, delay: "1.5s", dur: "2.9s" },
        { top: "85%", left: "88%", size: 9, delay: "0.7s", dur: "2.5s" },
        { top: "40%", left: "92%", size: 6, delay: "2.4s", dur: "3.2s" },
        { top: "90%", left: "15%", size: 6, delay: "0.2s", dur: "2.3s" },
      ].map((s, i) => (
        <img
          key={i}
          src="/images/graphic/star.png"
          alt=""
          aria-hidden="true"
          width={s.size}
          height={s.size}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
            filter: "brightness(0) invert(1)",
          }}
        />
      ))} */}

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 lg:px-32">
        {/* Section label */}
        {/* <p className="text-yellow-300 font-black text-xs uppercase tracking-[0.3em] mb-12 z-10">
          Business Impact
        </p> */}

        {/* Slide area */}
        <div
          className="relative w-full max-w-6xl text-center z-10"
          style={{ minHeight: "340px" }}
        >
          {slides.map((slide, idx) => {
            const isCurrent = idx === current;
            const isPrev = idx === prev;
            if (!isCurrent && !isPrev) return null;
            const Icon = slide.icon;
            return (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center ${isCurrent ? "slide-enter" : "slide-exit"}`}
              >
                {/* Icon */}
                {/* <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border border-white/20"
                  style={{ background: `${slide.accent}22` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: slide.accent }}
                    strokeWidth={2}
                  />
                </div> */}

                {/* Label */}
                {/* <p
                  className="font-black text-xs uppercase tracking-[0.4em] mb-6"
                  style={{ color: slide.accent }}
                >
                  {slide.label}
                </p> */}

                {/* Main title — big serif */}
                <h2
                  className="font-playfair font-black text-white leading-tight"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 6rem)",
                    letterSpacing: "-0.02em",
                    maxWidth: "900px",
                    maxHeight: "12ch",
                  }}
                >
                  {slide.title}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Progress bar + dots */}
        <div className="z-10 mt-36 flex flex-col items-center gap-6">
          {/* Slide counter */}
          {/* <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p> */}

          {/* Dots */}
          {/* <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  width: idx === current ? "2.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  background:
                    idx === current ? "#febc2e" : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div> */}

          {/* Progress bar */}
          {/* <div className="w-48 h-px bg-white/10 overflow-hidden">
            <div
              className="h-full bg-yellow-300 transition-none"
              style={{
                width: "100%",
                animation: paused ? "none" : `progress-bar 5s linear infinite`,
              }}
            />
          </div> */}
        </div>
      </div>

      <style>{`
        @keyframes progress-bar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  );
};
