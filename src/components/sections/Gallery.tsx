import { site } from "@/content/site";
import { imageMeta } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid, type GalleryItem } from "./GalleryGrid";

export function Gallery() {
  const t = site.copy.gallery;
  // Resolve sizes on the server so only these 24 entries reach the browser.
  const items: GalleryItem[] = site.gallery.map((p) => ({ ...imageMeta(p.id), alt: p.alt }));
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="gallery-heading" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />
        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
