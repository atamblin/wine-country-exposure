import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { introPhotos } from "@/lib/photos";

export function Intro() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="contours-light absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div>
          <div data-reveal>
            <Eyebrow>Real estate media</Eyebrow>
          </div>
          <h2
            data-reveal
            className="mt-6 font-serif text-4xl leading-[1.1] text-midnight sm:text-5xl lg:text-[3.5rem]"
          >
            Every home has a story. <em className="italic">We help it sell.</em>
          </h2>
          <p data-reveal className="mt-7 max-w-lg text-lg leading-8 text-slate">
            We photograph homes across Santa Rosa, Healdsburg, Sebastopol, and the west county with
            the light, angles, and care that make buyers stop scrolling. Photos, video, drone, and
            3D tours from one team, booked in a single order.
          </p>
          <div data-reveal className="mt-10">
            <ButtonLink href="#services" variant="dark" size="lg">
              Explore services
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/35 blur-3xl"
          />
          <div
            data-speed="0.4"
            className="absolute top-[12%] left-[6%] w-[72%] overflow-hidden rounded-lg shadow-2xl shadow-midnight/20"
          >
            <Image src={introPhotos.main.src} alt={introPhotos.main.alt} sizes="(min-width: 1024px) 30vw, 72vw" placeholder="blur" />
          </div>
          <div
            data-speed="1"
            className="absolute top-0 right-0 w-[40%] overflow-hidden rounded-lg border-4 border-paper shadow-xl shadow-midnight/20"
          >
            <Image src={introPhotos.top.src} alt={introPhotos.top.alt} sizes="(min-width: 1024px) 18vw, 40vw" placeholder="blur" />
          </div>
          <div
            data-speed="-0.6"
            className="absolute right-[4%] bottom-0 w-[46%] overflow-hidden rounded-lg border-4 border-paper shadow-xl shadow-midnight/20"
          >
            <Image src={introPhotos.bottom.src} alt={introPhotos.bottom.alt} sizes="(min-width: 1024px) 20vw, 46vw" placeholder="blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
