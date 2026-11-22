import Image from "next/image";
import { site } from "@/content/site";

interface Props {
  tone?: "light" | "dark";
  size?: "sm" | "lg";
}

/** Logo badge + name. Falls back to a text-only wordmark until a logo is added (see site.ts). */
export function Wordmark({ tone = "dark", size = "sm" }: Props) {
  const onDark = tone === "dark";
  const badge = size === "lg" ? 72 : 44;
  return (
    <span className="flex items-center gap-3">
      {site.brand.logo ? (
        <Image
          src={site.brand.logo}
          alt=""
          width={badge}
          height={badge}
          unoptimized
          className="rounded-full"
        />
      ) : (
        <span
          aria-hidden="true"
          style={{ width: badge, height: badge }}
          className={`grid shrink-0 place-items-center rounded-full border font-display italic ${
            size === "lg" ? "text-4xl" : "text-2xl"
          } ${onDark ? "border-gold/60 text-gold" : "border-leaf/50 text-leaf"}`}
        >
          W
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display italic ${size === "lg" ? "text-3xl" : "text-xl sm:text-2xl"} ${
            onDark ? "text-parchment" : "text-forest-night"
          }`}
        >
          {site.brand.name}
        </span>
        <span
          className={`mt-1 font-label text-[0.6rem] tracking-[0.2em] whitespace-nowrap uppercase ${
            size === "sm" ? "hidden sm:block" : ""
          } ${onDark ? "text-gold" : "text-gold-deep"}`}
        >
          {site.brand.descriptor}
        </span>
      </span>
    </span>
  );
}
