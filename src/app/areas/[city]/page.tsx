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
import { areas, getArea } from "@/lib/areas";
import { getService, money, startingPrice } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/areas/[city]">): Promise<Metadata> {
  const { city } = await params;
  const area = getArea(city);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: `${area.metaTitle} | ${site.name}`,
      description: area.metaDescription,
    },
  };
}

const trustPoints = [
  "Photos delivered within 24 hours",
  "FAA Part 107 certified and fully insured",
  "Book and pay online, no account needed",
];

export default async function AreaPage({ params }: PageProps<"/areas/[city]">) {
  const { city } = await params;
  const area = getArea(city);
  if (!area) notFound();

  const featured = area.featuredServices.map(getService).filter((s) => s !== undefined);
  const url = `${site.url}/areas/${area.slug}`;
  const travelFree = (site.coreTowns as readonly string[]).includes(area.town);

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
                <Link href="/#service-area" className="hover:text-midnight">
                  Service area
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span className="text-charcoal">{area.town}</span>
              </nav>
              <div className="mt-6">
                <Eyebrow>{area.eyebrow}</Eyebrow>
              </div>
              <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-midnight sm:text-5xl lg:text-6xl">
                {area.headline[0]} <em className="italic">{area.headline[1]}</em>
              </h1>
              {area.intro.map((p) => (
                <p key={p.slice(0, 24)} className="mt-6 max-w-xl text-lg leading-8 text-slate">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href={site.bookUrl} newTab size="lg">
                  Book in {area.town}
                </ButtonLink>
                <ButtonLink href="/quote" variant="outline" size="lg">
                  Get a Quote
                </ButtonLink>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-charcoal">
                {[travelFree ? `No travel fee in ${area.town}` : null, ...trustPoints]
                  .filter((t) => t !== null)
                  .map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-lime" />
                      {t}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-midnight">
              <Image
                src={area.hero.src}
                alt={area.hero.alt}
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="border-y border-hairline bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <Eyebrow>Neighborhoods</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl text-midnight sm:text-4xl">
              Every corner of {area.town}
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.neighborhoods.map((n) => (
                <li key={n.name} className="border-t border-hairline pt-4">
                  <h3 className="font-semibold text-charcoal">{n.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate">{n.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl text-midnight sm:text-4xl">How we shoot {area.town} listings</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {area.approach.map((a) => (
              <div key={a.title}>
                <h3 className="text-lg font-semibold text-charcoal">{a.title}</h3>
                <p className="mt-3 leading-7 text-slate">{a.body}</p>
              </div>
            ))}
          </div>
          {area.gallery.length > 0 && (
            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {area.gallery.slice(0, 3).map((p) => (
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
          )}
        </section>

        {/* Services */}
        <section className="border-y border-hairline bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <h2 className="font-serif text-3xl text-midnight sm:text-4xl">Services in {area.town}</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-ivory transition-shadow hover:shadow-[0_8px_30px_rgba(32,36,39,0.10)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-midnight">
                      <Image
                        src={s.hero.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-semibold text-charcoal">{s.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-slate">{s.tagline}</p>
                      <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-midnight uppercase">
                        From {money(startingPrice(s))}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link
                href="/services"
                className="font-semibold text-midnight underline decoration-lime decoration-2 underline-offset-4"
              >
                See all services →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-ivory">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
            <h2 className="font-serif text-3xl text-midnight sm:text-4xl">{area.town} questions</h2>
            <div className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
              {area.faqs.map((faq) => (
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
            </div>
            <p className="mt-8">
              <Link href="/faq" className="font-semibold text-midnight underline decoration-lime decoration-2 underline-offset-4">
                More questions and answers →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <ServiceCta heading={`Listing in ${area.town}?`} />
      <SiteFooter />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Real estate photography in ${area.town}, CA`,
          serviceType: "Real estate photography",
          description: area.metaDescription,
          url,
          image: `${site.url}${area.hero.src.src}`,
          provider: { "@type": "ProfessionalService", name: site.name, url: site.url, telephone: site.phoneE164 },
          areaServed: { "@type": "City", name: `${area.town}, CA` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Service area", item: `${site.url}/#service-area` },
            { "@type": "ListItem", position: 2, name: area.town, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
