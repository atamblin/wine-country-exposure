import { areas } from "@/lib/areas";
import { money, packageStartingPrices, services, startingPrice } from "@/lib/services";
import { site } from "@/lib/site";

// A plain-text summary for AI assistants (https://llmstxt.org). Built from the same data as the
// site, so services, prices, and towns stay in sync automatically.
export const dynamic = "force-static";

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const lines = [
    `# ${site.name}`,
    "",
    `> Real estate photography and media company serving listing agents in central and west Sonoma County, California. ${site.tagline}`,
    "",
    "We photograph homes for sale and deliver listing media on a branded property page, typically by the next business day. Agents book and pay online with upfront pricing by square footage.",
    "",
    `- Service area (no travel fee): ${site.coreTowns.join(", ")}`,
    `- Service area (travel fee): ${site.extendedTowns.join(", ")}`,
    "- We do not take jobs in Napa, Marin, or Petaluma.",
    `- Email: ${site.email}`,
    `- Phone: ${site.phoneDisplay}`,
    `- Book a shoot: ${base}${site.bookUrl}`,
    `- Instant quote: ${base}/quote`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.name}](${base}/services/${s.slug}): ${s.tagline} From ${money(startingPrice(s))}.`,
    ),
    "",
    "## Packages (homes up to 3,000 sq ft)",
    "",
    ...packageStartingPrices().map((p) => `- ${p.name}, from ${money(p.from)}: ${p.summary}`),
    "",
    "## Policies",
    "",
    "- Virtually staged and virtual twilight images are labeled and delivered with the unedited original, as California AB 723 requires.",
    "- Drone photography is flown by an FAA-certified remote pilot.",
    "",
    "## More",
    "",
    `- [All services](${base}/services)`,
    `- [FAQ](${base}/faq)`,
    ...areas.map((a) => `- [Real estate photography in ${a.town}](${base}/areas/${a.slug})`),
    `- [Terms of Service](${base}/terms)`,
    `- [Privacy Policy](${base}/privacy)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
