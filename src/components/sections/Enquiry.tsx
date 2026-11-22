"use client";

import { useId, useState, useSyncExternalStore, type FormEvent } from "react";
import { site } from "@/content/site";
import { enquiryMessage, whatsappLink, type EnquiryDetails } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { MonsteraLine } from "@/components/ui/LeafArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Optional: set NEXT_PUBLIC_FORMSPREE_ID (e.g. "xayzabcd") to also receive enquiries by email.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const MAX_GUESTS = 20;

type Field = "name" | "checkIn" | "checkOut" | "guests" | "room";
type Errors = Partial<Record<Field, string>>;

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const noopSubscribe = () => () => {};

function validate(d: EnquiryDetails): Errors {
  const e = site.copy.enquiry.errors;
  const errors: Errors = {};
  if (!d.name.trim()) errors.name = e.name;
  if (!d.checkIn) errors.checkIn = e.checkIn;
  else if (d.checkIn < todayISO()) errors.checkIn = e.checkInPast;
  if (!d.checkOut || (d.checkIn && d.checkOut <= d.checkIn)) errors.checkOut = e.checkOut;
  if (!Number.isInteger(d.guests) || d.guests < 1 || d.guests > MAX_GUESTS) errors.guests = e.guests;
  const room = site.rooms.find((r) => r.name === d.room);
  if (!errors.guests && room?.capacity && d.guests > room.capacity) {
    errors.room = `The ${room.name} sleeps up to ${room.capacity}. Choose another option or the whole villa.`;
  }
  return errors;
}

