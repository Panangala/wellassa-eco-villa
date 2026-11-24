import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { FairyLights } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Experiences() {
  const { experiences } = site.copy;
  const night = experiences.night;
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

        {/* By day */}
        <div className="mt-14 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-stretch">
          <Reveal className="relative min-h-64 overflow-hidden rounded-[2rem] sm:min-h-72">
            <SitePhoto photo={site.photos.nature} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-night/50 to-transparent" />
          </Reveal>
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-gold">{experiences.dayHeading}</p>
            <ul className="grid flex-1 gap-4">
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
        </div>
      </div>

      {/* After dark: full-width "Magic of the Night" band */}
      <div
        aria-labelledby="night-heading"
        role="region"
        className="relative mt-20 overflow-hidden border-y border-gold/20 bg-forest-deep py-16 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(36rem_24rem_at_20%_30%,rgb(227_176_75/0.16),transparent_70%),radial-gradient(30rem_20rem_at_90%_100%,rgb(169_71_44/0.18),transparent_70%)]"
        />
        <FairyLights />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_0_60px_rgb(227_176_75/0.18)] ring-1 ring-gold/30">
            <SitePhoto photo={site.photos.night} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-gold">{night.eyebrow}</p>
              <h3 id="night-heading" className="mt-3 font-display text-4xl leading-tight text-parchment italic sm:text-5xl">
                {night.heading}
              </h3>
              <p className="mt-4 max-w-xl text-parchment/80">{night.intro}</p>
            </Reveal>
            <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {night.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.05} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <span>
                    <span className="block font-display text-xl text-parchment italic">{item.title}</span>
                    <span className="mt-0.5 block text-sm text-parchment/70">{item.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-9">
              <WhatsAppButton label={night.cta} message={night.ctaMessage} variant="gold" size="lg" />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mt-20 text-center">
          <h3 className="font-display text-3xl text-parchment italic sm:text-4xl">{experiences.nearbyHeading}</h3>
          <p className="mx-auto mt-3 max-w-xl text-parchment/75">{experiences.nearbyIntro}</p>
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
