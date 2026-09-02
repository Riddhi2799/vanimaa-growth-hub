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
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Why Vanimaa", href: "#why" },
  { label: "Contact", href: "#contact" },
] as const;

export const CAPABILITIES = [
  {
    number: "01",
    title: "Outdoor Media",
    description: "Strategic visibility where your audience lives, travels and engages.",
    icon: "billboard",
  },
  {
    number: "02",
    title: "Promotional Events",
    description: "Brand experiences designed to create attention and engagement.",
    icon: "event",
  },
  {
    number: "03",
    title: "On-Ground Promotions",
    description: "Direct brand-to-audience interaction through meaningful activations.",
    icon: "ground",
  },
  {
    number: "04",
    title: "Event Coverage",
    description: "Professional visual coverage that captures the moments that matter.",
    icon: "camera",
  },
  {
    number: "05",
    title: "Campaign Integration",
    description: "Connecting multiple marketing touchpoints into one cohesive campaign.",
    icon: "campaign",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "Building a stronger, more strategic and engaging digital presence.",
    icon: "digital",
  },
] as const;

export const JOURNEY = [
  { label: "Outdoor", icon: "billboard" },
  { label: "On-Ground", icon: "ground" },
  { label: "Events", icon: "event" },
  { label: "Content", icon: "camera" },
  { label: "Digital", icon: "digital" },
  { label: "Campaign", icon: "campaign" },
  { label: "Brand", icon: "brand" },
] as const;

export const SERVICE_GROUPS = [
  {
    kicker: "Category 01",
    title: "Offline / On-Ground",
    blurb: "Real-world visibility built on five-plus years of field execution.",
    services: [
      {
        name: "Outdoor Media",
        description: "Placement and visibility planning across high-traffic physical spaces.",
        icon: "billboard",
      },
      {
        name: "Promotional Events",
        description: "Concept, setup and execution of events that put your brand in the room.",
        icon: "event",
      },
      {
        name: "On-Ground Promotions",
        description: "Face-to-face activations that create direct interaction with your audience.",
        icon: "ground",
      },
      {
        name: "Event Coverage",
        description: "Photo and video coverage that turns live moments into lasting assets.",
        icon: "camera",
      },
      {
        name: "Campaign Integration",
        description: "One narrative across every touchpoint, offline and online.",
        icon: "campaign",
      },
    ],
  },
  {
    kicker: "Category 02",
    title: "Digital",
    blurb: "Modern digital execution designed around visibility and engagement.",
    services: [
      {
        name: "Social Media Marketing",
        description: "Strategy, planning and account management built around your objective.",
        icon: "digital",
      },
      {
        name: "Reels & Video Production",
        description: "Shooting, conceptualisation and retention-driven editing.",
        icon: "video",
      },
      {
        name: "Graphic Design & Creative Content",
        description: "Informative graphics, poster design and daily story creatives.",
        icon: "design",
      },
      {
        name: "Profile Enhancement",
        description: "Bio restructuring, aesthetic curation and layout optimisation.",
        icon: "profile",
      },
      {
        name: "Influencer Collaborations",
        description: "Partnerships with aligned creators for genuine audience crossover.",
        icon: "people",
      },
    ],
  },
] as const;

export const APPROACH_STEPS = [
  { number: "01", title: "Understand", description: "Understand the brand, audience and objective." },
  { number: "02", title: "Strategize", description: "Build a clear direction around the goal." },
  { number: "03", title: "Create", description: "Develop the creative, content or activation." },
  { number: "04", title: "Execute", description: "Bring the campaign or idea to life." },
  { number: "05", title: "Amplify", description: "Strengthen visibility across relevant channels." },
] as const;

export const WHY_POINTS = [
  {
    number: "01",
    title: "Real-World Experience",
    description:
      "5+ years of experience across outdoor media, promotional events and on-ground activations.",
  },
  {
    number: "02",
    title: "Digital-First Thinking",
    description:
      "Modern digital strategies designed around visibility, engagement and brand presence.",
  },
  {
    number: "03",
    title: "Integrated Campaigns",
    description: "Connecting offline experiences with digital communication.",
  },
  {
    number: "04",
    title: "Creative Execution",
    description: "Turning ideas into experiences and content people remember.",
  },
] as const;

export const SOLUTION_TIERS = [
  {
    name: "Essential",
    tagline: "For brands establishing their foundation.",
    highlight: false,
    points: [
      "Account audit and technical optimisation",
      "Profile enhancement — bio, highlights and layout",
      "Informative poster and creative design",
      "Daily story visual assets",
    ],
  },
  {
    name: "Growth",
    tagline: "For brands ready to build visibility and consistency.",
    highlight: true,
    points: [
      "Everything in Essential",
      "Professional content shooting and filming",
      "Reels and pro-level video editing",
      "Strategic content calendar",
      "Organic growth strategy and positioning",
    ],
  },
  {
    name: "Authority",
    tagline: "For brands looking for a more complete and integrated marketing approach.",
    highlight: false,
    points: [
      "Everything in Growth",
      "End-to-end account management",
      "Multi-format creative production",
      "Outdoor, on-ground and event integration",
      "Influencer and creator collaborations",
      "Priority support and performance reporting",
    ],
  },
] as const;

export const ENQUIRY_INTERESTS = [
  "Digital Marketing",
  "Outdoor Media",
  "Promotional Events",
  "On-Ground Promotions",
  "Event Coverage",
  "Campaign Integration",
  "Reels / Video Production",
  "Graphic Design",
  "Influencer Collaborations",
  "Other",
] as const;
