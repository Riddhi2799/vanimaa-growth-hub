import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-data";
import { useScrolled } from "@/components/Reveal";
import { ArrowRight, Logo } from "./Primitives";

export function Header() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:text-cream hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="arrow-link hidden items-center gap-2 bg-primary px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.16em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-gold hover:brightness-[1.06] lg:inline-flex"
        >
          Enquire Now
          <ArrowRight className="size-3.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center border border-border text-cream transition-colors hover:border-gold/50 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-b border-border bg-background/97 backdrop-blur-lg transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 pb-5 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="arrow-link mt-5 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 font-mono text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase"
          >
            Enquire Now
            <ArrowRight className="size-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
