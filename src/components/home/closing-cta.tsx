import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const checklist = [
  "Property address and square footage",
  "Your preferred date and time",
  "Access notes: lockbox, gate code, pets",
];

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-midnight text-ivory">
      <div aria-hidden="true" className="contours-dark absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:py-32">
        <div>
          <h2 data-reveal className="font-serif text-4xl leading-[1.1] font-light sm:text-6xl">
            Ready to book your <em className="text-lime italic">next listing?</em>
          </h2>
          <p data-reveal className="mt-7 max-w-lg text-lg leading-8 text-stone">
            Booking takes about five minutes. Questions first? Call or email and we&apos;ll get
            back to you the same day.
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.orderUrl} size="lg">
              Book a Shoot
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="outline-light" size="lg">
              Email us
            </ButtonLink>
          </div>
        </div>
        <div data-reveal className="rounded-lg border border-white/10 bg-white/5 p-8">
          <h3 className="text-lg font-semibold">Have these ready</h3>
          <ul className="mt-5 space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-stone">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-lime" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-stone">
            Or call{" "}
            <a href={site.phoneHref} className="text-ivory underline-offset-4 hover:underline">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
