import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Hardware", href: "/hardware" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Customers", href: "/customers" },
        { label: "Contact", href: "mailto:sales@poble.com.au" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Manual", href: "/manual" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];

const LEGAL = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#F1EDE5]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm text-black/55">
              The lightweight POS built for Australian hospitality. Made in
              Australia.
            </p>
            <div className="mt-6 space-y-1 text-sm text-black/55">
              <a href="tel:1300966963" className="block hover:text-black">
                1300 966 963
              </a>
              <a
                href="mailto:sales@poble.com.au"
                className="block hover:text-black"
              >
                sales@poble.com.au
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.14em] text-black/45">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link
                        href={l.href}
                        className="text-black/70 hover:text-black"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-black/70 hover:text-black"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/45">
          <div>
            © {new Date().getFullYear()} Poble. Management solution by ECNESOFT.
          </div>
          <div className="flex gap-6">
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
