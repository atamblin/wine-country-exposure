import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:h-24 sm:px-8">
        <Link href="/" className="-ml-2 block" aria-label={site.name}>
          <Image
            src="/brand/wce-horizontal-reverse.svg"
            alt=""
            width={1760}
            height={555}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <ButtonLink href={site.orderUrl} size="md">
          Book a Shoot
        </ButtonLink>
      </div>
    </header>
  );
}
