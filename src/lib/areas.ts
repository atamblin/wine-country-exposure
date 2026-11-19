import { areaPhotos, introPhotos, morePhotos, servicePhotos, wallColumns, type Photo } from "@/lib/photos";
import type { ServiceFaq } from "@/lib/services";

// Content for /areas/[city]. Add a town by adding an entry here; the page, sitemap, footer link,
// and structured data all follow. Write each one from local knowledge: Google rewards pages that
// say something specific about the town, and ignores ones that only swap the name.

const library = [...wallColumns.flat(), ...Object.values(introPhotos), ...morePhotos, ...Object.values(servicePhotos)];
const photo = (alt: string) => {
  const found = library.find((p) => p.alt === alt);
  if (!found) throw new Error(`No photo with alt "${alt}"`);
  return found;
};

export type Area = {
  slug: string;
  /** Town name exactly as it appears in site.coreTowns / site.extendedTowns. */
  town: string;
  /** e.g. "Sonoma County seat" — shown above the heading. */
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  headline: [string, string];
  intro: string[];
  hero: Photo;
  gallery: Photo[];
  neighborhoods: { name: string; note: string }[];
  /** How we approach listings in this town. */
  approach: { title: string; body: string }[];
  /** Service slugs to feature, most relevant first. */
  featuredServices: string[];
  faqs: ServiceFaq[];
};

export const areas: Area[] = [
  {
    slug: "santa-rosa",
    town: "Santa Rosa",
    eyebrow: "Santa Rosa, CA",
    metaTitle: "Santa Rosa Real Estate Photography",
    metaDescription:
      "Listing photos, video, drone, and 3D tours for Santa Rosa agents, from Fountaingrove and Oakmont to Bennett Valley and the West End. No travel fee, next-day delivery.",
    headline: ["Real estate photography in", "Santa Rosa"],
    intro: [
      "Santa Rosa is home base for us, so there's never a travel fee here. We shoot everything from Craftsman bungalows near McDonald Avenue to view homes in Fountaingrove and single-level homes in Oakmont, and we know which side of the street gets the morning light.",
      "Book online, pay upfront by square footage, and get your photos on a branded property page by the next business day.",
    ],
    hero: areaPhotos.santaRosa,
    gallery: [
      photo("Santa Rosa ranch home with a red door and a flowering maple"),
      photo("White Santa Rosa kitchen with a large island"),
      photo("Oakmont home at twilight among autumn trees"),
    ],
    neighborhoods: [
      { name: "Fountaingrove", note: "Hillside homes with long views, many rebuilt since 2017." },
      { name: "Oakmont", note: "Active-adult community with golf, trails, and single-level living." },
      { name: "Bennett Valley", note: "Larger lots and golf course frontage below Taylor Mountain." },
      { name: "Rincon Valley", note: "Established family neighborhoods near Spring Lake and Annadel." },
      { name: "McDonald Avenue & Junior College", note: "Victorians and Craftsman homes on tree-lined streets." },
      { name: "West End & Railroad Square", note: "Older cottages close to downtown, SMART, and restaurants." },
      { name: "Coffey Park", note: "A neighborhood almost entirely rebuilt, so most homes are newer construction." },
      { name: "Skyhawk & Montecito Heights", note: "East side homes backing onto hills and open space." },
      { name: "Roseland & southwest", note: "Starter homes and newer subdivisions with quick freeway access." },
    ],
    approach: [
      {
        title: "Views are the selling point",
        body: "In Fountaingrove, Skyhawk, and Montecito Heights the view is often worth more than any room. We balance every exposure so the windows show the hills instead of a white glare, and add aerials when the panorama is the story.",
      },
      {
        title: "Rebuilt homes, new finishes",
        body: "Many homes in Coffey Park and Fountaingrove were rebuilt after the 2017 fires. Buyers want to see the new kitchens, solar, and outdoor living, so we photograph those details along with the wide shots.",
      },
      {
        title: "Drone near the airport",
        body: "North Santa Rosa sits close to Charles M. Schulz–Sonoma County Airport. We're FAA Part 107 certified and get airspace authorization before every flight that needs it, so you don't have to think about it.",
      },
    ],
    featuredServices: ["listing-photography", "aerial-drone-photography", "twilight-photography", "matterport-3d-tours"],
    faqs: [
      {
        q: "Is there a travel fee in Santa Rosa?",
        a: "No. Santa Rosa is in our core area, along with Healdsburg, Windsor, Rohnert Park, Sebastopol, and Forestville, so there's never a travel fee.",
      },
      {
        q: "Can you fly a drone in north Santa Rosa?",
        a: "Yes. Parts of north Santa Rosa and Larkfield are in the airport's controlled airspace. We're FAA Part 107 certified and request authorization before the shoot, which is usually approved quickly.",
      },
      {
        q: "How soon can you shoot?",
        a: "Most Santa Rosa listings can be booked within a few days, often sooner. Pick an open time when you book online, and photos are delivered by the next business day.",
      },
      {
        q: "Do you shoot Oakmont homes?",
        a: "Often. Oakmont homes tend to be single-level with golf course or hillside views, and the best light there is usually late morning or late afternoon. We'll suggest a time when you book.",
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

/** Link for a town: its local page if it has one, otherwise the homepage service area section. */
export function townHref(town: string) {
  const area = areas.find((a) => a.town === town);
  return area ? `/areas/${area.slug}` : "/#service-area";
}
