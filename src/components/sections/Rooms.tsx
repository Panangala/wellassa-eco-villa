import { site } from "@/content/site";
import type { Room } from "@/content/types";
import { formatPrice } from "@/lib/format";
import { roomEnquiryMessage } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RateToggle } from "./RateToggle";

// Which price shows is controlled by data-plan on the section (set by RateToggle).
const SHOW_ROOM_ONLY = "group-data-[plan=withMeals]/rooms:hidden";
const SHOW_WITH_MEALS = "hidden group-data-[plan=withMeals]/rooms:block";

function PriceLine({ amount, note, className = "" }: { amount: number; note: string; className?: string }) {
  return (
    <div className={className}>
      <p className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight text-terracotta tabular-nums">{formatPrice(amount)}</span>
        <span className="text-sm text-ink-soft">{site.copy.rooms.perNight}</span>
      </p>
      <p className="mt-1 font-label text-[0.65rem] tracking-[0.18em] text-gold-deep uppercase">{note}</p>
    </div>
  );
}

function Price({ room }: { room: Room }) {
  const t = site.copy.rooms;
  if (room.rates.withMeals === null) {
    return <PriceLine amount={room.rates.roomOnly} note={t.singleRateNote} />;
  }
  return (
    <>
      <PriceLine amount={room.rates.roomOnly} note={t.toggleRoomOnly} className={SHOW_ROOM_ONLY} />
      <PriceLine amount={room.rates.withMeals} note={room.withMealsLabel ?? t.toggleWithMeals} className={SHOW_WITH_MEALS} />
    </>
  );
}

function RoomCard({ room, wide = false }: { room: Room; wide?: boolean }) {
  const t = site.copy.rooms;
  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-3xl bg-white/70 shadow-lg ring-1 shadow-forest-night/5 ring-forest-night/5 ${
        wide ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative overflow-hidden ${wide ? "aspect-[4/3] md:aspect-auto md:w-1/2" : "aspect-[4/3]"}`}>
        <SitePhoto
          photo={room.photo}
          fill
          sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {room.capacity && (
          <span className="absolute top-4 left-4 rounded-full bg-forest-night/85 px-3 py-1 text-xs font-medium text-parchment">
            Up to {room.capacity} guests
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col p-6 ${wide ? "md:justify-center md:p-10" : ""}`}>
        <h3 className={`font-display text-forest-night italic ${wide ? "text-4xl" : "text-3xl"}`}>{room.name}</h3>
        <p className="mt-2 flex-1 text-ink-soft">{room.summary}</p>
        <div className="mt-6">
          <Price room={room} />
        </div>
        <WhatsAppButton
          label={t.ask}
          message={roomEnquiryMessage(room.name)}
          variant={wide ? "primary" : "outline-dark"}
          size="sm"
          className="mt-5 self-start"
        />
      </div>
    </article>
  );
}

export function Rooms() {
  const t = site.copy.rooms;
  const featured = site.rooms.filter((r) => r.featured);
  const regular = site.rooms.filter((r) => !r.featured);

  return (
    <section id="rooms" data-plan="roomOnly" aria-labelledby="rooms-heading" className="group/rooms bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="rooms-heading" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

        <div className="mt-10 flex justify-center">
          <RateToggle targetId="rooms" roomOnlyLabel={t.toggleRoomOnly} withMealsLabel={t.toggleWithMeals} />
        </div>

        {/* Phones: swipeable row with the next card peeking in. Larger screens: grid. */}
        <ul
          aria-label="Rooms"
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
        >
          {regular.map((room, i) => (
            <Reveal as="li" key={room.id} delay={(i % 4) * 0.07} className="w-[82%] shrink-0 snap-center sm:w-auto">
              <RoomCard room={room} />
            </Reveal>
          ))}
        </ul>
        <p className="mt-2 text-center text-sm text-ink-soft sm:hidden" aria-hidden="true">
          Swipe to see all rooms →
        </p>
        {featured.map((room) => (
          <Reveal key={room.id} className="mt-6">
            <RoomCard room={room} wide />
          </Reveal>
        ))}

        <div className="mt-16">
          <h3 className="text-center font-display text-3xl text-forest-night italic">{t.spacesHeading}</h3>
          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:gap-10">
            {site.spaces.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 0.08}>
                <figure className={`taped-frame ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SitePhoto photo={s.photo} fill sizes="(min-width: 768px) 360px, 45vw" className="object-cover" />
                  </div>
                  <figcaption className="pt-2.5 text-center font-display text-xl text-forest-night italic sm:text-2xl">
                    {s.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-forest-night/10 p-6 text-ink-soft sm:grid-cols-2 sm:p-8">
          <p className="flex gap-3">
            <Icon name="breakfast" className="shrink-0 text-leaf" />
            <span>{t.breakfastNote}</span>
          </p>
          {site.extras.map((x) => (
            <p key={x.name} className="flex gap-3">
              <Icon name="laundry" className="shrink-0 text-leaf" />
              <span>
                {x.name}: <strong className="font-semibold text-forest-night">{formatPrice(x.priceLKR)}</strong> {x.unit}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
