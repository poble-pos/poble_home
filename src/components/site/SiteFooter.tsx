import Link from "next/link";

/** Compact footer from the approved export, used on every page. */
export function SiteFooter() {
  return (
    <div className="site-chrome">
      <footer className="ftr compact-footer">
        <div className="wrap">
          <p>© 2026 Poble. Management solution by ECNESOFT.</p>
          <nav aria-label="Support and legal">
            <Link href="/manual">Manual</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
