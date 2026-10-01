# Wine Country Exposure — Aryeo catalog data-entry sheet

Pricing mirrors F8 Media exactly (see `f8-catalog.md`). Names and descriptions are ours.

Every field below maps to Aryeo's **Products Overview → Main Products / Add-on Products → Create
Product** form. Where a number is my recommendation rather than something observed in F8's data,
it is marked **[ours]**.

## Do these three things first

1. **Products Overview → Product Filters → create a filter named `Square Footage`, type `Number`.**
   Tiered pricing does nothing without it. The "Is this product filterable?" checkbox on the product
   form keys off this filter to pick which variant applies. Build it before any product.
2. **Leave "Product Publishing" unchecked** on everything until the whole catalog is entered.
   Publishing is per-product and makes it purchasable immediately; a half-entered form going live is
   worse than no form.
3. **"Serviceable Product" means "requires an on-site appointment."** Checked = Aryeo books shoot
   time and blocks the calendar. Uncheck it for anything delivered without a visit (virtual staging,
   listing descriptions, domains, slideshow videos), or those will eat scheduling slots.

Enter main products first, then add-ons, then go back and associate add-ons to the bundles they
upsell against.

## Naming

Bundle titles use a brand ladder plus a plain descriptor, because the title is all an agent sees
when scanning the order form, and it reappears on invoices and in the client portal. The wine
reference carries the brand; the descriptor does the selling.

| F8's name | Ours | Alternate |
| --- | --- | --- |
| Signature Bundle | Estate — Photography Package | Estate Collection |
| Premium Bundle | Reserve — Photo + Video Package | Reserve Collection |
| Vacant Listing Bundle | Blank Canvas — Vacant Listing Package | Open Cellar |
| Matterport Pro Bundle | Reserve 3D — Matterport Package | Immersive Reserve |
| Zillow Showcase Bundle | Reserve Showcase — Zillow 3D Package | Showcase Reserve |
| Most Popular Bundle | Grand Reserve — Complete Listing Package | Grand Cru |
| Skip to Add-on Menu | Add-Ons Only — Skip to Add-On Menu | — |

Add-ons stay descriptive. These are commodities agents shop by name, so clarity beats branding and
most of the words are generic to the industry anyway.

| F8's name | Ours | Why |
| --- | --- | --- |
| Premier Video | Signature Listing Film | Theirs implies a tier we don't have |
| Showcase Video | Agent Walkthrough Video | "Showcase" collides with Zillow Showcase — confusing even on their site |
| Flyover Video | Aerial Video Tour | Plainer |
| Cinematic Virtual Video | Cinematic Photo Film | Theirs is indistinguishable from "Virtual Tour Video" |
| Virtual Tour Video | Slideshow Video Tour | Says what it is |
| Dot Com Address | Custom Property Domain | Theirs is jargon |
| Scribe | AI Listing Description | "Scribe" is a product name, not a description |
| Twilight Photography | Twilight Photography | Generic, keep |
| Aerial Photography | Aerial Photography | Generic, keep |
| Social Vertical Video | Vertical Social Video | Generic, keep |
| Virtual Staging 5 Pack | Virtual Staging — 5 Images | Generic, keep |
| Virtual Twilight | Virtual Twilight — Per Image | Generic, keep |
| Floor Plan | Floor Plan | Generic, keep |
| Matterport Pro | Matterport 3D Tour | Matterport's own trademark, use it |
| Zillow 3D Home | Zillow 3D Home Tour | Zillow's own program name, use it |

## Main products

All seven: **Product Type = Main Product**, **Limit quantity = 1**.
All except "Add-Ons Only": **Serviceable = checked**, **Filterable = checked**, three variants.

Variant ranges are `0–3000`, `3001–5000`, `5001–{max}`. Start the first variant at **0, not 1** —
F8 has two bundles starting at 1, so an agent entering 0 square feet matches no variant at all.

### 1. Estate — Photography Package

Description: Professional interior and exterior photography of your listing, a written property
description, and a single-property website to share with buyers. The core package for a
move-in-ready home.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 195.00 | 60 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 295.00 | 90 |
| 5,001–10,000 Sq. Ft. | 5001–10000 | 395.00 | 120 |

### 2. Reserve — Photo + Video Package

Description: Everything in Estate, plus a cinematic video tour built from your photography, virtual
twilight treatment on the hero exterior shot, and a custom domain for the property website. Our
most-booked package.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 255.00 | 60 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 355.00 | 90 |
| 5,001–10,000 Sq. Ft. | 5001–10000 | 455.00 | 120 |

### 3. Blank Canvas — Vacant Listing Package

