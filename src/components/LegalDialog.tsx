"use client";

import React, { useEffect } from "react";

import { X } from "lucide-react";

import { LEGAL_DOCS, type LegalSlug } from "@/data/legal";

type LegalTab = LegalSlug;

interface LegalDialogProps {
  open: LegalTab | null;
  onClose: () => void;
}

const TABS = (Object.keys(LEGAL_DOCS) as LegalTab[]).map((id) => ({
  id,
  label: LEGAL_DOCS[id].label,
}));

const DocBody: React.FC<{ slug: LegalTab }> = ({ slug }) => {
  const doc = LEGAL_DOCS[slug];

  return (
    <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
      <p className="text-base text-slate-700 font-medium">{doc.intro}</p>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
        Last Updated: {doc.updated}
      </p>

      {doc.sections.map((s) => (
        <div key={s.title}>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-poble-charcoal mb-2">
            {s.title}
          </h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
};

export const LegalDialog: React.FC<LegalDialogProps> = ({ open, onClose }) => {
  const [active, setActive] = React.useState<LegalTab>(open ?? "privacy");

  // Sync tab when opened from outside
  useEffect(() => {
    if (open) setActive(open);
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-0"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-[70vw] h-screen flex flex-col bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_32px_80px_rgba(0,0,0,0.18)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-12 pt-8 pb-5 border-b border-white/40">
          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  active === t.id
                    ? "bg-poble-charcoal text-white"
                    : "text-slate-500 hover:text-poble-charcoal"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100/80 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 pl-12 pr-96 py-10 no-scrollbar">
          <DocBody slug={active} />
        </div>

        {/* Footer */}
        <div className="px-12 py-5 border-t border-white/40 text-[10px] font-black uppercase tracking-widest text-slate-400">
          ECNESOFT PTY LTD · info@poble.com.au
        </div>
      </div>
    </div>
  );
};
