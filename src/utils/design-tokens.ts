/**
 * NEOTEL design tokens — single source for accent, tiers, CTAs, and badges.
 * Pair with CSS variables in index.css and tailwind.config.ts.
 * Surfaces: use Tailwind `bg-tier-1` (hero), `bg-tier-2` (default page), `bg-tier-3` (footer).
 */

/** Brand accents extracted from HTML config */
export const ACCENT_PURPLE_HEX = "#c0c1ff"; // matches "primary" in config
export const ACCENT_TEAL_HEX = "#44e2cd"; // matches "secondary" in config

/** Gradient heading end */
export const GRADIENT_HEADING_END_HEX = "#6B9FFF";

/** Background tiers */
export const BACKGROUND_TIER_1_HERO_HEX = "#0A0F10";
export const BACKGROUND_TIER_2_SURFACE_HEX = "#0F1617";
export const BACKGROUND_TIER_3_FOOTER_HEX = "#151D1F";

/** Tier-1 base for scrim gradients */
export const BACKGROUND_TIER_1_RGB = "10,14,14" as const;

/** RGB tuples for overlays */
export const ACCENT_PURPLE_RGB = "192,193,255" as const;
export const ACCENT_TEAL_RGB = "68,226,205" as const;
export const GRADIENT_BLUE_RGB = "107,159,255" as const;

/** Primary CTA (Hero: "Initialize Deployment") */
export const CTA_PRIMARY_LINK_CLASSES =
  "inline-flex items-center justify-center bg-primary text-on-primary px-10 py-5 font-headline font-bold text-lg rounded-lg shadow-2xl hover:translate-y-[-2px] transition-all cursor-pointer";

/** Compact primary (Navbar: "Get a Quote") */
export const CTA_PRIMARY_LINK_CLASSES_SM =
  "inline-flex items-center justify-center bg-primary text-on-primary font-headline font-bold py-2 px-6 rounded-lg scale-95 active:scale-90 transition-transform hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] cursor-pointer";

/** Primary — medium padding */
export const CTA_PRIMARY_LINK_CLASSES_MD =
  "inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 font-headline font-bold rounded-lg shadow-lg hover:translate-y-[-2px] transition-all cursor-pointer";

/** Primary — large (Bottom CTA: "Request System Spec") */
export const CTA_PRIMARY_LINK_CLASSES_LG =
  "inline-flex items-center justify-center bg-primary text-on-primary font-headline font-bold py-5 px-12 rounded-lg text-lg hover:shadow-[0_0_40px_rgba(192,193,255,0.3)] transition-all cursor-pointer";

/** Secondary CTA (Bottom CTA: "Consult an Engineer") */
export const CTA_OUTLINE_LINK_CLASSES =
  "inline-flex items-center justify-center border border-outline-variant/30 hover:bg-surface-container-high transition-colors font-headline font-bold py-5 px-12 rounded-lg text-lg text-white cursor-pointer";

export const CTA_OUTLINE_LINK_CLASSES_SM =
  "inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant border border-outline-variant/30 rounded-lg transition-colors hover:text-white hover:border-primary/40 cursor-pointer";

export const CTA_OUTLINE_LINK_CLASSES_HERO_SECONDARY =
  "inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-white cursor-pointer";

/** Decorative glows */
export const RING_PANEL_GLOW_CLASSES =
  "shadow-[0_0_40px_rgba(68,226,205,0.22)]"; // Teal glow
export const NEWSLETTER_CARD_SHADOW_CLASSES =
  "shadow-[0_0_48px_rgba(68,226,205,0.06)]";
export const ACCENT_DOT_GLOW_CLASSES =
  "shadow-[0_0_15px_rgba(68,226,205,0.45)]";

/** Hero gradient text */
export const HEADING_GRADIENT_TEXT_CLASSES =
  "text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#6B9FFF]";

/** Badge taxonomy */
export const BADGE_CLASSES = {
  DEFAULT:
    "px-2 py-1 bg-surface-container-high/90 text-on-surface-variant border border-outline-variant/25 text-[9px] font-black tracking-widest uppercase",
  CATEGORY_ACCENT:
    "px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-[9px] font-black tracking-widest uppercase",
  CATEGORY_ALERT:
    "px-2 py-1 bg-tertiary/15 text-tertiary border border-tertiary/35 text-[9px] font-black tracking-widest uppercase",
  CASE_STUDY_SOLID:
    "px-2 py-1 bg-primary text-on-primary text-[9px] uppercase tracking-widest font-black",
} as const;

export type NewsBadgeKind = keyof typeof BADGE_CLASSES;

/** Map news/blog category labels to badge variant */
export function badgeClassForNewsCategory(category: string): string {
  const normalized = category.trim().toLowerCase();
  if (normalized.includes("starlink")) {
    return BADGE_CLASSES.CATEGORY_ALERT;
  }
  if (normalized.includes("case study")) {
    return BADGE_CLASSES.CASE_STUDY_SOLID;
  }
  if (normalized === "enterprise" || normalized === "corporate") {
    return BADGE_CLASSES.DEFAULT;
  }
  return BADGE_CLASSES.CATEGORY_ACCENT;
}
