import type { Metadata } from "next";
import { QuoteBuilder } from "@/components/quote/quote-builder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Get a quote",
  description:
    "Price your listing photography, video, aerials, and 3D tour in under a minute. Central and west Sonoma County.",
};

export default function QuotePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="contours-light absolute inset-x-0 top-0 h-[480px] opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-24 sm:px-8 lg:pt-24">
          <Eyebrow>Instant quote</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] text-midnight sm:text-6xl">
            Price your listing <em className="italic">in a minute</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
            Pick a package and any extras. Prices are set by square footage, with no travel fee inside our
            core area. When it looks right, book it.
          </p>
          <div className="mt-14">
            <QuoteBuilder />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
