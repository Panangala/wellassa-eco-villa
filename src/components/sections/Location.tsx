import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Location() {
  const t = site.copy.location;
  const loc = site.location;
  const mapHref = loc.mapLink ?? loc.areaMapLink;

  return (
    <section id="location" aria-labelledby="location-heading" className="bg-parchment-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="location-heading" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative min-h-80 overflow-hidden rounded-[2rem] bg-forest-night shadow-xl lg:min-h-[28rem]">
            {loc.mapEmbedUrl ? (
              <iframe
                src={loc.mapEmbedUrl}
                title={`Map showing ${site.brand.name} in ${loc.locality}`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="night-section absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                {/* Placeholder until the Google Maps embed URL is added in site.ts */}
                <svg aria-hidden="true" viewBox="0 0 400 240" className="absolute inset-0 h-full w-full text-gold/15" preserveAspectRatio="xMidYMid slice">
                  <path d="M0 180 70 110l50 40 60-70 70 60 50-40 100 90" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M0 200 90 140l60 30 70-50 80 60 100-50" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
                  <Icon name="pin" size={30} />
                </span>
                <p className="relative mt-5 font-display text-3xl text-parchment italic">
                  {loc.locality}, {loc.region}
                </p>
                <p className="relative mt-2 text-parchment/70">{t.mapPlaceholder}</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <h3 className="font-display text-3xl text-forest-night italic">{t.gettingHereHeading}</h3>
            {loc.address && <p className="mt-4 text-lg text-forest-night">{loc.address}</p>}
            {loc.gettingHere?.length ? (
              <ul className="mt-4 space-y-3 text-ink-soft">
                {loc.gettingHere.map((line) => (
                  <li key={line} className="flex gap-3">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-leaf" />
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-lg text-ink-soft">{t.gettingHereFallback}</p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <WhatsAppButton
                label={t.askDirections}
                message="Hello Wellassa Eco Villa! Could you send me directions to the villa?"
              />
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-12 gap-2 border border-forest-night/30 px-6 text-forest-night hover:bg-forest-night hover:text-parchment"
              >
                <Icon name="pin" size={18} />
                {loc.mapLink ? t.openMap : t.openAreaMap}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
