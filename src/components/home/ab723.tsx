import Image from "next/image";
import { servicePhotos } from "@/lib/photos";

export function Ab723() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
      <div data-reveal className="grid overflow-hidden rounded-lg bg-[#ebe6da] md:grid-cols-[1.1fr_1fr]">
        <div className="p-8 sm:p-12">
          <p className="text-[13px] font-semibold tracking-[0.22em] text-slate uppercase">
            Digitally altered images
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-charcoal sm:text-3xl">
            Virtual staging, done by the book
          </h2>
          <p className="mt-5 leading-7 text-slate">
            California&apos;s AB 723 requires agents to disclose digitally altered listing photos and
            give buyers a way to see the original. Every virtually staged or virtual twilight image
            we deliver is labeled, with the unedited original included alongside it.
          </p>
        </div>
        <div className="relative min-h-64">
          <Image
            src={servicePhotos.staging.src}
            alt={servicePhotos.staging.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
