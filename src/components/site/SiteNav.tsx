"use client";

import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useCart } from "@/context/CartContext";
import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";

const LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/about", label: "About" },
];

function CartButton({
  cartCount,
  onClick,
}: {
  cartCount: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-5 w-5" />
      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#111111] px-1 text-[10px] font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/10 bg-[#F9F8F3]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <BrandLogo priority className="h-8" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {LINKS.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-black ${
                  active ? "text-black" : "text-black/55"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://backoffice.poble.com.au/"
            className="text-sm text-black/55 hover:text-black"
          >
            Sign in
          </a>
          <a
            href="https://backoffice.poble.com.au/"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            Start free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <CartButton cartCount={cartCount} onClick={() => setIsCartOpen(true)} />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <CartButton cartCount={cartCount} onClick={() => setIsCartOpen(true)} />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-black/10 bg-[#F9F8F3]/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-black/80"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://backoffice.poble.com.au/"
              className="text-base text-black/80"
            >
              Sign in
            </a>
            <a
              href="https://backoffice.poble.com.au/"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white"
            >
              Start free
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
