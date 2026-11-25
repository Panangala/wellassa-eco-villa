# Wellassa Eco Villa — website

The website for **Wellassa Eco Villa**, a family-run countryside bungalow in Bibile, Uva Province, Sri Lanka.
It's a fast, single-page, mobile-first site. Every "book" button opens WhatsApp (+94 77 304 5807).

Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. It exports as a static site and
deploys free on Vercel.

---

## 1. Run it on your computer

You need **Node.js 20 or newer** (`node -v` to check). In PowerShell, from this folder:

```powershell
npm install        # first time only
npm run dev        # start the dev server
```

Open <http://localhost:3000>. The page reloads as you save changes.

Other commands:

| Command          | What it does                                                         |
| ---------------- | -------------------------------------------------------------------- |
| `npm run build`  | Production build. Writes the static site to `out/`.                  |
| `npm run start`  | Serves the built `out/` folder at <http://localhost:3000>.            |
| `npm run lint`   | Checks the code for problems.                                        |
| `npm run images` | Rebuilds optimised photos from `./photos` (see below).               |

---

## 2. Edit the content (`src/content/site.ts`)

**All text, phone numbers, prices, rooms, nearby places, FAQs, social links and photos are in one file:
[`src/content/site.ts`](src/content/site.ts).** You never need to edit the components.

- **Prices** are plain numbers in LKR, e.g. `rates: { roomOnly: 7500, withMeals: 8500 }`.
- **Hidden until filled:** anything set to `null` (Instagram, map link, FAQ answers, distances…) is simply
  not shown on the site. Replace `null` with real text to make it appear.
- **TODOs:** search the file for `TODO` to see what still needs filling in.
- **FAQ:** add `{ q: "Question?", a: "Answer." }` to `faqs`. Questions with `a: null` stay hidden.
- **Map:** in Google Maps, find the villa → **Share → Embed a map** → copy only the URL inside
  `src="…"` into `location.mapEmbedUrl`. Put the normal share link in `location.mapLink`.
- **Brand colours** are defined in [`src/app/globals.css`](src/app/globals.css) (`@theme` block).

After editing, check the site with `npm run dev`, then run `npm run build` to make sure nothing broke.

---

## 3. Photos

- **Originals** go in `./photos`. They're never changed, and they're kept out of git because they're large.
- **Optimised copies** are generated into `public/images/` as WebP in four sizes (384, 640, 1080 and 1920 px).
  Each photo's dimensions are stored in `src/content/images.generated.json`. The browser picks the right size
  automatically, so phones download small files.

To add photos:

1. Copy the new photos into `./photos`.
2. Run `npm run images` (only new or changed photos are processed; add `-- --force` to redo all).
3. Each photo gets an id from its file name: `2025_10_14_21_04_26_IMG_0102.JPG` → `img-0102`;
   `My Garden.jpg` → `my-garden`.
4. Use the id in `site.ts`, e.g. add `{ id: "img-0102", alt: "What the photo shows" }` to `gallery`.
   Always write a short, honest `alt` description.

### Logo

Save your logo as **`photos/logo.png`** (square, transparent or cream background, at least 512 px), then:

1. Run `npm run images`. This copies it to `public/images/logo.png` and creates the favicon
   (`src/app/icon.png` and `apple-icon.png`), replacing the placeholder icon.
2. In `site.ts`, set `brand.logo: "/images/logo.png"`.

---

## 4. Environment variables (optional)

The enquiry form always opens WhatsApp with the message ready to send. To **also** receive each enquiry by email:

1. Create a free form at [formspree.io](https://formspree.io) using wellassaecovilla@gmail.com.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` to your form id (e.g. `xayzabcd`).
3. On Vercel, add the same variable under **Project → Settings → Environment Variables**, then redeploy.

---

## 5. Deploy to Vercel (free)

1. Push this folder to a GitHub repository (private is fine):
   ```powershell
   git remote add origin https://github.com/<you>/wellassa-eco-villa.git
   git push -u origin main
   ```
2. Sign in at [vercel.com](https://vercel.com) with GitHub → **Add New → Project** → import the repo.
3. Vercel detects Next.js automatically. Keep the defaults and click **Deploy**.
4. Every push to `main` redeploys the site automatically.

Note: `public/images/` (the optimised photos) **is** committed so Vercel can serve them. `./photos` is not.

## 6. Connect a custom domain

1. Buy a domain (e.g. from Namecheap, Cloudflare or a `.lk` registrar).
2. In Vercel: **Project → Settings → Domains → Add**, enter e.g. `wellassaecovilla.com` and `www.wellassaecovilla.com`.
3. Vercel shows the DNS records to add at your registrar (usually an `A` record for the bare domain and a
   `CNAME` for `www`). Add them; HTTPS is set up automatically once DNS updates (minutes to a few hours).
4. `siteUrl` in `site.ts` is `"https://wellassaecovilla.com"` (the bare domain is the main address;
   `www` redirects to it). It's used for canonical URLs, the sitemap, robots.txt, social share cards and
   search-engine data. If the domain ever changes, update it there and push.
5. Optional: add the site to [Google Search Console](https://search.google.com/search-console) and submit
   `https://<your-domain>/sitemap.xml`.

---

## Project structure

```
photos/                       original photos (not in git)
public/images/                optimised photos, og.jpg share image, logo
scripts/optimize-images.mjs   photo optimiser (npm run images)
src/app/                      layout, page, metadata, sitemap, robots, favicon
src/components/sections/      one component per section (Hero, Rooms, Gallery, …)
src/components/layout/        header, footer, floating WhatsApp button
src/components/ui/            shared building blocks (icons, buttons, headings…)
src/content/site.ts           ← all content lives here
src/content/types.ts          content types (shared by future translations)
src/lib/                      WhatsApp links, price formatting, image loader, i18n
```

## Ready for later

- **Sinhala / Tamil:** `site.ts` is typed as `SiteContent`. Create `site.si.ts` / `site.ta.ts` with the same
  shape and register them in `src/lib/i18n.ts`, then add a `[locale]` route segment.
- **LKR / USD toggle:** prices are numbers, formatted by `formatPrice()` in `src/lib/format.ts`. Set
  `currency.usdRate` in `site.ts` and pass `"USD"` to show approximate dollar prices.
- **Blog:** add `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` with posts stored in
  `src/content/blog/` (Markdown or MDX). Sections are separate components, so they can move to their own
  pages too.
