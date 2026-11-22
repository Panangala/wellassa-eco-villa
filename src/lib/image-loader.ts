"use client";

// Custom next/image loader for the static export.
// Images are pre-built by scripts/optimize-images.mjs as /images/<id>-<width>.webp.
// Keep WIDTHS in sync with that script and with next.config.ts.
const WIDTHS = [384, 640, 1080, 1920];

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  // Leave anything that isn't a generated photo (e.g. /images/logo.png) untouched.
  if (!src.startsWith("/images/img-")) return src;
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `${src}-${w}.webp`;
}
