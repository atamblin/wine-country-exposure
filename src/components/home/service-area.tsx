import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { serviceAreaPhoto as aerial } from "@/lib/photos";
import { site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg" data-reveal>
          <div data-speed="0.5" className="absolute -inset-y-[12%] inset-x-0">
            <Image
              src={aerial.src}
              alt={aerial.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div data-reveal>
            <Eyebrow>Service area</Eyebrow>
          </div>
          <h2 data-reveal className="mt-5 font-serif text-4xl text-midnight sm:text-5xl">
            Local to <em className="italic">central &amp; west</em> Sonoma County
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg leading-8 text-slate">
            We know the light in these valleys and the roads to the coast. Enter the property
            address when you book and the right travel fee, if any, is added automatically.
          </p>
          <div data-reveal className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.16em] text-charcoal uppercase">
                Core area
              </h3>
              <ul className="mt-4 space-y-2 text-slate">
                {site.coreTowns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.16em] text-charcoal uppercase">
                Coast &amp; west county
              </h3>
              <ul className="mt-4 space-y-2 text-slate">
                {site.extendedTowns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate/80">Travel fee applies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
