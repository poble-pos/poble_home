import type { ReactNode } from "react";

import "@/styles/pages.css";

/**
 * Wrapper for inner pages built from the approved export (Pricing, Features,
 * Customers). pages.css is scoped to this class, so the export's layout and type
 * apply here and nowhere else.
 */
export function ExportPage({ children }: { children: ReactNode }) {
  return <div className="export-page">{children}</div>;
}
