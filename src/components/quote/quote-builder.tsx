"use client";

import { useId, useState, type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import {
  addonCategories,
  addons,
  packages,
  priceFor,
  travelFees,
  type AddonId,
} from "@/lib/pricing";
import { site } from "@/lib/site";

const OTHER_TOWN = "Somewhere else";
const towns = [...site.coreTowns, ...site.extendedTowns, OTHER_TOWN];
const ADDONS_ONLY = "addons-only";

const money = (amount: number) => `$${amount.toLocaleString("en-US")}`;
const lowest = (tiers: { price: number }[]) => tiers[0].price;

type LineItem = { label: string; amount: number | undefined };

export function QuoteBuilder() {
  const [town, setTown] = useState<string>(site.coreTowns[0]);
  const [squareFeetInput, setSquareFeetInput] = useState("");
  const [packageId, setPackageId] = useState("reserve");
  const [quantities, setQuantities] = useState<Partial<Record<AddonId, number>>>({});

  const squareFeet = Number(squareFeetInput) || 0;
  const hasSize = squareFeet > 0;
  const selectedPackage = packages.find((p) => p.id === packageId);
  const included = new Set(selectedPackage?.includes ?? []);

  const setQuantity = (id: AddonId, quantity: number) =>
    setQuantities((current) => ({ ...current, [id]: Math.max(0, quantity) }));

  const items: LineItem[] = [];
  if (selectedPackage) {
    items.push({ label: `${selectedPackage.name} package`, amount: priceFor(selectedPackage.tiers, squareFeet) });
  }
  for (const addon of addons) {
    const quantity = quantities[addon.id] ?? 0;
    if (!quantity || included.has(addon.id)) continue;
    const price = priceFor(addon.tiers, squareFeet);
    items.push({
      label: quantity > 1 ? `${addon.name} × ${quantity}` : addon.name,
      amount: price === undefined ? undefined : price * quantity,
    });
  }

  const travelFee = travelFees[town];
  const needsCustomQuote = hasSize && items.some((item) => item.amount === undefined);
  const total = items.reduce((sum, item) => sum + (item.amount ?? 0), 0) + (travelFee ?? 0);

  const summaryLines = [
    `Town: ${town}`,
    `Square footage: ${hasSize ? squareFeet.toLocaleString("en-US") : "not entered"}`,
    "",
    ...items.map((item) => `${item.label}: ${item.amount === undefined ? "custom quote" : money(item.amount)}`),
    `Travel fee: ${travelFee === undefined ? "to be confirmed" : money(travelFee)}`,
    "",
    `Estimated total: ${money(total)}`,
  ];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Quote request: ${town}`)}&body=${encodeURIComponent(
    `Hi, I'd like to book or ask about this quote.\n\n${summaryLines.join("\n")}\n\nProperty address:\nPreferred date:\n`,
  )}`;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-10">
        <Step number={1} title="The property">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Town">
              {(id) => (
                <select
                  id={id}
                  value={town}
                  onChange={(event) => setTown(event.target.value)}
                  className="h-12 w-full rounded-md border border-hairline bg-paper px-3 text-charcoal focus:border-midnight focus:outline-none"
                >
                  {towns.map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              )}
            </Field>
            <Field label="Square footage" hint="Living area, from the MLS or tax record.">
              {(id) => (
                <input
                  id={id}
                  inputMode="numeric"
                  placeholder="e.g. 2,400"
                  value={squareFeetInput}
                  onChange={(event) => setSquareFeetInput(event.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="h-12 w-full rounded-md border border-hairline bg-paper px-3 text-charcoal placeholder:text-stone focus:border-midnight focus:outline-none"
                />
              )}
            </Field>
          </div>
        </Step>

        <Step number={2} title="Choose a package">
          <div className="grid gap-3 sm:grid-cols-2">
            {packages.map((option) => {
              const price = priceFor(option.tiers, squareFeet);
              return (
                <Choice
                  key={option.id}
                  checked={packageId === option.id}
                  onSelect={() => setPackageId(option.id)}
                  title={option.name}
                  badge={option.popular ? "Most booked" : undefined}
                  price={hasSize ? (price === undefined ? "Custom quote" : money(price)) : `From ${money(lowest(option.tiers))}`}
                  summary={option.summary}
                />
              );
            })}
            <Choice
              checked={packageId === ADDONS_ONLY}
              onSelect={() => setPackageId(ADDONS_ONLY)}
              title="No package"
              price="Add-ons only"
              summary="Already have photos, or only need one service? Pick from the list below."
            />
          </div>
        </Step>

        <Step number={3} title="Add anything else">
          <div className="space-y-8">
            {addonCategories.map((category) => (
              <fieldset key={category}>
                <legend className="text-xs font-semibold tracking-[0.18em] text-slate uppercase">{category}</legend>
                <ul className="mt-3 divide-y divide-hairline rounded-lg border border-hairline bg-paper">
                  {addons
                    .filter((addon) => addon.category === category)
                    .map((addon) => {
                      const isIncluded = included.has(addon.id);
                      const quantity = quantities[addon.id] ?? 0;
                      const price = priceFor(addon.tiers, squareFeet);
                      const priceLabel = isIncluded
                        ? "Included"
                        : addon.tiers.length > 1 && !hasSize
                          ? `From ${money(lowest(addon.tiers))}`
                          : price === undefined
                            ? "Custom quote"
                            : `${money(price)}${addon.unit ? ` / ${addon.unit}` : ""}`;
                      return (
                        <li key={addon.id} className={`flex items-center gap-4 px-4 py-3.5 ${isIncluded ? "opacity-55" : ""}`}>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-charcoal">{addon.name}</p>
                            <p className="text-sm text-slate">{addon.summary}</p>
                          </div>
                          <span className={`text-sm font-semibold whitespace-nowrap ${isIncluded ? "text-slate" : "text-midnight"}`}>
                            {priceLabel}
                          </span>
                          {isIncluded ? (
                            <span className="w-[92px]" />
                          ) : addon.unit ? (
                            <Stepper
                              label={addon.name}
                              value={quantity}
                              onChange={(value) => setQuantity(addon.id, value)}
                            />
                          ) : (
                            <label className="flex w-[92px] justify-end">
                              <span className="sr-only">Add {addon.name}</span>
                              <input
                                type="checkbox"
                                checked={quantity > 0}
                                onChange={(event) => setQuantity(addon.id, event.target.checked ? 1 : 0)}
                                className="size-5 accent-midnight"
                              />
                            </label>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </fieldset>
            ))}
          </div>
        </Step>
      </div>

      {hasSize && items.length > 0 && (
        <a
          href="#quote-summary"
          className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-between rounded-lg bg-midnight px-5 py-3.5 text-ivory shadow-xl shadow-midnight/30 lg:hidden"
        >
          <span className="text-sm font-semibold">Estimated total</span>
          <span className="flex items-baseline gap-3">
            <span className="font-serif text-2xl text-lime">{money(total)}</span>
            <span className="text-xs text-stone">View quote ↓</span>
          </span>
        </a>
      )}

      <aside id="quote-summary" className="scroll-mt-20 rounded-lg bg-midnight p-7 text-ivory lg:sticky lg:top-24">
        <h2 className="font-serif text-3xl">Your quote</h2>
        <p className="mt-1 text-sm text-stone">
          {town}
          {hasSize ? ` · ${squareFeet.toLocaleString("en-US")} sq ft` : ""}
        </p>

        <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
          {items.length === 0 && <p className="text-stone">Choose a package or an add-on to see a price.</p>}
          {items.map((item) => (
            <Row
              key={item.label}
              label={item.label}
              value={item.amount === undefined ? "Custom" : hasSize ? money(item.amount) : `From ${money(item.amount)}`}
            />
          ))}
          <Row
            label="Travel fee"
            value={travelFee === undefined ? "Confirmed at booking" : travelFee === 0 ? "None" : money(travelFee)}
          />
        </dl>

        <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-5">
          <span className="font-semibold">Estimated total</span>
          <span className="font-serif text-4xl text-lime">{hasSize && items.length ? money(total) : "—"}</span>
        </div>
        {!hasSize && <p className="mt-3 text-sm text-stone">Enter the square footage for an exact price.</p>}
        {needsCustomQuote && (
          <p className="mt-3 text-sm text-stone">This home is larger than our standard tiers. Email us and we&apos;ll price it.</p>
        )}

        <div className="mt-7 flex flex-col gap-3">
          <ButtonLink href={site.bookUrl} newTab size="lg">
            Book this shoot
          </ButtonLink>
          <ButtonLink href={mailto} variant="outline-light" size="lg">
            Email us this quote
          </ButtonLink>
        </div>
        <p className="mt-5 text-xs leading-5 text-stone">
          Booking opens our order form, where you pick these same services and a date. Prices match, and
          payment is taken at booking.
        </p>
      </aside>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="flex items-baseline gap-3 font-serif text-2xl text-midnight sm:text-3xl">
        <span className="text-base font-sans font-semibold text-slate">0{number}</span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: (id: string) => ReactNode }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children(id)}
      {hint && <p className="mt-1.5 text-xs text-slate">{hint}</p>}
    </div>
  );
}

function Choice({
  checked,
  onSelect,
  title,
  badge,
  price,
  summary,
}: {
  checked: boolean;
  onSelect: () => void;
  title: string;
  badge?: string;
  price: string;
  summary: string;
}) {
  return (
    <label
      className={`relative flex cursor-pointer flex-col rounded-lg border bg-paper p-5 transition-colors ${
        checked ? "border-midnight ring-1 ring-midnight" : "border-hairline hover:border-charcoal/40"
      }`}
    >
      <input type="radio" name="package" checked={checked} onChange={onSelect} className="sr-only" />
      <span className="flex items-start justify-between gap-3">
        <span className="font-serif text-xl text-midnight">{title}</span>
        <span className="text-sm font-semibold whitespace-nowrap text-midnight">{price}</span>
      </span>
      {badge && (
        <span className="mt-2 self-start rounded-full bg-lime px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-charcoal uppercase">
          {badge}
        </span>
      )}
      <span className="mt-2 text-sm leading-6 text-slate">{summary}</span>
    </label>
  );
}

function Stepper({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  const button = "grid size-7 place-items-center rounded-full border border-hairline text-charcoal hover:border-charcoal disabled:opacity-30";
  return (
    <div className="flex w-[92px] items-center justify-end gap-2">
      <button type="button" aria-label={`Fewer ${label}`} disabled={value === 0} onClick={() => onChange(value - 1)} className={button}>
        −
      </button>
      <span aria-live="polite" className="w-5 text-center text-sm font-semibold tabular-nums">
        {value}
      </span>
      <button type="button" aria-label={`More ${label}`} disabled={value >= 20} onClick={() => onChange(value + 1)} className={button}>
        +
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-stone">{label}</dt>
      <dd className="font-semibold whitespace-nowrap">{value}</dd>
    </div>
  );
}
