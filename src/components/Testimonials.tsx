/**
 * @file Testimonials.tsx
 * @description Social proof and user feedback carousel.
 * Highlighting business impact for Sydney, Melbourne, and Brisbane venues.
 */

"use client";

import { useAdmin } from "@/context/AdminContext";
import { Star } from "lucide-react";
import React from "react";

export const Testimonials: React.FC = () => {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.id === "testimonials")?.content || {};

  const reviews = [
    {
      id: 1,
      quote:
        config.quote1_text ||
        "The fastest system we have ever used. Staff picked it up in minutes.",
      author: config.quote1_author || "Sarah M.",
      role: config.quote1_venue || "The Corner Cafe",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: 2,
      quote:
        config.quote2_text ||
        "It just works. No more printer errors or sync issues.",
      author: config.quote2_author || "James L.",
      role: config.quote2_venue || "Bayside Bistro",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: 3,
      quote:
        config.quote3_text ||
        "We use two POS terminals to handle entry ticketing and café orders simultaneously.",
      author: config.quote3_author || "Sarah Lee",
      role: config.quote3_venue || "Kidsday (Sydney)",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ];

  const title = config.title || "❤️ by Aussie Venues";
  const description =
    config.description ||
    "Join hundreds of cafes, bars and restaurants that have switched to poble for a faster, simpler service.";
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Line grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
          backgroundSize: "400px 400px",
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-poble-gold/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ fontFamily: "monospace" }}
        >
          <p className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-6">
            <span className="text-slate-400">poble@reviews:~$</span> fetch
            --verified
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight mb-8 leading-[1.1] font-heading">
            {title.split(" ").slice(0, 2).join(" ")} <br />
            <span className="text-slate-400">
              {title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <div className="w-12 h-1 bg-teal-400/60 mb-8 mx-auto"></div>
          <p className="text-lg text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto font-mono">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                i === 0 ? "delay-0" : i === 1 ? "delay-150" : "delay-300"
              }`}
              style={{ fontFamily: "monospace" }}
            >
              {/* Terminal title bar */}
              <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-slate-400 tracking-widest uppercase">
                  {review.role}
                </span>
              </div>

              {/* Card body */}
              <div className="bg-white p-6">
                <p className="text-teal-600 text-[10px] mb-4">
                  <span className="text-slate-400">venue@poble:~$</span>{" "}
                  <span className="text-slate-500">cat review.txt</span>
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 text-poble-gold fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-poble-charcoal font-bold text-base leading-relaxed mb-6">
                  <span className="text-slate-400 mr-1">//</span> &quot;
                  {review.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shrink-0">
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-sm text-poble-charcoal tracking-tight">
                      {review.author}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-20 pt-10 border-t border-slate-200/60 flex flex-wrap justify-center gap-x-16 gap-y-8"
          style={{ fontFamily: "monospace" }}
        >
          {[
            {
              val: config.stat1_val || "99.9%",
              label: config.stat1_label || "Uptime\nGuarantee",
            },
            {
              val: config.stat2_val || "24/7",
              label: config.stat2_label || "Local\nSupport",
            },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-3xl font-black text-poble-charcoal font-mono">
                {stat.val}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed whitespace-pre-line">
                <span className="text-teal-500 mr-1">//</span>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
            Launch Partners
          </p>

          <style>{`
                        @keyframes logo-scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-logo-scroll {
                            animation: logo-scroll 35s linear infinite;
                        }
                    `}</style>

          <div className="flex animate-logo-scroll gap-16 items-center w-max py-6">
            {/* First Loop */}
            {[
              {
                name: "The Little Parry",
                src: "/images/customer/The-Little-Parry-Logo.png.webp",
              },
              { name: "Woojeong", src: "/images/customer/Woojeong.jpg" },
              { name: "Kidsday", src: "/images/customer/Kidsday.png" },
              {
                name: "The Little Parry",
                src: "/images/customer/The-Little-Parry-Logo.png.webp",
              },
              { name: "Woojeong", src: "/images/customer/Woojeong.jpg" },
              { name: "Kidsday", src: "/images/customer/Kidsday.png" },
            ].map((logo, i) => (
              <div
                key={`logo-1-${i}`}
                className="h-16 w-32 md:w-40 relative opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Duplicate Loop for Seamless Scroll */}
            {[
              {
                name: "The Little Parry",
                src: "/images/customer/The-Little-Parry-Logo.png.webp",
              },
              { name: "Woojeong", src: "/images/customer/Woojeong.jpg" },
              { name: "Kidsday", src: "/images/customer/Kidsday.png" },
              {
                name: "The Little Parry",
                src: "/images/customer/The-Little-Parry-Logo.png.webp",
              },
              { name: "Woojeong", src: "/images/customer/Woojeong.jpg" },
              { name: "Kidsday", src: "/images/customer/Kidsday.png" },
            ].map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="h-16 w-32 md:w-40 relative opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
