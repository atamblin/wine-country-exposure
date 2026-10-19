import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[12px] tracking-[0.04em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{site.serviceArea}</p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a className="hover:text-foreground" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a className="hover:text-foreground" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
