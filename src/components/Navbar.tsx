/**
 * @component Navbar
 * @description Global navigation system with responsive mobile drawer and anchor scroll handling.
 */

"use client";

import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";
import React, { useRef, useState } from "react";

import Link from "next/link";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const { cartCount, setIsCartOpen } = useCart();

  /**
   * Centralized Navigation Config
   */
  const NAV_LINKS = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Hardware", href: "/hardware" },
    { name: "About", href: "/about" },
  ];

  /**
   * Logic: Standard Smooth Scroll for On-page Anchors
   */
  const handleScroll = (e: React.MouseEvent, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  const isAnchorOnHome = (href: string) =>
    pathname === "/" && href.startsWith("/#");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Full-width Glassmorphism Bar */}
      <div
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full bg-white/60 backdrop-blur-2xl border-b border-white/40 shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex items-center justify-between px-8 py-1.5 overflow-hidden"
      >
        {/* Cursor spotlight glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249,200,53,0.12), transparent 70%)`,
          }}
        />

        {/* Brand Identity Slot */}
        <Logo
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />

        {/* Desktop Link Group */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            isAnchorOnHome(link.href) ? (
              <button
                key={link.name}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-lg transition-colors tracking-wider text-slate-700 hover:text-poble-charcoal cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg transition-colors tracking-wider text-slate-700 hover:text-poble-charcoal"
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

        {/* Action Slot: Cart & Lead Gen */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 rounded-xl bg-white/30 backdrop-blur-md flex items-center justify-center text-slate-600 hover:bg-white/60 transition-all border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)] group cursor-pointer"
            title="View Deployment Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-poble-gold text-poble-charcoal text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            href="/#contact"
            onClick={(e) => handleScroll(e, "/#contact")}
            className="bg-white/30 text-poble-charcoal px-5 py-2.5 rounded-full text-sm font-extrabold backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] group tracking-tight"
          >
            Talk to an Expert
            <ArrowRight className="w-3.5 h-3.5 text-poble-charcoal transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Controls Slot */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 rounded-xl bg-white/30 backdrop-blur-md flex items-center justify-center text-slate-600 border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer"
            title="View Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-poble-gold text-poble-charcoal text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="text-poble-charcoal cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Layer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-2xl border-b border-white/40 p-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) =>
            isAnchorOnHome(link.href) ? (
              <button
                key={link.name}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-lg font-extrabold text-poble-charcoal tracking-tight text-left cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-extrabold text-poble-charcoal tracking-tight text-left"
              >
                {link.name}
              </Link>
            ),
          )}
          <Link
            href="/#contact"
            onClick={(e) => {
              handleScroll(e, "/#contact");
              setMobileMenuOpen(false);
            }}
            className="bg-white/30 text-poble-charcoal pl-8 pr-3 py-3 rounded-full text-lg font-extrabold backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.08)] group tracking-tight"
          >
            Talk to an Expert
            <ArrowRight className="w-6 h-6 text-poble-charcoal transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </nav>
  );
};
