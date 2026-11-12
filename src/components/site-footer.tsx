import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

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
        </div>
        <div>
          <h3 className="font-serif text-xl">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            <li>
              <a className="hover:text-lime" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={site.orderUrl} target="_blank" rel="noreferrer">
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
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl">Service area</h3>
          <p className="mt-4 text-sm leading-7 text-stone">{site.serviceArea}</p>
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
