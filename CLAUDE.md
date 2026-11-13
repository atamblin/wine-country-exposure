@AGENTS.md

# Wine Country Exposure

Real estate media company (photography, video, aerials, Matterport, Zillow 3D, twilights, virtual
staging) for agents in central and west Sonoma County. Production site:
https://www.winecountryexposure.com. The owner is Adrian; he is not a developer, so explain steps in
plain language and give exact click paths for dashboards (Aryeo, Vercel, GoDaddy, Google Workspace).

## Stack

- Next.js 16.3 App Router, React 19, TypeScript, Tailwind CSS v4, GSAP (`@gsap/react`) for scroll motion.
- Hosted on Vercel, auto-deployed from GitHub `atamblin/wine-country-exposure` (`main` is production;
  every branch/PR gets a preview URL).
- Aryeo Pro handles scheduling, payment (Stripe via Stripe Connect), and media delivery. Aryeo is
  white-labeled at `media.winecountryexposure.com` (CNAME in GoDaddy).
- DNS: GoDaddy is the registrar; apex redirects to `www` in Vercel.

## Commands

- `npm run dev` (http://localhost:3000), `npm run build`, `npm run lint`
- `npm run aryeo:check` / `npm run aryeo:audit` hit the Aryeo API with keys from `.env.local`.

## Dropbox rules (important)

The repo lives in Dropbox's File Provider folder. `node_modules` and `.next` carry the
`com.apple.fileprovider.ignore#P` xattr so Dropbox doesn't sync them and evict files to online-only
(which makes `next dev` hang silently). Always use `npm install`, never `npm ci`, because `npm ci`
deletes `node_modules` and drops the flag. To rebuild from scratch, follow the steps in `README.md`.

## Secrets

`.env.local` holds real keys (Aryeo, later Resend/Google) and is gitignored. Never read, print, or
commit it; use `.env.example` to see which variables exist. Production values live in Vercel
project environment variables.

## Where things are

- `src/lib/site.ts`: business name, contact info, service area towns, Aryeo order/login URLs.
- `src/lib/brokerages.ts` and `src/assets/brokerages/`: logos in the homepage "Trusted by agents at" strip
  (full-color masters and SVGs are in `Brokerage Logos/` in Dropbox).
- `src/lib/pricing.ts`: quote-builder estimator. Aryeo is the source of truth for prices; this module
  must stay in sync with the live Aryeo products (`npm run aryeo:audit`).
- `src/lib/photos.ts` and `src/assets/photos/`: optimized photos the site uses. `Photos - Homes/` and
  `Logo/` are Adrian's source files in Dropbox, not part of git.
- `src/components/home/*`: homepage sections; `src/components/quote/quote-builder.tsx`: `/quote`.
- `reference/design-brief.md`: visual direction (modeled on open-homes.com).
- `reference/our-catalog.md`: our product names, packages, and prices as entered in Aryeo.
- `reference/f8-catalog.md`: the F8 Media catalog our pricing was matched to.
- `reference/project-plan.md`: original build plan and phases (some items are already done).

## Working preferences

- Show changes on localhost and wait for Adrian's OK before committing or pushing.
- Copy uses "we", not "I" (more photographers will join).
- Public contact email is `info@winecountryexposure.com`. Never show Adrian's personal Gmail.
- Use our own product names, not F8's or Open Homes' (generic terms like Twilight or Aerial are fine).
  Don't copy Open Homes' copy or images.

## Decisions so far

- Pricing matches F8 Media's; square-footage tiers are up to 3,000, 3,001 to 5,000, and 5,001 up to a
  cap (10,000 for Estate and Reserve, 7,500 otherwise), with "contact us for a custom quote" above it.
- Service area: Healdsburg, Windsor, Santa Rosa, Rohnert Park, Sebastopol, Forestville at no travel
  fee; Occidental, Bodega Bay, Jenner with a travel fee. No Napa, Marin, or Petaluma jobs.
- Aryeo order form has custom fields, including a pets question. Agents don't need to log in to order.
- Headline serif is Newsreader. Brand logo is in `public/brand/`.
- Live today: GSAP homepage with photo wall and full-screen lightbox, brokerage list, AB 723 note,
  and the `/quote` estimator that hands off to the Aryeo order form.
- Email (`adrian@` and `info@winecountryexposure.com`) is set up on Google Workspace.

## Open items

- Brokerage logos and any photo swaps (Adrian is supplying).
- Upgrade Vercel from Hobby to Pro before promoting the site (Hobby is non-commercial only).
- Vercel only has `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ARYEO_ORDER_URL`. Add `ARYEO_API_KEY` and
  `ARYEO_ORDER_FORM_ID` (Production and Preview) before shipping any server route that calls Aryeo.
- Optional: Resend so the quote emails itself (today "Email us this quote" opens the agent's mail app).
- Not built yet: services/pricing/portfolio/about/contact pages, MDX blog, `/areas/[city]` SEO pages,
  analytics (GA4 + Vercel Analytics), Google Business Profile.
