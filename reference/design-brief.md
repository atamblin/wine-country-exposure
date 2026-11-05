# Design brief

The site follows the structure and feel of [open-homes.com](https://www.open-homes.com/) (reviewed
Nov 5, 2026) in Wine Country Exposure's own palette, copy, and photography. Borrow layout patterns
only. Never reuse their text, images, or their licensed IvyPresto typeface.

## Palette

From the designer's brand package (`Logo/wine-country-exposure/READ-ME.txt`).

| Token | Hex | Use |
|---|---|---|
| Ivory | `#F5F2EA` | Page background (light sections) |
| Paper | `#FFFFFF` | Cards, header bar, form fields |
| Charcoal | `#202427` | Body text, dark buttons on ivory |
| Midnight | `#142B3B` | Dark sections: closing CTA, footer, quote banner, headings on ivory |
| Stone | `#A6AAA5` | Muted text on dark, hairlines, chips |
| Lime | `#C8FF3D` | Primary buttons (charcoal text), italic accent words on Midnight only |

Lime rule: never lime text on ivory or white. On light sections lime appears only as a filled button
with charcoal text, or as a small graphic mark.

Logo: `primary` variant on ivory/white, `reverse` variant on Midnight.

## Typography

- **Headlines:** Newsreader (Google Fonts), standing in for IvyPresto. Chosen over Fraunces, whose italic & and l are too decorative. Regular weight for section
  headings; light weight with one italic phrase for the hero and the closing CTA.
- **Everything else:** Plus Jakarta Sans. Body 16–18px. Eyebrow labels 13–14px, uppercase, wide
  tracking. Buttons 14–16px, semibold.
- Buttons have softly rounded corners (about 6px); photo cards about 8px.

## Homepage, top to bottom

1. **Header.** White, sticky. Logo left. Links: Services (menu), Pricing, Our Work, About, Blog,
   Contact. Right: "Sign In" (Aryeo customer portal) and a lime "Book a Shoot" button.
2. **Hero.** Full-screen muted, looping listing reel (still-photo fallback until a reel exists), dark
   overlay, thin serif headline with one italic phrase, single "Get a quote" button.
3. **Intro.** Headline and short paragraph (who we serve, delivery time) left; overlapping photo
   collage right. Faint contour-line texture on ivory, which echoes Sonoma's hills.
4. **Photo wall.** Staggered 5-column grid of our best shots, no copy.
5. **Services.** Photo cards: service name in white, "From $X" underneath. Prices come from Aryeo.
6. **How it works.** Three steps: book online, we shoot, delivered next day.
7. **Service area.** Map or list of central and west Sonoma County towns.
8. **Reviews.** Added once Google Business Profile reviews exist.
9. **AB 723 note.** California disclosure rules for digitally altered images, relevant to our virtual
   staging and virtual twilight.
10. **Blog.** Added once posts exist.
11. **Closing CTA.** Midnight section, serif headline with a lime italic phrase, quote form (name,
    email, address, property type, square footage) that hands off to the Aryeo order form.
12. **Footer.** Midnight with contour lines: reverse logo, contact, links, service area.

## Pricing page

Intro with photo, a Midnight "Get a quote in minutes" banner, package cards (most popular outlined),
then individual services with "Get quote" buttons. Data sourced from Aryeo, matching
`reference/our-catalog.md`.

## Motion

GSAP with ScrollTrigger and SplitText, all in `src/components/home/home-motion.tsx`. Hero photos
crossfade with a slow zoom and drift on scroll; the hero headline rises line by line; sections
marked `data-reveal` fade up on entry; elements marked `data-speed` drift for parallax. Everything
is disabled under `prefers-reduced-motion`.

## Brokerages

Brokerages Adrian has worked with are listed as text in the serif, not logos: Compass, Coldwell
Banker, Poppy Real Estate, Sotheby's International Realty, Keller Williams. Swap in official logo files only
with permission.

## Not yet

Stats map (needs our own sales data), Industries menu, founder video, reviews, blog, quote form.

## Assets needed from Adrian

- 3–5 hero photos (exterior, interior, drone, twilight) and 10–15 for the photo wall
- Optional 20–40 second silent listing reel for the hero
- One photo per service card
- A few sentences for About
