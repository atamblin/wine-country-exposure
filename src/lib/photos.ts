import type { StaticImageData } from "next/image";
import heroGreatRoom from "@/assets/photos/hero-great-room.jpg";
import heroKitchenIsland from "@/assets/photos/hero-kitchen-island.jpg";
import heroPoolOaks from "@/assets/photos/hero-pool-oaks.jpg";
import heroTwilightFrontYard from "@/assets/photos/hero-twilight-front-yard.jpg";
import introAerialVineyardEstate from "@/assets/photos/intro-aerial-vineyard-estate.jpg";
import introFrontPorch from "@/assets/photos/intro-front-porch.jpg";
import introKitchenSantaRosa from "@/assets/photos/intro-kitchen-santa-rosa.jpg";
import introPoolHealdsburg from "@/assets/photos/intro-pool-healdsburg.jpg";
import introVictorianDusk from "@/assets/photos/intro-victorian-dusk.jpg";
import introWhiteLivingRoom from "@/assets/photos/intro-white-living-room.jpg";
import serviceAerial from "@/assets/photos/service-aerial.jpg";
import serviceMatterport from "@/assets/photos/service-matterport.jpg";
import servicePhotoVideo from "@/assets/photos/service-photo-video.jpg";
import servicePhotography from "@/assets/photos/service-photography.jpg";
import serviceStaging from "@/assets/photos/service-staging.jpg";
import serviceTwilight from "@/assets/photos/service-twilight.jpg";
import serviceZillow from "@/assets/photos/service-zillow.jpg";
import wallAerialGuerneville from "@/assets/photos/wall-aerial-guerneville.jpg";
import wallAerialSantaRosa from "@/assets/photos/wall-aerial-santa-rosa.jpg";
import wallAerialValley from "@/assets/photos/wall-aerial-valley.jpg";
import wallAerialWindsor from "@/assets/photos/wall-aerial-windsor.jpg";
import wallBackyard from "@/assets/photos/wall-backyard.jpg";
import wallBathroom from "@/assets/photos/wall-bathroom.jpg";
import wallBedroom from "@/assets/photos/wall-bedroom.jpg";
import wallDeckView from "@/assets/photos/wall-deck-view.jpg";
import wallDining from "@/assets/photos/wall-dining.jpg";
import wallGreatRoom from "@/assets/photos/wall-great-room.jpg";
import wallKitchenIsland from "@/assets/photos/wall-kitchen-island.jpg";
import wallModernLivingHealdsburg from "@/assets/photos/wall-modern-living-healdsburg.jpg";
import wallOpenLivingRoom from "@/assets/photos/wall-open-living-room.jpg";
import wallOakmontTwilight from "@/assets/photos/wall-oakmont-twilight.jpg";
import wallRohnertPark from "@/assets/photos/wall-rohnert-park.jpg";
import wallSantaRosaExterior from "@/assets/photos/wall-santa-rosa-exterior.jpg";
import wallSonomaKitchen from "@/assets/photos/wall-sonoma-kitchen.jpg";
import wallStaircase from "@/assets/photos/wall-staircase.jpg";
import wallSunnyLivingRoom from "@/assets/photos/wall-sunny-living-room.jpg";
import wallTealKitchen from "@/assets/photos/wall-teal-kitchen.jpg";
import wallVictorianGarden from "@/assets/photos/wall-victorian-garden.jpg";
import wallWoodKitchen from "@/assets/photos/wall-wood-kitchen.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const heroPhotos: Photo[] = [
  { src: heroTwilightFrontYard, alt: "Single-story ranch home at twilight with lit windows and a landscaped front walk" },
  { src: heroPoolOaks, alt: "Two-story home with a pool and brick patio under mature oaks" },
  { src: heroGreatRoom, alt: "Great room with a stone fireplace and a wood-plank ceiling" },
  { src: heroKitchenIsland, alt: "Kitchen with a navy island and a fiddle-leaf fig by the fireplace" },
];

