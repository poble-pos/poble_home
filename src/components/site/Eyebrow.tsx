import React from "react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B735C]">
      {children}
    </p>
  );
}
