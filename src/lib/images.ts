// Server-side only (used by server components) so the manifest isn't shipped to browsers.
import manifest from "@/content/images.generated.json";

export interface ImageMeta {
  src: string;
  width: number;
  height: number;
}

type Manifest = Record<string, { width: number; height: number }>;
const images = manifest as Manifest;

/** Look up a generated image by id. Throws at build time if the id doesn't exist. */
export function imageMeta(id: string): ImageMeta {
  const m = images[id];
  if (!m) {
    throw new Error(
      `Image "${id}" not found in images.generated.json. Add the photo to ./photos and run "npm run images".`,
    );
  }
  return { src: `/images/${id}`, width: m.width, height: m.height };
}
