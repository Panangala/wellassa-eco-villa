import { site } from "@/content/site";
import type { Locale, SiteContent } from "@/content/types";

/**
 * Translation scaffolding. Today the site is English-only.
 * To add Sinhala or Tamil later:
 *   1. Add "si" / "ta" to the `Locale` type in src/content/types.ts
 *   2. Create src/content/site.si.ts exporting a `SiteContent` object
 *   3. Register it below and add a [locale] route segment in src/app
 */
export const locales: Record<Locale, SiteContent> = {
  en: site,
};

export const defaultLocale: Locale = "en";

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return locales[locale] ?? locales[defaultLocale];
}
