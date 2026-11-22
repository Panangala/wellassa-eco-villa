import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { FairyLights, MonsteraLine } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Highlights() {
  const { highlights } = site.copy;
  return (
    <section aria-labelledby="highlights-heading" className="night-section relative overflow-hidden py-20 sm:py-28">
      <FairyLights />
      <MonsteraLine className="pointer-events-none absolute -top-10 -right-16 w-80 text-gold/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="highlights-heading" eyebrow={highlights.eyebrow} heading={highlights.heading} tone="dark" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {highlights.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-parchment/10 bg-parchment/[0.04] p-7 transition-colors hover:border-gold/40 hover:bg-parchment/[0.07]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/30 transition-shadow group-hover:shadow-[0_0_30px_-4px] group-hover:shadow-gold/50">
                  <Icon name={item.icon} size={28} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-parchment italic">{item.title}</h3>
                <p className="mt-2 text-parchment/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
