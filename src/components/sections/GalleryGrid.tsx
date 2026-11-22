"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Masonry photo grid with an accessible lightbox (keyboard, swipe, focus trap). */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialog.current) {
        // Keep focus inside the lightbox
        const buttons = dialog.current.querySelectorAll<HTMLElement>("button");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index !== null ? items[index] : null;

  return (
    <LazyMotion features={domAnimation}>
      <ul className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {items.map((p, i) => (
          <li key={p.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setIndex(i);
              }}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`Open photo ${i + 1} of ${items.length}: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full bg-forest-night/10 transition-transform duration-700 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-forest-night/0 transition-colors group-hover:bg-forest-night/15" />
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {current && (
          <m.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${index! + 1} of ${items.length}`}
            className="fixed inset-0 z-50 flex flex-col bg-forest-night/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between p-3 text-parchment sm:p-5">
              <p className="text-sm text-parchment/70 tabular-nums">
                {index! + 1} / {items.length}
              </p>
              <button
                ref={closeBtn}
                type="button"
                onClick={close}
                className="grid h-11 w-11 place-items-center rounded-full bg-parchment/10 hover:bg-parchment/20"
              >
                <Icon name="close" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <m.div
                key={current.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 mx-auto max-w-6xl px-2 sm:px-16"
              >
                <div className="relative h-full w-full">
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </div>
              </m.div>
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute top-1/2 left-2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-parchment/10 text-parchment hover:bg-parchment/20 sm:left-4"
              >
                <Icon name="chevron-left" />
                <span className="sr-only">Previous photo</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute top-1/2 right-2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-parchment/10 text-parchment hover:bg-parchment/20 sm:right-4"
              >
                <Icon name="chevron-right" />
                <span className="sr-only">Next photo</span>
              </button>
            </div>
            <p className="mx-auto max-w-3xl px-4 py-4 text-center text-sm text-parchment/80 sm:py-6">{current.alt}</p>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
