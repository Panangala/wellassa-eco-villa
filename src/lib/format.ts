import type { Currency } from "@/content/types";
import { site } from "@/content/site";

/**
 * Format a price stored in LKR. Ready for a future LKR/USD toggle:
 * set `site.currency.usdRate` and pass "USD" to show an approximate dollar price.
 */
export function formatPrice(amountLKR: number, currency: Currency = "LKR"): string {
  if (currency === "USD" && site.currency.usdRate) {
    const usd = Math.round(amountLKR / site.currency.usdRate);
    return `≈ US$${usd.toLocaleString("en-US")}`;
  }
  return `LKR ${amountLKR.toLocaleString("en-US")}`;
}
