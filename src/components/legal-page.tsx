import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
};

/** Shared layout for the Terms and Privacy pages: readable column, serif section headings. */
export function LegalPage({ eyebrow, title, updated, intro, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="contours-light absolute inset-x-0 top-0 h-[420px] opacity-[0.07]" />
        <div className="relative mx-auto max-w-3xl px-5 pt-16 pb-24 sm:px-8 lg:pt-24">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-midnight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate">Last updated {updated}</p>
          <div className="mt-8 text-lg leading-8 text-slate">{intro}</div>
          <div className="legal-prose mt-12 border-t border-hairline pt-4">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/** A numbered-in-markup section with an anchor so other pages can deep-link to it. */
export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-8">
      <h2 className="font-serif text-2xl text-midnight sm:text-[1.7rem]">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-charcoal [&_a]:text-midnight [&_a]:underline [&_a]:decoration-lime [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-midnight [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
