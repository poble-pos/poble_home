import React from "react";

/**
 * Placeholder frame for screenshots / gallery imagery that has not been
 * shot yet. Keeps the layout honest while staying quiet visually.
 */
export function MediaPlaceholder({
  label = "Screenshot coming soon",
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[#F1EDE5] to-[#E8DFD2] shadow-xl shadow-black/5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7)_0%,transparent_60%)]" />
      <span className="relative text-xs uppercase tracking-[0.18em] text-black/35">
        {label}
      </span>
    </div>
  );
}
