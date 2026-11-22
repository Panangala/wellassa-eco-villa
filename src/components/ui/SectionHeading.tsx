import { Reveal } from "./Reveal";

interface Props {
  id?: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionHeading({ id, eyebrow, heading, intro, tone = "light", align = "center" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "text-gold" : "text-gold-deep"}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-3 font-display text-4xl leading-[1.05] italic sm:text-5xl ${dark ? "text-parchment" : "text-forest-night"}`}
      >
        {heading}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-5 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-gold/70" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold/70" />
      </div>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-parchment/80" : "text-ink-soft"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
