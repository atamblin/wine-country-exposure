/**
 * Audits the live Aryeo catalog against reference/our-catalog.md.
 *
 * ~70 variant rows were entered by hand, so this checks every variant title,
 * price and duration and reports anything that differs, is missing, or is extra.
 *
 * GET /products does not return each variant's min/max square footage, so those
 * bounds cannot be verified here and still need an eyeball pass in the dashboard.
 *
 * Usage: npm run aryeo:audit
 */

const BASE_URL = "https://api.aryeo.com/v1";
const token = process.env.ARYEO_API_KEY;

if (!token) {
  console.error("ARYEO_API_KEY is not set. Add it to .env.local, then re-run.");
  process.exit(1);
}

// [variant title, price in dollars, duration in minutes]
const tiered3 = (p1, d1, p2, d2, p3, d3, max) => [
  ["Up to 3,000 Sq. Ft.", p1, d1],
  ["3,001 - 5,000 Sq. Ft.", p2, d2],
  [`5,001 - ${max} Sq. Ft.`, p3, d3],
];

// $250 up to 3,000, then $50 per 500 sq ft, then two flat bands.
const ramp3d = [
  ["Up to 3,000 Sq. Ft.", 250, 60],
  ["3,001 - 3,500 Sq. Ft.", 350, 75],
  ["3,501 - 4,000 Sq. Ft.", 400, 75],
  ["4,001 - 4,500 Sq. Ft.", 450, 90],
  ["4,501 - 5,000 Sq. Ft.", 500, 90],
  ["5,001 - 5,500 Sq. Ft.", 550, 105],
  ["5,501 - 6,000 Sq. Ft.", 600, 105],
  ["6,001 - 6,500 Sq. Ft.", 650, 120],
  ["6,501 - 7,000 Sq. Ft.", 700, 120],
  ["7,001 - 7,500 Sq. Ft.", 750, 150],
  ["7,501 - 8,000 Sq. Ft.", 800, 150],
  ["8,001 - 8,500 Sq. Ft.", 850, 180],
  ["8,501 - 9,000 Sq. Ft.", 900, 180],
  ["9,001 - 9,500 Sq. Ft.", 950, 210],
  ["9,501 - 10,000 Sq. Ft.", 1000, 210],
  ["10,001 - 15,000 Sq. Ft.", 1500, 240],
  ["15,001 - 20,000 Sq. Ft.", 2000, 300],
];

// Single-price products carry one unnamed variant.
const flat = (price, duration) => [[null, price, duration]];

const expected = {
  "Estate — Photography Package": { type: "MAIN", variants: tiered3(195, 60, 295, 90, 395, 120, "10,000") },
  "Reserve — Photo + Video Package": { type: "MAIN", variants: tiered3(255, 60, 355, 90, 455, 120, "10,000") },
  "Blank Canvas — Vacant Listing Package": { type: "MAIN", variants: tiered3(350, 90, 475, 120, 600, 150, "7,500") },
  "Reserve 3D — Matterport Package": { type: "MAIN", variants: tiered3(450, 120, 700, 180, 1000, 200, "7,500") },
  "Reserve Showcase — Zillow 3D Package": { type: "MAIN", variants: tiered3(450, 120, 700, 150, 1000, 200, "7,500") },
  "Grand Reserve — Complete Listing Package": { type: "MAIN", variants: tiered3(625, 150, 875, 210, 1175, 270, "7,500") },
  "Add-Ons Only — Skip to Add-On Menu": { type: "MAIN", variants: flat(0, 1) },

  "Signature Listing Film": { type: "ADDON", variants: flat(500, 90) },
  "Agent Walkthrough Video": { type: "ADDON", variants: flat(300, 60) },
  "Aerial Video Tour": { type: "ADDON", variants: flat(300, 30) },
  "Twilight Photography": { type: "ADDON", variants: flat(250, 30) },
  "Aerial Photography": { type: "ADDON", variants: flat(175, 30) },
  "Vertical Social Video": { type: "ADDON", variants: flat(125, 30) },
  // Add-ons accept a 0 duration; main products do not.
  "Cinematic Photo Film": { type: "ADDON", variants: flat(50, 0) },
  "Virtual Staging — 5 Images": { type: "ADDON", variants: flat(50, 0) },
  "Custom Property Domain": { type: "ADDON", variants: flat(30, 0) },
  "Slideshow Video Tour": { type: "ADDON", variants: flat(30, 0) },
  "AI Listing Description": { type: "ADDON", variants: flat(25, 0) },
  "Virtual Twilight — Per Image": { type: "ADDON", variants: flat(25, 0) },

  "Floor Plan": {
    type: "ADDON",
    variants: [
      ["Up to 3,000 Sq. Ft.", 125, 30],
      ["3,001 - 5,000 Sq. Ft.", 150, 45],
      ["5,001 - 7,500 Sq. Ft.", 175, 60],
      ["7,501 - 12,000 Sq. Ft.", 225, 60],
    ],
  },
  "Matterport 3D Tour": { type: "ADDON", variants: ramp3d },
  "Zillow 3D Home Tour": { type: "ADDON", variants: ramp3d },
};

const res = await fetch(
  `${BASE_URL}/products?per_page=100&filter[include_inactive]=true`,
  { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } }
);

if (!res.ok) {
  console.error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  process.exit(1);
}

const live = (await res.json()).data ?? [];
const problems = [];

for (const [title, want] of Object.entries(expected)) {
  const product = live.find((p) => p.title === title);

  if (!product) {
    problems.push(`MISSING product: ${title}`);
    continue;
  }

  if (product.type !== want.type) {
    problems.push(`${title}: type is ${product.type}, expected ${want.type}`);
  }

  const variants = product.variants ?? [];
  if (variants.length !== want.variants.length) {
    problems.push(
      `${title}: ${variants.length} variants, expected ${want.variants.length}`
    );
  }

  want.variants.forEach(([vTitle, price, duration], i) => {
    const got = variants[i];
    if (!got) return;

    const where = `${title} / variant ${i + 1}`;
    if (vTitle !== null && got.title !== vTitle) {
      problems.push(`${where}: name "${got.title}", expected "${vTitle}"`);
    }
    if (got.price !== price * 100) {
      problems.push(
        `${where}: price $${(got.price / 100).toFixed(2)}, expected $${price.toFixed(2)}`
      );
    }
    if (got.duration !== duration) {
      problems.push(`${where}: duration ${got.duration}m, expected ${duration}m`);
    }
  });
}

const unexpected = live.filter((p) => !(p.title in expected));
for (const p of unexpected) {
  problems.push(`EXTRA product not in the sheet: ${p.title}  id=${p.id}`);
}

const variantCount = live.reduce((n, p) => n + (p.variants?.length ?? 0), 0);
console.log(`Checked ${live.length} products / ${variantCount} variants.\n`);

if (problems.length === 0) {
  console.log("Everything matches reference/our-catalog.md.");
} else {
  console.log(`${problems.length} discrepancies:\n`);
  for (const p of problems) console.log(`  - ${p}`);
}

const published = live.filter((p) => p.active);
console.log(
  `\nPublished (live to customers): ${published.length} of ${live.length}.`
);
console.log(
  "Square-footage bounds are not returned by the API and still need a manual check."
);
