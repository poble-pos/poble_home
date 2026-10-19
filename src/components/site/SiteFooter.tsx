"use client";

import Link from "next/link";

import { useI18n } from "@/i18n/I18nProvider";

/** Compact footer from the approved export, used on every page. */
export function SiteFooter() {
  const { m } = useI18n();
  return (
    <div className="site-chrome">
      <footer className="ftr compact-footer">
        <div className="wrap">
          <p>{m.footer.copyright}</p>
          <nav aria-label={m.footer.navLabel}>
            <Link href="/manual">{m.footer.manual}</Link>
            <Link href="/terms">{m.footer.terms}</Link>
            <Link href="/privacy">{m.footer.privacy}</Link>
            <Link href="/cookies">{m.footer.cookies}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
