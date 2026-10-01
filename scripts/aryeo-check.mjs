/**
 * Read-only probe of the Aryeo account.
 *
 * Verifies the API key authenticates and reports what is configured so far:
 * order forms (and their IDs, which the quote-builder handoff needs), products,
 * categories, regions, territories, and coupons.
 *
 * Usage: npm run aryeo:check
 */

const BASE_URL = "https://api.aryeo.com/v1";
const token = process.env.ARYEO_API_KEY;

if (!token) {
  console.error("ARYEO_API_KEY is not set. Add it to .env.local, then re-run.");
  process.exit(1);
}

async function get(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });

  const body = await res.text();
  let parsed = null;
  try {
    parsed = JSON.parse(body);
  } catch {
    // Non-JSON response; surface the raw text in the error path below.
  }

  return { ok: res.ok, status: res.status, body, parsed };
}

function summarize(parsed) {
  const data = parsed?.data;
  if (Array.isArray(data)) return data;
  if (data) return [data];
  return [];
}

const checks = [
  { label: "Order forms", path: "/order-forms", show: (x) => `${x.title ?? x.name ?? "(untitled)"}  id=${x.id}  type=${x.type ?? "?"}  upfront_payment=${x.require_upfront_payment ?? "?"}` },
  { label: "Product categories", path: "/product-categories", show: (x) => `${x.title ?? x.name}  id=${x.id}` },
  { label: "Products", path: "/products?per_page=100", show: (x) => `${x.title ?? x.name}  type=${x.type ?? "?"}  price=${x.price?.amount ?? x.price ?? "?"}  id=${x.id}` },
  // Reference data, not account config. filter[type] is marked optional in the
  // OpenAPI spec but the API rejects the request without it.
  { label: "CA counties (Aryeo reference data)", path: "/regions?filter[type]=COUNTY&filter[country_code]=US&filter[state_code]=CA&per_page=100", show: (x) => `${x.title ?? x.name}  id=${x.id}`, maxShow: 6 },
  { label: "Territories", path: "/territories", show: (x) => `${x.title ?? x.name}  id=${x.id}` },
  { label: "Coupons", path: "/coupons", show: (x) => `${x.code ?? x.title ?? "(unnamed)"}  id=${x.id}` },
];

let authFailed = false;

for (const { label, path, show, maxShow } of checks) {
  const { ok, status, parsed, body } = await get(path);

  if (!ok) {
    console.log(`\n${label}  ->  HTTP ${status}`);
    console.log(`  ${body.slice(0, 300)}`);
    if (status === 401 || status === 403) authFailed = true;
    continue;
  }

  const items = summarize(parsed);
  console.log(`\n${label}  ->  ${items.length} found`);
  const shown = maxShow ? items.slice(0, maxShow) : items;
  for (const item of shown) {
    try {
      console.log(`  - ${show(item)}`);
    } catch {
      console.log(`  - ${JSON.stringify(item).slice(0, 160)}`);
    }
  }
  if (shown.length < items.length) {
    console.log(`  ... and ${items.length - shown.length} more`);
  }
}

if (authFailed) {
  console.log(
    "\nAuthentication failed. Confirm the key was copied whole from Aryeo's group developer settings."
  );
  process.exit(1);
}

console.log("\nAuthenticated successfully.");
