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

// Nearby place names, used in several sections. Change them here only.
// "Mini World's End" matches our Facebook posts; "Little World's End" is kept as an SEO keyword only.
const MINI_WORLDS_END = "Mini World's End";
const MAHIYANGANAYA_TEMPLE = "Mahiyanganaya Temple";

export const site: SiteContent = {
  locale: "en",

  // ── Brand ──────────────────────────────────────────────────────────────────
  brand: {
    name: "Wellassa Eco Villa",
    descriptor: "Bungalow · Bibile, Uva Province",
    facebookName: "Wellassa Eco Villa Bungalow",
    tagline: "Your peaceful eco-friendly escape in the heart of Wellassa",
    values: ["Nature", "Tranquility", "Warm Hospitality"],
    // Built from photos/logo.png by `npm run images` (also makes the favicons). Set to null for a text wordmark.
    logo: "/images/logo.png",
  },

  // Live site address (no trailing slash), used for canonical URLs, social cards, sitemap,
  // robots.txt and structured data. www.wellassaecovilla.com redirects here.
  siteUrl: "https://wellassaecovilla.com",

  seo: {
    title: "Wellassa Eco Villa | Countryside Bungalow Stay in Bibile, Sri Lanka",
    description:
      "A family-run eco villa in Bibile, Wellassa. Cool highland air, a private rice field, waterfalls and lakes nearby. Rooms, a dormitory or the whole villa for up to 20 guests. Book on WhatsApp.",
    keywords: [
      "Bibile villa",
      "Wellassa eco villa",
      "Little World's End stay",
      `${MINI_WORLDS_END} Bibile`,
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
    address: null, // TODO: exact street address (until then "Bibile, Uva Province, Sri Lanka" is shown)
    coordinates: { latitude: 7.1451369, longitude: 81.1678506 },
    // Keyless Google Maps embed + share link, both pinned to the coordinates above.
    mapEmbedUrl: "https://www.google.com/maps?q=7.1451369,81.1678506&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=7.1451369,81.1678506",
    // Shown under "Getting here". Must match names in `nearby` below (their distance shows once filled in).
    landmarks: [MAHIYANGANAYA_TEMPLE, MINI_WORLDS_END],
    // TODO: add travel directions, e.g. from Colombo / Kandy / Ella, and distances to nearby places.
    //       Until then the map, the Google Maps button and the landmarks above are shown.
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
  // Room photos were matched against the room shots in our Facebook posts
  // (clay bed double, family, triple, living area, bathroom).
  gallery: [
    { id: "img-0094", alt: "The bungalow at dusk, framed by palms, with soft lights glowing along the walls" },
    { id: "img-0080", alt: "Double room (clay bed): a raised clay bed with a rolled woven mat beside a curtained window" },
    { id: "img-0071", alt: "Living area with sofas, colourful cushions, a TV and a beamed timber ceiling" },
    { id: "img-0120", alt: "Family room: two double beds under a timber ceiling, with a bedside lamp glowing" },
    { id: "img-0137", alt: "The villa lit up at night, with two dogs sitting on the veranda" },
    { id: "img-0110", alt: "Triple room at night: a double bed and a single bed in white linen, with a wall fan" },
    { id: "img-0135", alt: "Bathroom with a pedestal washbasin, mirror, shower and toilet on patterned floor tiles" },
    { id: "img-0089", alt: "The bungalow in daylight, surrounded by dense green forest" },
    { id: "img-0078", alt: "Double room (clay bed) with a timber ceiling, wall fan and a window onto the trees" },
    { id: "img-0098", alt: "Trees and vines on the villa's land, with a jackfruit on the trunk" },
    { id: "img-0104", alt: "Triple room: a double bed and a single bed made up in white linen" },
    { id: "img-0074", alt: "Living area with tall double doors opening onto the veranda" },
    { id: "img-0139", alt: "Night view along the side of the bungalow, lit by warm wall lamps" },
    { id: "img-0126", alt: "Family room: two double beds under a sloping timber ceiling" },
    { id: "img-0103", alt: "Dining table with plates, a basket of fresh fruit and wooden spice jars" },
    { id: "img-0092", alt: "A garden swing on the open grounds beside the villa" },
    { id: "img-0083", alt: "Front of the villa with its white pillars and red-tiled roof" },
    { id: "img-0118", alt: "A double bed in white linen beside a timber-framed window, at night" },
    { id: "img-0112", alt: "Bedroom corner with a dressing table, mirror, flowers and a clothes rail" },
    { id: "img-0100", alt: "Open land and tall trees beside the villa" },
    { id: "img-0128", alt: "Bathroom with a washbasin, mirror cabinet and toilet" },
    { id: "img-0090", alt: "Corner of the bungalow with a wall light, facing tall trees and a garden swing" },
    { id: "img-0143", alt: "Kitchen with a fridge, sink, kettle and a spice rack" },
    { id: "img-0096", alt: "Side of the bungalow with its long tiled roof and a row of windows" },
    { id: "img-0141", alt: "The bungalow glowing under wall lamps on a dark night" },
  ],

  // ── Rooms & rates (LKR per night) ──────────────────────────────────────────
  // `withMeals` is the price with breakfast (or "with food" for the dormitory).
  // Leave `withMeals` null for options that have one price only.
  // Prices match our Facebook posts. The posts call the higher rate "With Food".
  // TODO: confirm whether the higher room rate is breakfast only or all meals ("With food").
  rooms: [
    {
      id: "double",
      name: "Double Room (clay bed)",
      summary: "A raised clay bed for two under a timber ceiling, with a window onto the trees.",
      capacity: null, // TODO: confirm max guests for the Double room
      rates: { roomOnly: 7500, withMeals: 8500 },
      withMealsLabel: "Bed & breakfast",
      // Matches the "Clay bed (Double room)" shot in our Facebook posts.
      photo: { id: "img-0080", alt: "Double room with a raised clay bed and a rolled woven mat beside a curtained window" },
    },
    {
      id: "triple",
      name: "Triple Room",
      summary: "A double bed and a single bed. Good for friends or a small family.",
      capacity: null, // TODO: confirm max guests for the Triple room
      rates: { roomOnly: 8500, withMeals: 10000 },
      withMealsLabel: "Bed & breakfast",
      // Matches the "Triple room" shot in our Facebook posts.
      photo: { id: "img-0110", alt: "Triple room with a double bed and a single bed in white linen, lit by a bedside lamp" },
    },
    {
      id: "family",
      name: "Family Room",
      summary: "Two double beds under a timber ceiling, with room for the whole family.",
      capacity: null, // TODO: confirm max guests for the Family room
      rates: { roomOnly: 10000, withMeals: 12000 },
      withMealsLabel: "Bed & breakfast",
      // Matches the "Family room" shot in our Facebook posts.
      photo: { id: "img-0120", alt: "Family room with two double beds and black-and-white curtains" },
    },
    {
      id: "dormitory",
      name: "Big Dormitory",
      summary: "One big shared space for groups, school trips and hiking crews.",
      capacity: 10,
      rates: { roomOnly: 20000, withMeals: 25000 },
      withMealsLabel: "With food",
      // TODO: no dormitory photo confirmed yet. The old pick (img-0080) turned out to be the clay-bed
      //       double room, so an outside view of the bungalow's long wing stands in until you send one.
      photo: { id: "img-0096", alt: "The long side wing of the bungalow, with a tiled roof and a row of windows" },
    },
    {
      id: "villa",
      name: "Whole Villa",
      summary: "Up to 20 guests, per night: the entire villa, booked for your group.",
      capacity: 20,
      rates: { roomOnly: 45000, withMeals: null },
      withMealsLabel: null,
      featured: true,
      photo: { id: "img-0089", alt: "The whole bungalow in daylight, surrounded by green forest" },
    },
  ],

  // Shown under the room cards. Both match shots in our Facebook posts.
  spaces: [
    { name: "Living area", photo: { id: "img-0071", alt: "Living area with sofas, colourful cushions, a TV and glass doors to the garden" } },
    { name: "Bathroom", photo: { id: "img-0135", alt: "Bathroom with a pedestal washbasin, mirror, shower and toilet" } },
  ],

  extras: [{ name: "Laundry (7 kg machine)", priceLKR: 1000, unit: "per use" }],

  breakfast: {
    options: ["Full English", "Sri Lankan local", "Vegetarian", "Non-vegetarian"],
  },

  // ── Nearby places ──────────────────────────────────────────────────────────
  // TODO: add travel times/distances for each place (leave null to hide).
  nearby: [
    {
      name: MAHIYANGANAYA_TEMPLE,
      kind: "Temple",
      description: "Mahiyangana Raja Maha Vihara, one of Sri Lanka's most revered Buddhist temples. Just a short drive away.",
      distance: null,
    },
    {
      name: MINI_WORLDS_END,
      kind: "Viewpoint",
      description: "A hill-edge lookout over the countryside, just a short drive away. Go early for clear views.",
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
      a: `Hike by day. After dark, go night camping, gather round a campfire with music or enjoy a BBQ night on our land. Waterfalls and natural lakes are nearby, and ${MAHIYANGANAYA_TEMPLE}, ${MINI_WORLDS_END}, a village temple and a meditation centre are just a short drive away.`,
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
      eyebrow: "The Ultimate Natural Getaway | Bibile, Uva Province",
      headline: "Escape to Tranquility",
      sub: "A quiet bungalow between the mountains: your peaceful eco-friendly escape in the heart of Wellassa.",
      badge: "Local & Foreigners Welcome",
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
      spacesHeading: "Also in the villa",
    },
    experiences: {
      eyebrow: "Experiences & nearby",
      heading: "Slow days, starry nights",
      intro: "Spend the day outdoors and the evening by the fire. When you want to explore, there's plenty close by.",
      dayHeading: "By day",
      activities: [
        { icon: "hike", title: "Hiking", text: "Walk the hills and forest paths around Bibile." },
        { icon: "sprout", title: "Our own land", text: "Wander past the rice field, plants and herbs around the bungalow." },
      ],
      night: {
        eyebrow: "Special night experiences",
        heading: "Experience the Magic of the Night",
        intro: "When the sun goes down, the lamps come on and the garden glows. Stay up by the fire, grill dinner outdoors or sleep out under the sky.",
        items: [
          { icon: "tent", title: "Night camping", text: "Pitch a tent on our land and spend the night outdoors." },
          { icon: "bbq", title: "BBQ night", text: "Fire up the grill and share dinner in the open air." },
          { icon: "bbq", title: "Outdoor BBQ feast", text: "Gather your whole group round the grill for a long, slow dinner." },
          { icon: "music", title: "Cozy campfires & music", text: "Sit by the fire with music and stories on cool evenings." },
          { icon: "stars", title: "Starry night camping", text: "Fall asleep under a countryside sky full of stars." },
          { icon: "forest", title: "Magical forest vibe", text: "Tall trees, warm lamps and the quiet sounds of the forest after dark." },
        ],
        cta: "Book your magical getaway now!",
        ctaMessage: "Hello Wellassa Eco Villa! I'd like to ask about a night stay with camping or a BBQ.",
      },
      nearbyHeading: "Places nearby",
      nearbyIntro: `${MAHIYANGANAYA_TEMPLE}, ${MINI_WORLDS_END} and other places are just a short drive away.`,
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
      gettingHereFallback:
        "The pin on the map marks the villa. Open it in Google Maps for directions, or message us on WhatsApp and we'll help you find the way.",
      landmarksHeading: "Landmarks nearby",
      openMap: "Open in Google Maps",
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
