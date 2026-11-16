import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ServiceCta } from "@/components/services/service-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  getService,
  money,
  serviceAddons,
  servicePackages,
  services,
  startingPrice,
} from "@/lib/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: `${service.metaTitle} | ${site.name}`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const addonRows = serviceAddons(service);
  const packageRows = servicePackages(service);
  const related = service.related.map(getService).filter((s) => s !== undefined);
  const url = `${site.url}/services/${service.slug}`;
  const towns = [...site.coreTowns, ...site.extendedTowns];

  return (
    <>
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="contours-light absolute inset-x-0 top-0 h-[480px] opacity-[0.07]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pt-16 lg:pb-24">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-slate">
                <Link href="/services" className="hover:text-midnight">
                  Services
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span className="text-charcoal">{service.shortName}</span>
              </nav>
              <div className="mt-6">
                <Eyebrow>{service.name}</Eyebrow>
              </div>
              <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-midnight sm:text-5xl lg:text-6xl">
                {service.headline[0]} <em className="italic">{service.headline[1]}</em>
              </h1>
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)} className="mt-6 max-w-xl text-lg leading-8 text-slate">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href={site.bookUrl} newTab size="lg">
                  Book a Shoot
                </ButtonLink>
                <ButtonLink href="/quote" variant="outline" size="lg">
                  Get a Quote
                </ButtonLink>
                <span className="text-sm font-semibold text-charcoal sm:ml-2">
                  From {money(startingPrice(service))}
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-midnight">
              <Image
                src={service.hero.src}
                alt={service.hero.alt}
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What's included + pricing */}
        <section className="border-y border-hairline bg-paper">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-midnight sm:text-4xl">What you get</h2>
              <ul className="mt-8 space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-charcoal">
                    <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-midnight sm:text-4xl">Pricing</h2>
              <p className="mt-3 text-sm leading-6 text-slate">
                Prices are for homes up to 3,000 sq ft unless marked otherwise. Larger homes are priced by
                square footage in the{" "}
                <Link href="/quote" className="text-midnight underline decoration-lime decoration-2 underline-offset-4">
                  quote builder
                </Link>
                .
              </p>
              <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
                {addonRows.map((row) => (
                  <div key={row.name} className="flex items-baseline justify-between gap-6 py-4">
                    <dt>
                      <span className="font-semibold text-charcoal">{row.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate">{row.summary}</span>
                    </dt>
                    <dd className="shrink-0 text-sm font-semibold text-midnight">{row.price}</dd>
                  </div>
                ))}
              </dl>
              {packageRows.length > 0 && (
                <>
                  <h3 className="mt-10 text-sm font-semibold tracking-[0.18em] text-slate uppercase">
                    Included in these packages
                  </h3>
                  <dl className="mt-3 divide-y divide-hairline border-y border-hairline">
                    {packageRows.map((row) => (
                      <div key={row.name} className="flex items-baseline justify-between gap-6 py-4">
                        <dt>
                          <span className="font-semibold text-charcoal">{row.name}</span>
                          <span className="mt-1 block text-sm leading-6 text-slate">{row.summary}</span>
                        </dt>
                        <dd className="shrink-0 text-sm font-semibold text-midnight">{row.price}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {service.gallery.length > 0 && (
          <section aria-label="Examples" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <h2 className="font-serif text-3xl text-midnight sm:text-4xl">Recent work</h2>
            <ul className={`mt-8 grid gap-4 sm:grid-cols-2 ${service.gallery.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {service.gallery.slice(0, 3).map((p) => (
                <li key={p.alt} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-midnight">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        <section className={service.gallery.length > 0 ? "bg-[#ebe6da]" : "bg-ivory"}>
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
            <h2 className="font-serif text-3xl text-midnight sm:text-4xl">Questions agents ask</h2>
            <div className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-charcoal">
                    {faq.q}
                    <span aria-hidden="true" className="text-xl text-slate transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-7 text-slate">{faq.a}</p>
                </details>
              ))}
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-charcoal">
                  Where do you work?
                  <span aria-hidden="true" className="text-xl text-slate transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-slate">
                  Central and west Sonoma County: {site.coreTowns.join(", ")} with no travel fee, plus{" "}
                  {site.extendedTowns.join(", ")} with a small travel fee.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl text-midnight sm:text-4xl">Pairs well with</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-hairline bg-paper p-3 transition-shadow hover:shadow-[0_8px_30px_rgba(32,36,39,0.10)]"
                >
                  <span className="relative size-20 shrink-0 overflow-hidden rounded-md bg-midnight">
                    <Image src={r.hero.src} alt="" fill sizes="80px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-semibold text-charcoal">{r.name}</span>
                    <span className="mt-1 block text-sm text-slate">From {money(startingPrice(r))}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/services" className="font-semibold text-midnight underline decoration-lime decoration-2 underline-offset-4">
              See all services →
            </Link>
          </p>
        </section>
      </main>
      <ServiceCta />
      <SiteFooter />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url,
          image: `${site.url}${service.hero.src.src}`,
          provider: { "@type": "ProfessionalService", name: site.name, url: site.url, telephone: site.phoneE164 },
          areaServed: towns.map((t) => ({ "@type": "City", name: `${t}, CA` })),
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: startingPrice(service),
            url,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Services", item: `${site.url}/services` },
            { "@type": "ListItem", position: 2, name: service.shortName, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
