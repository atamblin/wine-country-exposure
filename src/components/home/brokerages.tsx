import { site } from "@/lib/site";

export function Brokerages() {
  return (
    <section aria-label="Brokerages we work with" className="border-y border-hairline bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:gap-12">
        <p className="shrink-0 text-xs font-semibold tracking-[0.22em] text-slate uppercase">
          Trusted by agents at
        </p>
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:flex-nowrap lg:justify-between">
          {site.brokerages.map((name) => (
            <li key={name} data-reveal className="font-serif text-lg whitespace-nowrap text-charcoal/70 sm:text-xl">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
