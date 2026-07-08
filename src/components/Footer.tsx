"use client";

import { Facebook, Instagram } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import { LegalDialog } from "./LegalDialog";

type LegalTab = "privacy" | "terms" | "cookies";

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

export const Footer: React.FC = () => {
  const [legal, setLegal] = useState<LegalTab | null>(null);
  return (
    <>
      <LegalDialog open={legal} onClose={() => setLegal(null)} />
      <footer className="bg-[#1a1a1a] text-white relative overflow-hidden border-t border-white/5">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "400px 400px",
          }}
        />

        {/* Ghost watermark */}
        {/* <div
          className="absolute bottom-0 right-0 translate-x-[10%] translate-y-[25%] text-[20vw] font-black tracking-tighter text-white/[0.025] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          POBLE POS
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-14 pb-8">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
            {/* Brand column */}
            <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col gap-10">
              {/* <Logo
                className="h-10 brightness-0 invert opacity-90"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              /> */}
              {/* <p className="text-slate-400 text-sm font-bold leading-relaxed tracking-tight max-w-[200px]">
                The fastest iPad POS for Australian venues.
              </p> */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/poblepos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-poble-gold hover:border-poble-gold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/poble_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-poble-gold hover:border-poble-gold transition-all"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/poble.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-poble-gold hover:border-poble-gold transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              {/* <h4 className="font-black text-xs uppercase tracking-[0.35em] text-white/30 mb-4">
                Platform
              </h4> */}
              <ul className="space-y-2 text-xl font-extrabold uppercase tracking-widest">
                <li>
                  <Link
                    href="/#features"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hardware"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    Hardware Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#integrations"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              {/* <h4 className="font-black text-xs uppercase tracking-[0.35em] text-white/30 mb-4">
                Company
              </h4> */}
              <ul className="space-y-2 text-xl font-extrabold uppercase tracking-widest">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manual"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    User Manual
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              {/* <h4 className="font-black text-xs uppercase tracking-[0.35em] text-white/30 mb-4">
                Contact
              </h4> */}
              <ul className="space-y-2 text-xl font-extrabold uppercase tracking-widest">
                <li className="flex items-center gap-2.5">
                  {/* <Phone className="w-3 h-3 text-poble-gold flex-shrink-0" /> */}
                  <a
                    href="tel:1300966963"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    1300 966 963
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  {/* <Mail className="w-3 h-3 text-poble-gold flex-shrink-0" /> */}
                  <a
                    href="mailto:sales@poble.com.au"
                    className="text-slate-400 hover:text-poble-gold transition-colors"
                  >
                    Sales Enquiry
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  {/* <MapPin className="w-3 h-3 text-poble-gold flex-shrink-0 mt-0.5" /> */}
                  <a
                    href="https://www.google.com/maps/dir//14%2F20-30+Stubbs+St,+Silverwater+NSW+2128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-poble-gold transition-colors leading-relaxed normal-case font-bold tracking-normal"
                  >
                    14/20-30 Stubbs St,
                    <br />
                    Silverwater NSW 2128
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  {/* <Clock className="w-3 h-3 text-poble-gold flex-shrink-0" /> */}
                  <span className="text-slate-400 normal-case font-bold tracking-normal">
                    Mon–Fri 9AM–5PM AEST
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/20">
              © 2026 ECNESOFT PTY LTD. Australia.
            </span>
            <div className="flex gap-8 text-xs font-black uppercase tracking-[0.3em] text-white/20">
              <button
                onClick={() => setLegal("privacy")}
                className="hover:text-poble-gold transition-colors cursor-pointer"
              >
                Privacy
              </button>
              <button
                onClick={() => setLegal("terms")}
                className="hover:text-poble-gold transition-colors cursor-pointer"
              >
                Terms
              </button>
              <button
                onClick={() => setLegal("cookies")}
                className="hover:text-poble-gold transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
