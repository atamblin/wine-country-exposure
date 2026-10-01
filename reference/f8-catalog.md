# F8 Real Estate Media — catalog extracted from their Aryeo order form

Source: `https://f8.f8re.com/order-forms/01995e48-8b75-70aa-a77d-4a0152fc6464`
Captured: 2026-10-01, priced against 1531 9th Ave, San Francisco CA 94122 at 2,500 sq ft.

This is competitor research for calibrating our own pricing. Prices came from the order form's
own data rather than their marketing page, so these are the live configured values. Do not copy
their product descriptions into our catalog — those are their copyrighted marketing copy. The
service lineup and price points are fair game.

## How Aryeo models this (the important part)

Aryeo's structure is: **Product** -> **Variants**. Each variant carries a `min_value`/`max_value`
square-footage range, a `price` in cents, and a `duration` in minutes that drives scheduling.

Square-footage tiering is not a product field. It comes from a separate Aryeo feature called a
**Product Filter** — F8 has one named "Square Footage" of type `number`, attached to the order
form. The filter supplies the number that selects which variant applies.

Products are typed `main` or `addon`. Their order form sets `max_main_product_quantity: 1`, so an
agent must pick exactly one main product. To let agents buy add-ons alone, F8 created a **$0 main
product called "Skip to Add-on Menu"** as an escape hatch. Worth copying.

Other settings on their form: `require_upfront_payment: true` at `upfront_payment_percentage: 100`
(they collect in full at booking), `use_territory_awareness: true`, and `travel_fee_display_type: none`.

Their custom fields on the address step: Access Instructions (select), Combo Code (text), Gate Code
(text), "Photograph the inside of the Garage?" (select), Appointment Notes (textarea).

## Main products — bundles

Durations in parentheses are the on-site appointment length.

| Bundle | Up to 3,000 sq ft | 3,001-5,000 | 5,001+ | Max sq ft |
| --- | --- | --- | --- | --- |
| Signature Bundle | $195 (60m) | $295 (90m) | $395 (120m) | 10,000 |
| Premium Bundle | $255 (60m) | $355 (90m) | $455 (120m) | 10,000 |
| Vacant Listing Bundle | $350 (90m) | $475 (120m) | $600 (150m) | 7,500 |
| Matterport Pro Bundle | $450 (120m) | $700 (180m) | $1,000 (240m) | 7,500 |
| Zillow Showcase Bundle | $450 (120m) | $700 (150m) | $1,000 (210m) | 7,500 |
| Most Popular Bundle | $625 (150m) | $875 (210m) | $1,175 (270m) | 7,500 |
| Skip to Add-on Menu | $0 | — | — | — |

What each bundle contains, per their own descriptions:

- **Signature** — Signature Photography, Scribe property description, property website. Stated saving $25.
- **Premium** — Signature plus Cinematic Virtual Video, Dot Com Address, Virtual Twilight, Scribe, property website. Stated saving $70.
- **Vacant Listing** — Premium plus Floor Plan and Virtual Staging 5 Pack. Stated saving $50.
- **Matterport Pro** — Premium plus Matterport 3D Tour, Guided Tour, dollhouse view, Matterport Floor Plan, intro video. Stated saving $125.
- **Zillow Showcase** — Premium plus Zillow 3D Home tour and Floor Plan; makes the listing Showcase-eligible. Stated saving $125.
- **Most Popular** — Premium plus Aerial Photography, Matterport 3D Tour, Floor Plan. Stated saving $125.

## Add-ons — flat price regardless of size

| Add-on | Price | Duration | Notes |
| --- | --- | --- | --- |
| Premier Video | $500 | 90m | Showcase + Flyover combined, includes 5 aerial stills |
| Showcase Video | $300 | 60m | Walkthrough with agent on camera |
| Flyover Video | $300 | 30m | Drone video, includes 5 aerial stills |
| Twilight Photography | $250 | 30m | Separate booking required, 30m before sunset |
| Aerial Photography | $175 | 30m | 15-20 photos |
| Social Vertical Video | $125 | 30m | Vertical format for Instagram/Reels |
| Cinematic Virtual Video | $50 | 0m | Generated from stills, no shoot time |
| Virtual Staging 5 Pack | $50 | 0m | Unlimited quantity, 5 images per unit |
| Dot Com Address | $30 | 0m | Custom domain for the property site |
| Virtual Tour Video | $30 | 0m | Slideshow video from photos |
| Scribe property description | $25 | 0m | AI-generated from public records |
| Virtual Twilight | $25 | 0m | Unlimited quantity, priced per image |

Only Virtual Staging and Virtual Twilight allow unlimited quantity. Everything else is capped at 1.

## Add-ons — square-footage tiered

**Floor Plan**

| Range | Price |
| --- | --- |
| Up to 3,000 | $125 |
| 3,001-5,000 | $150 |
| 5,001-7,500 | $175 |
| 7,501-12,000 | $225 |

**Matterport Pro** and **Zillow 3D Home** (identical pricing, 73 variants each)

| Range | Price |
| --- | --- |
| Up to 3,000 | $250 |
| 3,001-10,000 | $300 + $10 per 100 sq ft above 3,000 |
| 10,001-15,000 | $1,500 flat |
| 15,001-20,000 | $2,000 flat |

The middle band is built as 70 individual 100-sq-ft variants. The formula is
`price = 300 + 10 * ceil((sqft - 3000) / 100)`, which checks out at both ends: 3,001-3,100 is $310
and 9,901-10,000 is $1,000.

Note their public pricing page describes this as "$10 per additional 100 sq ft" from a $250 base,
which is wrong — crossing 3,000 sq ft jumps the base to $300 before the ramp starts, so the real
step from $250 to $310 is $60, not $10.

## Fees, from their pricing page and terms

- Travel fee: none inside their primary service areas; drive-time based outside, shown before checkout.
- Late notice fee: $75 to reschedule, hold, or cancel after 8pm Pacific the night before.
- Matterport hosting: first year included, $25/year to renew.
- Custom quotes for oversized, commercial, or non-standard properties.

## Data-entry warnings if we mirror this structure

Three real inconsistencies in their configuration, worth not replicating:

1. Floor Plan's third variant is labelled "5,001-7,500 Sq. Ft." but its `max_value` is 10,000, so
   homes from 7,501-10,000 match both it and the 7,501-12,000 variant.
2. Zillow 3D Home has a variant labelled "9,001 - 10,000 Sq. Ft." whose `min_value` is actually
   9,901, and a separate variant spanning 9,001-9,101 that overlaps its neighbour by one.
3. Most Popular and Matterport Pro bundles start at `min_value: 1` rather than 0, so a 0 entry
   matches nothing.

Their marketing page and their order form also disagree on the Vacant Listing Bundle discount: the
pricing page claims "Save $150" while the product description in the form says "$50 Savings". The
price itself ($350) is consistent across both.

Also: entering Matterport Pro and Zillow 3D Home by hand means 146 variant rows. Consider coarser
tiers for us — per-100-sq-ft granularity buys very little and is a large manual burden, since the
Aryeo API cannot create products.
