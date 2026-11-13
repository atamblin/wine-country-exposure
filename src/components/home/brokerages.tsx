import Image from "next/image";
import { brokerages } from "@/lib/brokerages";

// Logos range from long wordmarks (Engel & Völkers, ~9:1) to stacked marks (W Real Estate, ~1.4:1).
// Sizing each one to the same visual area keeps them looking balanced instead of letting the
// wide ones shrink to slivers or the tall ones dominate.
const LOGO_AREA = 3400; // px²

function logoSize(width: number, height: number) {
  const ratio = width / height;
  const h = Math.sqrt(LOGO_AREA / ratio);
  return { width: Math.round(h * ratio), height: Math.round(h) };
}

export function Brokerages() {
  return (
    <section aria-label="Brokerages we work with" className="border-y border-hairline bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.22em] text-slate uppercase">
          Trusted by agents at
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-10 lg:grid-cols-6">
          {brokerages.map(({ name, logo }) => {
            const size = logoSize(logo.width, logo.height);
            return (
              <li key={name} data-reveal className="flex h-14 items-center justify-center">
                <Image
                  src={logo}
                  alt={name}
                  title={name}
                  sizes="160px"
                  style={{ width: size.width, maxWidth: "100%", height: "auto" }}
                  className="transition duration-300 hover:scale-105"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
