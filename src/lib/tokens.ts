/**
 * Neotel design tokens — mirrors tailwind.config.ts exactly.
 * Use these when you need token values in JS/TS (animations, canvas, etc).
 * For className usage, always prefer the Tailwind utility classes.
 */

export const colors = {
  // Tiers
  tier1: "#0A0E0E",
  tier2: "#111718",
  tier3: "#161E1F",

  // Surfaces
  background: "#111718",
  surface: "#111718",
  surfaceDim: "#111718",
  surfaceVariant: "#323539",
  surfaceBright: "#37393d",
  surfaceContainerLowest: "#0A0E0E",
  surfaceContainerLow: "#191c1f",
  surfaceContainer: "#1d2023",
  surfaceContainerHigh: "#282a2e",
  surfaceContainerHighest: "#323539",

  // On-surface
  onSurface: "#e1e2e7",
  onSurfaceVariant: "#c7c4d7",
  onBackground: "#e1e2e7",

  // Primary (lavender — accents only, not primary CTAs)
  primary: "#c0c1ff",
  onPrimary: "#1000a9",
  primaryContainer: "#8083ff",
  onPrimaryContainer: "#0d0096",
  primaryFixed: "#e1e0ff",
  primaryFixedDim: "#c0c1ff",
  inversePrimary: "#494bd6",

  // Secondary — unified accent teal
  secondary: "#00E5C8",
  onSecondary: "#003731",
  secondaryContainer: "#00C4AA",
  secondaryFixed: "#62fae3",
  secondaryFixedDim: "#3cddc7",

  // Tertiary
  tertiary: "#ffb783",
  tertiaryContainer: "#d97721",
  tertiaryFixed: "#ffdcc5",

  // Outline
  outline: "#908fa0",
  outlineVariant: "#464554",

  // Error
  error: "#ffb4ab",
  errorContainer: "#93000a",
} as const;

export const fonts = {
  headline: "'Lexend', sans-serif",
  body: "'Inter', sans-serif",
  label: "'Inter', sans-serif",
} as const;

export const radius = {
  default: "0.125rem",
  lg: "0.25rem",
  xl: "0.5rem",
  full: "0.75rem",
} as const;

export type ColorToken = keyof typeof colors;
export type FontToken = keyof typeof fonts;
export type RadiusToken = keyof typeof radius;
