export const site = {
  name: "Wine Country Exposure",
  shortName: "WCE",
  tagline: "Real estate photography, video, and 3D for Sonoma County.",
  description:
    "Listing photography, cinematic video, aerials, Matterport, and Zillow 3D for agents in Santa Rosa, Healdsburg, Sebastopol, and west Sonoma County.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.winecountryexposure.com",
  email: "info@winecountryexposure.com",
  phoneDisplay: "(707) 322-2233",
  phoneHref: "tel:+17073222233",
  // Must match the phone on our Google Business Profile exactly.
  phoneE164: "+17073222233",
  googleReviewUrl: "https://g.page/r/CdwSk3fmqnX9EAI/review",
  serviceArea:
    "Santa Rosa, Healdsburg, Windsor, Rohnert Park, Sebastopol, Forestville, Occidental, Bodega Bay, and Jenner.",
  coreTowns: ["Santa Rosa", "Healdsburg", "Windsor", "Rohnert Park", "Sebastopol", "Forestville"],
  extendedTowns: ["Occidental", "Bodega Bay", "Jenner"],
  orderUrl:
    process.env.NEXT_PUBLIC_ARYEO_ORDER_URL ??
    "https://media.winecountryexposure.com/order-forms/01a0f9c0-da29-72a0-8a32-f4e56ae747a0",
  loginUrl: "https://media.winecountryexposure.com/login",
  social: {
    instagram: "https://www.instagram.com/winecountryexposure/",
    facebook: "https://www.facebook.com/winecountryexposure/",
  },
} as const;
