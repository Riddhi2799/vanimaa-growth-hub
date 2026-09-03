/**
 * Vanimaa Co. — single source of truth for site content and contact links.
 * Contact details are existing, verified business details. Do not invent new ones.
 */

export const BRAND_LINE = "Digitally Upscaling and Upgrading Your Brand.";

export const PHONE_PRIMARY = "+91 9152565773";
export const PHONE_SECONDARY = "+91 7348818877";
export const EMAIL = "vanimaa94@gmail.com";
export const WEBSITE = "www.vanimaa.co";

const WHATSAPP_NUMBER = "919152565773";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const TEL_PRIMARY = "tel:+919152565773";
export const TEL_SECONDARY = "tel:+917348818877";
export const MAILTO = `mailto:${EMAIL}`;
export const WEBSITE_LINK = "https://www.vanimaa.co";

export function whatsappWith(message: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Why Vanimaa", href: "#why" },
  { label: "Enquire", href: "#contact" },
] as const;

export const CAPABILITIES = [
  {
    number: "01",
    title: "Scripting",
    description: "Well-structured, engaging scripts designed around your brand, audience and message.",
    icon: "script",
  },
  {
    number: "02",
    title: "Professional Shoot",
    description: "Professional content shoots that capture products, people and ideas in a visually compelling way.",
    icon: "camera",
  },
  {
    number: "03",
    title: "Editing",
    description: "Polished, platform-ready video and visual edits that keep the brand consistent and engaging.",
    icon: "video",
  },
  {
    number: "04",
    title: "Social Media Strategy",
    description: "Audience-focused strategies built around your goals, positioning and content.",
    icon: "digital",
  },
  {
    number: "05",
    title: "Posters & Creative Design",
    description: "Professional posters and social creatives that strengthen your visual identity.",
    icon: "design",
  },
] as const;

export const SERVICE_GROUPS = [
  {
    kicker: "Category 01",
    title: "Digital Content & Social Media",
    blurb: "End-to-end creative support designed to build a stronger digital presence.",
    services: [
      {
        name: "Scripting",
        description: "Well-structured, engaging scripts designed around your brand, audience and message.",
        icon: "script",
      },
      {
        name: "Professional Shoot",
        description: "Professional shoots that capture your brand, products and ideas with intention.",
        icon: "camera",
      },
      {
        name: "Editing",
        description: "Clean, engaging edits that turn raw footage into polished social media content.",
        icon: "video",
      },
      {
        name: "Social Media Strategy",
        description: "Audience-focused strategies built around your goals, positioning and content.",
        icon: "digital",
      },
      {
        name: "Posters & Creative Design",
        description: "Professional posters and social creatives that strengthen your visual identity.",
        icon: "design",
      },
      {
        name: "Social Media Handling",
        description: "End-to-end management of your social presence, from planning and publishing to a consistent brand voice.",
        icon: "profile",
      },
    ],
  },
] as const;

export const APPROACH_STEPS = [
  { number: "01", title: "Understand", description: "We understand your brand, audience, goals and positioning." },
  { number: "02", title: "Plan", description: "We create a content and social media strategy tailored to your brand." },
  { number: "03", title: "Create", description: "We script, shoot, edit and design content that represents your brand professionally." },
  { number: "04", title: "Grow", description: "We create consistently and refine the approach around audience response." },
] as const;

export const WHY_POINTS = [
  {
    number: "01",
    title: "Creative & Reliable",
    description: "Creative work backed by consistency and commitment.",
  },
  {
    number: "02",
    title: "Audience Focused",
    description: "Content created with the right audience in mind.",
  },
  {
    number: "03",
    title: "Strategy Driven",
    description: "Every creative decision has a purpose.",
  },
  {
    number: "04",
    title: "Long-Term Partner",
    description: "We aim to grow with the brands we work with.",
  },
] as const;

export const SOLUTION_TIERS = [
  {
    name: "Essential",
    tagline: "For brands establishing their foundation.",
    highlight: false,
    points: [
      "Content planning",
      "Social media strategy",
      "Posters and creative design",
      "Consistent social media presence",
    ],
  },
  {
    name: "Growth",
    tagline: "For brands ready to build visibility and consistency.",
    highlight: true,
    points: [
      "Everything in Essential",
      "Scripting and professional shoots",
      "Editing and creative production",
      "Content planning for platforms",
      "Audience-focused content",
    ],
  },
  {
    name: "Authority",
    tagline: "For brands looking for a more complete and integrated marketing approach.",
    highlight: false,
    points: [
      "Everything in Growth",
      "End-to-end social media handling",
      "Scripting, shoots and editing",
      "Posters and creative design",
      "Consistent social media presence",
    ],
  },
] as const;

export const ENQUIRY_INTERESTS = [
  "Social Media Strategy",
  "Content Planning",
  "Scripting",
  "Professional Shoot",
  "Editing",
  "Posters & Creative Design",
  "Other",
] as const;
