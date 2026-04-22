import {
  ACCENT_TEAL_RGB,
  BACKGROUND_TIER_1_RGB,
  GRADIENT_BLUE_RGB,
} from "@/utils/design-tokens";

export const SECTION_BLEND_TOP_FROM_BACKGROUND =
  "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent";

export const SECTION_BLEND_TOP_FROM_SURFACE =
  "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-surface to-transparent";

export const SECTION_BLEND_TOP_FROM_SURFACE_LOW =
  "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-surface-container-low to-transparent";

export const SECTION_BLEND_TOP_FROM_SURFACE_LOWEST =
  "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-surface-container-lowest to-transparent";

export const SECTION_BLEND_BOTTOM_TO_SURFACE =
  "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-surface to-transparent";

export const SECTION_BLEND_BOTTOM_TO_SURFACE_LOW =
  "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-surface-container-low to-transparent";

export const SOOTHING_RADIAL_ACCENT = `pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(${ACCENT_TEAL_RGB},0.12),transparent_44%),radial-gradient(circle_at_82%_88%,rgba(${GRADIENT_BLUE_RGB},0.08),transparent_42%),linear-gradient(135deg,rgba(${BACKGROUND_TIER_1_RGB},0.28),rgba(${BACKGROUND_TIER_1_RGB},0.10))]`;

export const SOFT_DARK_HERO_OVERLAY = `pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(${ACCENT_TEAL_RGB},0.14),transparent_42%),radial-gradient(circle_at_80%_72%,rgba(${GRADIENT_BLUE_RGB},0.10),transparent_40%),linear-gradient(125deg,rgba(${BACKGROUND_TIER_1_RGB},0.68),rgba(${BACKGROUND_TIER_1_RGB},0.42))]`;

export const SOFT_DARK_TOP_SCRIM =
  "pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background/70 to-transparent";

export const SOFT_DARK_BOTTOM_SCRIM =
  "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background/80 to-transparent";

/** Info/legal cards — same accent language as hero overlays */
export const INFO_PAGE_CARD_RADIAL = `pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(${ACCENT_TEAL_RGB},0.10),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(${GRADIENT_BLUE_RGB},0.08),transparent_40%)]`;

export const DOCUMENTATION_ROUTE = "/documentation";
export const NETWORK_STATUS_ROUTE = "/network-status";
export const TECHNICAL_SPECS_ROUTE = "/technical-specs";
export const COVERAGE_MAP_ROUTE = "/coverage-map";
export const PRIVACY_POLICY_ROUTE = "/privacy-policy";
export const TERMS_OF_USE_ROUTE = "/terms-of-use";
export const SECURITY_ROUTE = "/security";
export const COOKIE_POLICY_ROUTE = "/cookie-policy";
export const REPORTS_ROUTE = "/reports";
export const CONTACT_ROUTE = "/contact";

export const CONTACT_EMAIL = "contact@neotel.io";
export const CONTACT_MAILTO = "mailto:contact@neotel.io";
export const CONTACT_PHONE_DISPLAY = "+1 (800) NEO-NET";
export const CONTACT_PHONE_TEL = "tel:+18006366638";
export const HEADQUARTERS_MAP_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Level+88+Obsidian+Tower+99+Silicon+Boulevard+Tech+District+NE+40401";
