import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ServiceCta } from "@/components/services/service-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import { money, packageStartingPrices, services, startingPrice } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate Photography, Video & 3D Services",
  description:
    "Listing photography, video, drone, twilight, Matterport and Zillow 3D tours, floor plans, and virtual staging for agents in central and west Sonoma County.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const pkgs = packageStartingPrices();

  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="contours-light absolute inset-x-0 top-0 h-[480px] opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 lg:pt-24">
          <Eyebrow>Our services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] text-midnight sm:text-6xl">
            Everything your listing needs, <em className="italic">in one visit</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
            Photography, video, aerials, 3D tours, floor plans, and virtual staging for agents in central and
            west Sonoma County. Book online, pay upfront by square footage, and get your media on a branded
            property page, typically by the next business day.
          </p>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-paper transition-shadow hover:shadow-[0_8px_30px_rgba(32,36,39,0.10)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-midnight">
                    <Image
                      src={service.hero.src}
                      alt={service.hero.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg leading-snug font-semibold text-charcoal">{service.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate">{service.tagline}</p>
                    <p className="mt-4 flex items-center justify-between text-xs font-semibold tracking-[0.16em] text-midnight uppercase">
                      <span>From {money(startingPrice(service))}</span>
                      <span aria-hidden="true" className="text-lime transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <section className="border-t border-hairline bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <Eyebrow>Packages</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-midnight sm:text-4xl">Bundle and save</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate">
              Packages combine our most-ordered services at a lower price than booking each one. Prices below
              are for homes up to 3,000 square feet.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pkgs.map((pkg) => (
                <li
                  key={pkg.id}
                  className={`relative rounded-lg border p-6 ${pkg.popular ? "border-lime bg-[#f7faea]" : "border-hairline bg-ivory"}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-lime px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-charcoal uppercase">
                      Most booked
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-midnight">{pkg.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-charcoal">From {money(pkg.from)}</p>
                  <p className="mt-3 text-sm leading-6 text-slate">{pkg.summary}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link
                href="/quote"
                className="font-semibold text-midnight underline decoration-lime decoration-2 underline-offset-4"
              >
                Price your listing by square footage →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <ServiceCta />
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} services`,
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `${site.url}/services/${s.slug}`,
          })),
        }}
      />
    </>
  );
}
