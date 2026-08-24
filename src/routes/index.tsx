import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  Clapperboard,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import heroGlow from "@/assets/hero-glow.jpg";

const WHATSAPP_PRIMARY = "919152565773";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PRIMARY}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanimaa Co. | Digitally Upscaling and Upgrading" },
      {
        name: "description",
        content:
          "Vanimaa Co. is a modern social media marketing agency. Technical account optimization, pro-level reels, profile enhancing and 100% genuine organic reach.",
      },
      { property: "og:title", content: "Vanimaa Co. | Digitally Upscaling and Upgrading" },
      {
        property: "og:description",
        content:
          "Professional work, real results, and genuine organic growth. Elevate your social presence with Vanimaa Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- Scroll reveal ---------------- */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Shared bits ---------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-gold-light uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return <MessageCircle className={className} />;
}

/* ---------------- Header ---------------- */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Plans", href: "#plans" },
  { label: "Transparency", href: "#transparency" },
  { label: "Contact Us", href: "#contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-lg border border-gold/40 bg-gold-soft">
        <TrendingUp className="size-4.5 text-gold" strokeWidth={2.5} />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-cream">
        Vanimaa <span className="text-gold-gradient">Co.</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] active:scale-95"
          >
            Connect With Us
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg border border-border text-cream lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              Connect With Us
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroGlow}
        alt=""
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-20 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
            <Sparkles className="size-3.5" />
            Social Media Marketing Agency
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            Digitally <span className="text-gold-gradient text-gold-shimmer">Upscaling</span> and{" "}
            <span className="text-gold-gradient text-gold-shimmer">Upgrading</span> Your Brand.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We connect with you to elevate your social presence, shoot high-impact content,
            technically optimize your accounts, and drive 100% genuine organic reach.
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.04] active:scale-95"
          >
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </a>
          <a
            href="#plans"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 px-8 py-4 text-base font-semibold text-gold-light transition-colors hover:bg-gold-soft"
          >
            View Our Plans
            <ArrowUpRight className="size-5" />
          </a>
        </Reveal>

        <Reveal delay={480} className="mt-16 w-full max-w-3xl">
          <div className="grid grid-cols-1 divide-y divide-border rounded-2xl card-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: "100%", label: "Genuine Organic Reach" },
              { value: "Pro-Level", label: "Content Production" },
              { value: "End-to-End", label: "Account Management" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <p className="font-display text-2xl font-bold text-gold-gradient">{stat.value}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    icon: Settings2,
    title: "Technical Account Optimization",
    description:
      "Complete diagnostic review and technical fixing of professional accounts to improve discovery and make your dashboard shine.",
  },
  {
    icon: Clapperboard,
    title: "Pro-Level Reels & Video Production",
    description:
      "On-site shooting, conceptualization, and retention-driven pro-level video editing to boost brand recall.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Story Posters",
    description:
      "High-impact informative graphics to educate customers, plus custom daily story creatives for active awareness.",
  },
  {
    icon: Sparkles,
    title: "Profile Enhancing",
    description:
      "Complete aesthetic curation, bio restructuring, and layout optimization to build instant trust.",
  },
  {
    icon: Users,
    title: "Influencer Collaborations",
    badge: "Optional",
    description:
      "Strategic partnerships with aligned creators for genuine organic audience crossover.",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title={
            <>
              Everything Your Brand Needs to <span className="text-gold-gradient">Stand Out</span>
            </>
          }
          description="Five focused services engineered around one goal — professional work that turns attention into real business growth."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className={cn(
                "lg:col-span-2",
                i === 3 && "lg:col-start-2",
                i === 4 && "lg:col-start-4",
              )}
            >
              <article className="card-surface group flex h-full flex-col rounded-2xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft transition-colors group-hover:bg-gold/25">
                    <service.icon className="size-5.5 text-gold-light" />
                  </span>
                  {service.badge && (
                    <span className="rounded-full border border-gold/30 px-3 py-1 text-[10px] font-bold tracking-widest text-gold-light uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-cream">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Plans ---------------- */

const PLANS = [
  {
    name: "Essential Starter",
    tagline: "Account setup, trust building & visual consistency.",
    popular: false,
    cta: "Get Started",
    features: [
      "Complete Technical Account Audit & Optimization",
      "Profile Enhancing — Bio, Highlights & Aesthetic Layout",
      "Custom Informative Poster Designs",
      "Daily Story Visual Assets",
    ],
  },
  {
    name: "Growth & Production",
    tagline: "Active engagement, discovery & brand recall.",
    popular: true,
    cta: "Choose Growth",
    features: [
      "Everything in Starter Plan",
      "Professional Content Shooting & Filming",
      "High-Retention Reels & Pro-Level Video Editing",
      "Weekly Strategic Content Calendar",
      "100% Genuine Organic Reach Strategy",
    ],
  },
  {
    name: "Full-Scale Authority",
    tagline: "Market authority, scaling & conversion.",
    popular: false,
    cta: "Scale Your Brand",
    features: [
      "Everything in Growth Plan",
      "Comprehensive End-to-End Account Management",
      "Advanced Video & Multi-Format Creative Production",
      "Daily Story Management & Audience Engagement System",
      "Influencer & Creator Collaboration Strategy (Optional)",
      "Priority Support & Monthly Performance Reports",
    ],
  },
];

function planWhatsAppLink(plan: string) {
  const text = encodeURIComponent(
    `Hi Vanimaa Co.! I'm interested in the ${plan} Plan. Let's discuss how we can grow my brand.`,
  );
  return `${WHATSAPP_LINK}?text=${text}`;
}

function Plans() {
  return (
    <section id="plans" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Plans & Packages"
          title={
            <>
              Choose the Right <span className="text-gold-gradient">Growth Path</span>
            </>
          }
          description="Transparent tiers, no hidden metrics. Every plan is built on professional work and genuine organic growth."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5",
                  plan.popular
                    ? "border border-gold/60 bg-gradient-to-b from-gold-soft via-surface-raised to-surface-raised shadow-gold lg:scale-[1.04]"
                    : "card-surface shadow-card",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-primary-foreground uppercase shadow-gold">
                    Most Popular
                  </span>
                )}

                <h3
                  className={cn(
                    "text-xl font-bold",
                    plan.popular ? "text-gold-gradient" : "text-cream",
                  )}
                >
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-cream/80">Focus:</span> {plan.tagline}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-snug">
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                          plan.popular ? "bg-gold text-navy" : "bg-gold-soft text-gold-light",
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-cream/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={planWhatsAppLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:scale-[1.03] active:scale-95",
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "border border-gold/40 text-gold-light hover:bg-gold-soft",
                  )}
                >
                  {plan.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Transparency ---------------- */

function Transparency() {
  return (
    <section id="transparency" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-navy-deep px-7 py-14 text-center shadow-card sm:px-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
            <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold-soft">
              <ShieldCheck className="size-7 text-gold-light" />
            </span>
            <h2 className="relative mt-6 text-3xl font-bold text-cream sm:text-4xl">
              100% Genuine & <span className="text-gold-gradient">Organic Reach</span> Policy
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We strictly reject bots, click farms, and artificial engagement metrics. Our focus is
              100% authentic, strategic content designed to help real people discover and connect
              with your business.
            </p>
            <div className="relative mx-auto mt-8 h-px max-w-md gold-hairline" />
            <p className="relative mt-6 text-xs font-semibold tracking-[0.22em] text-gold-light/80 uppercase">
              Professional Work · Real Results · Genuine Growth
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

const CONTACT_BLOCKS = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    lines: ["+91 9152565773", "+91 7348818877"],
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["vanimaa94@gmail.com"],
    href: "mailto:vanimaa94@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    lines: ["www.vanimaa.co"],
    href: "https://www.vanimaa.co",
  },
];

const inputClass =
  "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60 focus:ring-2 focus:ring-ring";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    instagram: "",
    phone: "",
    plan: "Growth & Production Plan",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      [
        `New Inquiry — Vanimaa Co.`,
        ``,
        `Name: ${form.name}`,
        `Brand / Business: ${form.brand}`,
        `Instagram: ${form.instagram || "—"}`,
        `Phone: ${form.phone}`,
        `Selected Plan: ${form.plan}`,
        ``,
        `Message:`,
        form.message || "—",
      ].join("\n"),
    );
    window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Ready to <span className="text-gold-gradient">Upgrade</span> Your Brand?
            </>
          }
          description="Reach out directly to discuss your goals and choose the right plan for your business."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Direct contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {CONTACT_BLOCKS.map((block) => (
                <a
                  key={block.label}
                  href={block.href}
                  target={block.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft transition-colors group-hover:bg-gold/25">
                    <block.icon className="size-5 text-gold-light" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      {block.label}
                    </p>
                    {block.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-sm font-semibold text-cream">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              ))}

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="size-5" />
                Direct WhatsApp Chat
              </a>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={140} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="card-surface rounded-3xl p-7 shadow-card sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Full Name *
                  </label>
                  <input id="name" required value={form.name} onChange={update("name")} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="brand" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Brand / Business Name *
                  </label>
                  <input id="brand" required value={form.brand} onChange={update("brand")} placeholder="Your brand" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="instagram" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Instagram Handle
                  </label>
                  <input id="instagram" value={form.instagram} onChange={update("instagram")} placeholder="@yourbrand" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Phone Number *
                  </label>
                  <input id="phone" required type="tel" value={form.phone} onChange={update("phone")} placeholder="+91 ..." className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="plan" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Selected Plan
                  </label>
                  <select id="plan" value={form.plan} onChange={update("plan")} className={inputClass}>
                    <option>Essential Starter Plan</option>
                    <option>Growth & Production Plan</option>
                    <option>Full-Scale Authority Plan</option>
                    <option>Custom Plan</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your goals..."
                    className={cn(inputClass, "resize-none")}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
              >
                <Send className="size-4.5" />
                Send Inquiry
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                Your inquiry opens directly in WhatsApp — we respond personally, no bots.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 text-center sm:grid-cols-3 sm:text-left lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            Digitally Upscaling and Upgrading.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-2.5 sm:items-start">
          <p className="mb-1 text-xs font-bold tracking-widest text-gold-light uppercase">
            Quick Links
          </p>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-2 sm:items-end sm:justify-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Vanimaa Co. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">Social Media Marketing Agency</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 animate-float items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-110 active:scale-95"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}

/* ---------------- Page ---------------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <Transparency />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
