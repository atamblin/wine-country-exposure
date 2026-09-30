# Wine Country Exposure

Real estate media company serving agents in the North Bay — Sonoma, Napa, and Marin counties.

Production site: [winecountryexposure.com](https://winecountryexposure.com)

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4**
- **Vercel** for hosting, previews, and serverless route handlers
- **Aryeo Pro** for scheduling, invoicing, payment, and media delivery
- **Stripe** connected to Aryeo via Stripe Connect
- MDX blog with posts in `content/blog/`

## How ordering works

Agents build an order on this site through a three-step quote builder (property details, services,
totals). The builder is only an estimator — Aryeo is the source of truth for pricing and is the
system of record for the order itself.

On submit, a server route creates an Aryeo order form session via `POST /order-form-sessions`,
pre-filling the address and customer so the agent does not retype anything, then redirects to the
returned URL where Aryeo handles scheduling and payment.

Service pricing is synced from Aryeo's `GET /products` rather than hardcoded, so the on-site
estimate cannot drift from what the agent is actually charged.

## Local development

```bash
nvm use
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Notes for contributors

This project lives inside a Dropbox folder. `node_modules` is marked with the
`com.dropbox.ignored` extended attribute so Dropbox does not sync dependencies. If you delete and
recreate the directory, reapply it:

```bash
xattr -w com.dropbox.ignored 1 node_modules
```

Next 16 changed several App Router conventions. Consult `node_modules/next/dist/docs/` before
relying on older patterns.
