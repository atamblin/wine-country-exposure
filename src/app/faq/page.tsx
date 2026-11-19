import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ServiceCta } from "@/components/services/service-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import { faqGroups } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate Photography FAQ",
  description:
    "Answers for agents: pricing, booking, shoot prep, next-day delivery, drone rules near Sonoma County Airport, AB 723, and our service area.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="contours-light absolute inset-x-0 top-0 h-[480px] opacity-[0.07]" />
        <div className="relative mx-auto max-w-3xl px-5 pt-16 pb-20 sm:px-8 lg:pt-24">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-midnight sm:text-6xl">
            Questions agents <em className="italic">ask us</em>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate">
            Can&apos;t find your answer? Call or text{" "}
            <a href={site.phoneHref} className="text-midnight underline decoration-lime decoration-2 underline-offset-4">
              {site.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="text-midnight underline decoration-lime decoration-2 underline-offset-4">
              {site.email}
            </a>
            .
          </p>

          <nav aria-label="FAQ topics" className="mt-10 flex flex-wrap gap-2">
            {faqGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-hairline bg-paper px-4 py-2 text-sm font-semibold text-charcoal hover:border-midnight"
              >
                {g.title}
              </a>
            ))}
          </nav>

          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} className="mt-16 scroll-mt-24">
              <h2 className="font-serif text-3xl text-midnight">{g.title}</h2>
              <div className="mt-6 divide-y divide-charcoal/15 border-y border-charcoal/15">
                {g.faqs.map((faq) => (
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
            </section>
          ))}

          <p className="mt-16">
            <Link href="/quote" className="font-semibold text-midnight underline decoration-lime decoration-2 underline-offset-4">
              Price your listing in the quote builder →
            </Link>
          </p>
        </div>
      </main>
      <ServiceCta />
      <SiteFooter />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups
            .flatMap((g) => g.faqs)
            .map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        }}
      />
    </>
  );
}
