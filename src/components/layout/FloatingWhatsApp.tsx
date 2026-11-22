"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/lib/whatsapp";

/** Round WhatsApp button pinned to the bottom-right on phones, shown after the hero. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {visible && (
          <m.a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 grid h-14 w-14 place-items-center rounded-full bg-leaf text-parchment shadow-xl shadow-black/30 ring-2 ring-gold/60 transition-colors hover:bg-terracotta md:hidden"
            aria-label={`${site.copy.cta.book} (opens WhatsApp)`}
          >
            <Icon name="whatsapp" size={28} />
          </m.a>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
