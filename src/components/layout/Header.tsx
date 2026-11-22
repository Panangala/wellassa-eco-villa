"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Wordmark } from "@/components/ui/Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { nav, cta } = site.copy;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? "bg-forest-night/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-gradient-to-b from-forest-night/85 via-forest-night/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#top" className="rounded-md" aria-label={`${site.brand.name}, back to top`}>
          <Wordmark tone="dark" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded text-sm text-parchment/85 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 place-items-center rounded-full text-parchment/80 transition-colors hover:text-gold sm:grid"
            aria-label={`${site.brand.facebookName} on Facebook (opens in a new tab)`}
          >
            <Icon name="facebook" size={20} />
          </a>
          <WhatsAppButton label={cta.book} variant="gold" size="sm" className="hidden sm:inline-flex" />
          <WhatsAppButton label="Book" variant="gold" size="sm" className="sm:hidden" />
          <button
            ref={menuButton}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-parchment lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-forest-night lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pt-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-parchment/10 py-4 font-display text-3xl text-parchment italic"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 px-6">
              <WhatsAppButton label={cta.checkAvailability} variant="gold" size="lg" className="w-full" />
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-parchment/80"
              >
                <Icon name="facebook" size={20} /> {site.brand.facebookName}
              </a>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
      </LazyMotion>
    </header>
  );
}
