import { packages, priceFor, travelFees } from "@/lib/pricing";
import { money } from "@/lib/services";
import { site } from "@/lib/site";

// Content for /faq. Prices are read from pricing.ts so they can't drift from the quote builder.

export type FaqGroup = { id: string; title: string; faqs: { q: string; a: string }[] };

const from = (id: string) => {
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unknown package ${id}`);
  return money(priceFor(pkg.tiers, 0) ?? 0);
};

const feeTowns = Object.entries(travelFees).filter(([, fee]) => fee > 0);

export const faqGroups: FaqGroup[] = [
  {
    id: "booking",
    title: "Booking and pricing",
    faqs: [
      {
        q: "How do I book a shoot?",
        a: `Book online any time at ${site.url.replace(/^https?:\/\//, "")}/book. Choose your services, pick an open time, and pay when you book. You don't need to create an account. You can also call or text ${site.phoneDisplay} or email ${site.email}.`,
      },
      {
        q: "How much does real estate photography cost?",
        a: `Pricing is by square footage. For homes up to 3,000 sq ft, our Estate photo package starts at ${from("estate")} and Reserve (photos plus a cinematic video, virtual twilight, and custom domain) starts at ${from("reserve")}. Larger homes are priced in tiers, and the quote builder shows the exact total before you book.`,
      },
      {
        q: "Which package should I choose?",
        a: "Estate covers most listings. Reserve adds video and a twilight hero shot for listings that need to stand out on social. Blank Canvas is built for vacant homes, with virtual staging and a floor plan. Reserve 3D and Reserve Showcase add a Matterport or Zillow 3D tour, and Grand Reserve is the full kit with aerials.",
      },
      {
        q: "Are floor plans included?",
        a: "A measured floor plan is included in Blank Canvas, Reserve 3D, Reserve Showcase, and Grand Reserve. You can add one to any other order.",
      },
      {
        q: "When do I pay?",
        a: "At booking, by card through our secure checkout. Your receipt and appointment confirmation arrive by email right away.",
      },
      {
        q: "Do you shoot commercial properties or very large estates?",
        a: `Yes. Homes over our largest pricing tier, along with commercial, land, and vineyard properties, are quoted individually. Email ${site.email} with the address and what you need.`,
      },
    ],
  },
  {
    id: "shoot-day",
    title: "Shoot day",
    faqs: [
      {
        q: "How should the home be prepared?",
        a: "Clear counters, open blinds, turn on every light, move cars off the driveway, and put away personal items like toiletries, pet bowls, and fridge magnets. A tidy home photographs much better than a perfect edit can fix.",
      },
      {
        q: "How long does a shoot take?",
        a: "About an hour for homes up to 3,000 sq ft, 90 minutes up to 5,000 sq ft, and two hours for larger homes. Video, 3D tours, and aerials add time.",
      },
      {
        q: "Do I or the sellers need to be there?",
        a: "No. Many agents leave a lockbox code. If the home is occupied, let the sellers know we'll move through each room quickly and leave everything as we found it.",
      },
      {
        q: "What if it rains?",
        a: "Interiors can be shot in any weather. If rain, wind, or a gray sky rules out the exteriors, aerials, or a twilight, we'll move just that part of the order to the next good day at no charge.",
      },
      {
        q: "What's your cancellation policy?",
        a: "You can cancel or reschedule for free up to 24 hours before the shoot. Inside 24 hours there's a $75 late-notice fee, which also applies if we can't get in or the home isn't ready within 20 minutes of the start time. If we ever have to cancel, you choose a new time or a full refund.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    faqs: [
      {
        q: "How fast are photos delivered?",
        a: "Photos, video, 3D tours, and floor plans are all delivered by the next business day.",
      },
      {
        q: "How are files delivered?",
        a: "On a branded property page where you can download MLS-sized and full-resolution files, share an unbranded tour link for the MLS, and find your video and 3D tour in one place.",
      },
      {
        q: "Can I use the photos for print and social?",
        a: "Yes. You can use them to market the listing anywhere: MLS, portals, print, social, and your own site.",
      },
    ],
  },
  {
    id: "aerial",
    title: "Drone and aerial",
    faqs: [
      {
        q: "Are you FAA certified?",
        a: "Yes. Every flight is flown by an FAA Part 107 certified pilot, and we carry liability insurance that covers drone work.",
      },
      {
        q: "Can you fly near Sonoma County Airport?",
        a: "Yes. Parts of north Santa Rosa, Windsor, and Larkfield are in controlled airspace, so we request authorization before the shoot. A few spots can't be flown at all, and we'll tell you before you pay for aerials.",
      },
    ],
  },
  {
    id: "staging",
    title: "Virtual staging and AB 723",
    faqs: [
      {
        q: "What does California's AB 723 require?",
        a: "Agents must disclose digitally altered listing photos and give buyers a way to see the originals. Every virtually staged or virtual twilight image we deliver is labeled, with the unedited original included.",
      },
      {
        q: "Is virtual staging worth it?",
        a: "For vacant homes, almost always. Buyers have trouble judging the size of an empty room, and virtual staging costs a small fraction of physical staging.",
      },
    ],
  },
  {
    id: "area",
    title: "Service area and business",
    faqs: [
      {
        q: "Where do you work?",
        a: `Central and west Sonoma County. There's no travel fee in ${site.coreTowns.join(", ")}. ${feeTowns.map(([t]) => t).join(", ")} have a small travel fee that's added automatically when you enter the address.`,
      },
      {
        q: "Do you work in Napa, Marin, or Petaluma?",
        a: "Not at this time. We focus on central and west Sonoma County so we can stay on schedule and deliver on time.",
      },
      {
        q: "Are you insured?",
        a: `Yes. We carry general liability insurance, including coverage for drone work. Email ${site.email} if your brokerage needs a certificate of insurance.`,
      },
    ],
  },
];
