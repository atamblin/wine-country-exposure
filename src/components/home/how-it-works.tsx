import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    title: "Book online",
    body: "Pick your services, choose a time that works for the sellers, and pay securely. It takes about five minutes.",
  },
  {
    title: "We shoot",
    body: "We arrive on time with everything we need. Tell us about gate codes, lockboxes, and pets so nobody gets out.",
  },
  {
    title: "You list",
    body: "MLS-ready photos, video, and tours arrive on a branded property page, typically by the next business day.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-16 overflow-hidden bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div data-reveal>
          <Eyebrow>How it works</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 max-w-2xl font-serif text-4xl text-midnight sm:text-5xl">
          From booking to listing in <em className="italic">three steps</em>
        </h2>
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} data-reveal className="border-t border-hairline pt-8">
              <span className="font-serif text-6xl font-light text-midnight/25">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
