import { site } from "@/content/site";
import { imageMeta } from "@/lib/images";

/** LodgingBusiness structured data, built only from confirmed facts in site.ts. */
export function JsonLd() {
  const prices = site.rooms.flatMap((r) => [r.rates.roomOnly, r.rates.withMeals ?? r.rates.roomOnly]);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const fmt = (n: number) => n.toLocaleString("en-US");
  const sameAs = [site.social.facebook, site.social.instagram, site.social.tiktok].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.brand.name,
    alternateName: site.brand.facebookName,
    description: site.seo.description,
    slogan: site.brand.tagline,
    url: site.siteUrl,
    image: [`${site.siteUrl}/images/og.jpg`, `${site.siteUrl}${imageMeta(site.photos.hero.id).src}-1920.webp`],
    ...(site.brand.logo ? { logo: `${site.siteUrl}${site.brand.logo}` } : {}),
    telephone: site.contact.phones.map((p) => p.tel),
    email: site.contact.email,
    priceRange: `LKR ${fmt(min)} – LKR ${fmt(max)}`,
    currenciesAccepted: "LKR",
    address: {
      "@type": "PostalAddress",
      ...(site.location.address ? { streetAddress: site.location.address } : {}),
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.location.coordinates.latitude,
      longitude: site.location.coordinates.longitude,
    },
    hasMap: site.location.mapLink,
    areaServed: `${site.location.district}, ${site.location.region}`,
    maximumAttendeeCapacity: 20,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      // Static, trusted content from site.ts
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
