type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function Eyebrow({ children, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-semibold tracking-[0.22em] uppercase ${
        tone === "light" ? "text-slate" : "text-lime"
      }`}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-lime" />
      {children}
    </p>
  );
}
