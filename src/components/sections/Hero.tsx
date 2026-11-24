import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const { hero, cta } = site.copy;
  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-night">
      <SitePhoto
        photo={site.photos.hero}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Night-garden overlay: deep green at the base, warm glow behind the text */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-night via-forest-night/55 to-forest-night/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-night/70 via-forest-night/25 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_28rem_at_0%_100%,rgb(227_176_75/0.16),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="hero-rise max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-forest-night/60 px-4 py-1.5 text-sm font-medium text-parchment shadow-[0_0_24px_rgb(227_176_75/0.25)] backdrop-blur-sm">
            <Icon name="globe" size={16} className="text-gold" />
            {hero.badge}
          </p>
          <p className="eyebrow text-gold">{hero.eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-[2.9rem] leading-[0.98] text-parchment italic sm:text-7xl lg:text-8xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-parchment/90 sm:text-xl">{hero.sub}</p>
          <p className="mt-3 font-label text-[0.7rem] tracking-[0.3em] text-gold/90 uppercase">
            {site.brand.values.join(" • ")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton label={cta.checkAvailability} variant="gold" size="lg" />
            <a href="#rooms" className="btn h-14 gap-2 border border-parchment/50 px-7 text-parchment hover:bg-parchment hover:text-forest-night">
              {cta.viewRooms}
              <Icon name="arrow-right" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
