import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { FairyLights } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SitePhoto } from "@/components/ui/SitePhoto";

export function Experiences() {
  const { experiences } = site.copy;
  return (
    <section id="experiences" aria-labelledby="experiences-heading" className="night-section relative overflow-hidden py-20 sm:py-28">
      <FairyLights />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experiences-heading"
          eyebrow={experiences.eyebrow}
          heading={experiences.heading}
          intro={experiences.intro}
          tone="dark"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <Reveal className="relative min-h-80 overflow-hidden rounded-[2rem]">
            <SitePhoto
              photo={site.photos.night}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-night/60 to-transparent" />
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {experiences.activities.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-parchment/10 bg-parchment/[0.04] p-6">
                  <Icon name={a.icon} size={30} className="text-gold" />
                  <h3 className="mt-4 font-display text-2xl text-parchment italic">{a.title}</h3>
                  <p className="mt-1.5 text-parchment/75">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-20">
          <h3 className="text-center font-display text-3xl text-parchment italic sm:text-4xl">{experiences.nearbyHeading}</h3>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {site.nearby.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.06}>
              <div className="h-full rounded-3xl bg-parchment p-6 text-forest-night">
                <p className="font-label text-[0.65rem] tracking-[0.2em] text-terracotta uppercase">{p.kind}</p>
                <h4 className="mt-2 font-display text-2xl leading-tight italic">{p.name}</h4>
                <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
                {p.distance && (
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-leaf">
                    <Icon name="pin" size={16} /> {p.distance}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
