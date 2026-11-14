import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { heroPhotos } from "@/lib/photos";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      data-hero
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-midnight text-white"
    >
      <div data-hero-media className="absolute -inset-y-[10%] inset-x-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo.alt}
            data-hero-slide
            className={`absolute inset-0 ${index === 0 ? "" : "opacity-0"}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              preload={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,43,59,0.55)_0%,rgba(20,43,59,0.3)_70%),linear-gradient(180deg,rgba(20,43,59,0.45)_0%,rgba(20,43,59,0.2)_45%,rgba(20,43,59,0.7)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <p
          data-reveal
          data-hero-fade
          className="text-[13px] font-semibold tracking-[0.28em] text-lime uppercase"
        >
          Central &amp; west Sonoma County
        </p>
        <h1
          data-reveal
          data-hero-heading
          className="mt-6 font-serif text-5xl leading-[1.05] font-light tracking-tight sm:text-7xl lg:text-[5.5rem]"
        >
          Wine country listings, <em className="font-light italic">shot to sell.</em>
        </h1>
        <p
          data-reveal
          data-hero-fade
          className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg"
        >
          Photography, video, aerials, twilight, and 3D tours for real estate agents. Book
          online in minutes.
        </p>
        <div
          data-reveal
          data-hero-fade
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink href={site.bookUrl} newTab size="lg">
            Book a Shoot
          </ButtonLink>
          <ButtonLink href="#work" variant="outline-light" size="lg">
            See our work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