Description: Built for empty homes. Everything in Reserve, plus a measured floor plan and five
virtually staged images so buyers can picture the space furnished.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 350.00 | 90 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 475.00 | 120 |
| 5,001–7,500 Sq. Ft. | 5001–7500 | 600.00 | 150 |

### 4. Reserve 3D — Matterport Package

Description: Everything in Reserve, plus a Matterport 3D walkthrough with dollhouse view, guided
tour, and a Matterport-generated floor plan. Buyers tour the home before they ever drive out.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 450.00 | 120 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 700.00 | 180 |
| 5,001–7,500 Sq. Ft. | 5001–7500 | 1000.00 | 200 |

### 5. Reserve Showcase — Zillow 3D Package

Description: Everything in Reserve, plus a Zillow 3D Home tour and interactive floor plan that make
the listing eligible for Zillow Showcase placement.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 450.00 | 120 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 700.00 | 150 |
| 5,001–7,500 Sq. Ft. | 5001–7500 | 1000.00 | 200 |

### 6. Grand Reserve — Complete Listing Package

Description: The full marketing kit. Everything in Reserve, plus aerial photography, a Matterport 3D
walkthrough, and a measured floor plan. Nothing left to add on.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 625.00 | 150 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 875.00 | 210 |
| 5,001–7,500 Sq. Ft. | 5001–7500 | 1175.00 | 270 |

### 7. Add-Ons Only — Skip to Add-On Menu

Description: Already have photography, or only need one service? Choose this to go straight to the
add-on menu.

- **Serviceable: unchecked.** **Filterable: unchecked.** Single price, no variants.
- Price `0.00`, Duration `1`.

Aryeo rejects a duration of 0 on **main** products ("A duration of 1 or more minutes is required"),
hence the 1 here. **Add-on** products accept 0 fine, which is why the digital add-ons below are
still 0 — the same as F8's.

This exists because the order form caps main products at one per order, which otherwise blocks
anyone wanting a single add-on. F8 does the same thing. Order it last in the form so it reads as an
escape hatch rather than an option.

## Add-ons — flat price

**Product Type = Add-on**, **Filterable = unchecked**, single price, no variants.
Set **Limit quantity = 1** on all of these except the two noted as unlimited.

| Title | Price | Duration | Serviceable | Qty limit |
| --- | --- | --- | --- | --- |
| Signature Listing Film | 500.00 | 90 | yes | 1 |
| Agent Walkthrough Video | 300.00 | 60 | yes | 1 |
| Aerial Video Tour | 300.00 | 30 | yes | 1 |
| Twilight Photography | 250.00 | 30 | yes | 1 |
| Aerial Photography | 175.00 | 30 | yes | 1 |
| Vertical Social Video | 125.00 | 30 | yes | 1 |
| Cinematic Photo Film | 50.00 | 0 | **no** | 1 |
| Virtual Staging — 5 Images | 50.00 | 0 | **no** | **unlimited** |
| Custom Property Domain | 30.00 | 0 | **no** | 1 |
| Slideshow Video Tour | 30.00 | 0 | **no** | 1 |
| AI Listing Description | 25.00 | 0 | **no** | 1 |
| Virtual Twilight — Per Image | 25.00 | 0 | **no** | **unlimited** |

Descriptions:

- **Signature Listing Film** — A full cinematic film combining ground and aerial footage, plus five
  finished aerial stills. Our highest-production video option.
- **Agent Walkthrough Video** — A guided video tour with you on camera, introducing the home room by
  room. Great for social and for your own channel.
- **Aerial Video Tour** — Drone video of the home and surrounding property, including five finished
  aerial stills. Ideal for acreage and vineyard parcels.
- **Twilight Photography** — Exterior photography shot in the half hour after sunset, when the
  windows glow and the sky still has color. Requires a separate visit.
- **Aerial Photography** — 15 to 20 finished aerial stills showing the home in context: lot lines,
  outbuildings, views, and approach.
- **Vertical Social Video** — A short vertical-format edit built for Instagram Reels, TikTok, and
  YouTube Shorts.
- **Cinematic Photo Film** — A motion video built from your still photography, with camera moves and
  music. No additional shoot time.
- **Virtual Staging — 5 Images** — Five photographs digitally furnished in a style you choose. Order
  multiple sets for larger homes.
- **Custom Property Domain** — A dedicated web address for the property website, for example
  123MainStreet.com, pointed at your listing page.
- **Slideshow Video Tour** — A simple video slideshow of the listing photography, formatted for MLS
  and portal upload.
- **AI Listing Description** — Written listing copy generated from the property details and public
  records, ready to edit and publish.
- **Virtual Twilight — Per Image** — A daytime exterior photograph converted to a dusk scene. Priced
  per image.

