import { cn } from "@/lib/utils";

export type BrandIconName =
  | "billboard"
  | "event"
  | "ground"
  | "camera"
  | "campaign"
  | "digital"
  | "video"
  | "design"
  | "profile"
  | "people"
  | "brand"
  | "idea"
  | "pin"
  | "analytics"
  | "script";

/**
 * Bespoke line illustrations drawn for Vanimaa Co. — content production and
 * digital brand visuals. Stroke-based so they inherit the gold accent cleanly.
 */
const PATHS: Record<BrandIconName, React.ReactNode> = {
  billboard: (
    <>
      <rect x="3" y="4" width="18" height="11" rx="1" />
      <path d="M7 15v5M17 15v5M3 20h4M17 20h4" />
      <path d="M7 8.5h6M7 11h4" />
    </>
  ),
  event: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20V9l7-5 7 5v11" />
      <path d="M9.5 20v-5h5v5" />
      <path d="M12 4V2" />
    </>
  ),
  ground: (
    <>
      <circle cx="8" cy="6" r="2.4" />
      <path d="M4 20v-4a4 4 0 0 1 8 0v4" />
      <path d="M15 8h6v5h-6z" />
      <path d="M18 13v7" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5h11l3.5-2v9L14 13.5H3z" />
      <rect x="3" y="8.5" width="11" height="5" rx="1" />
      <path d="M19.5 9.5h1.5v3h-1.5" />
      <path d="M5 17.5h7" />
    </>
  ),
  campaign: (
    <>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M8.2 7h7.6M7.2 9l3.6 7M16.8 9l-3.6 7" />
    </>
  ),
  digital: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10.5 5.5h3" />
      <path d="M9.5 16.5l2.5-3.5 2 2 2.5-4" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
      <path d="M2.5 10h19M7 6v4M12 6v4M17 6v4" />
      <path d="M10.5 13.5v3l3-1.5z" />
    </>
  ),
  design: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 9h18M9 21V9" />
      <circle cx="15" cy="15" r="2.2" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M18.5 3.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="2.8" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17.5" cy="9.5" r="2.2" />
      <path d="M15 19a4.5 4.5 0 0 1 6.5-4" />
    </>
  ),
  brand: (
    <>
      <path d="M12 2.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9l6.1-.9z" />
    </>
  ),
  idea: (
    <>
      <path d="M9 17.5h6M10 20.5h4" />
      <path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.5-.9 1-.9 1.6h-5.2c0-.6-.3-1.1-.9-1.6A6 6 0 0 1 12 3z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11.2a7 7 0 1 0-14 0c0 5 7 11.2 7 11.2z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 20.5h18" />
      <rect x="4.5" y="12" width="3.5" height="6" />
      <rect x="10.2" y="8" width="3.5" height="10" />
      <rect x="16" y="4.5" width="3.5" height="13.5" />
    </>
  ),
  script: (
    <>
      <path d="M5.5 3.5h9l4.5 4.5v12.5h-13.5z" />
      <path d="M14.5 3.5V8H19" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 18h4" />
    </>
  ),
};

export function BrandIcon({
  name,
  className,
  strokeWidth = 1.4,
}: {
  name: BrandIconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("size-6", className)}
    >
      {PATHS[name]}
    </svg>
  );
}