export const introPhotos = {
  main: { src: introAerialVineyardEstate, alt: "Aerial view of a wine country estate with a pool, surrounded by oaks and vineyards" },
  top: { src: introWhiteLivingRoom, alt: "White living room with a fireplace and French doors to a porch" },
  bottom: { src: introPoolHealdsburg, alt: "Modern Healdsburg home with a long lap pool and glass walls" },
} satisfies Record<string, Photo>;

const p = (src: StaticImageData, alt: string): Photo => ({ src, alt });

const santaRosaExterior = p(wallSantaRosaExterior, "Santa Rosa ranch home with a red door and a flowering maple");
const deckView = p(wallDeckView, "Covered deck with outdoor seating and hillside views");
const oakmontTwilight = p(wallOakmontTwilight, "Oakmont home at twilight among autumn trees");
const aerialGuerneville = p(wallAerialGuerneville, "Aerial view of a home among redwoods near Guerneville");
const victorianGarden = p(wallVictorianGarden, "Blue Victorian home with a front garden in Sonoma");
const backyard = p(wallBackyard, "Backyard lawn with a patio dining set");
const staircase = p(wallStaircase, "Entry with a black-and-white checkered floor and staircase");
const sonomaKitchen = p(wallSonomaKitchen, "Sonoma kitchen with a dining table and garden views");
const bedroom = p(wallBedroom, "Primary bedroom with a bay window");

// Columns 1-2 show on phones, 1-3 on tablets, all five on desktop, so the newest work goes first.
export const wallColumns: Photo[][] = [
  [
    p(wallAerialValley, "Aerial view over oak woodland and vineyards in Sonoma County"),
    p(wallTealKitchen, "Kitchen with teal cabinets, a butcher-block island, and a pro range"),
    p(wallOpenLivingRoom, "Open living room with a white sectional and sliding doors to the yard"),
  ],
  [
    p(wallModernLivingHealdsburg, "Modern Healdsburg living room with floor-to-ceiling glass"),
    oakmontTwilight,
    p(wallWoodKitchen, "Kitchen with wood cabinets, white counters, and pendant lights"),
  ],
  [
    p(wallSunnyLivingRoom, "Sunny living room with a rustic coffee table and woven wall art"),
    santaRosaExterior,
    bedroom,
  ],
  [deckView, sonomaKitchen, victorianGarden],
  [staircase, aerialGuerneville, backyard],
];

// Photos that left the homepage but still appear in service page galleries.
export const morePhotos: Photo[] = [
  p(introFrontPorch, "Wraparound front porch with red chairs overlooking the hills"),
  p(introKitchenSantaRosa, "White Santa Rosa kitchen with a large island"),
  p(introVictorianDusk, "Blue Victorian home in Sonoma at dusk"),
  p(wallDining, "Dining room with a chandelier and garden windows"),
  p(wallBathroom, "Spa bathroom with a freestanding tub"),
  p(wallKitchenIsland, "Kitchen with wood cabinets and a breakfast bar"),
  p(wallGreatRoom, "Great room with vaulted beams and a wall of windows"),
  p(wallAerialSantaRosa, "Aerial view of a Santa Rosa home with a tile roof"),
  p(wallRohnertPark, "Rohnert Park home exterior with a two-car garage"),
];

export const serviceAreaPhoto: Photo = {
  src: wallAerialWindsor,
  alt: "Aerial view of a Windsor home and its neighborhood",
};

export const servicePhotos = {
  photography: { src: servicePhotography, alt: "Living room photographed for a listing" },
  photoVideo: { src: servicePhotoVideo, alt: "Covered patio overlooking Sonoma hills" },
  aerial: { src: serviceAerial, alt: "Aerial view of a neighborhood" },
  twilight: { src: serviceTwilight, alt: "Rohnert Park home at twilight" },
  matterport: { src: serviceMatterport, alt: "Open kitchen with an island" },
  zillow: { src: serviceZillow, alt: "Kitchen and dining area" },
  staging: { src: serviceStaging, alt: "Furnished living room" },
} satisfies Record<string, Photo>;
