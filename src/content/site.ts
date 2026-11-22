/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  WELLASSA ECO VILLA — ALL SITE CONTENT LIVES HERE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Edit text, phone numbers, rates, photos and FAQs in this file. Components
 *  read everything from here, so you never need to touch them for content.
 *
 *  • Search for "TODO" to find details that still need filling in.
 *  • Values set to `null` are hidden on the site until you fill them in.
 *  • Prices are plain numbers in Sri Lankan rupees (LKR).
 *  • Photos are referenced by id ("img-0094" = photos/…IMG_0094.JPG).
 *    Run `npm run images` after adding photos to ./photos.
 *
 *  Translations: this object is typed as `SiteContent`. A Sinhala or Tamil
 *  version can be added later as another object of the same type
 *  (see src/lib/i18n.ts).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { SiteContent } from "./types";

export const site: SiteContent = {
  locale: "en",

  // ── Brand ──────────────────────────────────────────────────────────────────
  brand: {
    name: "Wellassa Eco Villa",
    descriptor: "Bungalow · Bibile, Uva Province",
    facebookName: "Wellassa Eco Villa Bungalow",
    tagline: "Your peaceful eco-friendly escape in the heart of Wellassa",
    values: ["Nature", "Tranquility", "Warm Hospitality"],
    // TODO: add your logo as photos/logo.png, run `npm run images`,
    //       then change this to "/images/logo.png". Until then a text wordmark is shown.
    logo: null,
  },

  // Live site address, used for SEO, sitemap and social cards.
  // TODO: change to your custom domain once connected (e.g. "https://www.wellassaecovilla.com").
  siteUrl: "https://wellassa-eco-villa.vercel.app",

  seo: {
    title: "Wellassa Eco Villa | Countryside Bungalow Stay in Bibile, Sri Lanka",
    description:
      "A family-run eco villa in Bibile, Wellassa. Cool highland air, a private rice field, waterfalls and lakes nearby. Rooms, a dormitory or the whole villa for up to 20 guests. Book on WhatsApp.",
    keywords: [
      "Bibile villa",
      "Wellassa eco villa",
      "Little World's End stay",
      "Mahiyangana accommodation",
      "Sri Lanka countryside homestay",
      "Bibile bungalow",
      "Uva Province holiday home",
    ],
  },

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    whatsapp: { display: "+94 77 304 5807", e164: "94773045807" },
    phones: [
      { display: "+94 77 304 5807", tel: "+94773045807", label: "WhatsApp & call" },
      { display: "+94 77 608 5839", tel: "+94776085839", label: "Call to book" },
      { display: "+94 77 725 0093", tel: "+94777250093", label: "Call to book" },
    ],
    email: "wellassaecovilla@gmail.com",
    whatsappGreeting: "Hello Wellassa Eco Villa! I'd like to ask about a stay.",
  },

  social: {
    facebook: "https://www.facebook.com/WellassaEcoVilla/",
    instagram: null, // TODO: add Instagram profile URL
    tiktok: null, // TODO: add TikTok profile URL
  },

  // ── Location ───────────────────────────────────────────────────────────────
  location: {
    locality: "Bibile",
    district: "Wellassa",
    region: "Uva Province",
    country: "Sri Lanka",
    countryCode: "LK",
    address: null, // TODO: exact street address
    // TODO: paste the Google Maps "Embed a map" src URL (Share → Embed a map → copy the src="…" part)
    mapEmbedUrl: null,
    // TODO: paste your Google Maps place link (Share → Copy link)
    mapLink: null,
    // Shown until mapLink is set: an area-level search for Bibile.
    areaMapLink: "https://www.google.com/maps/search/?api=1&query=Bibile%2C+Sri+Lanka",
    // TODO: add travel directions, e.g. from Colombo / Kandy / Ella, and distances to nearby places.
    gettingHere: null,
  },

  // ── Photos ─────────────────────────────────────────────────────────────────
  photos: {
    hero: {
      id: "img-0094",
      alt: "Wellassa Eco Villa at dusk: a white bungalow with a terracotta tiled roof, warm wall lights and tall palms behind",
      position: "35% 60%",
    },
    story: {
      id: "img-0083",
      alt: "Front of the villa with its pillared veranda, terracotta roof and the family dogs resting by the door",
    },
    storySecondary: {
      id: "img-0071",
      alt: "Bright living room with sofas, a wooden beamed ceiling and glass doors open to the garden",
    },
    night: {
      id: "img-0137",
      alt: "The villa at night, its white walls washed in warm light and two dogs keeping watch on the veranda",
    },
    nature: {
      id: "img-0098",
      alt: "Tall trees and climbing vines on the villa's land, with a jackfruit growing low on a trunk",
    },
  },

  // Gallery order = display order. All ids must exist in images.generated.json.
  gallery: [
    { id: "img-0094", alt: "The bungalow at dusk, framed by palms, with soft lights glowing along the walls" },
    { id: "img-0137", alt: "The villa lit up at night, with two dogs sitting on the veranda" },
    { id: "img-0071", alt: "Living room with colourful cushions, sofas and a beamed timber ceiling" },
    { id: "img-0118", alt: "Double room with a large bed, crisp white sheets and a timber-framed window" },
    { id: "img-0089", alt: "The bungalow in daylight, surrounded by dense green forest" },
    { id: "img-0104", alt: "Room with a double bed and a single bed, white linen and a wall fan" },
    { id: "img-0098", alt: "Trees and vines on the villa's land, with a jackfruit on the trunk" },
    { id: "img-0120", alt: "Room with two double beds, a wooden beamed ceiling and black-and-white curtains" },
    { id: "img-0074", alt: "Living room with tall double doors opening onto the veranda" },
    { id: "img-0139", alt: "Night view along the side of the bungalow, lit by warm wall lamps" },
    { id: "img-0103", alt: "Dining table with plates, a basket of fresh fruit and wooden spice jars" },
    { id: "img-0092", alt: "A garden swing on the open grounds beside the villa" },
    { id: "img-0126", alt: "Room with two double beds under a sloping wooden ceiling" },
    { id: "img-0083", alt: "Front of the villa with its white pillars and red-tiled roof" },
    { id: "img-0112", alt: "Bedroom corner with a dressing table, mirror, flowers and a clothes rail" },
    { id: "img-0100", alt: "Open land and tall trees beside the villa" },
    { id: "img-0110", alt: "Bedroom at night with a double bed, a single bed and soft bedside light" },
    { id: "img-0135", alt: "Tiled bathroom with a washbasin, mirror, shower and toilet" },
    { id: "img-0090", alt: "Corner of the bungalow with a wall light, facing tall trees and a garden swing" },
    { id: "img-0143", alt: "Kitchen with a fridge, sink, kettle and a spice rack" },
    { id: "img-0080", alt: "Simple room with a raised sleeping platform and a rolled woven mat" },
    { id: "img-0096", alt: "Side of the bungalow with its long tiled roof and a row of windows" },
    { id: "img-0128", alt: "Bathroom with a washbasin, mirror cabinet and toilet" },
    { id: "img-0141", alt: "The bungalow glowing under wall lamps on a dark night" },
  ],

  // ── Rooms & rates (LKR per night) ──────────────────────────────────────────
  // `withMeals` is the price with breakfast (or "with food" for the dormitory).
  // Leave `withMeals` null for options that have one price only.
  rooms: [
    {
      id: "double",
      name: "Double Room",
      summary: "A quiet room with a large double bed, timber window and garden views.",
      capacity: null, // TODO: confirm max guests for the Double room
      rates: { roomOnly: 7500, withMeals: 8500 },
      withMealsLabel: "Bed & breakfast",
      // TODO: confirm this photo shows the Double room
      photo: { id: "img-0118", alt: "Double room with a large bed and white sheets beside a timber-framed window" },
    },
    {
      id: "triple",
      name: "Triple Room",
      summary: "A double bed and a single bed. Good for friends or a small family.",
      capacity: null, // TODO: confirm max guests for the Triple room
      rates: { roomOnly: 8500, withMeals: 10000 },
      withMealsLabel: "Bed & breakfast",
      // TODO: confirm this photo shows the Triple room
      photo: { id: "img-0104", alt: "Room with a double bed and a single bed made up in white linen" },
    },
    {
      id: "family",
      name: "Family Room",
      summary: "Two double beds under a timber ceiling, with room for the whole family.",
      capacity: null, // TODO: confirm max guests for the Family room
      rates: { roomOnly: 10000, withMeals: 12000 },
      withMealsLabel: "Bed & breakfast",
      // TODO: confirm this photo shows the Family room
      photo: { id: "img-0120", alt: "Family room with two double beds and black-and-white curtains" },
    },
    {
      id: "dormitory",
      name: "Big Dormitory",
      summary: "One big shared space for groups, school trips and hiking crews.",
      capacity: 10,
      rates: { roomOnly: 20000, withMeals: 25000 },
      withMealsLabel: "With food",
      // TODO: confirm this photo shows the dormitory (or replace it)
      photo: { id: "img-0080", alt: "Simple room with a raised sleeping platform and a rolled woven mat" },
    },
    {
      id: "villa",
      name: "Whole Villa",
      summary: "The entire bungalow and grounds, just for your group.",
      capacity: 20,
      rates: { roomOnly: 45000, withMeals: null },
      withMealsLabel: null,
      featured: true,
      photo: { id: "img-0089", alt: "The whole bungalow in daylight, surrounded by green forest" },
    },
  ],

  extras: [{ name: "Laundry (7 kg machine)", priceLKR: 1000, unit: "per use" }],

  breakfast: {
    options: ["Full English", "Sri Lankan local", "Vegetarian", "Non-vegetarian"],
  },

  // ── Nearby places ──────────────────────────────────────────────────────────
  // TODO: add travel times/distances for each place (leave null to hide).
  nearby: [
    {
      name: "Little World's End",
      kind: "Viewpoint",
      description: "A hill-edge lookout over the countryside. Go early for clear views.",
      distance: null,
    },
    {
      name: "Mahiyangana Raja Maha Vihara",
      kind: "Temple",
      description: "One of Sri Lanka's most revered Buddhist temples, an easy day trip.",
      distance: null,
    },
    {
      name: "Meditation centre",
      kind: "Retreat",
      description: "A calm place for quiet reflection, close to the villa.",
      distance: null, // TODO: add the meditation centre's name
    },
    {
      name: "Local temple",
      kind: "Temple",
      description: "A village temple nearby, where you can join the gentle rhythm of local life.",
      distance: null, // TODO: add the temple's name
    },
    {
      name: "Waterfalls & natural lakes",
      kind: "Nature",
      description: "Cool water and forest trails within reach of the villa.",
      distance: null, // TODO: name the waterfalls and lakes
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────────────
  // Questions with `answer: null` are hidden until you write the answer.
  faqs: [
    {
      q: "How many guests can stay?",
      a: "Up to 20 guests when you book the whole villa. The big dormitory sleeps up to 10. We also have double, triple and family rooms.",
    },
    {
      q: "Can we book the whole villa?",
      a: "Yes. The whole villa is LKR 45,000 per night for up to 20 guests. It's ideal for family gatherings, friends' trips and groups.",
    },
    {
      q: "Is breakfast included?",
      a: "You can choose. Every room has a room-only rate and a bed & breakfast rate. Breakfast can be full English or Sri Lankan, vegetarian or non-vegetarian.",
    },
    {
      q: "Are you open all year?",
      a: "Yes, we welcome guests all year round.",
    },
    {
      q: "What is there to do?",
      a: "Hike, camp, sit around a campfire or enjoy a BBQ night on our land. Waterfalls and natural lakes are nearby, as are Little World's End, Mahiyangana Raja Maha Vihara, a temple and a meditation centre.",
    },
    {
      q: "Is there laundry?",
      a: "Yes. We have a 7 kg washing machine you can use for LKR 1,000 per load.",
    },
    {
      q: "What's the weather like?",
      a: "The villa sits high in the hills of Wellassa, between the mountains, so the air is cool, especially in the evenings and early mornings.",
    },
    {
      q: "How do I book?",
      a: "Send us a WhatsApp message on +94 77 304 5807 with your dates and number of guests. You can also call +94 77 608 5839 or +94 77 725 0093, or email wellassaecovilla@gmail.com.",
    },
    { q: "What are the check-in and check-out times?", a: null }, // TODO
    { q: "Is there Wi-Fi?", a: null }, // TODO
    { q: "Is there parking?", a: null }, // TODO
    { q: "How do I get to the villa?", a: null }, // TODO: directions / nearest town or bus stop
    { q: "Do you need a deposit, and how can I pay?", a: null }, // TODO
    { q: "What are the house rules?", a: null }, // TODO: e.g. pets, smoking, quiet hours
  ],

  // ── Section copy ───────────────────────────────────────────────────────────
  copy: {
    nav: [
      { href: "#rooms", label: "Rooms & Rates" },
      { href: "#experiences", label: "Experiences" },
      { href: "#gallery", label: "Gallery" },
      { href: "#location", label: "Location" },
      { href: "#faq", label: "FAQ" },
      { href: "#enquire", label: "Contact" },
    ],
    cta: {
      book: "Book on WhatsApp",
      checkAvailability: "Check availability on WhatsApp",
      viewRooms: "View rooms",
      enquire: "Enquire on WhatsApp",
    },
    hero: {
      eyebrow: "Bibile · Wellassa · Sri Lanka",
      headline: "A quiet bungalow between the mountains",
      sub: "Your peaceful eco-friendly escape in the heart of Wellassa.",
    },
    welcome: {
      eyebrow: "Our story",
      heading: "Built by family, shared with you",
      paragraphs: [
        "Wellassa Eco Villa was built by our dad, in the countryside of Bibile. It sits between the mountains, high up where the air stays cool.",
        "Around the bungalow is our own land: a rice field, plants and herbs, and plenty of space to breathe. Waterfalls and natural lakes are close by.",
        "We keep things simple and welcoming. Come for a night or a week, on your own or with up to 20 people, and let us look after you the Sri Lankan way.",
      ],
      facts: [
        { label: "Guests", value: "Up to 20" },
        { label: "Open", value: "All year" },
        { label: "Setting", value: "Countryside" },
      ],
    },
    highlights: {
      eyebrow: "Why stay",
      heading: "Simple comforts, real countryside",
      items: [
        { icon: "mountain", title: "Cool highland air", text: "High in the Wellassa hills, mornings are fresh and nights are cool." },
        { icon: "waterfall", title: "Nature & waterfalls", text: "A rice field and herbs on our land, with waterfalls and lakes nearby." },
        { icon: "campfire", title: "Camp, hike & BBQ", text: "Camping, hiking, campfires and BBQ nights, right on the doorstep." },
        { icon: "breakfast", title: "Breakfast your way", text: "Full English or Sri Lankan, vegetarian or non-vegetarian." },
        { icon: "group", title: "Groups up to 20", text: "Book a room, the dormitory, or the whole villa for your group." },
        { icon: "laundry", title: "Laundry on site", text: "A 7 kg washing machine, LKR 1,000 per use." },
      ],
    },
    rooms: {
      eyebrow: "Rooms & rates",
      heading: "Find the right space",
      intro: "All prices are per night in Sri Lankan rupees. Switch to see room-only or bed & breakfast rates.",
      toggleRoomOnly: "Room only",
      toggleWithMeals: "With breakfast",
      perNight: "per night",
      singleRateNote: "One rate for the whole villa",
      breakfastNote: "Breakfast options: full English, Sri Lankan, vegetarian or non-vegetarian.",
      ask: "Ask about this",
    },
    experiences: {
      eyebrow: "Experiences & nearby",
      heading: "Slow days, starry nights",
      intro: "Spend the day outdoors and the evening by the fire. When you want to explore, there's plenty close by.",
      activities: [
        { icon: "hike", title: "Hiking", text: "Walk the hills and forest paths around Bibile." },
        { icon: "tent", title: "Camping", text: "Pitch up on our land and sleep under the stars." },
        { icon: "campfire", title: "Campfires", text: "Gather round the fire on cool evenings." },
        { icon: "bbq", title: "BBQ nights", text: "Grill dinner outdoors with your group." },
      ],
      nearbyHeading: "Places nearby",
    },
    gallery: {
      eyebrow: "Gallery",
      heading: "A look around",
      intro: "Tap any photo to see it larger.",
    },
    location: {
      eyebrow: "Location",
      heading: "In the hills of Bibile",
      intro: "We're in the Wellassa district of Bibile, in Sri Lanka's Uva Province: countryside between the mountains.",
      gettingHereHeading: "Getting here",
      gettingHereFallback: "Message us on WhatsApp and we'll send directions and a map pin.",
      mapPlaceholder: "Map coming soon",
      openMap: "Open in Google Maps",
      openAreaMap: "See Bibile on Google Maps",
      askDirections: "Ask for directions",
    },
    howToBook: {
      eyebrow: "How to book",
      heading: "Three easy steps",
      steps: [
        { title: "Message us", text: "Send your dates and number of guests on WhatsApp, or call us." },
        { title: "Confirm your stay", text: "We'll check availability, confirm your rate and answer any questions." },
        { title: "Arrive & unwind", text: "Come up to the hills, settle in and let the countryside slow you down." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Good to know",
    },
    enquiry: {
      eyebrow: "Enquire",
      heading: "Plan your stay",
      intro: "Fill in the form and we'll open WhatsApp with your message ready to send. We usually reply personally.",
      submit: "Send on WhatsApp",
      sending: "Opening WhatsApp…",
      success: "WhatsApp should now be open with your message. If it didn't open, use the button below.",
      fallback: "Open WhatsApp",
      emailSent: "We've also received a copy by email.",
      fields: {
        name: "Your name",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guests: "Guests",
        room: "Room type",
        roomAny: "Not sure yet",
        message: "Message (optional)",
        messagePlaceholder: "Anything we should know? Breakfast preferences, arrival time, questions…",
      },
      errors: {
        name: "Please tell us your name.",
        checkIn: "Please choose a check-in date.",
        checkInPast: "Check-in can't be in the past.",
        checkOut: "Check-out must be after check-in.",
        guests: "Guests must be between 1 and 20.",
      },
      contactHeading: "Prefer to call or email?",
    },
    footer: {
      blurb: "A family-run countryside bungalow in Bibile, Wellassa. Open all year.",
      followUs: "Follow us",
      contactUs: "Contact",
      rights: "All rights reserved.",
    },
  },

  // ── Currency (for a future LKR / USD toggle) ───────────────────────────────
  currency: {
    base: "LKR",
    usdRate: null, // TODO: LKR per 1 USD, if you want to show approximate USD prices later
  },
};
