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

**Twilight Photography must be flagged as a twilight product.** Products carry an `is_twilight`
field, and Aryeo's scheduler has native twilight support (listed under Scheduling alongside Business
Hours and Home Base) that books these relative to local sunset instead of inside normal business
hours. Ours is currently `is_twilight=false`, so it would be offered at any time of day.

Virtual Twilight stays `false` — it is a photo edit, not a shoot.

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

## Categories

Without categories the add-on step is one undifferentiated list of 15 items. These four group it
into scannable sections. Counts: Photography 2, Video 6, 3D Tours & Floor Plans 3, Listing
Marketing 4 — all 15 add-ons placed, none in two categories.

| Category | Products |
| --- | --- |
| Photography | Aerial Photography, Twilight Photography |
| Video | Signature Listing Film, Agent Walkthrough Video, Aerial Video Tour, Vertical Social Video, Cinematic Photo Film, Slideshow Video Tour |
| 3D Tours & Floor Plans | Matterport 3D Tour, Zillow 3D Home Tour, Floor Plan |
| Listing Marketing | Virtual Staging — 5 Images, Virtual Twilight — Per Image, Custom Property Domain, AI Listing Description |

Order them as above if the dashboard lets you sort. It runs most-expensive to least, which puts the
high-margin work in front of an agent before the $25 extras.

The six bundles don't need a category — the order form presents main products as its own step.

**Categories live on the order form, not in the Products area.** Aryeo calls the feature "Order Form
Categories" and it is reached from an **"Add Categories" button on an order form's settings page**.
So the order form has to exist first; there is nothing to find under Products Overview. Categories
also carry a `color`, so expect to pick one per category.

`/product-categories` is read-only in the Aryeo API (no POST), so these have to be created in the
dashboard. `npm run aryeo:audit` will confirm the assignments afterward.

## After the catalog is in

Aryeo's own onboarding runs products as step 5, **Product Adjustments as step 6**, and **Order Form
Creation & Settings as step 7**. Their help articles for both are video-only, so there is no written
click path to follow — expect to work from the in-app onboarding checklist.

Three things must exist before the order form works, in this order:

### 1. Territories (service area)

**Territories live under Scheduling, not Products.** That section also holds Business Hours, Home
Base, Twilight, Calendar Sync, Booking Limits, Buffers and Assignment Priority — several of which
the order form depends on.

**Home Base is the address travel fees measure from.** Set it before trusting the mileage rings.

`/territories` currently returns 0. Territory awareness filters which products and which
photographers are offered based on the property address, and travel fees key off it.

**Territories are hand-drawn polygons on a Mapbox map, not counties picked from a list.** The county
region IDs from `GET /regions` are not used here — they belong to some other part of the platform.
Drawing exact county boundaries by hand is not worth it; coarse polygons are fine, because all
territory awareness needs to answer is "do we serve this address?"

**The service area is central and west Sonoma County only.** Napa, Marin and Petaluma are
deliberately excluded — we do not take jobs there. Two territories:

| Name | Covers | Fee |
| --- | --- | --- |
| `North Bay Core` | Healdsburg, Windsor, Santa Rosa, Rohnert Park, Sebastopol, Forestville | 0 |
| `North Bay Extended` | Bodega Bay, Occidental, Jenner — coastal and west county, travel fee applies | 0 |

Fields on the create screen: Territory Name, Territory Color, Territory Users (assign yourself),
**Territory Fee Amount**, and **Fee Name Override** (blank shows as "Travel Fee" on the order).

**Territory Fee Amount is additive** — the screen says it "will be added to all orders placed within
this territory." So it stacks with the metered travel fee. Keep both at **0** and let the mileage
rings do the work; otherwise far-away jobs get billed twice.

Where territories overlap, Aryeo applies only the **lowest** fee. With both at 0 that is moot, but it
means sloppy overlap is forgiving rather than punishing.

### 2. Travel Fees

The Create Fee screen offers five types: Flat, Percentage Based, Basic Metered (per mile),
Graduated Metered (tiers summed across the distance), and Volume Metered (only the tier matching the
distance applies).

**Use Volume Metered** — one predictable number per trip. Basic Metered (straight per-mile) produces
figures like $37.40 and invites argument. Graduated sums every tier, which is fairer in theory and
incomprehensible in practice.

**Metered by is set to "Minutes of travel to an appointment", Fee Structure to "Flat Fee".** Miles
are the wrong unit for west Sonoma County: Jenner is about 33 miles from Santa Rosa but close to 50
minutes on Highway 116 and the coast road, and Bodega Bay is roughly 27 miles and 45 minutes.
Mileage underprices exactly the jobs that cost the most time. Both fields stayed editable after
creation, so this did not require rebuilding the fee.

