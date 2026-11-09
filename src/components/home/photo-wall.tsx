import Image from "next/image";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { wallColumns } from "@/lib/photos";

const offsets = ["lg:mt-16", "lg:mt-0", "lg:mt-24", "lg:mt-8", "lg:mt-20"];
const speeds = ["0.8", "-0.6", "1.2", "-0.9", "0.6"];
const wallPhotos = wallColumns.flat();

export function PhotoWall() {
  return (
    <section id="work" aria-label="Recent work" className="scroll-mt-16 overflow-hidden bg-[#ebe6da] py-20 lg:py-28">
      <PhotoLightbox photos={wallPhotos}>
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-4 md:grid-cols-3 lg:grid-cols-5">
          {wallColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`${offsets[columnIndex]} ${columnIndex >= 3 ? "hidden lg:block" : ""} ${columnIndex === 2 ? "hidden md:block" : ""}`}
            >
              <div data-speed={speeds[columnIndex]} className="flex flex-col gap-3 sm:gap-4">
                {column.map((photo) => (
                  <button
                    key={photo.alt}
                    type="button"
                    data-lightbox-index={wallPhotos.indexOf(photo)}
                    aria-label={`View larger: ${photo.alt}`}
                    className="block cursor-zoom-in overflow-hidden rounded-lg"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                      placeholder="blur"
                      className="aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PhotoLightbox>
    </section>
  );
}
