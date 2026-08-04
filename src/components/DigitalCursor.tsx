"use client";

import React, { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, label, summary, [data-cursor='hover']";

export const DigitalCursor: React.FC = () => {
    const reticleRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const hexRef = useRef<HTMLSpanElement>(null);
    const coordRef = useRef<HTMLSpanElement>(null);
    const tickRef = useRef(0);

    // Only render on devices with a fine pointer and no reduced-motion
    // preference — on touch devices the reticle would sit frozen in the
    // top-left corner and `cursor: none` would still be injected.
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        const update = () => setEnabled(finePointer.matches && !reducedMotion.matches);
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

        const reticle = reticleRef.current;
        const trail = trailRef.current;
        const hexEl = hexRef.current;
        const coordEl = coordRef.current;
        if (!reticle || !trail || !hexEl || !coordEl) return;

        let raf: number;
        let mx = -200, my = -200;
        let tx = -200, ty = -200; // trail lags behind
        let scale = 1;
        let targetScale = 1; // grows over interactive elements
        let visible = false;

        const hexChars = "0123456789ABCDEF";
        const randHex = () =>
            Array.from({ length: 4 }, () => hexChars[Math.floor(Math.random() * 16)]).join("");

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            visible = true;
            reticle.style.opacity = "1";
            trail.style.opacity = "";
            tickRef.current++;
            // Update hex every ~6 moves
            if (tickRef.current % 6 === 0) {
                hexEl.textContent = `0x${randHex()}`;
            }
            coordEl.textContent = `${mx},${my}`;
        };

        // Expand the reticle over links, buttons, form fields and cards
        const onOver = (e: MouseEvent) => {
            const target = e.target instanceof Element ? e.target : null;
            targetScale = target?.closest(INTERACTIVE_SELECTOR) ? 1.6 : 1;
        };

        // Hide when the pointer leaves the window
        const onLeave = () => {
            visible = false;
            reticle.style.opacity = "0";
            trail.style.opacity = "0";
        };

        const animate = () => {
            // Reticle snaps directly; scale eases toward its target
            scale += (targetScale - scale) * 0.18;
            reticle.style.transform = `translate(${mx - 20}px, ${my - 20}px) scale(${scale.toFixed(3)})`;

            // Trail smoothly interpolates
            if (visible) {
                tx += (mx - tx) * 0.12;
                ty += (my - ty) * 0.12;
            }
            trail.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`;

            raf = requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseover", onOver, { passive: true });
        document.documentElement.addEventListener("mouseleave", onLeave);
        document.documentElement.style.cursor = "none";

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            document.documentElement.style.cursor = "";
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <style>{`
                *, a, button, [role="button"], input, label, select, textarea {
                    cursor: none !important;
                }
                @keyframes cursor-flicker {
                    0%, 19%, 21%, 23%, 55%, 57%, 100% { opacity: 1; }
                    20%, 22%, 24%, 56% { opacity: 0; }
                }
                @keyframes reticle-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.15); }
                }
                .reticle-pulse {
                    animation: reticle-pulse 2s ease-in-out infinite;
                }
                @keyframes scan-line {
                    0% { top: 0; opacity: 0.6; }
                    100% { top: 100%; opacity: 0; }
                }
                .cursor-scan {
                    animation: scan-line 1.4s linear infinite;
                }
            `}</style>

            {/* Trailing dot */}
            <div
                ref={trailRef}
                className="fixed top-0 left-0 z-[9997] pointer-events-none w-2 h-2 transition-opacity duration-200"
                style={{ willChange: "transform", transform: "translate(-200px, -200px)" }}
            >
                <div className="w-full h-full bg-teal-400 opacity-50" />
            </div>

            {/* Main reticle */}
            <div
                ref={reticleRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none w-10 h-10 transition-opacity duration-200"
                style={{
                    willChange: "transform",
                    transform: "translate(-200px, -200px)",
                    opacity: 0,
                }}
            >
                {/* Corner brackets */}
                <div className="absolute inset-0 reticle-pulse">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-teal-400" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-teal-400" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-teal-400" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-teal-400" />
                </div>

                {/* Scan line inside reticle */}
                <div className="absolute inset-x-0 h-px bg-teal-400/40 cursor-scan" style={{ position: 'absolute' }} />

                {/* Center crosshair dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-[3px] h-[3px] bg-teal-400"
                        style={{ animation: "cursor-flicker 3s step-end infinite" }}
                    />
                </div>

                {/* Hex readout — bottom right of reticle */}
                <div className="absolute top-11 left-0 whitespace-nowrap" style={{ fontFamily: "monospace" }}>
                    <span
                        ref={hexRef}
                        className="text-[9px] font-bold text-teal-500"
                        style={{ textShadow: "0 0 6px rgba(20,184,166,0.7)" }}
                    >
                        0x0000
                    </span>
                    <br />
                    <span
                        ref={coordRef}
                        className="text-[8px] text-slate-400"
                    >
                        0,0
                    </span>
                </div>
            </div>
        </>
    );
};
