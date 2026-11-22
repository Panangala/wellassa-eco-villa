// Builds optimised, responsive copies of the photos in ./photos into ./public/images.
// Originals in ./photos are never modified.
//
//   npm run images            (skips images that are already up to date)
//   npm run images -- --force (rebuild everything)
//
// For every photo it writes <slug>-<width>.webp for each width in WIDTHS and records
// its width/height in src/content/images.generated.json.
// Slug: "2025_10_14_21_04_26_IMG_0102.JPG" -> "img-0102"; other names are lower-kebab-cased.
// ./photos/logo.png (if present) is copied to public/images/logo.png and used for the favicon.

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, stat, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "photos");
const OUT = path.join(ROOT, "public", "images");
const MANIFEST = path.join(ROOT, "src", "content", "images.generated.json");
const APP = path.join(ROOT, "src", "app");

// Keep in sync with images.deviceSizes / images.imageSizes in next.config.ts
const WIDTHS = [384, 640, 1080, 1920];
const QUALITY = 72;
const OG_SOURCE_SLUG = "img-0094"; // hero photo used for the social share image
const force = process.argv.includes("--force");

const slugFor = (file) => {
  const m = file.match(/IMG_(\d+)/i);
  if (m) return `img-${m[1]}`;
  return path
    .parse(file)
    .name.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

await mkdir(OUT, { recursive: true });
if (!existsSync(SRC)) {
  console.error("No ./photos folder found.");
  process.exit(1);
}

const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp|avif|tiff?)$/i.test(f));

let built = 0;
for (const file of files) {
  if (file.toLowerCase() === "logo.png") continue;
  const slug = slugFor(file);
  const input = path.join(SRC, file);
  const largest = path.join(OUT, `${slug}-${WIDTHS.at(-1)}.webp`);
  if (!force && manifest[slug] && existsSync(largest)) {
    const [a, b] = await Promise.all([stat(input), stat(largest)]);
    if (b.mtimeMs >= a.mtimeMs) continue;
  }

  // .rotate() applies EXIF orientation so portrait phone photos stay upright.
  const base = sharp(input, { failOn: "none" }).rotate();
  const raw = await sharp(input).metadata();
  const swap = (raw.orientation ?? 1) >= 5; // EXIF 5–8 are rotated 90°
  const meta = { width: swap ? raw.height : raw.width, height: swap ? raw.width : raw.height };
  await Promise.all(
    WIDTHS.map((w) =>
      base
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(path.join(OUT, `${slug}-${w}.webp`)),
    ),
  );
  manifest[slug] = { width: meta.width, height: meta.height };
  built++;
  process.stdout.write(`✓ ${slug}  (${file})\n`);
}

// Social share image (1200x630)
const ogSrc = files.find((f) => slugFor(f) === OG_SOURCE_SLUG);
const ogOut = path.join(OUT, "og.jpg");
if (ogSrc && (force || !existsSync(ogOut))) {
  await sharp(path.join(SRC, ogSrc))
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(ogOut);
  console.log("✓ og.jpg");
}

// Logo + favicons
const logo = path.join(SRC, "logo.png");
if (existsSync(logo)) {
  await copyFile(logo, path.join(OUT, "logo.png"));
  await sharp(logo).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(APP, "icon.png"));
  await sharp(logo).resize(180, 180, { fit: "contain", background: "#F4EEDC" }).png().toFile(path.join(APP, "apple-icon.png"));
  // The placeholder SVG monogram is no longer needed once a real logo exists.
  await rm(path.join(APP, "icon.svg"), { force: true });
  console.log("✓ logo.png, icon.png, apple-icon.png");
} else {
  console.log("i  No photos/logo.png yet: keeping the text wordmark and SVG favicon.");
}

const sorted = Object.fromEntries(
  Object.entries(manifest)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => [k, { width: v.width, height: v.height }]),
);
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
console.log(`Done. ${built} image(s) processed, ${Object.keys(sorted).length} in manifest.`);
