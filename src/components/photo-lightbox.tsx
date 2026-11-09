"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import type { Photo } from "@/lib/photos";

const SWIPE_PX = 50;

/**
 * Opens any descendant `[data-lightbox-index]` button full screen.
 * The index points into `photos`.
 */
export function PhotoLightbox({ photos, children }: { photos: Photo[]; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  const step = (delta: number) => setIndex((i) => (i + delta + photos.length) % photos.length);

  const onTriggerClick = (event: MouseEvent<HTMLDivElement>) => {
    const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-lightbox-index]");
    if (!trigger) return;
    setIndex(Number(trigger.dataset.lightboxIndex));
    dialog.current?.showModal();
  };

  return (
    <div onClick={onTriggerClick}>
      {children}
      <dialog
        ref={dialog}
        aria-label="Photo viewer"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-midnight/95 open:flex"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(event) => {
          touchX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const dx = event.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > SWIPE_PX) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <figure
          className="pointer-events-none relative m-auto flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-16 sm:px-20"
        >
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            sizes="100vw"
            placeholder="blur"
            className="pointer-events-auto max-h-[calc(100%-2.5rem)] w-auto rounded-md object-contain"
          />
          <figcaption className="text-center text-sm text-ivory/70">
            {photo.alt}{" "}
            <span className="whitespace-nowrap text-ivory/40">
              · {index + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>

        <button
          type="button"
          autoFocus
          aria-label="Close"
          onClick={() => dialog.current?.close()}
          className="absolute top-4 right-4 grid size-11 place-items-center rounded-full text-ivory/80 hover:bg-ivory/10 hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {photos.length > 1 && (
          <>
            <NavButton label="Previous photo" side="left" onClick={() => step(-1)} />
            <NavButton label="Next photo" side="right" onClick={() => step(1)} />
          </>
        )}
      </dialog>
    </div>
  );
}

function NavButton({ label, side, onClick }: { label: string; side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 ${side === "left" ? "left-2 sm:left-5" : "right-2 sm:right-5"} hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:grid`}
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d={side === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
