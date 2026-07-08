import React from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#111111] font-sans tracking-tight">
      <SiteNav />
      <main className="animate-in fade-in duration-700">{children}</main>
      <SiteFooter />
    </div>
  );
}
