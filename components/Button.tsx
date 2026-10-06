import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "outline" | "solid" | "inverse";

const styles: Record<Variant, string> = {
  outline: "border-2 border-wine text-ink hover:bg-wine hover:text-cream",
  solid: "border-2 border-wine bg-wine text-cream hover:bg-wine-deep hover:border-wine-deep",
  inverse: "border-2 border-cream text-cream hover:bg-cream hover:text-wine",
};

// Design 1 button: 12px Montserrat capitals, wide tracking, 2px square-ish border
const base =
  "btn inline-flex items-center justify-center text-center rounded-[2px] px-[30px] py-[15px] font-heading text-xs font-semibold uppercase tracking-[0.18em]";

export default function Button({
  href,
  children,
  variant = "outline",
  external,
  className = "",
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href && (external || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf"))) {
    return (
      <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener" className={cls}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} className={`${cls} disabled:opacity-60`}>
      {children}
    </button>
  );
}
