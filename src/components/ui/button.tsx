import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-lime text-charcoal hover:bg-[#b5f01f]",
  dark: "bg-charcoal text-ivory hover:bg-midnight",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal",
  "outline-light": "border border-white/60 text-white hover:bg-white hover:text-charcoal",
} as const;

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center rounded-md font-sans font-semibold whitespace-nowrap transition-colors duration-200";

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...props} />
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Open in a new tab with a plain link (e.g. /book, which redirects to Aryeo). */
  newTab?: boolean;
};

export function ButtonLink({
  className = "",
  variant = "primary",
  size = "md",
  href,
  newTab = false,
  ...props
}: ButtonLinkProps) {
  const classNames = classes(variant, size, className);

  if (newTab || isExternalHref(href)) {
    return (
      <a
        className={classNames}
        href={href}
        {...(newTab || href.startsWith("http")
          ? { rel: "noreferrer", target: "_blank" }
          : {})}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href} {...props} />
  );
}
