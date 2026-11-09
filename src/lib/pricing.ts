// Mirrors the live Aryeo catalog (reference/our-catalog.md). Aryeo charges whatever its own
// catalog says at checkout, so a price changed in Aryeo must be changed here too.

type Tier = { max: number; price: number };

export type Package = {
  id: string;
  name: string;
  summary: string;
  tiers: Tier[];
  includes: AddonId[];
  popular?: boolean;
};

export type AddonId =
  | "signature-film"
  | "walkthrough-video"
  | "aerial-video"
  | "twilight"
  | "aerial-photos"
  | "vertical-video"
  | "cinematic-film"
  | "staging"
  | "domain"
  | "slideshow"
  | "ai-description"
  | "virtual-twilight"
  | "floor-plan"
  | "matterport"
  | "zillow-3d";

export type Addon = {
  id: AddonId;
  name: string;
  category: "Photography" | "Video" | "3D Tours & Floor Plans" | "Listing Marketing";
  summary: string;
  tiers: Tier[];
  unit?: string;
};

const mainTiers = (small: number, medium: number, large: number, largeMax: number): Tier[] => [
  { max: 3000, price: small },
  { max: 5000, price: medium },
  { max: largeMax, price: large },
];

const flat = (price: number): Tier[] => [{ max: Infinity, price }];

const tourTiers: Tier[] = [
  { max: 3000, price: 250 },
  ...[3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000].map((max) => ({
    max,
    price: max / 10,
  })),
  { max: 15000, price: 1500 },
  { max: 20000, price: 2000 },
];

const estateIncludes: AddonId[] = ["ai-description"];
const reserveIncludes: AddonId[] = [...estateIncludes, "cinematic-film", "domain"];

export const packages: Package[] = [
  {
    id: "estate",
    name: "Estate",
    summary: "Interior and exterior photography, a written property description, and a property website.",
    tiers: mainTiers(195, 295, 395, 10000),
    includes: estateIncludes,
  },
  {
    id: "reserve",
    name: "Reserve",
    summary: "Everything in Estate, plus a cinematic video, a virtual twilight hero shot, and a custom domain.",
    tiers: mainTiers(255, 355, 455, 10000),
    includes: reserveIncludes,
    popular: true,
  },
  {
    id: "blank-canvas",
    name: "Blank Canvas",
    summary: "For vacant homes. Everything in Reserve, plus a floor plan and five virtually staged images.",
    tiers: mainTiers(350, 475, 600, 7500),
    includes: [...reserveIncludes, "floor-plan", "staging"],
  },
  {
    id: "reserve-3d",
    name: "Reserve 3D",
    summary: "Everything in Reserve, plus a Matterport 3D walkthrough and floor plan.",
    tiers: mainTiers(450, 700, 1000, 7500),
    includes: [...reserveIncludes, "matterport", "floor-plan"],
  },
  {
    id: "reserve-showcase",
    name: "Reserve Showcase",
    summary: "Everything in Reserve, plus a Zillow 3D Home tour and interactive floor plan.",
    tiers: mainTiers(450, 700, 1000, 7500),
    includes: [...reserveIncludes, "zillow-3d", "floor-plan"],
  },
  {
    id: "grand-reserve",
    name: "Grand Reserve",
    summary: "The full kit. Everything in Reserve, plus aerial photos, a Matterport tour, and a floor plan.",
    tiers: mainTiers(625, 875, 1175, 7500),
    includes: [...reserveIncludes, "aerial-photos", "matterport", "floor-plan"],
  },
];

export const addons: Addon[] = [
  { id: "aerial-photos", name: "Aerial Photography", category: "Photography", summary: "15 to 20 drone stills of the home in context.", tiers: flat(175) },
  { id: "twilight", name: "Twilight Photography", category: "Photography", summary: "Exteriors shot just after sunset. A separate visit.", tiers: flat(250) },
  { id: "signature-film", name: "Signature Listing Film", category: "Video", summary: "Cinematic ground and aerial film, plus five aerial stills.", tiers: flat(500) },
  { id: "walkthrough-video", name: "Agent Walkthrough Video", category: "Video", summary: "A guided tour with you on camera.", tiers: flat(300) },
  { id: "aerial-video", name: "Aerial Video Tour", category: "Video", summary: "Drone video of the home and land, plus five aerial stills.", tiers: flat(300) },
  { id: "vertical-video", name: "Vertical Social Video", category: "Video", summary: "A short vertical edit for Reels, TikTok, and Shorts.", tiers: flat(125) },
  { id: "cinematic-film", name: "Cinematic Photo Film", category: "Video", summary: "A motion video built from your photos.", tiers: flat(50) },
  { id: "slideshow", name: "Slideshow Video Tour", category: "Video", summary: "A simple slideshow for MLS and portals.", tiers: flat(30) },
  { id: "matterport", name: "Matterport 3D Tour", category: "3D Tours & Floor Plans", summary: "3D walkthrough with dollhouse view. One year of hosting.", tiers: tourTiers },
  { id: "zillow-3d", name: "Zillow 3D Home Tour", category: "3D Tours & Floor Plans", summary: "Zillow 3D tour with interactive floor plan, for Showcase listings.", tiers: tourTiers },
  {
    id: "floor-plan",
    name: "Floor Plan",
    category: "3D Tours & Floor Plans",
    summary: "A measured, branded floor plan.",
    tiers: [
      { max: 3000, price: 125 },
      { max: 5000, price: 150 },
      { max: 7500, price: 175 },
      { max: 12000, price: 225 },
    ],
  },
  { id: "staging", name: "Virtual Staging", category: "Listing Marketing", summary: "Five photos digitally furnished.", tiers: flat(50), unit: "set of 5" },
  { id: "virtual-twilight", name: "Virtual Twilight", category: "Listing Marketing", summary: "A daytime exterior turned to dusk.", tiers: flat(25), unit: "image" },
  { id: "domain", name: "Custom Property Domain", category: "Listing Marketing", summary: "A web address like 123MainStreet.com.", tiers: flat(30) },
  { id: "ai-description", name: "AI Listing Description", category: "Listing Marketing", summary: "Listing copy ready to edit and publish.", tiers: flat(25) },
];

export const addonCategories = ["Photography", "Video", "3D Tours & Floor Plans", "Listing Marketing"] as const;

/** Undefined when the home is larger than the largest tier, which needs a custom quote. */
export function priceFor(tiers: Tier[], squareFeet: number) {
  return tiers.find((tier) => squareFeet <= tier.max)?.price;
}

// Volume-metered travel fee by drive time from home base. "Other" is anywhere not listed.
export const travelFees: Record<string, number> = {
  "Santa Rosa": 0,
  Healdsburg: 0,
  Windsor: 0,
  "Rohnert Park": 0,
  Sebastopol: 0,
  Forestville: 0,
  Occidental: 50,
  "Bodega Bay": 95,
  Jenner: 95,
};