export function Enquiry() {
  const t = site.copy.enquiry;
  const uid = useId();
  // Today's date for the date pickers' `min`: undefined in the static HTML, real date in the browser.
  const today = useSyncExternalStore(noopSubscribe, todayISO, () => undefined);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [emailed, setEmailed] = useState(false);
  const [lastLink, setLastLink] = useState<string>(whatsappLink());

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const details: EnquiryDetails = {
      name: String(fd.get("name") ?? ""),
      checkIn: String(fd.get("checkIn") ?? ""),
      checkOut: String(fd.get("checkOut") ?? ""),
      guests: Number(fd.get("guests")),
      room: String(fd.get("room") ?? t.fields.roomAny),
      message: String(fd.get("message") ?? ""),
    };
    const found = validate(details);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const link = whatsappLink(enquiryMessage(details));
    setLastLink(link);
    // Open WhatsApp straight away (inside the click) so pop-up blockers allow it.
    const win = window.open(link, "_blank");
    if (win) win.opener = null;
    else window.location.href = link;
    setStatus("sent");

    if (FORMSPREE_ID && !fd.get("_gotcha")) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ ...details, _subject: `Website enquiry from ${details.name}` }),
        });
        setEmailed(res.ok);
      } catch {
        // WhatsApp is the main channel; email delivery is best-effort.
      }
    }
  }

  const fieldClass = (f: Field) =>
    `mt-2 block h-12 w-full rounded-xl border bg-white px-4 text-forest-night placeholder:text-ink-soft/60 ${
      errors[f] ? "border-terracotta ring-1 ring-terracotta" : "border-forest-night/15"
    }`;
  const id = (f: string) => `${uid}-${f}`;
  const err = (f: Field) =>
    errors[f] ? (
      <p id={id(`${f}-error`)} className="mt-1.5 text-sm font-medium text-terracotta">
        {errors[f]}
      </p>
    ) : null;
  const aria = (f: Field) => ({
    id: id(f),
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? id(`${f}-error`) : undefined,
  });

  return (
    <section id="enquire" aria-labelledby="enquire-heading" className="relative overflow-hidden bg-parchment py-20 sm:py-28">
      <MonsteraLine className="pointer-events-none absolute -top-8 -left-20 hidden w-80 text-leaf/10 md:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="enquire-heading" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-[2rem] bg-white/70 p-6 shadow-xl ring-1 shadow-forest-night/5 ring-forest-night/5 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor={id("name")} className="text-sm font-medium text-forest-night">
                    {t.fields.name}
                  </label>
                  <input {...aria("name")} type="text" autoComplete="name" required className={fieldClass("name")} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor={id("checkIn")} className="text-sm font-medium text-forest-night">
                    {t.fields.checkIn}
                  </label>
                  <input {...aria("checkIn")} type="date" min={today} required className={fieldClass("checkIn")} />
                  {err("checkIn")}
                </div>
                <div>
                  <label htmlFor={id("checkOut")} className="text-sm font-medium text-forest-night">
                    {t.fields.checkOut}
                  </label>
                  <input {...aria("checkOut")} type="date" min={today} required className={fieldClass("checkOut")} />
                  {err("checkOut")}
                </div>
                <div>
                  <label htmlFor={id("guests")} className="text-sm font-medium text-forest-night">
                    {t.fields.guests} <span className="font-normal text-ink-soft">(max {MAX_GUESTS})</span>
                  </label>
                  <input
                    {...aria("guests")}
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={MAX_GUESTS}
                    defaultValue={2}
                    required
                    className={fieldClass("guests")}
                  />
                  {err("guests")}
                </div>
                <div>
                  <label htmlFor={id("room")} className="text-sm font-medium text-forest-night">
                    {t.fields.room}
                  </label>
                  <select {...aria("room")} defaultValue={t.fields.roomAny} className={fieldClass("room")}>
                    <option>{t.fields.roomAny}</option>
                    {site.rooms.map((r) => (
                      <option key={r.id}>{r.name}</option>
                    ))}
                  </select>
                  {err("room")}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={id("message")} className="text-sm font-medium text-forest-night">
                    {t.fields.message}
                  </label>
                  <textarea
                    id={id("message")}
                    name="message"
                    rows={4}
                    placeholder={t.fields.messagePlaceholder}
                    className="mt-2 block w-full rounded-xl border border-forest-night/15 bg-white px-4 py-3 text-forest-night placeholder:text-ink-soft/60"
                  />
                </div>
                {/* Spam trap for Formspree: hidden from people */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              </div>

              <button type="submit" className="btn mt-8 h-14 w-full gap-3 bg-leaf px-7 text-base text-parchment hover:bg-terracotta sm:w-auto">
                <Icon name="whatsapp" size={20} />
                {t.submit}
              </button>

              <div aria-live="polite" className="mt-5">
                {status === "sent" && (
                  <div className="rounded-2xl bg-leaf/10 p-4 text-forest-night">
                    <p className="flex gap-2">
                      <Icon name="check" className="shrink-0 text-leaf" />
                      <span>
                        {t.success} {emailed && t.emailSent}
                      </span>
                    </p>
                    <a
                      href={lastLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-medium text-leaf underline underline-offset-4"
                    >
                      {t.fallback}
                    </a>
                  </div>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="night-section relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 text-parchment sm:p-10">
              <h3 className="font-display text-3xl italic">{t.contactHeading}</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded hover:text-gold">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name="whatsapp" size={20} />
                    </span>
                    <span>
                      <span className="block text-sm text-parchment/60">WhatsApp</span>
                      {site.contact.whatsapp.display}
                    </span>
                  </a>
                  <a
                    href={`tel:+${site.contact.whatsapp.e164}`}
                    className="mt-1 ml-14 inline-block rounded text-sm text-gold underline underline-offset-4 hover:text-parchment"
                  >
                    Or call this number
                  </a>
                </li>
                {site.contact.phones
                  .filter((p) => p.tel !== `+${site.contact.whatsapp.e164}`)
                  .map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-3 rounded hover:text-gold">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                        <Icon name="phone" size={20} />
                      </span>
                      <span>
                        <span className="block text-sm text-parchment/60">{p.label}</span>
                        {p.display}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 rounded hover:text-gold">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name="mail" size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-parchment/60">Email</span>
                      <span className="break-all">{site.contact.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="mt-10 border-t border-parchment/10 pt-6 lg:mt-auto">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded hover:text-gold"
                >
                  <Icon name="facebook" size={20} className="text-gold" />
                  {site.brand.facebookName}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <p className="mt-4 font-label text-[0.65rem] tracking-[0.25em] text-gold uppercase">
                  {site.brand.values.join(" • ")}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
