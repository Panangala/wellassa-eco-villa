import Image from "next/image";
import type { Photo } from "@/content/types";
import { imageMeta } from "@/lib/images";

interface Props {
  photo: Photo;
  sizes: string;
  className?: string;
  /** Fill the parent (parent must be positioned and sized) */
  fill?: boolean;
  /** Preload: use for the hero (LCP) image only */
  priority?: boolean;
}

/**
 * A content photo with responsive sizes. Server component: the image manifest never
 * ships to the browser. A soft tint shows while the photo loads.
 */
export function SitePhoto({ photo, sizes, className = "", fill = false, priority = false }: Props) {
  const meta = imageMeta(photo.id);
  const common = {
    src: meta.src,
    sizes,
    className: `bg-forest-night/10 ${className}`,
    style: photo.position ? { objectPosition: photo.position } : undefined,
    // Next 16: `preload` replaces the deprecated `priority` prop
    ...(priority ? { preload: true } : {}),
  };
  return fill ? (
    <Image {...common} alt={photo.alt} fill />
  ) : (
    <Image {...common} alt={photo.alt} width={meta.width} height={meta.height} />
  );
}
