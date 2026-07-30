"use client";

import React, { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, label, summary, [data-cursor='hover']";

/**
 * A soft ring that trails slightly behind the pointer and gently grows over
 * interactive elements. The real OS cursor stays visible — this is only a
 * subtle accent, not a replacement.
 */
export const DigitalCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);

  // Only on fine-pointer devices without a reduced-motion preference.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () =>
      setEnabled(finePointer.matches && !reducedMotion.matches);
    update();

    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const ring = ringRef.current;
    if (!ring) return;

    let raf: number;
    let mx = -200,
      my = -200; // latest pointer position
    let x = -200,
      y = -200; // eased ring position (lags behind)
    let scale = 1,
      targetScale = 1; // grows over interactive elements
    let opacity = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      opacity = 1;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      targetScale = target?.closest(INTERACTIVE_SELECTOR) ? 1.8 : 1;
    };

    const onLeave = () => {
      opacity = 0;
    };

    const animate = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      scale += (targetScale - scale) * 0.15;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      ring.style.opacity = String(opacity);
      raf = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full transition-opacity duration-300"
      style={{
        willChange: "transform",
        transform: "translate(-200px, -200px)",
        opacity: 0,
        border: "1.5px solid rgba(185, 133, 91, 0.55)",
        backgroundColor: "rgba(185, 133, 91, 0.08)",
      }}
    />
  );
};
