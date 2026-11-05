import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { servicePhotos, type Photo } from "@/lib/photos";
import { site } from "@/lib/site";

type Service = { name: string; price: string; photo?: Photo };

const services: Service[] = [
  { name: "Listing Photography", price: "From $195", photo: servicePhotos.photography },
  { name: "Photo + Video Package", price: "From $255", photo: servicePhotos.photoVideo },
  { name: "Aerial Photo & Video", price: "From $175", photo: servicePhotos.aerial },
  { name: "Twilight Photography", price: "From $250", photo: servicePhotos.twilight },
  { name: "Matterport 3D Tour", price: "From $250", photo: servicePhotos.matterport },
  { name: "Zillow 3D Home Tour", price: "From $250", photo: servicePhotos.zillow },
  { name: "Floor Plans", price: "From $125" },
  { name: "Virtual Staging", price: "$50 for 5 images", photo: servicePhotos.staging },
];

function FloorPlanArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 320"
      className="absolute inset-0 size-full bg-midnight p-8 text-ivory/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M40 40h320v240H40z" />
      <path d="M40 150h130M210 150h150M170 40v70M170 190v90M260 150v130M260 210h100" />
      <path d="M95 150a30 30 0 0 1 30-30M300 150a24 24 0 0 0-24 24" strokeWidth="2" className="text-lime" stroke="currentColor" />
      <rect x="62" y="62" width="70" height="44" rx="4" strokeWidth="2" />
      <rect x="292" y="232" width="48" height="30" rx="4" strokeWidth="2" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div data-reveal>
              <Eyebrow>Our services</Eyebrow>
            </div>
            <h2 data-reveal className="mt-5 font-serif text-4xl text-midnight sm:text-5xl">
              Everything your listing needs
            </h2>
          </div>
          <div data-reveal>
            <ButtonLink href={site.orderUrl} variant="outline">
              View all &amp; book
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.name}
              data-reveal
              href={site.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[5/4] overflow-hidden rounded-lg bg-midnight"
            >
              {service.photo ? (
                <Image
                  src={service.photo.src}
                  alt={service.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <FloorPlanArt />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl leading-tight font-semibold text-white">{service.name}</h3>
                <p className="mt-1.5 text-xs font-semibold tracking-[0.18em] text-lime uppercase">
                  {service.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