Note: Twilight Photography needs its own appointment because it is sunset-locked. Aryeo will try to
schedule it inside the main booking window. Flag this in the description and plan to confirm timing
manually until we know how their scheduler handles it.

## Add-ons — square-footage tiered

**Product Type = Add-on**, **Filterable = checked**, multiple variants.

### Floor Plan

Serviceable: yes. Qty limit 1. Durations are **[ours]** — F8's weren't exposed in their form data.

| Variant | Range | Price | Duration |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 125.00 | 30 |
| 3,001–5,000 Sq. Ft. | 3001–5000 | 150.00 | 45 |
| 5,001–7,500 Sq. Ft. | 5001–7500 | 175.00 | 60 |
| 7,501–12,000 Sq. Ft. | 7501–12000 | 225.00 | 60 |

F8's third variant is labelled 5,001–7,500 but its max is actually 10,000, overlapping the next
one. Use 7,500 as written above.

### Matterport 3D Tour

Serviceable: yes. Qty limit 1.

F8 builds this as **73 variants**, stepping every 100 sq ft from 3,000 to 10,000, by the rule
`$300 + $10 per 100 sq ft above 3,000`. Entering that by hand is 73 rows, and the Aryeo API has no
product write endpoints, so there is no way to script it.

Below is the same pricing on a uniform **$50 per 500 sq ft** rule — **17 rows instead of 73**. It
lands on F8's exact price at every 500 boundary and is never more than $40 above them in between,
which is noise against a $600 order. I'd use this.

| Variant | Range | Price | Duration **[ours]** |
| --- | --- | --- | --- |
| Up to 3,000 Sq. Ft. | 0–3000 | 250.00 | 60 |
| 3,001–3,500 Sq. Ft. | 3001–3500 | 350.00 | 75 |
| 3,501–4,000 Sq. Ft. | 3501–4000 | 400.00 | 75 |
| 4,001–4,500 Sq. Ft. | 4001–4500 | 450.00 | 90 |
| 4,501–5,000 Sq. Ft. | 4501–5000 | 500.00 | 90 |
| 5,001–5,500 Sq. Ft. | 5001–5500 | 550.00 | 105 |
| 5,501–6,000 Sq. Ft. | 5501–6000 | 600.00 | 105 |
| 6,001–6,500 Sq. Ft. | 6001–6500 | 650.00 | 120 |
| 6,501–7,000 Sq. Ft. | 6501–7000 | 700.00 | 120 |
| 7,001–7,500 Sq. Ft. | 7001–7500 | 750.00 | 150 |
| 7,501–8,000 Sq. Ft. | 7501–8000 | 800.00 | 150 |
| 8,001–8,500 Sq. Ft. | 8001–8500 | 850.00 | 180 |
| 8,501–9,000 Sq. Ft. | 8501–9000 | 900.00 | 180 |
| 9,001–9,500 Sq. Ft. | 9001–9500 | 950.00 | 210 |
| 9,501–10,000 Sq. Ft. | 9501–10000 | 1000.00 | 210 |
| 10,001–15,000 Sq. Ft. | 10001–15000 | 1500.00 | 240 |
| 15,001–20,000 Sq. Ft. | 15001–20000 | 2000.00 | 300 |

One caveat: the jump from $250 at 3,000 to $350 at 3,001 is a $100 cliff. F8's is $60. If an agent
notices, it looks arbitrary. Setting 3,001–3,500 to `310.00` matches F8's floor exactly and softens
the cliff to $60, at the cost of undercharging by up to $40 at the top of that one band.

Description: A dimensionally accurate 3D walkthrough of the home, with dollhouse and floor plan
views. Hosted for one year; renewals are $25 per year after that.

### Zillow 3D Home Tour

Serviceable: yes. Qty limit 1. **Identical pricing and durations to Matterport 3D Tour above** —
copy that table verbatim.

Description: An interactive Zillow 3D Home tour with an interactive floor plan, published directly
to the listing and required for Zillow Showcase eligibility.

## After the catalog is in

Remaining setup, in the left nav of the same screen:

- **Travel Fees** — free inside our primary service area, drive-time based beyond it. Needs the
  North Bay territories defined first.
- **Taxes** — California treats most photography deliverables as taxable when tangible media
  changes hands; digital-only delivery is generally not. Worth one conversation with a CPA before
  turning this on.
- **Coupons & Promo Codes** — hold off until launch, then consider a first-listing offer.
- **Pricing Plans** — this is Aryeo's volume/agent-specific pricing. Useful later for high-volume
  agents and teams; skip for now.

Then build the order form itself, mirror F8's two settings worth copying (100% payment upfront,
territory awareness on), and capture the form's ID into `ARYEO_ORDER_FORM_ID` in `.env.local`.
