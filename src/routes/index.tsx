import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Globe,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { Reveal } from "@/components/Reveal";
import { BRAND_LINE, EMAIL, NAV_LINKS, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60 focus:ring-2 focus:ring-ring";

const VISUAL_ASSETS = {
  hero: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=88",
  approach: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=88",
  behindWork: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=88",
} as const;

const SERVICE_GROUPS = [
  {
    title: "DIGITAL CONTENT & SOCIAL MEDIA",
    services: [
      { name: "Scripting", description: "Well-structured, engaging scripts designed around your brand, audience and message.", icon: "script" as const },
      { name: "Professional Shoot", description: "Professional shoots that capture your brand, products and ideas with intention.", icon: "camera" as const },
      { name: "Editing", description: "Clean, engaging edits that turn raw footage into polished social media content.", icon: "video" as const },
      { name: "Social Media Strategy", description: "Audience-focused strategies built around your goals, positioning and content.", icon: "digital" as const },
      { name: "Posters & Creative Design", description: "Professional posters and social creatives that strengthen your visual identity.", icon: "design" as const },
      { name: "Social Media Handling", description: "End-to-end management of your social presence, from planning and publishing to maintaining a consistent brand voice.", icon: "profile" as const },
    ],
  },
];

const APPROACH_STEPS = [
  { number: "01", title: "UNDERSTAND", description: "We understand your brand, audience, goals and positioning." },
  { number: "02", title: "PLAN", description: "We build a content and social strategy tailored to your brand." },
  { number: "03", title: "CREATE", description: "We script, shoot, edit and design content that represents your brand." },
  { number: "04", title: "GROW", description: "We create consistently and refine the approach around audience response." },
];

const WHY_POINTS = [
  {
    number: "01",
    title: "CREATIVE & RELIABLE",
    description: "Creative work backed by consistency and commitment.",
  },
  {
    number: "02",
    title: "AUDIENCE FOCUSED",
    description: "Content created with the right audience in mind.",
  },
  {
    number: "03",
    title: "STRATEGY DRIVEN",
    description: "Every creative decision has a purpose.",
  },
  {
    number: "04",
    title: "LONG-TERM PARTNER",
    description: "We aim to grow with the brands we work with.",
  },
];

const PACKAGE_TIERS = [
  {
    name: "ESSENTIAL",
    tagline: "For brands establishing their foundation.",
    points: [
      "Content planning",
      "Social media strategy",
      "Posters and creative design",
      "Consistent social media presence",
    ],
  },
  {
    name: "GROWTH",
    tagline: "For brands ready to build visibility and consistency.",
    featured: true,
    points: [
      "Scripting and professional shoots",
      "Editing and creative production",
      "Content planning for platforms",
      "Stronger digital presence",
      "Audience-focused content",
    ],
  },
  {
    name: "AUTHORITY",
    tagline: "For brands looking for a more complete and integrated marketing approach.",
    points: [
      "End-to-end social media handling",
      "Scripting, shoots and editing",
      "Posters and creative design",
      "Consistent social media presence",
    ],
  },
];

const CONTACT_BLOCKS = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    lines: [PHONE_PRIMARY, PHONE_SECONDARY],
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    label: "Email",
    lines: [EMAIL],
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Globe,
    label: "Website",
    lines: ["www.vanimaa.co"],
    href: "https://www.vanimaa.co",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanimaa Co. | Social Media, Content & Creative" },
      {
        name: "description",
        content:
          "Vanimaa Co. creates professional digital content and handles social media from content planning and scripting through shoots, editing, creative design and strategy.",
      },
      { property: "og:title", content: "Vanimaa Co. | Digital Content & Social Media" },
      {
        property: "og:description",
        content:
          "Vanimaa Co. creates professional digital content and handles social media from content planning and scripting through shoots, editing, creative design and strategy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold text-cream sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
    </Reveal>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Vanimaa Co. home">
      <span className="flex size-9 items-center justify-center rounded-lg border border-gold/40 bg-gold-soft text-gold-light">
        <Sparkles className="size-4" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-cream">
        VANIMAA <span className="text-gold-light">CO.</span>
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
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
          >
            ENQUIRE NOW <ArrowRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-border text-cream lg:hidden"
          onClick={() => setOpen((current) => !current)}
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
              ENQUIRE NOW <ArrowRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const visuals = [
    { label: "CAMERA", icon: "camera" as const },
    { label: "SCRIPT", icon: "script" as const },
    { label: "SOCIAL", icon: "digital" as const },
    { label: "DESIGN", icon: "design" as const },
    { label: "EDITING", icon: "video" as const },
    { label: "PLANNING", icon: "idea" as const },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,174,94,0.12),transparent_35%)]" />
      <div className="relative mx-auto grid min-h-[100vh] max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">
              <Sparkles className="size-3.5" />
              CONTENT • SOCIAL • STRATEGY
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.02] text-cream sm:text-6xl lg:text-[5.2rem]">
              {BRAND_LINE}
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vanimaa Co. helps brands build a strong digital presence through professional content, social media strategy, creative execution and audience-focused communication.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
          >
            LET&apos;S TALK <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/40 px-8 py-4 text-sm font-bold tracking-[0.12em] text-gold-light uppercase transition-colors hover:bg-gold-soft"
          >
            ENQUIRE NOW <ArrowRight className="size-4" />
          </a>
          </Reveal>
        </div>

        <Reveal delay={240} className="w-full">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-surface p-2 shadow-card sm:p-3">
            <img src={VISUAL_ASSETS.hero} alt="Professional camera used for brand content production" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-background/80 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-gold-light uppercase">PROFESSIONAL CONTENT</p>
              <p className="mt-1 text-sm text-cream">Ideas shaped for the screen.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={420} className="col-span-full w-full">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-gold/25 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(10,12,18,0.96))] p-4 shadow-card sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3 px-2 text-left">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-gold-light uppercase">CREATIVE DIRECTION</p>
                <p className="mt-1 text-sm text-muted-foreground">From strategy to content execution.</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-gold/25 bg-gold-soft px-3 py-1.5 text-[10px] tracking-[0.18em] text-gold-light uppercase">
                <span className="size-2 rounded-full bg-gold" />
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {visuals.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface px-4 py-5 text-left transition-transform duration-300 hover:-translate-y-1 hover:border-gold/35",
                    index % 2 === 0 ? "animate-float-slow" : "animate-float-slower",
                  )}
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-gold/25 bg-gold-soft text-gold-light">
                      <BrandIcon name={item.icon} className="size-5" />
                    </span>
                    <span className="text-[9px] tracking-[0.18em] text-muted-foreground uppercase">0{index + 1}</span>
                  </div>
                  <p className="font-display text-lg font-semibold text-cream">{item.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.label === "CAMERA" && "Story-driven capture"}
                    {item.label === "SCRIPT" && "Messaging with intention"}
                    {item.label === "SOCIAL" && "Platform-aware content"}
                    {item.label === "DESIGN" && "Brand visuals that convert"}
                    {item.label === "EDITING" && "Clean, platform-ready output"}
                    {item.label === "ANALYTICS" && "Performance clarity"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="End-to-end content and social media solutions designed to help your brand connect with the right audience."
          description="Vanimaa Co. helps brands handle their digital presence with clarity, structure and creative consistency across content, strategy and execution."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-1">
          {SERVICE_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 90}>
              <div className="h-full rounded-[1.8rem] border border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.72),rgba(12,8,10,0.9))] p-6 sm:p-7">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-gold-light uppercase">{group.title}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.services.map((service) => (
                    <div key={service.name} className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-4 transition-colors hover:border-gold/35">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-gold/25 bg-gold-soft text-gold-light">
                        <BrandIcon name={service.icon} className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-cream">{service.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BehindTheWorkSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface p-2 shadow-card sm:p-3">
            <img src={VISUAL_ASSETS.behindWork} alt="Camera setup used during a professional content shoot" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">
              <Instagram className="size-3.5" />
              BEHIND THE WORK
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-cream sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
              Great content starts long before the camera rolls.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From scripting and planning to shooting and editing, we build every piece of content with purpose. Every frame is created to represent the brand, connect with the audience, and perform on social media.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="OUR APPROACH"
          title="FROM IDEA → IMPACT"
          description="Every content decision is shaped by understanding, strategy, creative execution and audience-focused growth."
        />

        <Reveal delay={80} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface p-2 shadow-card sm:p-3">
            <img src={VISUAL_ASSETS.approach} alt="Creative planning desk with professional design materials" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-80" />
            <div className="absolute inset-x-6 bottom-6 max-w-sm rounded-2xl border border-white/15 bg-background/80 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-gold-light uppercase">A CLEAR CREATIVE PROCESS</p>
              <p className="mt-1 text-sm text-cream">Every post begins with a purpose.</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {APPROACH_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className="h-full">
              <div className="relative h-full rounded-[1.6rem] border border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.7),rgba(12,8,10,0.9))] p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold-soft font-mono text-xs tracking-[0.18em] text-gold-light">
                    {step.number}
                  </span>
                  {index < APPROACH_STEPS.length - 1 && (
                    <span className="hidden text-gold-light md:block">
                      <ArrowRight className="size-4" />
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-lg font-bold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="WHY VANIMAA?"
          title="A thoughtful partner for your digital presence."
          description="Creative thinking, reliable execution and a clear understanding of what makes content connect."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {WHY_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="flex h-full gap-4 rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.72),rgba(12,8,10,0.9))] p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-soft font-mono text-xs tracking-[0.18em] text-gold-light">
                  {point.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-cream">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrganicGrowthSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(20,24,34,0.95),rgba(12,14,22,1))] px-5 py-12 text-center shadow-card sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-gold-light uppercase">AUTHENTIC GROWTH</p>
            <h2 className="mt-6 text-3xl font-black text-cream sm:text-5xl lg:text-[4rem] leading-none">
              AUTHENTIC GROWTH. NO SHORTCUTS.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              We focus on strategic content, strong positioning and genuine audience connection — without bots, fake engagement or purchased followers.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <div className="flex flex-wrap justify-center gap-3 text-xs font-bold tracking-[0.2em] text-gold-light uppercase">
                <span className="rounded-full border border-gold/25 bg-gold-soft px-3 py-2">NO BOTS.</span>
                <span className="rounded-full border border-gold/25 bg-gold-soft px-3 py-2">NO FAKE ENGAGEMENT.</span>
                <span className="rounded-full border border-gold/25 bg-gold-soft px-3 py-2">NO SHORTCUTS.</span>
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs font-bold tracking-[0.26em] text-cream uppercase">
                <span className="rounded-full border border-border px-3 py-2">STRATEGY.</span>
                <span className="rounded-full border border-border px-3 py-2">CREATIVITY.</span>
                <span className="rounded-full border border-border px-3 py-2">CONSISTENCY.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="PACKAGES"
          title="Simple packages, built around your next move."
          description="Tell us what you need and we’ll build the right strategy for your brand. No price lists, just a clear conversation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGE_TIERS.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 90} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-[1.8rem] border p-6 sm:p-7",
                  tier.featured
                    ? "border-gold/40 bg-[linear-gradient(180deg,rgba(120,65,35,0.2),rgba(48,15,24,0.92))] shadow-gold"
                    : "border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.72),rgba(12,8,10,0.92))]",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-cream">{tier.name}</h3>
                  {tier.featured && (
                    <span className="rounded-full border border-gold/30 bg-gold-soft px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {tier.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-cream/85">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-light">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-[0.12em] uppercase transition-transform hover:scale-[1.02] active:scale-95",
                    tier.featured
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "border border-gold/35 text-gold-light hover:bg-gold-soft",
                  )}
                >
                  ENQUIRE <ArrowRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const updateField = (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
    };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    const encodedMessage = encodeURIComponent(
      [
        "New enquiry for Vanimaa Co.",
        "",
        `Name: ${form.name}`,
        `Brand / Company: ${form.company}`,
        `Email: ${form.email}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );
    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodedMessage}`;
    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (openedWindow) {
      setForm({ name: "", company: "", email: "", message: "" });
      setStatus("success");
    } else {
      window.location.href = whatsappUrl;
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="READY TO GROW YOUR BRAND?"
          title="Tell us what you’re looking to achieve."
          description="Let's discuss your requirements and build the right approach for your brand."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1.6fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-5">
              {CONTACT_BLOCKS.map((block) => (
                <a
                  key={block.label}
                  href={block.href}
                  target={block.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.72),rgba(12,8,10,0.92))] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold-soft text-gold-light">
                    <block.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      {block.label}
                    </p>
                    {block.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm font-semibold text-cream">
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
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="size-4" />
                START A CONVERSATION
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(48,15,24,0.72),rgba(12,8,10,0.94))] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    Name
                  </label>
                  <input id="name" required value={form.name} onChange={updateField("name")} placeholder="Your name" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    Brand / Company Name
                  </label>
                  <input id="company" required value={form.company} onChange={updateField("company")} placeholder="Your brand" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    Email
                  </label>
                  <input id="email" required type="email" value={form.email} onChange={updateField("email")} placeholder="hello@brand.com" className={inputClass} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={updateField("message")}
                    placeholder="Tell us about your brand and what you want to create..."
                    className={cn(inputClass, "resize-none")}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-gold transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "SENDING..." : "SEND ENQUIRY"} <Send className="size-4" />
              </button>
              {status === "success" && <p className="mt-4 text-sm text-gold-light">WhatsApp opened with your enquiry ready to send.</p>}
              {status === "error" && <p className="mt-4 text-sm text-red-300">WhatsApp could not be opened. Please try again or contact us directly.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative pb-24 pt-8 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(23,28,41,0.96),rgba(14,16,25,1))] px-6 py-12 text-center shadow-card sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-gold-light uppercase">LET&apos;S BUILD</p>
            <h2 className="mt-6 text-3xl font-black text-cream sm:text-4xl lg:text-[3.2rem] lg:leading-none">
              LET&apos;S BUILD SOMETHING PEOPLE REMEMBER.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Have a requirement in mind? Tell us about your brand and let&apos;s start a conversation.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
            >
              START A CONVERSATION <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-center sm:grid-cols-3 sm:text-left lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {BRAND_LINE}
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2.5 sm:items-start">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">NAVIGATION</p>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-gold-light">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="text-sm text-muted-foreground">© 2026 Vanimaa Co. All rights reserved.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-light hover:text-gold">
            WhatsApp Chat
          </a>
          <a href={`mailto:${EMAIL}`} className="text-sm text-gold-light hover:text-gold">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <BehindTheWorkSection />
        <ApproachSection />
        <WhySection />
        <OrganicGrowthSection />
        <PackagesSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
