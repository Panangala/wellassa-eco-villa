import { site } from "@/content/site";
import { FernLine } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";

export function Welcome() {
  const { welcome } = site.copy;
  return (
    <section id="story" aria-labelledby="story-heading" className="relative overflow-hidden bg-parchment py-20 sm:py-28">
      <FernLine className="pointer-events-none absolute top-10 -left-6 hidden w-24 text-leaf/15 md:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="eyebrow text-gold-deep">{welcome.eyebrow}</p>
          <h2 id="story-heading" className="mt-3 font-display text-4xl leading-[1.05] text-forest-night italic sm:text-5xl">
            {welcome.heading}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
            {welcome.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-3 divide-x divide-forest-night/10 border-y border-forest-night/10">
            {welcome.facts.map((f) => (
              <div key={f.label} className="px-3 py-5 text-center first:pl-0 last:pr-0">
                <dt className="font-label text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">{f.label}</dt>
                <dd className="mt-2 font-display text-2xl text-forest-night italic sm:text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-night/20 sm:aspect-[5/6]">
            <SitePhoto
              photo={site.photos.story}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 w-[48%] overflow-hidden rounded-2xl border-4 border-parchment shadow-xl sm:-left-10">
            <div className="relative aspect-[4/3]">
              <SitePhoto
                photo={site.photos.storySecondary}
                fill
                sizes="(min-width: 1024px) 22vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
