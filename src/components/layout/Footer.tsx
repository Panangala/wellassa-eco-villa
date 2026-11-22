import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { MonsteraLine } from "@/components/ui/LeafArt";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  const { footer, nav } = site.copy;
  const year = new Date().getFullYear(); // build year (static export)
  const socials = [
    { name: "facebook" as const, href: site.social.facebook, label: site.brand.facebookName },
    { name: "instagram" as const, href: site.social.instagram, label: "Instagram" },
    { name: "tiktok" as const, href: site.social.tiktok, label: "TikTok" },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-parchment">
      <MonsteraLine className="pointer-events-none absolute -right-10 -bottom-16 w-72 text-gold/10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Wordmark tone="dark" size="lg" />
          <p className="mt-6 max-w-sm text-parchment/75">{footer.blurb}</p>
          <p className="mt-3 font-label text-xs tracking-[0.25em] text-gold uppercase">
            {site.brand.values.join(" • ")}
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-gold">{footer.contactUs}</h2>
          <ul className="mt-5 space-y-3">
            {site.contact.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="group flex items-center gap-3 rounded hover:text-gold">
                  <Icon name="phone" size={18} className="text-gold" />
                  <span>
                    {p.display}
                    <span className="block text-xs text-parchment/60 group-hover:text-gold/80">{p.label}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 rounded break-all hover:text-gold">
                <Icon name="mail" size={18} className="shrink-0 text-gold" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">{footer.followUs}</h2>
          <ul className="mt-5 space-y-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded hover:text-gold"
                >
                  <Icon name={s.name} size={20} className="text-gold" />
                  {s.label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <nav aria-label="Footer" className="mt-8">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-parchment/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative border-t border-parchment/10">
        <p className="mx-auto max-w-7xl px-4 py-6 pb-24 text-xs text-parchment/60 sm:px-6 md:pb-6 lg:px-8">
          © {year} {site.brand.name}, {site.location.locality}, {site.location.region},{" "}
          {site.location.country}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
