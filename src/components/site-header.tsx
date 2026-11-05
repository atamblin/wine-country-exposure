import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#service-area", label: "Service Area" },
  { href: `mailto:${site.email}`, label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="-ml-2 block shrink-0" aria-label={site.name}>
          <Image
            src="/brand/wce-horizontal-primary.svg"
            alt=""
            width={1760}
            height={555}
            preload
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-charcoal lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-slate">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:contents">
            <ButtonLink href={site.loginUrl} variant="outline">
              Sign In
            </ButtonLink>
          </span>
          <ButtonLink href={site.orderUrl}>Book a Shoot</ButtonLink>
        </div>
      </div>
    </header>
  );
}
