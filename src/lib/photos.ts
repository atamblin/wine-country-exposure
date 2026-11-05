import type { StaticImageData } from "next/image";
import heroLivingHealdsburg from "@/assets/photos/hero-living-healdsburg.jpg";
import heroPoolHealdsburg from "@/assets/photos/hero-pool-healdsburg.jpg";
import heroTwilightFrontYard from "@/assets/photos/hero-twilight-front-yard.jpg";
import introFrontPorch from "@/assets/photos/intro-front-porch.jpg";
import introKitchenSantaRosa from "@/assets/photos/intro-kitchen-santa-rosa.jpg";
import introVictorianDusk from "@/assets/photos/intro-victorian-dusk.jpg";
import serviceAerial from "@/assets/photos/service-aerial.jpg";
import serviceMatterport from "@/assets/photos/service-matterport.jpg";
import servicePhotoVideo from "@/assets/photos/service-photo-video.jpg";
import servicePhotography from "@/assets/photos/service-photography.jpg";
import serviceStaging from "@/assets/photos/service-staging.jpg";
import serviceTwilight from "@/assets/photos/service-twilight.jpg";
import serviceZillow from "@/assets/photos/service-zillow.jpg";
import wallAerialGuerneville from "@/assets/photos/wall-aerial-guerneville.jpg";
import wallAerialSantaRosa from "@/assets/photos/wall-aerial-santa-rosa.jpg";
import wallAerialWindsor from "@/assets/photos/wall-aerial-windsor.jpg";
import wallBackyard from "@/assets/photos/wall-backyard.jpg";
import wallBathroom from "@/assets/photos/wall-bathroom.jpg";
import wallBedroom from "@/assets/photos/wall-bedroom.jpg";
import wallDeckView from "@/assets/photos/wall-deck-view.jpg";
import wallDining from "@/assets/photos/wall-dining.jpg";
import wallGreatRoom from "@/assets/photos/wall-great-room.jpg";
import wallKitchenIsland from "@/assets/photos/wall-kitchen-island.jpg";
import wallOakmontTwilight from "@/assets/photos/wall-oakmont-twilight.jpg";
import wallRohnertPark from "@/assets/photos/wall-rohnert-park.jpg";
import wallSantaRosaExterior from "@/assets/photos/wall-santa-rosa-exterior.jpg";
import wallSonomaKitchen from "@/assets/photos/wall-sonoma-kitchen.jpg";
import wallStaircase from "@/assets/photos/wall-staircase.jpg";
import wallVictorianGarden from "@/assets/photos/wall-victorian-garden.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const heroPhotos: Photo[] = [
  { src: heroTwilightFrontYard, alt: "Single-story ranch home at twilight with lit windows and a landscaped front walk" },
  { src: heroPoolHealdsburg, alt: "Modern Healdsburg home with a long lap pool and glass walls" },
  { src: heroLivingHealdsburg, alt: "Bright Healdsburg living room with floor-to-ceiling windows" },
];

export const introPhotos = {
  main: { src: introFrontPorch, alt: "Wraparound front porch with red chairs overlooking the hills" },
  top: { src: introKitchenSantaRosa, alt: "White Santa Rosa kitchen with a large island" },
  bottom: { src: introVictorianDusk, alt: "Blue Victorian home in Sonoma at dusk" },
} satisfies Record<string, Photo>;

export const wallColumns: Photo[][] = [
  [
    { src: wallSantaRosaExterior, alt: "Santa Rosa ranch home with a red door and a flowering maple" },
    { src: wallDining, alt: "Dining room with a chandelier and garden windows" },
    { src: wallBathroom, alt: "Spa bathroom with a freestanding tub" },
  ],
  [
    { src: wallDeckView, alt: "Covered deck with outdoor seating and hillside views" },
    { src: wallKitchenIsland, alt: "Kitchen with wood cabinets and a breakfast bar" },
    { src: wallOakmontTwilight, alt: "Oakmont home at twilight among autumn trees" },
  ],
  [
    { src: wallAerialGuerneville, alt: "Aerial view of a home among redwoods near Guerneville" },
    { src: wallGreatRoom, alt: "Great room with vaulted beams and a wall of windows" },
    { src: wallVictorianGarden, alt: "Blue Victorian home with a front garden in Sonoma" },
  ],
  [
    { src: wallBackyard, alt: "Backyard lawn with a patio dining set" },
    { src: wallStaircase, alt: "Entry with a black-and-white checkered floor and staircase" },
    { src: wallRohnertPark, alt: "Rohnert Park home exterior with a two-car garage" },
  ],
  [
    { src: wallSonomaKitchen, alt: "Sonoma kitchen with a dining table and garden views" },
    { src: wallAerialSantaRosa, alt: "Aerial view of a Santa Rosa home with a tile roof" },
    { src: wallBedroom, alt: "Primary bedroom with a bay window" },
  ],
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
