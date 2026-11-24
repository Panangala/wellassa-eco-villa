import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/content/types";

type UiIcon =
  | IconName
  | "whatsapp"
  | "phone"
  | "mail"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "menu"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "pin"
  | "arrow-right"
  | "check"
  | "globe";

interface Props extends SVGProps<SVGSVGElement> {
  name: UiIcon;
  size?: number;
}

// Simple line icons (24×24, 1.6 stroke) drawn to match the calm, hand-made feel.
const paths: Record<UiIcon, ReactNode> = {
  mountain: (
    <>
      <path d="M2 20 9 8l4 6 3-4 6 10H2Z" />
      <path d="m7.5 10.5 1.5 1 1.5-1" />
      <circle cx="18" cy="5" r="1.6" />
    </>
  ),
  waterfall: (
    <>
      <path d="M4 4h16" />
      <path d="M7 4v9M11 4v12M15 4v9M19 4v6" />
      <path d="M3 19c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" />
    </>
  ),
  campfire: (
    <>
      <path d="M12 3c2.5 3 4 5 4 7.5A4 4 0 0 1 8 10.5C8 9 9 7.5 10 7c0 1.5.8 2.5 2 3 .3-2.5-.5-4.5 0-7Z" />
      <path d="m4 20 16-4M4 16l16 4" />
    </>
  ),
  breakfast: (
    <>
      <path d="M3 11h14v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2Z" />
      <path d="M17 12h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M7 4c-.8 1 .8 2 0 3M11 4c-.8 1 .8 2 0 3" />
    </>
  ),
  group: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.2A5 5 0 0 1 21.5 19" />
    </>
  ),
  laundry: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M4 7.5h16" />
      <circle cx="12" cy="14" r="4" />
      <path d="M9.5 14.5c1 .8 2 .8 3 0s2-.8 3 0" />
      <circle cx="7" cy="5.3" r=".4" fill="currentColor" />
    </>
  ),
  hike: (
    <>
      <circle cx="13" cy="4" r="1.8" />
      <path d="m9 21 3-7 3 2v5" />
      <path d="m12 14-1-5 4 2 2 3" />
      <path d="M11 9 8 11v3" />
      <path d="m18 8 1 13" />
    </>
  ),
  tent: (
    <>
      <path d="M12 4 2 20h20L12 4Z" />
      <path d="M9 20l3-6 3 6" />
    </>
  ),
  bbq: (
    <>
      <path d="M4 10h16a8 8 0 0 1-16 0Z" />
      <path d="m8 17-2 4M16 17l2 4M12 18v3" />
      <path d="M9 3c-.8 1 .8 2 0 4M13 3c-.8 1 .8 2 0 4M17 3c-.8 1 .8 2 0 4" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </>
  ),
  stars: (
    <>
      <path d="M12 3l1.6 3.9 4.1.4-3.1 2.8.9 4.1-3.5-2.2-3.5 2.2.9-4.1-3.1-2.8 4.1-.4L12 3Z" />
      <path d="M5 17.5v3M3.5 19h3M19 16v4M17 18h4" />
    </>
  ),
  forest: (
    <>
      <path d="M8 3 3.5 11h2.5L3 16h10l-3-5h2.5L8 3Z" />
      <path d="M8 16v5" />
      <path d="M16.5 7 13 13h2l-2 4h7.5l-2-4h2l-4-6Z" />
      <path d="M16.5 17v4" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5Z" />
      <path d="M12 14.5c0-3.5-2-5.5-6.5-5.5 0 3.5 2 5.5 6.5 5.5Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.05a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.07.89.9-3-.2-.31a8.2 8.2 0 1 1 6.85 3.75Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.55.12-.16.24-.63.8-.78.96-.14.17-.29.19-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42l-.75-1.82c-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.75 2.75 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.54 11 11 0 0 0 4.2 3.7c1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.17-.46-.3Z"
    />
  ),
  phone: (
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.5-1.5h1.6V4.4A21 21 0 0 0 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.6H8v3h2.5V21h3Z"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>
  ),
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.3 4.2 5 4.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  "chevron-left": <path d="m15 5-7 7 7 7" />,
  "chevron-right": <path d="m9 5 7 7-7 7" />,
  "chevron-down": <path d="m5 9 7 7 7-7" />,
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 0 0-14 0C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

export function Icon({ name, size = 24, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
