"use client";

import React, { useEffect, useRef } from "react";

export const DigitalCursor: React.FC = () => {
    const reticleRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const hexRef = useRef<HTMLSpanElement>(null);
    const coordRef = useRef<HTMLSpanElement>(null);
    const tickRef = useRef(0);

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const reticle = reticleRef.current;
        const trail = trailRef.current;
        const hexEl = hexRef.current;
        const coordEl = coordRef.current;
        if (!reticle || !trail || !hexEl || !coordEl) return;

        let raf: number;
        let mx = -200, my = -200;
        let tx = -200, ty = -200; // trail lags behind

        const hexChars = "0123456789ABCDEF";
        const randHex = () =>
            Array.from({ length: 4 }, () => hexChars[Math.floor(Math.random() * 16)]).join("");

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            tickRef.current++;
            // Update hex every ~6 moves
            if (tickRef.current % 6 === 0) {
                hexEl.textContent = `0x${randHex()}`;
            }
            coordEl.textContent = `${mx},${my}`;
        };

        const animate = () => {
            // Reticle snaps directly
            reticle.style.transform = `translate(${mx - 20}px, ${my - 20}px)`;

            // Trail smoothly interpolates
            tx += (mx - tx) * 0.12;
            ty += (my - ty) * 0.12;
            trail.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`;

            raf = requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener("mousemove", onMove);
        document.documentElement.style.cursor = "none";

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            document.documentElement.style.cursor = "";
        };
    }, []);

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
                className="fixed top-0 left-0 z-[9997] pointer-events-none w-2 h-2"
                style={{ willChange: "transform" }}
            >
                <div className="w-full h-full bg-teal-400 opacity-50" />
            </div>

            {/* Main reticle */}
            <div
                ref={reticleRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none w-10 h-10"
                style={{ willChange: "transform" }}
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
