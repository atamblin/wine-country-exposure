import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// Footer tags, in the spirit of a blog tag cloud. We don't have a blog or per-town pages yet, so
// each tag points at the matching homepage section. Point them at real pages once those exist.
const tags: { label: string; href: string }[] = [
  { label: "Listing Photography", href: "/#services" },
  { label: "Video", href: "/#services" },
  { label: "Aerial", href: "/#services" },
  { label: "Twilight", href: "/#services" },
  { label: "Matterport", href: "/#services" },
  { label: "Zillow 3D", href: "/#services" },
  { label: "Floor Plans", href: "/#services" },
  { label: "Virtual Staging", href: "/#services" },
  { label: "AB 723", href: "/#ab-723" },
  { label: "Sonoma County", href: "/#service-area" },
  ...[...site.coreTowns, ...site.extendedTowns].map((town) => ({ label: town, href: "/#service-area" })),
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socials = [
  { name: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-ivory">
      <div aria-hidden="true" className="contours-dark absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/wce-horizontal-reverse.svg"
            alt={site.name}
            width={1760}
            height={555}
            className="-ml-3 h-16 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone">
            Listing photography, video, aerials, and 3D tours for agents in central and west
            Sonoma County.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${site.name} on ${name}`}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 text-ivory transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            <li>
              <a className="hover:text-lime" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={site.bookUrl} target="_blank" rel="noreferrer">
                Book a shoot
              </a>
            </li>
            <li>
              <Link className="hover:text-lime" href="/quote">
                Get a quote
              </Link>
            </li>
            <li>
              <a className="hover:text-lime" href={site.loginUrl} target="_blank" rel="noreferrer">
                Client sign in
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={site.googleReviewUrl} target="_blank" rel="noreferrer">
                Leave us a review
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl">Service area</h3>
          <p className="mt-4 text-sm leading-7 text-stone">{site.serviceArea}</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="font-serif text-xl">Tags</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="inline-flex h-8 items-center rounded-full border border-white/20 px-3.5 text-[11px] font-semibold tracking-[0.12em] text-stone uppercase transition-colors hover:border-lime hover:text-lime"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-6 text-xs text-stone sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link className="hover:text-lime" href="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
