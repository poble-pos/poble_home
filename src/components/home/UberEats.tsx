"use client";

import { useEffect, useRef } from "react";

/**
 * Uber Eats film from the export. Plays muted while visible, pauses offscreen,
 * and stays on the poster for reduced motion.
 */
export function UberEats() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    let inView = false;
    const sync = () => {
      if (inView && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <section id="uber-eats" className="uber-section" aria-labelledby="uber-title">
      <video
        ref={videoRef}
        className="uber-video"
        muted
        loop
        playsInline
        preload="none"
        poster="/images/home/uber-eats-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/home/uber-eats-background.mp4" type="video/mp4" />
      </video>
      <div className="uber-shade" />
      <div className="wrap uber-content">
        <div>
          <p className="uber-label">Uber Eats</p>
          <h2 id="uber-title">
            Your counter.
            <br /> Connected to delivery.
          </h2>
          <p>Bring Uber Eats into your Poble setup.</p>
        </div>
      </div>
    </section>
  );
}
