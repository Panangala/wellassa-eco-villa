// Types for site content. A translated version of the site (e.g. Sinhala or Tamil)
// implements the same `SiteContent` type, so every component keeps working.

export type Locale = "en"; // later: "en" | "si" | "ta"
export type Currency = "LKR" | "USD";

export type IconName =
  | "mountain"
  | "waterfall"
  | "campfire"
  | "breakfast"
  | "group"
  | "laundry"
  | "hike"
  | "tent"
  | "bbq";

export interface Photo {
  /** Image id from images.generated.json, e.g. "img-0094" */
  id: string;
  /** Describe what is in the photo for screen readers and search engines */
  alt: string;
  /** Optional CSS object-position for cropped images, e.g. "35% 60%" */
  position?: string;
}

export interface Phone {
  display: string;
  tel: string;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  summary: string;
  /** Max guests, or null if not confirmed (hidden) */
  capacity: number | null;
  rates: { roomOnly: number; withMeals: number | null };
  /** "Bed & breakfast", "With food", or null when there is a single rate */
  withMealsLabel: string | null;
  featured?: boolean;
  photo: Photo;
}

export interface NearbyPlace {
  name: string;
  kind: string;
  description: string;
  distance: string | null;
}

export interface Faq {
  q: string;
  /** null = hidden until answered */
  a: string | null;
}

export interface IconItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface SiteContent {
  locale: Locale;
  brand: {
    name: string;
    descriptor: string;
    facebookName: string;
    tagline: string;
    values: string[];
    logo: string | null;
  };
  siteUrl: string;
  seo: { title: string; description: string; keywords: string[] };
  contact: {
    whatsapp: { display: string; e164: string };
    phones: Phone[];
    email: string;
    whatsappGreeting: string;
  };
  social: { facebook: string; instagram: string | null; tiktok: string | null };
  location: {
    locality: string;
    district: string;
    region: string;
    country: string;
    countryCode: string;
    address: string | null;
    mapEmbedUrl: string | null;
    mapLink: string | null;
    areaMapLink: string;
    gettingHere: string[] | null;
  };
  photos: Record<"hero" | "story" | "storySecondary" | "night" | "nature", Photo>;
  gallery: Photo[];
  rooms: Room[];
  extras: { name: string; priceLKR: number; unit: string }[];
  breakfast: { options: string[] };
  nearby: NearbyPlace[];
  faqs: Faq[];
  copy: {
    nav: { href: string; label: string }[];
    cta: { book: string; checkAvailability: string; viewRooms: string; enquire: string };
    hero: { eyebrow: string; headline: string; sub: string };
    welcome: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
      facts: { label: string; value: string }[];
    };
    highlights: { eyebrow: string; heading: string; items: IconItem[] };
    rooms: {
      eyebrow: string;
      heading: string;
      intro: string;
      toggleRoomOnly: string;
      toggleWithMeals: string;
      perNight: string;
      singleRateNote: string;
      breakfastNote: string;
      ask: string;
    };
    experiences: {
      eyebrow: string;
      heading: string;
      intro: string;
      activities: IconItem[];
      nearbyHeading: string;
    };
    gallery: { eyebrow: string; heading: string; intro: string };
    location: {
      eyebrow: string;
      heading: string;
      intro: string;
      gettingHereHeading: string;
      gettingHereFallback: string;
      mapPlaceholder: string;
      openMap: string;
      openAreaMap: string;
      askDirections: string;
    };
    howToBook: { eyebrow: string; heading: string; steps: { title: string; text: string }[] };
    faq: { eyebrow: string; heading: string };
    enquiry: {
      eyebrow: string;
      heading: string;
      intro: string;
      submit: string;
      sending: string;
      success: string;
      fallback: string;
      emailSent: string;
      fields: {
        name: string;
        checkIn: string;
        checkOut: string;
        guests: string;
        room: string;
        roomAny: string;
        message: string;
        messagePlaceholder: string;
      };
      errors: {
        name: string;
        checkIn: string;
        checkInPast: string;
        checkOut: string;
        guests: string;
      };
      contactHeading: string;
    };
    footer: { blurb: string; followUs: string; contactUs: string; rights: string };
  };
  currency: { base: Currency; usdRate: number | null };
}
