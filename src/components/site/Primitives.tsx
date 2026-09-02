import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

/** Wordmark: gold upward growth arrow + Vanimaa Co. */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Vanimaa Co. — back to top"
    >
      <span className="flex size-8 items-center justify-center border border-gold/45 transition-colors group-hover:bg-gold-soft">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-4 text-gold"
        >
          <path d="M3 17.5L9.5 11l4 4L21 7.5" />
          <path d="M15 7.5h6v6" />
        </svg>
      </span>
      <span className="font-display text-base font-bold tracking-tight text-cream">
        Vanimaa <span className="text-gold">Co.</span>
      </span>
    </a>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("arrow size-4", className)}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

type ActionProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

/** Solid gold call to action. */
export function GoldAction({ href, children, className, external, onClick }: ActionProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "arrow-link inline-flex items-center justify-center gap-2.5 bg-primary px-7 py-3.5 font-mono text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-gold hover:brightness-[1.06] active:scale-[0.985]",
        className,
      )}
    >
      {children}
      <ArrowRight />
    </a>
  );
}

/** Outlined secondary call to action. */
export function GhostAction({ href, children, className, external, onClick }: ActionProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "arrow-link inline-flex items-center justify-center gap-2.5 border border-gold/45 px-7 py-3.5 font-mono text-xs font-bold tracking-[0.16em] text-gold-light uppercase transition-all duration-300 hover:border-gold hover:bg-gold-soft active:scale-[0.985]",
        className,
      )}
    >
      {children}
      <ArrowRight />
    </a>
  );
}

/** Section container with consistent editorial rhythm. */
export function Section({
  id,
  children,
  className,
  divider = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-32", className)}>
      {divider && <div className="rule-center absolute inset-x-0 top-0" />}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Left-aligned editorial section header with kicker rule. */
export function SectionHead({
  kicker,
  title,
  lede,
  align = "left",
  className,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="mt-5 max-w-3xl text-3xl leading-[1.1] font-extrabold text-cream uppercase sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
