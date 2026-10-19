import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-accent text-accent-ink hover:bg-foreground",
  ghost:
    "border border-line bg-transparent text-foreground hover:border-foreground",
} as const;

const sizes = {
  md: "h-11 px-5 text-[13px]",
  lg: "h-12 px-6 text-sm",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center font-display font-semibold tracking-[0.08em] uppercase transition-colors duration-200";

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
};

export function ButtonLink({
  className = "",
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonLinkProps) {
  const classNames = classes(variant, size, className);

  if (isExternalHref(href)) {
    return (
      <a
        className={classNames}
        href={href}
        {...(href.startsWith("http")
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
