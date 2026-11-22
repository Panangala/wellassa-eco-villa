import { site } from "@/content/site";
import { FairyLights } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HowToBook() {
  const t = site.copy.howToBook;
  return (
    <section id="how-to-book" aria-labelledby="book-heading" className="night-section relative overflow-hidden py-20 sm:py-28">
      <FairyLights />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="book-heading" eyebrow={t.eyebrow} heading={t.heading} tone="dark" />
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {t.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative text-center">
              {i < t.steps.length - 1 && (
                <span aria-hidden="true" className="absolute top-8 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-gold/60 to-gold/0 md:block" />
              )}
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/50 font-display text-3xl text-gold italic shadow-[0_0_40px_-8px] shadow-gold/50">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl text-parchment italic">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-parchment/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 flex justify-center">
          <WhatsAppButton label={site.copy.cta.checkAvailability} variant="gold" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
