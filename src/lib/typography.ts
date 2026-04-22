/**
 * Shared typography class strings.
 * Import and spread these instead of repeating class names across components.
 *
 * Usage:
 *   import { type } from '@/lib/typography'
 *   <h1 className={type.heroTitle}>...</h1>
 */

export const type = {
  // Eyebrow / section labels
  eyebrow: "text-[10px] font-label tracking-[0.4em] uppercase",
  eyebrowSm: "text-[9px] font-label tracking-widest uppercase",

  // Headlines
  heroTitle: "font-headline font-black tracking-tighter leading-none",
  pageTitle: "font-headline font-bold text-4xl md:text-5xl text-on-surface",
  sectionTitle: "font-headline font-bold text-4xl md:text-5xl text-on-surface",
  cardTitle: "font-headline font-bold text-2xl text-on-surface",
  cardTitleLg: "font-headline font-bold text-3xl",

  // Body
  bodyLg:
    "text-lg md:text-xl text-on-surface-variant font-light leading-relaxed",
  body: "text-on-surface-variant font-light leading-relaxed",
  bodySm: "text-sm text-on-surface-variant font-light leading-relaxed",
  bodyXs: "text-xs text-on-surface-variant",

  // Nav / label
  navLink: "font-medium font-headline tracking-tight transition-colors",
  navLinkActive: "text-secondary border-b-2 border-secondary pb-1",
  navLinkIdle: "text-on-surface-variant hover:text-secondary",

  // Misc
  statNumber: "text-4xl font-headline font-bold text-white tracking-tighter",
  statLabel: "text-[10px] font-label tracking-widest uppercase",
} as const;
