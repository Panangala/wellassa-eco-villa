import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Location() {
  const t = site.copy.location;
  const loc = site.location;
  const addressLine = loc.address ?? `${loc.locality}, ${loc.region}, ${loc.country}`;
  const landmarks = loc.landmarks
    .map((name) => site.nearby.find((p) => p.name === name))
    .filter((p) => p !== undefined);

  return (
    <section id="location" aria-labelledby="location-heading" className="bg-parchment-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="location-heading" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative h-80 overflow-hidden rounded-[2rem] bg-forest-night shadow-xl sm:h-[26rem] lg:h-auto lg:min-h-[30rem]">
            <iframe
              src={loc.mapEmbedUrl}
              title={`Map showing ${site.brand.name} in ${loc.locality}`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <h3 className="font-display text-3xl text-forest-night italic">{t.gettingHereHeading}</h3>
            <address className="mt-4 flex gap-3 text-lg text-forest-night not-italic">
              <Icon name="pin" size={22} className="mt-1 shrink-0 text-terracotta" />
              {addressLine}
            </address>
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
              <p className="mt-4 text-ink-soft">{t.gettingHereFallback}</p>
            )}

            {landmarks.length > 0 && (
              <div className="mt-6">
                <h4 className="eyebrow text-leaf">{t.landmarksHeading}</h4>
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {landmarks.map((p) => (
                    <li key={p.name} className="flex gap-3">
                      <Icon name="check" size={20} className="mt-0.5 shrink-0 text-leaf" />
                      <span>
                        <span className="text-forest-night">{p.name}</span>
                        <span className="text-ink-soft"> · {p.kind}</span>
                        {p.distance && <span className="text-ink-soft"> · {p.distance}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-12 gap-2 border border-forest-night/30 px-6 text-forest-night hover:bg-forest-night hover:text-parchment"
              >
                <Icon name="pin" size={18} />
                {t.openMap}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <WhatsAppButton
                label={t.askDirections}
                message="Hello Wellassa Eco Villa! Could you send me directions to the villa?"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
