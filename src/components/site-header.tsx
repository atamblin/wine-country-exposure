"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#work", label: "Our Work" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/quote", label: "Get a Quote" },
];

/** How far (px) the page scrolls before a see-through header turns solid. */
const SOLID_AFTER = 40;

type SiteHeaderProps = {
  /**
   * Sit on top of a full-bleed photo (home page hero): see-through with white logo and
   * links at the top of the page, then solid white once the visitor scrolls.
   */
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const update = () => setScrolled(window.scrollY > SOLID_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [overlay]);

  const clear = overlay && !scrolled;

  return (
    <header
      className={`top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        overlay ? "fixed inset-x-0" : "sticky"
      } ${
        clear
          ? "border-transparent bg-transparent"
          : "border-hairline bg-paper/95 shadow-[0_1px_12px_rgba(32,36,39,0.06)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="relative -ml-2 block shrink-0" aria-label={site.name}>
          <Image
            src="/brand/wce-horizontal-primary.svg"
            alt=""
            width={1760}
            height={555}
            preload
            className={`h-10 w-auto transition-opacity duration-300 sm:h-12 ${clear ? "opacity-0" : "opacity-100"}`}
          />
          {overlay && (
            <Image
              src="/brand/wce-horizontal-reverse.svg"
              alt=""
              width={1760}
              height={555}
              preload
              className={`absolute inset-0 h-10 w-auto transition-opacity duration-300 sm:h-12 ${clear ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </Link>
        <nav
          className={`hidden items-center gap-6 text-sm font-medium whitespace-nowrap transition-colors duration-300 lg:flex xl:gap-8 ${
            clear ? "text-white" : "text-charcoal"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors ${clear ? "hover:text-white/70" : "hover:text-slate"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:contents">
            <ButtonLink href={site.loginUrl} variant={clear ? "outline-light" : "outline"}>
              Sign In
            </ButtonLink>
          </span>
          <ButtonLink href={site.bookUrl} newTab>Book a Shoot</ButtonLink>
        </div>
      </div>
    </header>
  );
}
