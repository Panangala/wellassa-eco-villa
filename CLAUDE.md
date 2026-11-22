# Wellassa Eco Villa — project context

Marketing website for **Wellassa Eco Villa** ("Bungalow · Bibile, Uva Province"), a family-run countryside
bungalow stay in Bibile, Wellassa district, Uva Province, Sri Lanka. Goal: turn visitors (international
travellers + Sri Lankan families/groups) into enquiries. The primary action everywhere is
**"Enquire / Book via WhatsApp"** (+94 77 304 5807).

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4 (theme tokens in `src/app/globals.css` `@theme`)
- Framer Motion for subtle animation, `next/font` for fonts, `next/image` for every photo
- Static export (`output: "export"`) → `out/`; deploys free on Vercel
- npm package name: `wellassa-eco-villa`. Windows + PowerShell dev environment.

## Where things live
- `src/content/site.ts` — **single source of truth** for all site data and copy (name, phones, rates,
  rooms, nearby places, FAQs, social links, images + alt text). Components must not hard-code content.
  Unknown facts are `TODO` placeholders here (search for `TODO`).
- `src/content/images.generated.json` — generated image dimensions. Don't edit by hand. Only server
  components may import `src/lib/images.ts` (keeps the manifest out of the client bundle); client
  components receive resolved image data as props (see Gallery → GalleryGrid).
- `src/components/sections/*` — one component per home-page section (so pages can be split later).
- `src/components/ui/*` — shared UI (buttons, icons, section headings, decorative line art).
- `src/lib/*` — helpers (WhatsApp links, price formatting, image loader, i18n scaffolding).
- `photos/` — original photos (never modify, git-ignored). `public/images/` — optimised copies.
- `scripts/optimize-images.mjs` — builds `public/images/*` variants from `photos/` (`npm run images`).

## Brand
- Colours: forest-night `#0F2A1E`, leaf `#2F6B3F`, parchment `#F4EEDC`, gold `#E3B04B`, terracotta `#A9472C`.
- Type: Cormorant Garamond italic (brand + headlines), Cinzel uppercase (small labels, sparingly),
  Inter (body).
- Feel: lush tropical night garden — deep green, warm gold glow, terracotta roof. Calm, premium,
  photography-led. Alternate parchment and forest sections. Line-art leaf accents, subtle glow. Don't overdo it.
- Logo: `public/images/logo.png` (not supplied yet → text wordmark, see TODO in `site.ts`).

## Content rules (important)
- Use ONLY the facts in `site.ts`. Never invent amenities, reviews, testimonials, awards, statistics,
  distances, times or addresses. Unknowns stay as clearly marked TODOs.
- Copy: warm, honest, short sentences, written for travellers. No clichés or exaggeration.

## Next.js 16 notes (see AGENTS.md: read node_modules/next/dist/docs before using unfamiliar APIs)
- Static export + custom image loader (`src/lib/image-loader.ts`); widths 384/640/1080/1920 must match
  `next.config.ts` and `scripts/optimize-images.mjs`.
- `cacheComponents` is deliberately OFF: it forbids the `dynamic = "force-static"` that static export
  requires for `sitemap.ts` / `robots.ts`.
- Use `preload` (not the deprecated `priority`) on the hero image only.
- Scroll reveals are CSS (`.reveal`) + one `RevealObserver`; don't wrap sections in Framer Motion.
  Framer Motion (via `LazyMotion` + `m`) is used only for the mobile menu, lightbox and floating button.

## Conventions
- Mobile-first. Accessible (semantic landmarks, alt text, focus rings in gold, AA contrast).
- Prices stored as numbers in LKR; format via `src/lib/format.ts` (ready for a LKR/USD toggle).
- Copy typed so other locales (Sinhala/Tamil) can implement the same `SiteContent` type later.
- Before finishing work: `npm run lint` and `npm run build` must both be clean.
