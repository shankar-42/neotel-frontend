import React from "react";
import { CheckCircle, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  CONTACT_ROUTE,
  COVERAGE_MAP_ROUTE,
  SOFT_DARK_BOTTOM_SCRIM,
  SOFT_DARK_HERO_OVERLAY,
  SECTION_BLEND_TOP_FROM_SURFACE,
  SECTION_BLEND_TOP_FROM_SURFACE_LOW,
  SECTION_BLEND_TOP_FROM_SURFACE_LOWEST,
} from "@/utils/constants";
import {
  CTA_OUTLINE_LINK_CLASSES,
  CTA_PRIMARY_LINK_CLASSES_MD,
} from "@/utils/design-tokens";
import {
  INDUSTRIES,
  STARLINK_IMAGE_URL,
  STARLINK_FEATURES,
  VALUES,
  HERO_STATS,
} from "./constants";

export function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <main>
        {/* ── About Hero Section ──────────────────────────────────────────────────────── */}
        <div className="relative w-full bg-tier-1 overflow-hidden">
          <div className={SOFT_DARK_HERO_OVERLAY} />
          <div className={SOFT_DARK_BOTTOM_SCRIM} />
          <div className="relative z-10 pt-32 pb-0 px-8 max-w-screen-2xl mx-auto">
            {/* Hero header */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/10 pb-12 mb-0">
              <div className="max-w-2xl">
                <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] mb-4 block">
                  Infrastructure — Est. 2008
                </span>

                <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter leading-none ">
                  Architecting -
                  <span className="text-primary-fixed-dim block">
                    Future of Connectivity.
                  </span>
                </h1>

                <p className="mt-5 text-on-surface-variant font-light text-base leading-relaxed max-w-md">
                  Explore our global infrastructure stack — fiber backbone, LEO
                  satellite arrays, and 240+ edge nodes engineered for 99.99%
                  uptime.
                </p>
              </div>

              <div className="max-w-xs text-right hidden md:block">
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  By merging terrestrial fiber optics with next-gen satellite
                  arrays, we eliminate the "last mile" and replace it with
                  infinite reach.
                </p>
              </div>
            </div>

            {/* Stat strip */}
            <div className="relative z-10 flex gap-12 items-center py-10">
              {HERO_STATS.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="w-px h-8 bg-outline-variant/30" />}
                  <div>
                    <div className="text-3xl font-headline font-bold text-on-surface">
                      {stat.value}
                      <span className="text-secondary">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-on-surface-variant/60 tracking-widest uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}

              <div className="ml-auto hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
                  Network live
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mission Vision Section ────────────────────────────────────────────────── */}
        <section className="relative py-24 px-8 lg:px-24 bg-surface-container-low">
          <div className={SECTION_BLEND_TOP_FROM_SURFACE_LOWEST} />
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Mission */}
              <div className="md:col-span-7 p-12 glass-panel border-l-[3px] border-primary flex flex-col justify-between min-h-[400px]">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
                    The Mission
                  </span>
                  <h2 className="font-headline text-4xl font-bold text-white mb-6">
                    Democratizing Ultra-High Speed Data on a Global Scale.
                  </h2>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We believe that geography should never dictate opportunity.
                  Our mission is to engineer a seamless digital fabric that
                  connects remote industrial sites, urban hubs, and maritime
                  vessels with identical low-latency precision.
                </p>
              </div>

              {/* Vision */}
              <div className="md:col-span-5 bg-surface-container-high p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 opacity-5 select-none">
                  <Visibility style={{ fontSize: 200 }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase mb-4 block">
                  The Vision
                </span>
                <h3 className="font-headline text-3xl font-bold text-white mb-4">
                  Total Synchronicity.
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  To become the primary nervous system for the global
                  enterprise, where data moves faster than decision-making.
                </p>
              </div>

              {/* Value cards */}
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="md:col-span-4 bg-surface-container-lowest p-8 border-b-2 border-outline-variant/10"
                >
                  <span
                    className="material-symbols-outlined text-primary mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    <value.icon />
                  </span>
                  <h4 className="font-headline text-xl font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Starlink Section ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-8 lg:px-24 bg-surface relative">
          <div className={SECTION_BLEND_TOP_FROM_SURFACE_LOW} />
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative z-10 glass-panel p-2 border border-outline-variant/20 rounded-lg">
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded shadow-2xl w-full"
                  src={STARLINK_IMAGE_URL}
                  alt="Modern satellite terminal array at dusk on a high-tech facility roof"
                />
                {/* Authorized badge */}
                <div className="absolute top-8 -right-8 bg-secondary p-6 rounded shadow-xl hidden md:block">
                  <div className="text-on-secondary font-headline font-black text-2xl tracking-tighter uppercase leading-none">
                    STARLINK
                    <br />
                    AUTHORIZED
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase mb-4 block">
                  Orbital Expertise
                </span>
                <h2 className="font-headline text-5xl font-extrabold text-white leading-tight">
                  THE STARLINK <br />
                  EDGE.
                </h2>
              </div>

              <p className="text-on-surface-variant text-lg leading-relaxed">
                Neotel is a certified Starlink implementation partner. We don't
                just sell dishes; we engineer the integration. Our proprietary
                SD-WAN controllers merge Starlink's LEO constellation with your
                existing infrastructure for unbreakable redundancy.
              </p>

              <ul className="space-y-6">
                {STARLINK_FEATURES.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      <CheckCircle />
                    </span>
                    <div>
                      <span className="block text-white font-bold">
                        {feature.title}
                      </span>
                      <span className="text-sm text-outline">
                        {feature.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Industry Dominance Section ────────────────────────────────────────────── */}
        <section className="relative py-24 px-8 lg:px-24 bg-surface-container-lowest">
          <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
          <div className="max-w-screen-2xl mx-auto mb-16 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-4 block">
                Verticals
              </span>
              <h2 className="font-headline text-4xl font-bold text-white">
                INDUSTRY DOMINANCE.
              </h2>
            </div>
            <div className="hidden md:block text-outline-variant text-sm font-label uppercase tracking-widest">
              Scroll To Explore Sectors [01 — 04]
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.number}
                className="group relative bg-surface-container-low p-8 hover:bg-secondary/5 transition-all duration-500 indicator-stripe-primary h-[350px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-outline-variant font-headline text-4xl opacity-20">
                    {industry.number}
                  </span>
                  <h3 className="font-headline text-xl font-bold text-white mt-4 group-hover:text-secondary transition-colors">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About CTA Section ─────────────────────────────────────────────────────── */}
        <section className="py-24 px-8 lg:px-24 bg-surface-container relative overflow-hidden">
          <div className={`${SECTION_BLEND_TOP_FROM_SURFACE_LOWEST} z-10`} />
          <div className="absolute inset-0 bg-primary/5" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="font-headline text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              READY TO UPGRADE YOUR <br />
              <span className="text-secondary">NETWORK ARCHITECTURE?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
              <Link
                to={COVERAGE_MAP_ROUTE}
                className={CTA_PRIMARY_LINK_CLASSES_MD}
              >
                Download Infrastructure Map
              </Link>
              <Link to={CONTACT_ROUTE} className={CTA_OUTLINE_LINK_CLASSES}>
                Talk to an Architect
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
