import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

/** Closing call to action shared by the services pages. */
export function ServiceCta({ heading = "Ready to book your next listing?" }: { heading?: string }) {
  return (
    <section className="relative overflow-hidden bg-midnight text-ivory">
      <div aria-hidden="true" className="contours-dark absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:py-20">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-xl leading-7 text-stone">
            Pick your services, choose a time, and pay online. No travel fee in {site.coreTowns.slice(0, -1).join(", ")},
            or {site.coreTowns.at(-1)}.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={site.bookUrl} newTab size="lg">
            Book a Shoot
          </ButtonLink>
          <ButtonLink href="/quote" variant="outline-light" size="lg">
            Get a Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
