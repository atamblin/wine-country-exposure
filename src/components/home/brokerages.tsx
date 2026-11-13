import type { CSSProperties } from "react";
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

// One full set of logos. The strip renders it twice in a row and slides left by exactly one set,
// so the loop never shows a gap. The second copy is hidden from screen readers.
function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-16 pr-16">
      {brokerages.map(({ name, logo }) => {
        const size = logoSize(logo.width, logo.height);
        return (
          <li key={name} className="flex h-16 shrink-0 items-center">
            <Image src={logo} alt={hidden ? "" : name} sizes="200px" style={{ width: size.width, height: "auto" }} />
          </li>
        );
      })}
    </ul>
  );
}

export function Brokerages() {
  return (
    <section aria-label="Brokerages we work with" className="border-y border-hairline bg-paper py-12">
      <p data-reveal className="text-center text-xs font-semibold tracking-[0.22em] text-slate uppercase">
        Trusted by agents at
      </p>
      <div
        data-reveal
        className="group mt-8 overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div
          className="marquee-track flex w-max group-hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": "80s" } as CSSProperties}
        >
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
