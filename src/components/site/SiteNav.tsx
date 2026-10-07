"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useInquiry } from "@/context/InquiryContext";

import { OwlSymbols } from "./OwlSymbols";

const SECTION_LINKS = [
  { id: "features", label: "Products" },
  { id: "pricing", label: "Pricing" },
  { id: "customers", label: "Customers" },
  { id: "about", label: "About" },
];

// Inner pages: the export's header links to the pages, not to homepage sections.
const PAGE_LINKS = [
  { href: "/features", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
];

/**
 * Site header and mobile menu from the approved export. The homepage uses the
 * compact header with section links; inner pages use the export's page header
 * with page links. Contact us opens the shared enquiry panel.
 */
export function SiteNav({ variant = "page" }: { variant?: "home" | "page" }) {
  const { openInquiry } = useInquiry();
  const pathname = usePathname();
  const isHome = variant === "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuLinks = useRef<(HTMLElement | null)[]>([]);

  // The active link follows the section in view, on the homepage only.
  useEffect(() => {
    if (!isHome) return;
    const desktop = window.matchMedia("(min-width: 900px)");
    let scheduled = false;
    const update = () => {
      scheduled = false;
      const offset = desktop.matches ? 150 : 170;
      const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
      let id = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) id = section.id;
      }
      if (window.scrollY > 100 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        id = "contact";
      }
      setActiveId(id);
    };
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // While the menu is open, main and footer are inert and page scroll is locked.
  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (main) main.inert = menuOpen;
    if (footer) footer.inert = menuOpen;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // Crossing to desktop closes the menu.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  // Opening the menu focuses its first link; Escape and Tab stay inside it.
  useEffect(() => {
    if (!menuOpen) return;
    const links = menuLinks.current.filter((node): node is HTMLElement => node !== null);
    links[0]?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButton.current?.focus({ preventScroll: true });
      }
      if (event.key === "Tab") {
        const order = [menuButton.current, ...links].filter((node): node is HTMLElement => node !== null);
        const current = order.indexOf(document.activeElement as HTMLElement);
        event.preventDefault();
        order[(current + (event.shiftKey ? -1 : 1) + order.length) % order.length].focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const brand = (
    <Link className={isHome ? "compact-brand" : "brand"} href="/" aria-label="Poble, home">
      <Image src="/logo-full.png" alt="" width={500} height={192} priority />
    </Link>
  );

  const menuToggle = (
    <button
      ref={menuButton}
      type="button"
      className="menu-btn"
      id="menuBtn"
      aria-expanded={menuOpen}
      aria-controls="drawer"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={() => setMenuOpen((open) => !open)}
    >
      <i aria-hidden="true"></i>
    </button>
  );

  return (
    <div className={isHome ? "site-chrome compact-chrome" : "site-chrome"}>
      <OwlSymbols />

      {isHome ? (
        <header className="hdr" id="hdr">
          <a className="skip-link" href="#top">
            Skip to content
          </a>
          {brand}
          <nav className="compact-nav" aria-label="Main">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                data-section-link={link.id}
                aria-current={activeId === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="compact-actions box-cta">
            <a className="signin" href="https://backoffice.poble.com.au/">
              Sign in
            </a>
            <button type="button" className="nav-contact" onClick={openInquiry}>
              Contact us
            </button>
            {menuToggle}
          </div>
        </header>
      ) : (
        <header className="hdr" id="hdr">
          <a className="skip-link" href="#top">
            Skip to content
          </a>
          <div className="box">
            {brand}
            <nav className="nav" aria-label="Main" style={{ display: "contents" }}>
              {PAGE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  className="nav-links"
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {menuToggle}
          </div>
          <div className="box box-cta">
            <Link href="/pricing">
              View pricing <svg aria-hidden="true"><use href="#arrow" /></svg>
            </Link>
          </div>
        </header>
      )}

      {isHome ? (
        <nav className="home-menu" id="drawer" data-open={String(menuOpen)} aria-label="More navigation" inert={!menuOpen}>
          {SECTION_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              ref={(node) => {
                menuLinks.current[index] = node;
              }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://backoffice.poble.com.au/"
            ref={(node) => {
              menuLinks.current[SECTION_LINKS.length] = node;
            }}
            onClick={closeMenu}
          >
            Sign in
          </a>
          <a
            href="#contact"
            ref={(node) => {
              menuLinks.current[SECTION_LINKS.length + 1] = node;
            }}
            onClick={(event) => {
              event.preventDefault();
              closeMenu();
              openInquiry();
            }}
          >
            Contact us
          </a>
        </nav>
      ) : (
        <div className="drawer" id="drawer" data-open={String(menuOpen)} aria-label="Mobile navigation" inert={!menuOpen}>
          {PAGE_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(node) => {
                menuLinks.current[index] = node;
              }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="foot">
            <a href="tel:1300966963">1300 966 963</a>
            <a href="mailto:sales@poble.com.au">sales@poble.com.au</a>
          </div>
        </div>
      )}
      <div className="menu-shade" hidden={!menuOpen} aria-hidden="true" onClick={closeMenu} />
    </div>
  );
}