The Fee Address Override panel confirms **each team member's home base is the origin** for the
distance or time calculation. Override left off.

Rings by **travel time**, as configured:

| First unit | Last unit | Fee | Covers roughly |
| --- | --- | --- | --- |
| 0 | 30 min | $0 | Santa Rosa, Windsor, Rohnert Park, Sebastopol, Forestville, Healdsburg |
| 31 | 45 min | $50 | Occidental, inland west county |
| 46 | 70 min | $95 | Bodega Bay, Jenner, the coast road |
| 71 | ∞ | $175 | Outside the service area — priced to discourage |

Fee name: `Travel Fee`. Description: "Applied to appointments outside our core service area, based on
driving time from our base. Appointments within 30 minutes have no travel fee."

The original rings (0–25 free, then $45/$85/$160/$300 out to 150+ miles) were built for a
six-county footprint and are wrong for this one: every town we serve except Bodega Bay and Jenner
sits inside 20 miles, so the upper tiers would never fire and coastal work would be billed as if it
were a trip across town.

The final tier is open-ended, so it has to be priced to discourage rather than left at a normal rate.

**Fee Structure must be set to the flat/fixed option, not "Per Unit."** Per Unit multiplies by
mileage, so a $45 tier would bill $45 × 40 miles. The tier amounts above are per-trip totals.

Also on that screen: the fee only applies to users explicitly selected under "Select Users You Want
This Fee Applied For." Leaving it unchecked means the fee silently never fires.

Note the warning on that screen: the fee applies **per team member servicing the appointment**.
Harmless with one photographer, but it doubles the moment a second person is assigned to a shoot.

F8 sets `travel_fee_display_type: none`, which hides the fee inside the form and settles it on the
invoice. Showing it is the more honest choice and avoids a surprise on a referral-driven market;
worth deciding deliberately rather than copying them.

### 3. Stripe — done

Connected via the App Store (Stripe, not Square). Configured under **Settings → Orders & Payments**,
which the API does not expose, so none of this is auditable by script.

| Setting | Value |
| --- | --- |
| Enable Payments | on |
| Hide Pricing | off |
| Default Payment Gateway | Stripe |
| Currency | USD |
| Accept Customer Payments via Aryeo | on |
| Allow Payments Before Orders Are Fulfilled | on — required for upfront payment |
| Enable tip collection | **off** — a tip prompt on a brokerage invoice undercuts positioning |
| Allow customers to cancel orders | on |
| Cancellation period | **24 hours** — a solo calendar cannot refill a slot cancelled overnight |
| Issue automatic refund on cancellation | off — keep the decision manual |

Stripe takes 2.9% + 30¢: about $18.43 on a $625 Grand Reserve, $5.95 on a $195 Estate.

**Invoice Notes** (travels with every invoice):

> Payment is due in full at booking. Images and video are licensed to the listing agent and their
> brokerage for marketing of this property only; the license does not transfer to buyers, sellers,
> builders, or third parties. Appointments cancelled or rescheduled within 24 hours of the scheduled
> start are subject to a $75 fee. Matterport tours include one year of hosting; renewal is $25 per
> year. Wine Country Exposure retains copyright to all work produced.

The licensing sentence is the load-bearing one — reuse of listing photos by builders or buyers'
agents is the usual dispute, and putting the limit on every invoice is what makes it enforceable.

### Integrations worth evaluating before the first paid order

The App Store carries **CubiCasa** (floor plans from a phone capture), **Virtual Staging AI**, and
**AutoHDR**. These map directly onto Floor Plan ($125–225) and Virtual Staging ($50 per 5 images),
so they change the delivery cost and time per order on products already priced.

Also needed before the form can offer timeslots: **availability / booking hours**, which is its own
earlier onboarding step.

### Order form — created

Title `Book a Shoot`, type `ARYEO`, id `01a0f9c0-da29-72a0-8a32-f4e56ae747a0` (saved to
`ARYEO_ORDER_FORM_ID` in `.env.local`).

Unlike most of the dashboard, order form settings **are** readable from the API, so
`GET /order-forms` is the way to verify these rather than screenshots.

