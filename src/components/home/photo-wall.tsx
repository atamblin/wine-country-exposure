import Image from "next/image";
import { wallColumns } from "@/lib/photos";

const offsets = ["lg:mt-16", "lg:mt-0", "lg:mt-24", "lg:mt-8", "lg:mt-20"];
const speeds = ["0.8", "-0.6", "1.2", "-0.9", "0.6"];

export function PhotoWall() {
  return (
    <section id="work" aria-label="Recent work" className="scroll-mt-16 overflow-hidden bg-[#ebe6da] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-4 md:grid-cols-3 lg:grid-cols-5">
        {wallColumns.map((column, index) => (
          <div
            key={index}
            className={`${offsets[index]} ${index >= 3 ? "hidden lg:block" : ""} ${index === 2 ? "hidden md:block" : ""}`}
          >
            <div data-speed={speeds[index]} className="flex flex-col gap-3 sm:gap-4">
              {column.map((photo) => (
                <div key={photo.alt} className="overflow-hidden rounded-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    placeholder="blur"
                    className="aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
