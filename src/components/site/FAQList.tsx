"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function FAQList({
  items,
  defaultOpen = 0,
}: {
  items: FAQItem[];
  defaultOpen?: number | null;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((f, i) => {
        const open = openIdx === i;

        return (
          <button
            key={f.q}
            onClick={() => setOpenIdx(open ? null : i)}
            className="w-full py-6 text-left"
            aria-expanded={open}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-lg font-medium tracking-tight">{f.q}</span>
              <ChevronDown
                className={`mt-1 h-5 w-5 shrink-0 text-black/45 transition-transform duration-300 ${
                  open ? "rotate-180 text-black" : ""
                }`}
              />
            </div>

            <div
              className={`grid transition-all duration-300 ease-out ${
                open
                  ? "mt-3 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl leading-relaxed text-black/55">{f.a}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