| Setting | Default on creation | Target | Why |
| --- | --- | --- | --- |
| `require_upfront_payment` | false | **true** | No chasing invoices |
| `upfront_payment_percentage` | null | **100** | Same as F8 |
| `use_territory_awareness` | false | **true** | Only offer what we can actually service |
| `availability_style` | `DATETIME_PICKER` | **`TIME_OF_DAY`** | Morning/afternoon windows leave room for drive time and overruns; exact start times do not |
| `is_public` | false | **true** when ready to launch | |
| `show_user_names` | true | **false** | Keeps the brand in front rather than advertising a one-person shop |
| `slot_interval_minutes` | 30 | 30 — leave | Finer granularity means better calendar utilisation |
| `use_automated_user_assignment` | true | true — leave | With one photographer this just auto-assigns orders to us |
| `use_instant_appointment_scheduling` | false | false — leave | Confirm each booking by hand until the calendar is trustworthy |

`max_main_product_quantity` is not returned by `GET /order-forms`, so set it in the dashboard and
verify by behaviour.

### White-label domain — already live

`media.winecountryexposure.com` is already CNAMEd to `domains.aryeo.com` →
`custom-domains.aryeo.com` → `caddy-cluster.aryeo.com` → AWS Global Accelerator, which is the exact
chain F8's `f8.f8re.com` uses. Let's Encrypt cert issued and valid. Both
`/order-forms/{id}` and `/order` return HTTP 200. No DNS work needed.

**`is_public: false` does not make the form private.** The URL serves the full address step to anyone
who has it. Public appears to control whether the form is *listed* on the `/order` landing page, not
whether it is reachable. Low risk while products are unpublished (the form has nothing to sell), but
do not treat it as a staging gate.

### Settings only visible through the rendered form

`GET /order-forms` returns a subset. The order form page's Inertia payload exposes more:

| Setting | Value | Note |
| --- | --- | --- |
| `max_main_product_quantity` | 1 | Correct by default — no action needed |
| `travel_fee_display_type` | `amount` | Shows the fee in-form, unlike F8's `none`. What we wanted |
| `custom_fields` | null | See below |
| `google_analytics_id` / `facebook_pixel_id` / `google_tag_manager_id` | empty | Settable per form — needed to track the website → order form funnel |
| `is_twilight_visible`, `use_automated_confirmation`, `require_early_login`, `always_show_contact_step`, `show_category_icons` | defaults | Worth a pass once the form is otherwise working |

### Custom fields

`custom_fields` is null. F8 collects Access Instructions (select), Combo Code, Gate Code,
"Photograph the inside of the Garage?" and Appointment Notes. Gate and combo codes matter more here
than in a city market — a locked gate at the end of a long driveway in Dry Creek or Occidental is a
wasted trip, and the whole point of upfront payment is not having to re-shoot for free.

**Voice: "we", not "I"** — additional photographers are planned, so customer-facing copy should not
have to be rewritten later.

Ours, with the three required ones first:

**1. How will I access the property?** — select, **required**

- Agent will meet me there
- Lockbox — code below
- Gate code below
- Seller or occupant will be home
- Vacant and unlocked
- Other — see notes

**2. Is the property occupied?** — select, **required**

- Vacant
- Vacant and staged
- Owner-occupied
- Tenant-occupied

Occupancy drives how much prep a shoot needs. Tenant-occupied is the one that reliably goes wrong —
the tenant was never told, and nothing is picked up.

**3. Are there pets at the property?** — select, **required**

- No pets
- Dog — will be secured or removed
- Dog — may be loose
- Indoor cat — do not let out
- Multiple or other pets — see notes

Description: "Please let us know so we can keep doors closed and pets safely inside."

Worth asking plainly rather than as a notes field. An indoor cat escaping while doors are open for
shooting is a genuinely bad afternoon, and "may be loose" is information worth having before walking
into a back yard with a tripod.

**4. Gate Code** — text, optional
**5. Lockbox / Combo Code** — text, optional
**6. Photograph the garage interior?** — select (Yes / No), optional
**7. Appointment Notes** — textarea, optional. Parking, long driveways, anything else.

The code fields stay optional because most properties have neither, and a required field that often
has no answer trains agents to type junk into it.

### Product filter — missing

`order_form_product_filter_applications` is empty and `order_form_product_filter_entries` is `[]`,
so **no square-footage filter is attached to this form.** Without it Aryeo never learns the property
size, so none of the 69 tiered variants can resolve. This is the one remaining structural blocker.

Create the `Square Footage` filter (Products Overview → Product Filters, type Number) if it does not
exist, then attach it to the order form.

Then add the four categories via **Add Categories** on the form's settings page, and capture the
form's ID into `ARYEO_ORDER_FORM_ID` in `.env.local` — `npm run aryeo:check` will print it.

Deferred: **Taxes** (California treats photography deliverables as taxable when tangible media
changes hands, generally not for digital-only delivery — worth a CPA conversation first),
**Coupons** until launch, and **Pricing Plans** until there are volume agents to price for.
