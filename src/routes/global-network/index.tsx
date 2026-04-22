import { KeyboardArrowDown } from "@/components/icons/services-icons";
import { ArrowForward } from "@/components/icons/services-icons";
import WorldMap, { type CoverageType } from "@/components/world-map";
import { Link } from "react-router-dom";
import {
  CONTACT_ROUTE,
  COVERAGE_MAP_ROUTE,
  SOFT_DARK_BOTTOM_SCRIM,
  SOFT_DARK_HERO_OVERLAY,
  SECTION_BLEND_TOP_FROM_SURFACE,
} from "@/utils/constants";
import { colors } from "@/lib/tokens";
import {
  CTA_OUTLINE_LINK_CLASSES,
  CTA_PRIMARY_LINK_CLASSES_MD,
} from "@/utils/design-tokens";

import {
  HERO_MAP_DOTS,
  REGION_HUBS,
  STAT_CARDS,
  SYSTEM_FEATURES,
  ARCHITECTURE_ITEMS,
  INDUSTRIES,
} from "./constants";

export function GlobalNetworkPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[921px] w-full overflow-hidden bg-tier-1">
        <div className={SOFT_DARK_HERO_OVERLAY} />
        <div className="absolute inset-0 opacity-60 z-0">
          <WorldMap
            dots={
              HERO_MAP_DOTS as unknown as {
                start: { lat: number; lng: number };
                end: { lat: number; lng: number };
                type?: CoverageType;
              }[]
            }
            regions={REGION_HUBS as unknown as (typeof REGION_HUBS)[number][]}
            lineColor={colors.secondary}
            className="h-full w-full bg-transparent overflow-hidden"
          />
        </div>

        {/* Radial vignette */}
        {/* Smooth bottom fade */}
        <div className={SOFT_DARK_BOTTOM_SCRIM} />

        {/* UI overlays — pointer-events-none on this container so the map
            beneath stays fully interactive; individual UI elements re-enable
            pointer-events where needed (e.g. buttons, tooltips) */}
        <div className="pointer-events-none relative z-20 mx-auto flex h-full max-w-screen-2xl flex-col justify-between px-8">
          <div className="grid h-full grid-cols-12 gap-6 py-12">
            {/* ── Left — hero copy ─────────────────────────────────────── */}
            <div className="col-span-12 flex flex-col justify-end space-y-6 pb-20 md:col-span-5">
              <div className="pointer-events-auto rounded-xl bg-surface-container-high/55 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-secondary" />
                  <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Orbital Status: Active
                  </span>
                </div>
                <h1 className="mb-4 font-headline text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl">
                  TOTAL GLOBAL
                  <br />
                  COVERAGE
                </h1>
                <p className="max-w-xs text-sm leading-relaxed text-on-surface-variant">
                  48 Low Earth Orbit satellites providing sub-50ms latency to
                  the most remote coordinates on Earth.
                </p>
              </div>

              {/* Stat cards */}
              <div className="pointer-events-auto grid grid-cols-2 gap-4">
                {STAT_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl bg-surface-container-low/40 p-4 backdrop-blur-md"
                  >
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-outline">
                      {card.label}
                    </p>
                    <p
                      className={`font-headline text-2xl font-bold ${card.valueClassName}`}
                    >
                      {card.value}
                      {/* † tooltip */}
                      <span className="group/fn relative inline-block">
                        <sup className="cursor-default text-[10px] font-normal text-outline">
                          {card.footnote}
                        </sup>
                        <span
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl bg-[#1d2023]/90 px-3 py-2 text-[10px] leading-relaxed text-white/70 opacity-0 shadow-xl backdrop-blur-2xl transition-opacity duration-200 group-hover/fn:opacity-100"
                        >
                          Based on published SLA. Latency measured across active
                          LEO constellation. Full technical spec available on
                          request.
                        </span>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Scroll chevron ─────────────────────────────────────────── */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 pb-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-outline/60">
              Scroll to explore
            </span>
            <div
              style={{ animation: "bounce-chevron 1.8s ease-in-out infinite" }}
            >
              <KeyboardArrowDown
                sx={{
                  fontSize: 22,
                  color: "var(--color-secondary)",
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section divider ───────────────────────────────────────────────── */}
      <div className="relative flex items-center gap-6 px-8 py-6 overflow-hidden">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-outline/50">
          Network Architecture
        </span>
        <div className="h-px flex-1 bg-outline-variant/20" />
      </div>

      {/* ── Coverage Architecture ─────────────────────────────────────────── */}
      <section className="relative bg-surface-container-low py-24 overflow-hidden">
        {/* Scrim — blend from background */}
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="flex flex-col items-start gap-16 md:flex-row">
            {/* Left sticky copy */}
            <div className="md:sticky md:top-32 md:w-1/3">
              <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-white">
                ENGINEERED FOR THE UNREACHABLE
              </h2>
              <div className="mb-8 h-1 w-20 bg-secondary" />
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                Neotel bypasses traditional terrestrial infrastructure. By
                utilizing high-altitude multi-band spectrum, we provide
                fiber-like speeds where cables cannot reach. Our constellation
                is architected for resilience in extreme weather and
                geo-political instability.
              </p>

              {/* Spec pills */}
              <ul className="space-y-3">
                {SYSTEM_FEATURES.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-outline-variant/20 bg-surface-container/60 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary/10">
                      <Icon
                        sx={{ fontSize: 16, color: "var(--color-secondary)" }}
                      />
                    </span>
                    <span className="font-label text-sm font-medium uppercase tracking-widest text-on-surface">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — architecture grid with icons */}
            <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg bg-outline-variant/10 md:w-2/3 md:grid-cols-2">
              {ARCHITECTURE_ITEMS.map((item) => (
                <article
                  key={item.title}
                  className="group bg-surface-container p-12 transition-colors duration-300 hover:bg-surface-container-high"
                >
                  <span className={`mb-5 block ${item.color}`}>
                    <item.Icon sx={{ fontSize: 36 }} />
                  </span>
                  <h3
                    className={`mb-4 font-headline text-xl font-bold uppercase tracking-tighter ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section divider ───────────────────────────────────────────────── */}
      <div className="relative flex items-center gap-6 px-8 py-6 overflow-hidden">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-outline/50">
          Deployment Profiles
        </span>
        <div className="h-px flex-1 bg-outline-variant/20" />
      </div>

      {/* ── Industries ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface px-8 py-24">
        {/* Scrim — blend from background */}
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                Deployment Profiles
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tighter text-white md:text-6xl">
                INDUSTRIES SERVED
              </h2>
            </div>
            <div className="mb-4 hidden h-px w-1/3 bg-outline-variant/30 lg:block" />
          </div>

          {/* Uniform card grid — 2 columns top, 2 columns bottom */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.id}
                to={CONTACT_ROUTE}
                id={`industry-card-${industry.id}`}
                className={`group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-surface-container-high ${industry.accent} border-l-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}
              >
                {/* Background image */}
                <img
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  src={industry.imageUrl}
                  alt={industry.imageAlt}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />

                {/* Icon top-left */}
                <div className="relative z-10">
                  {"Icon" in industry && industry.Icon && (
                    <span className="text-white/40">
                      {"variant" in (industry.Icon as { variant?: string }) ? (
                        <industry.Icon variant="default" size={32} />
                      ) : (
                        <industry.Icon sx={{ fontSize: 32 }} />
                      )}
                    </span>
                  )}
                </div>

                {/* Bottom content */}
                <div className="relative z-10">
                  <h3 className="mb-2 font-headline text-xl font-bold uppercase text-white">
                    {industry.title}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-on-surface-variant line-clamp-3">
                    {industry.description}
                  </p>
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-secondary transition-all duration-200 group-hover:gap-2">
                    Explore
                    <ArrowForward size={14} color="var(--color-secondary)" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative px-8 py-24">
        {/* Scrim — blend from surface */}
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-4 py-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              Contact Network Architect
            </span>
          </div>
          <h2 className="mb-8 font-headline text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
            Ready to deploy unlimited connectivity?
          </h2>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {/* Primary CTA — filled */}
            <Link to={CONTACT_ROUTE} className={CTA_PRIMARY_LINK_CLASSES_MD}>
              Consult with Sales
            </Link>
            <Link to={COVERAGE_MAP_ROUTE} className={CTA_OUTLINE_LINK_CLASSES}>
              Request Coverage Map
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bounce animation keyframe ─────────────────────────────────────── */}
      <style>{`
        @keyframes bounce-chevron {
          0%, 100% { transform: translateY(0);    opacity: 0.7; }
          50%       { transform: translateY(8px);  opacity: 1;   }
        }
      `}</style>
    </>
  );
}
