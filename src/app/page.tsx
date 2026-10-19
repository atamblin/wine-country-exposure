import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 70% 20%, rgba(200,255,61,0.08), transparent 55%), radial-gradient(900px 600px at 10% 90%, rgba(244,244,241,0.06), transparent 50%), linear-gradient(180deg, #101010 0%, #070707 55%, #050505 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.85'/></svg>\")",
        }}
      />

      <SiteHeader />

      <main className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pb-28 pt-28 sm:px-8">
        <p className="mb-6 font-display text-[12px] font-semibold tracking-[0.28em] uppercase text-accent">
          Site coming soon
        </p>
        <h1 className="max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.18] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
          Listing media for Sonoma County, shot to sell.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
          Photography, video, aerials, Matterport, and Zillow 3D for agents in
          wine country. The full site is being built. Orders are open now.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={site.orderUrl} size="lg">
            Book a Shoot
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="ghost" size="lg">
            Email us
          </ButtonLink>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
