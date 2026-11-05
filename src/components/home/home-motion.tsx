"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const SLIDE_SECONDS = 6;

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal]", { autoAlpha: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const slides = gsap.utils.toArray<HTMLElement>("[data-hero-slide]");
        gsap.set(slides, { autoAlpha: 0, scale: 1.12 });
        let current = 0;
        let timer: gsap.core.Tween | undefined;

        const show = (index: number) => {
          const previous = slides[current];
          const next = slides[index];
          gsap.set(next, { zIndex: 2 });
          if (previous !== next) gsap.set(previous, { zIndex: 1 });
          gsap.fromTo(next, { scale: 1.12 }, { scale: 1, duration: SLIDE_SECONDS + 2, ease: "none" });
          gsap.to(next, {
            autoAlpha: 1,
            duration: 1.6,
            ease: "power2.out",
            onComplete: () => {
              if (previous !== next) gsap.set(previous, { autoAlpha: 0 });
            },
          });
          current = index;
          if (slides.length > 1) {
            timer = gsap.delayedCall(SLIDE_SECONDS, () => show((index + 1) % slides.length));
          }
        };
        if (slides.length) show(0);

        gsap.to("[data-hero-media]", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
        });

        const heading = document.querySelector<HTMLElement>("[data-hero-heading]");
        if (heading) {
          gsap.set(heading, { autoAlpha: 1 });
          SplitText.create(heading, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                stagger: 0.12,
                ease: "power4.out",
                delay: 0.2,
              }),
          });
        }

        gsap.fromTo(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.6, ease: "power3.out" },
        );

        ScrollTrigger.batch("[data-reveal]:not([data-hero-heading]):not([data-hero-fade])", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { autoAlpha: 0, y: 48 },
              { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
            ),
        });

        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = Number(el.dataset.speed);
          gsap.fromTo(
            el,
            { y: speed * 60 },
            {
              y: speed * -60,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        return () => {
          timer?.kill();
          gsap.killTweensOf(slides);
        };
      });
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
