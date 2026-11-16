import { addons, packages, type AddonId } from "@/lib/pricing";
import { servicePhotos, wallColumns, introPhotos, serviceAreaPhoto, type Photo } from "@/lib/photos";

// Content for /services and /services/[slug]. Prices are never typed here: each page lists the
// Aryeo products it sells (from pricing.ts), so a price change in pricing.ts updates every page.

const wall = wallColumns.flat();
const photo = (alt: string) => {
  const found = wall.find((p) => p.alt === alt) ?? Object.values(introPhotos).find((p) => p.alt === alt);
  if (!found) throw new Error(`No photo with alt "${alt}"`);
  return found;
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label for cards, nav, and footer tags. */
  shortName: string;
  /** <title>, kept under ~60 characters with the template suffix. */
  metaTitle: string;
  metaDescription: string;
  /** One line under the name on cards. */
  tagline: string;
  /** Page heading. Italic part is wrapped in <em>. */
  headline: [string, string];
  intro: string[];
  hero: Photo;
  gallery: Photo[];
  /** What the agent receives. */
  includes: string[];
  /** Add-ons sold on their own for this service. */
  addonIds: AddonId[];
  /** Packages that include this service. */
  packageIds: string[];
  /** The product whose lowest price is the "From $X" for this service. */
  primary: { addon: AddonId } | { package: string };
  faqs: ServiceFaq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "listing-photography",
    primary: { package: "estate" },
    name: "Real Estate Photography",
    shortName: "Listing Photography",
    metaTitle: "Real Estate Photography in Sonoma County",
    metaDescription:
      "Bright, true-to-life listing photos for agents in Santa Rosa, Healdsburg, Sebastopol, and west Sonoma County. From $195, delivered by the next business day.",
    tagline: "Interiors and exteriors that make buyers click.",
    headline: ["Listing photography that", "sells the light"],
    intro: [
      "Most buyers decide whether to see a home from the first few photos. We shoot every room to look the way it feels in person: bright, straight, and true to color, with windows that show the view instead of a white blowout.",
      "Every shoot is booked online with upfront pricing by square footage. Photos typically arrive on a branded property page by the next business day, sized for the MLS, print, and social.",
    ],
    hero: servicePhotos.photography,
    gallery: [
      photo("Great room with vaulted beams and a wall of windows"),
      photo("White Santa Rosa kitchen with a large island"),
      photo("Spa bathroom with a freestanding tub"),
      photo("Santa Rosa ranch home with a red door and a flowering maple"),
    ],
    includes: [
      "Interior and exterior photography, edited for natural color and straight verticals",
      "MLS-ready and full-resolution files, plus a branded property website to share",
      "A written listing description you can edit and publish",
      "Online booking and payment, with delivery typically by the next business day",
    ],
    addonIds: ["twilight", "aerial-photos", "virtual-twilight"],
    packageIds: ["estate", "reserve", "grand-reserve"],
    faqs: [
      {
        q: "How should the home be prepared for photos?",
        a: "Clear counters, open blinds, turn on every light, hide cars from the driveway, and put away personal items like toiletries and fridge magnets.",
      },
      {
        q: "How long does a photo shoot take?",
        a: "About an hour for homes up to 3,000 square feet, 90 minutes up to 5,000, and two hours for larger homes.",
      },
      {
        q: "When will I get the photos?",
        a: "Typically by the next business day, on a branded property page where you can download every size you need.",
      },
    ],
    related: ["aerial-drone-photography", "twilight-photography", "real-estate-video"],
  },
  {
    slug: "real-estate-video",
    primary: { package: "reserve" },
    name: "Real Estate Video",
    shortName: "Video",
    metaTitle: "Real Estate Video Tours in Sonoma County",
    metaDescription:
      "Cinematic listing films, agent walkthroughs, and vertical social videos for Sonoma County real estate. Photo + video packages from $255.",
    tagline: "Cinematic tours, walkthroughs, and social cuts.",
    headline: ["Listing video that", "moves people"],
    intro: [
      "Video holds attention longer than any other part of a listing, and it's what social feeds reward. We offer everything from a simple slideshow for the MLS to a full cinematic film with ground and drone footage.",
      "Want to be the face of the listing? An agent walkthrough puts you on camera, introducing the home room by room, which also builds your own brand for the next listing.",
    ],
    hero: servicePhotos.photoVideo,
    gallery: [
      photo("Covered deck with outdoor seating and hillside views"),
      photo("Sonoma kitchen with a dining table and garden views"),
      photo("Backyard lawn with a patio dining set"),
      photo("Entry with a black-and-white checkered floor and staircase"),
    ],
    includes: [
      "Edited video ready for the MLS, YouTube, social, and your website",
      "Vertical edits for Instagram Reels, TikTok, and YouTube Shorts when you add them",
      "Options built from your photos that need no extra shoot time",
      "Hosted on your property page alongside the photos",
    ],
    addonIds: ["signature-film", "walkthrough-video", "aerial-video", "vertical-video", "cinematic-film", "slideshow"],
    packageIds: ["reserve", "grand-reserve"],
    faqs: [
      {
        q: "What's the difference between the video options?",
        a: "The Signature Listing Film is our full production, with ground and aerial footage. The Agent Walkthrough puts you on camera. The Cinematic Photo Film and Slideshow are built from your photos, so they need no extra shoot time.",
      },
      {
        q: "Do I need to be there for the video?",
        a: "Only for the Agent Walkthrough, where you're on camera. For everything else, we just need access to the home.",
      },
    ],
    related: ["aerial-drone-photography", "listing-photography", "matterport-3d-tours"],
  },
  {
    slug: "aerial-drone-photography",
    primary: { addon: "aerial-photos" },
    name: "Aerial Drone Photography & Video",
    shortName: "Aerial & Drone",
    metaTitle: "Drone Photography for Real Estate, Sonoma County",
    metaDescription:
      "FAA-certified aerial photos and drone video for homes, acreage, and vineyard properties in Sonoma County. Aerial photography from $175.",
    tagline: "The lot, the land, and the view in one frame.",
    headline: ["Aerial photography for", "land, lots, and views"],
    intro: [
      "In Sonoma County, the land is often half the story: a vineyard parcel, a creek, a ridge-top view, or a quiet street close to town. Aerial photos show buyers how the home sits on the property and what's around it.",
      "Our drone work is flown by an FAA-certified remote pilot, within the airspace rules for each address.",
    ],
    hero: servicePhotos.aerial,
    gallery: [
      photo("Aerial view of a home among redwoods near Guerneville"),
      photo("Aerial view of a Santa Rosa home with a tile roof"),
      serviceAreaPhoto,
    ],
    includes: [
      "15 to 20 finished aerial stills showing the home, lot, outbuildings, and approach",
      "Drone video of the home and surrounding land when you add an aerial video tour",
      "Flown by an FAA-certified remote pilot, with airspace checked before every flight",
      "Delivered with your listing photos on the same property page",
    ],
    addonIds: ["aerial-photos", "aerial-video"],
    packageIds: ["grand-reserve"],
    faqs: [
      {
        q: "Can you fly anywhere in Sonoma County?",
        a: "Most addresses, yes. A few areas near airports need advance authorization, which we handle. Weather and wind can move a flight, and we'll reschedule the aerial portion if needed.",
      },
      {
        q: "Is aerial worth it for a house in town?",
        a: "Often. It shows the neighborhood, nearby parks and schools, and how close the home is to downtown, which ground photos can't.",
      },
    ],
    related: ["real-estate-video", "listing-photography", "twilight-photography"],
  },
  {
    slug: "twilight-photography",
    primary: { addon: "twilight" },
    name: "Twilight Photography",
    shortName: "Twilight",
    metaTitle: "Twilight Real Estate Photography, Sonoma County",
    metaDescription:
      "Dusk exteriors with glowing windows and color in the sky, for listings in Santa Rosa, Healdsburg, and west Sonoma County. Twilight shoots from $250, virtual twilight $25.",
    tagline: "Glowing windows and a sky full of color.",
    headline: ["Twilight photos for", "the hero shot"],
    intro: [
      "A twilight exterior is the photo that stops the scroll. We shoot in the short window after sunset, when the sky still has color and every window glows warm.",
      "On a budget or short on time? Virtual twilight turns one of your daytime exteriors into a dusk scene, clearly labeled as edited for AB 723.",
    ],
    hero: servicePhotos.twilight,
    gallery: [
      photo("Oakmont home at twilight among autumn trees"),
      photo("Blue Victorian home in Sonoma at dusk"),
    ],
    includes: [
      "A dedicated visit timed to local sunset",
      "Front exterior plus key outdoor spaces like pools, patios, and views",
      "Every interior light on, so the windows glow",
      "Virtual twilight edits delivered with the unedited original, as AB 723 requires",
    ],
    addonIds: ["twilight", "virtual-twilight"],
    packageIds: ["reserve"],
    faqs: [
      {
        q: "Is a twilight shoot a separate trip?",
        a: "Yes. The light only lasts a short while after sunset, so we schedule it on its own. We can do it the same day as your daytime photos.",
      },
      {
        q: "Real or virtual twilight?",
        a: "A real twilight shoot captures true light on the home and works best for a hero listing. Virtual twilight is a quick, affordable edit of a daytime photo, and it's included in our Reserve package.",
      },
    ],
    related: ["listing-photography", "aerial-drone-photography", "virtual-staging"],
  },
  {
    slug: "matterport-3d-tours",
    primary: { addon: "matterport" },
    name: "Matterport 3D Tours",
    shortName: "Matterport",
    metaTitle: "Matterport 3D Tours in Sonoma County",
    metaDescription:
      "Matterport 3D walkthroughs with dollhouse view and floor plan for Sonoma County listings. From $250, including one year of hosting.",
    tagline: "Walk the home from anywhere, room by room.",
    headline: ["Matterport tours buyers", "can walk through"],
    intro: [
      "A Matterport tour lets buyers move through the home at their own pace, check how rooms connect, and come back to it as often as they like. Out-of-area buyers can shortlist a home before they ever drive up.",
      "Every tour includes the dollhouse view and a floor plan view, and it's ready to link from the MLS, your website, and social.",
    ],
    hero: servicePhotos.matterport,
    gallery: [
      photo("Kitchen with wood cabinets and a breakfast bar"),
      photo("Dining room with a chandelier and garden windows"),
      photo("Primary bedroom with a bay window"),
    ],
    includes: [
      "A full 3D walkthrough with dollhouse and floor plan views",
      "Branded and unbranded links for your website and the MLS",
      "One year of hosting, then $25 per year to keep the tour live",
      "Priced by square footage, in 500 sq ft steps above 3,000",
    ],
    addonIds: ["matterport", "floor-plan"],
    packageIds: ["reserve-3d", "grand-reserve"],
    faqs: [
      {
        q: "Matterport or Zillow 3D Home?",
        a: "Matterport is the most widely recognized 3D tour and works on any site. Zillow 3D Home is built for Zillow and is required for Zillow Showcase. If the listing is going to Showcase, choose Zillow.",
      },
      {
        q: "What happens after the first year?",
        a: "The tour stays live for a year. If the listing is still active, hosting is $25 per year after that.",
      },
    ],
    related: ["zillow-3d-home-tours", "floor-plans", "listing-photography"],
  },
  {
    slug: "zillow-3d-home-tours",
    primary: { addon: "zillow-3d" },
    name: "Zillow 3D Home Tours",
    shortName: "Zillow 3D",
    metaTitle: "Zillow 3D Home Tours & Showcase, Sonoma County",
    metaDescription:
      "Zillow 3D Home tours with interactive floor plans, ready for Zillow Showcase listings in Sonoma County. From $250.",
    tagline: "Built for Zillow and Zillow Showcase.",
    headline: ["Zillow 3D tours for", "Showcase listings"],
    intro: [
      "Zillow 3D Home tours publish straight to the Zillow listing, along with an interactive floor plan. They're also what Zillow Showcase listings require, so if your brokerage uses Showcase, this is the tour to choose.",
      "We capture the tour during the same visit as your photos, so there's no extra appointment for the seller.",
    ],
    hero: servicePhotos.zillow,
    gallery: [
      photo("Sonoma kitchen with a dining table and garden views"),
      photo("Great room with vaulted beams and a wall of windows"),
    ],
    includes: [
      "A Zillow 3D Home tour published to your Zillow listing",
      "An interactive floor plan",
      "Captured during the same visit as your photography",
      "Priced by square footage, in 500 sq ft steps above 3,000",
    ],
    addonIds: ["zillow-3d", "floor-plan"],
    packageIds: ["reserve-showcase"],
    faqs: [
      {
        q: "Do I need a Zillow 3D tour for Showcase?",
        a: "Yes. Zillow Showcase listings require a Zillow 3D Home tour and interactive floor plan, which is exactly what our Reserve Showcase package includes.",
      },
      {
        q: "Can I use the Zillow tour on other sites?",
        a: "It's designed for Zillow. If you want a tour that works everywhere, a Matterport tour is the better fit.",
      },
    ],
    related: ["matterport-3d-tours", "floor-plans", "listing-photography"],
  },
  {
    slug: "floor-plans",
    primary: { addon: "floor-plan" },
    name: "Real Estate Floor Plans",
    shortName: "Floor Plans",
    metaTitle: "Real Estate Floor Plans in Sonoma County",
    metaDescription:
      "Measured, branded floor plans for Sonoma County listings, so buyers understand the layout at a glance. From $125.",
    tagline: "The layout at a glance.",
    headline: ["Floor plans that answer", "“how does it flow?”"],
    intro: [
      "After photos, the floor plan is one of the most-viewed parts of a listing. It answers the questions photos can't: how the rooms connect, where the bedrooms are, and whether the furniture will fit.",
      "We measure on site during your photo shoot and deliver a clean, branded plan ready for the MLS, flyers, and your property page.",
    ],
    hero: photo("Entry with a black-and-white checkered floor and staircase"),
    gallery: [],
    includes: [
      "Measured on site during your photo shoot",
      "Room names and dimensions in a clean, easy-to-read layout",
      "Files for the MLS, print, and your property page",
      "Included in our Blank Canvas, Reserve 3D, Reserve Showcase, and Grand Reserve packages",
    ],
    addonIds: ["floor-plan"],
    packageIds: ["blank-canvas", "reserve-3d", "reserve-showcase", "grand-reserve"],
    faqs: [
      {
        q: "Are the floor plans exact?",
        a: "They're carefully measured and accurate for marketing, but they aren't a survey or appraisal. Square footage on a floor plan shouldn't be used in place of official records.",
      },
    ],
    related: ["matterport-3d-tours", "zillow-3d-home-tours", "listing-photography"],
  },
  {
    slug: "virtual-staging",
    primary: { addon: "staging" },
    name: "Virtual Staging",
    shortName: "Virtual Staging",
    metaTitle: "Virtual Staging for Sonoma County Listings",
    metaDescription:
      "Virtually staged listing photos that help buyers picture empty rooms furnished, labeled and delivered with originals for California AB 723. $50 for 5 images.",
    tagline: "Empty rooms, furnished digitally.",
    headline: ["Virtual staging,", "done by the book"],
    intro: [
      "Empty rooms look smaller in photos and leave buyers guessing. Virtual staging furnishes them digitally in a style that fits the home, for a fraction of the cost of physical staging.",
      "California's AB 723 requires agents to disclose digitally altered listing photos and give buyers access to the originals. Every staged image we deliver is labeled, with the unedited original alongside it.",
    ],
    hero: servicePhotos.staging,
    gallery: [],
    includes: [
      "Five photos digitally furnished in the style you choose",
      "Each staged image labeled as virtually staged",
      "The unedited original delivered with every staged image, per AB 723",
      "No shoot time: we stage photos you've already ordered",
    ],
    addonIds: ["staging", "virtual-twilight"],
    packageIds: ["blank-canvas"],
    faqs: [
      {
        q: "What does AB 723 require?",
        a: "Since January 2025, California listings that use digitally altered photos must say so, and must give buyers a way to see the unaltered photos. We label every staged image and include the original so you can comply easily.",
      },
      {
        q: "Can I stage more than five rooms?",
        a: "Yes. Staging is sold in sets of five images, and you can order as many sets as you need.",
      },
    ],
    related: ["listing-photography", "twilight-photography", "floor-plans"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

const lowest = (tiers: { price: number }[]) => Math.min(...tiers.map((t) => t.price));

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export function serviceAddons(service: Service) {
  return service.addonIds.map((id) => {
    const addon = addons.find((a) => a.id === id);
    if (!addon) throw new Error(`Unknown add-on ${id}`);
    const tiered = addon.tiers.length > 1;
    return {
      name: addon.name,
      summary: addon.summary,
      price: `${tiered ? "From " : ""}${money(lowest(addon.tiers))}${addon.unit ? ` / ${addon.unit}` : ""}`,
      from: lowest(addon.tiers),
    };
  });
}

export function servicePackages(service: Service) {
  return service.packageIds.map((id) => {
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) throw new Error(`Unknown package ${id}`);
    return { name: pkg.name, summary: pkg.summary, price: `From ${money(lowest(pkg.tiers))}`, from: lowest(pkg.tiers) };
  });
}

/** The "From $X" price for this service, taken from its primary product. */
export function startingPrice(service: Service) {
  const tiers =
    "addon" in service.primary
      ? addons.find((a) => a.id === (service.primary as { addon: AddonId }).addon)?.tiers
      : packages.find((p) => p.id === (service.primary as { package: string }).package)?.tiers;
  if (!tiers) throw new Error(`No primary product for ${service.slug}`);
  return lowest(tiers);
}

export function packageStartingPrices() {
  return packages.map((pkg) => ({ ...pkg, from: lowest(pkg.tiers) }));
}
