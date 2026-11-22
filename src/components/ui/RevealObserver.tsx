"use client";

import { useEffect } from "react";

/** One IntersectionObserver for every `.reveal` element on the page. */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    // No layout reads here: the observer reports anything already on screen on its first callback.
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    root.classList.add("reveal-ready");
    return () => io.disconnect();
  }, []);
  return null;
}
