import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}

/**
 * Gentle fade-and-rise as content scrolls into view.
 * Server-rendered: the animation is pure CSS (see `.reveal` in globals.css), triggered by
 * the single <RevealObserver /> in the page. Content stays visible without JavaScript and
 * for reduced-motion users.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
