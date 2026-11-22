import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** FAQ accordion built on native <details> (accessible and works without JavaScript). */
export function Faq() {
  const t = site.copy.faq;
  const faqs = site.faqs.filter((f): f is { q: string; a: string } => Boolean(f.a));
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="faq-heading" eyebrow={t.eyebrow} heading={t.heading} />
        <Reveal className="mt-12">
          <div className="divide-y divide-forest-night/10 border-y border-forest-night/10">
            {faqs.map((f) => (
              <details key={f.q} className="faq group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-xl text-forest-night italic sm:text-2xl">
                  {f.q}
                  <Icon
                    name="chevron-down"
                    size={22}
                    className="shrink-0 text-leaf transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-6 text-lg leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
