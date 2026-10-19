export const site = {
  name: "Wine Country Exposure",
  shortName: "WCE",
  tagline: "Real estate photography, video, and 3D for Sonoma County.",
  description:
    "Listing photography, cinematic video, aerials, Matterport, and Zillow 3D for agents in Santa Rosa, Healdsburg, Sebastopol, and west Sonoma County.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.winecountryexposure.com",
  email: "adrian@winecountryexposure.com",
  phoneDisplay: "(707) 322-2233",
  phoneHref: "tel:+17073222233",
  serviceArea:
    "Santa Rosa, Healdsburg, Windsor, Rohnert Park, Sebastopol, Forestville, Occidental, Bodega Bay, and Jenner.",
  orderUrl:
    process.env.NEXT_PUBLIC_ARYEO_ORDER_URL ??
    "https://media.winecountryexposure.com/order-forms/01a0f9c0-da29-72a0-8a32-f4e56ae747a0",
} as const;
