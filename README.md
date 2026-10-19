# Wine Country Exposure

Real estate media company serving agents in central and west Sonoma County.

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

## Before launch

- [ ] Create the `adrian@winecountryexposure.com` mailbox. The site's "Email us" links already point
      to it, and mail sent there bounces until it exists.

## Local development

```bash
nvm use
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Notes for contributors

This project lives inside a Dropbox folder under `~/Library/CloudStorage`, which is Dropbox's macOS
File Provider integration. It honours `com.apple.fileprovider.ignore#P`, not the older
`com.dropbox.ignored`. Without it Dropbox syncs `node_modules`, later evicts the files to
online-only, and `next dev` hangs silently while it waits on thousands of on-demand downloads.

Both `node_modules` and `.next` carry the flag. Set it on an empty directory before installing:

```bash
rm -rf node_modules .next
mkdir node_modules .next
xattr -w 'com.apple.fileprovider.ignore#P' 1 node_modules .next
npm install
```

Use `npm install` rather than `npm ci` here — `npm ci` deletes and recreates `node_modules`, which
drops the flag.

Next 16 changed several App Router conventions. Consult `node_modules/next/dist/docs/` before
relying on older patterns.
