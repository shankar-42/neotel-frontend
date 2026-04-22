import { useState } from "react";
import {
  ArrowForward,
  ArrowOutward,
  Hub,
  Public,
  SatelliteAlt,
  SettingsSuggest,
  SupportAgent,
} from "@/components/icons/services-icons";
import { Link } from "react-router-dom";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";
import {
  CTA_OUTLINE_LINK_CLASSES_HERO_SECONDARY,
  CTA_PRIMARY_LINK_CLASSES,
  CTA_PRIMARY_LINK_CLASSES_LG,
  HEADING_GRADIENT_TEXT_CLASSES, // Added import to map the hero gradient class dynamically
} from "@/utils/design-tokens";
import WorldMap from "@/components/world-map";
import { ParallaxStarfield } from "@/components/ui/ParallaxStarfield";
import { OrbitRings } from "@/components/ui/OrbitRings";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  CONTACT_ROUTE,
  REPORTS_ROUTE,
  SECTION_BLEND_BOTTOM_TO_SURFACE,
  SECTION_BLEND_TOP_FROM_SURFACE,
  SECTION_BLEND_TOP_FROM_SURFACE_LOW,
  SOFT_DARK_BOTTOM_SCRIM,
  SOFT_DARK_HERO_OVERLAY,
  SOFT_DARK_TOP_SCRIM,
  SOOTHING_RADIAL_ACCENT,
  TECHNICAL_SPECS_ROUTE,
} from "@/utils/constants";
import {
  ARCTIC_MAP_DOTS,
  ARCTIC_REGION_HUBS,
  MARITIME_MAP_DOTS,
  MARITIME_REGION_HUBS,
  RELIABILITY_FEATURES,
  CLIENT_LOGOS,
  HOME_NEWS_PREVIEW_ITEMS,
  HOME_BLOG_PREVIEW_ITEMS,
  TESTIMONIALS,
  COVERAGE_POINTS,
} from "./constants";

// ─── Page ─────────────────────────────────────────────────────────────────────

export function HomePage() {
  const [activePoint, setActivePoint] = useState<"01" | "02">("01");
  const isArctic = activePoint === "01";

  // Swapped map colors to assign Teal (primary) directly to the active map variant.
  const mapDots = isArctic ? ARCTIC_MAP_DOTS : MARITIME_MAP_DOTS;
  const mapRegions = isArctic ? ARCTIC_REGION_HUBS : MARITIME_REGION_HUBS;
  const mapColor = isArctic ? colors.primary : colors.secondary;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative flex h-[972px] items-center overflow-hidden bg-tier-1">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            decoding="async"
            // src="/space.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className={SOFT_DARK_HERO_OVERLAY} />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent" />
          {/* Bottom fade — blends hero into next section */}
          <div className={SOFT_DARK_BOTTOM_SCRIM} />
        </div>

        {/* ── Animated overlay layers ─────────────────────────────────── */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <ParallaxStarfield />
          <OrbitRings className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-8">
          <div className="max-w-3xl">
            <StatusBadge label="Authorized Starlink Partner" className="mb-6" />
            <h1 className="mb-8 font-headline text-6xl font-bold leading-[1.18] tracking-tighter text-on-surface md:text-8xl">
              Enterprise <br />
              {/* Dynamic mapped gradient for the teal-focused design target */}
              <span className={HEADING_GRADIENT_TEXT_CLASSES}>
                Connectivity
              </span>
              <br />
              <span className="text-3xl font-light text-on-surface-variant md:text-5xl">
                Powered by Starlink
              </span>
            </h1>
            <p className="mb-10 max-w-lg text-xl font-light leading-relaxed text-on-surface-variant">
              Zero downtime for global enterprises — from the Arctic to open
              ocean. Deployed in 72 hours, anywhere on the planet.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to={CONTACT_ROUTE} className={CTA_PRIMARY_LINK_CLASSES}>
                Initialize Deployment
              </Link>
              <Link
                to="/contact"
                className={CTA_OUTLINE_LINK_CLASSES_HERO_SECONDARY}
              >
                Talk to an Architect
                <ArrowOutward size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden xl:block">
          {/* Updated Network Status classes to match the primary teal styling */}
          <div className="glass-panel border-r-2 border-primary/50 p-6">
            <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-primary">
              Network Status
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-4xl font-bold tracking-tighter text-white">
                99.9
              </span>
              <span className="font-headline text-lg tracking-tighter text-primary">
                % SLA
              </span>
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden bg-surface-container">
              <div className="h-full w-3/4 bg-primary" />
            </div>
            <p className="mt-2 text-[9px] uppercase tracking-wider text-outline">
              vs. 99.5% industry avg.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust bar ───────────────────────────────────────────────────── */}
      <section className="relative bg-surface py-16 overflow-hidden">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className="mx-auto max-w-screen-2xl px-8">
          <p className="mb-10 text-center font-label text-[10px] uppercase tracking-[0.3em] text-outline">
            Trusted by leading enterprises
          </p>

          {/* Logo strip */}
          <div className="mb-14 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {CLIENT_LOGOS.map((name) => (
              <span
                key={name}
                className="font-headline text-xl font-black tracking-widest text-on-surface-variant/50 transition-colors duration-300 hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Testimonial carousel */}
          <TestimonialCarousel testimonials={TESTIMONIALS} interval={5000} />
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section className="relative bg-surface px-8 py-32 overflow-hidden">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        {/* top scrim — blends from hero bottom fade */}
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <SectionLabel color="primary">Core Capabilities</SectionLabel>
              <h2 className="font-headline text-4xl font-bold text-on-surface md:text-5xl">
                Integrated Ecosystem
              </h2>
            </div>
            <p className="max-w-md font-light leading-relaxed text-on-surface-variant/80">
              Beyond hardware installation, we provide the backbone for
              enterprise-grade digital infrastructure anywhere in the
              hemisphere.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="group relative h-[400px] overflow-hidden rounded-lg bg-surface-container-low md:col-span-8">
              <div className="absolute inset-0 z-0"></div>
              <div className="relative z-10 flex h-full flex-col justify-end p-10">
                {/* Changed to text-primary and SatelliteAlt variant strictly set to primary */}
                <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                  <SatelliteAlt variant="primary" size={32} />
                </span>
                <h3 className="mb-4 font-headline text-3xl font-bold">
                  Starlink Installation
                </h3>
                <p className="max-w-md font-light text-on-surface-variant">
                  Rapid mobilization and expert alignment of enterprise-grade
                  satellite terminals for maximum throughput.
                </p>
              </div>
            </div>

            {/* Changed border logic and variant specifically for the purple accent requirement */}
            <div className="flex flex-col justify-between rounded-lg border-l-2 border-secondary/20 bg-surface-container-high p-10 md:col-span-4">
              <div>
                <Hub variant="secondary" size={32} className="mb-6 block" />
                <h3 className="mb-4 font-headline text-2xl font-bold">
                  Network Integration
                </h3>
                <p className="text-sm font-light leading-relaxed text-on-surface-variant">
                  Seamless bridging of satellite uplinks with existing SD-WAN
                  and local infrastructures.
                </p>
              </div>
              <Link
                to={TECHNICAL_SPECS_ROUTE}
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary"
              >
                Explore Protocol
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  <ArrowForward />
                </span>
              </Link>
            </div>

            {/* Adjusted border and text colors globally pointing strictly to the updated primary color context */}
            <div className="flex flex-col justify-between rounded-lg border-b-2 border-primary/20 bg-surface-container-low p-10 md:col-span-4">
              <div>
                <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                  <Public size={32} />
                </span>
                <h3 className="mb-4 font-headline text-2xl font-bold">
                  Remote Connectivity
                </h3>
                <p className="text-sm font-light leading-relaxed text-on-surface-variant">
                  Uninterrupted access in maritime, arctic, and deep wilderness
                  environments.
                </p>
              </div>
            </div>

            <div className="group relative h-[300px] overflow-hidden rounded-lg bg-surface-container-high md:col-span-8">
              <div className="absolute inset-0 z-0"></div>
              <div className="relative z-10 flex h-full items-center justify-between p-10">
                <div>
                  <h3 className="mb-2 font-headline text-3xl font-bold">
                    Managed Services
                  </h3>
                  <p className="max-w-sm font-light text-on-surface-variant">
                    24/7 NOC monitoring, threat detection, and bandwidth
                    optimization as a service.
                  </p>
                </div>
                <Link
                  to={CONTACT_ROUTE}
                  className="group inline-flex rounded-full bg-surface-bright p-4 text-on-surface-variant transition-colors hover:bg-primary hover:text-on-primary cursor-pointer"
                >
                  <SettingsSuggest variant="default" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-container-low px-8 py-24">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOFT_DARK_BOTTOM_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className={SECTION_BLEND_BOTTOM_TO_SURFACE} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              {/* Switched to primary text accent */}
              <SectionLabel color="primary">Global Reach</SectionLabel>
              <h2 className="mb-8 font-headline text-4xl font-bold text-on-surface md:text-5xl">
                No Dead Zones.
                <br />
                Just Dark Skies.
              </h2>
              <div className="space-y-4">
                {COVERAGE_POINTS.map((point) => {
                  const isActive = activePoint === point.number;
                  return (
                    <button
                      key={point.number}
                      onClick={() =>
                        setActivePoint(point.number as "01" | "02")
                      }
                      className={`w-full text-left flex gap-6 rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-l-4 border-primary bg-surface-container-high shadow-lg"
                          : "border-l-4 border-transparent hover:bg-surface-container-high hover:border-outline-variant/30"
                      }`}
                    >
                      <span
                        className={`font-headline text-xl font-bold transition-colors ${
                          isActive ? "text-primary" : "text-outline"
                        }`}
                      >
                        {point.number}
                      </span>
                      <div className="flex-1">
                        <h4
                          className={`mb-1 font-bold transition-colors ${
                            isActive ? "text-white" : "text-on-surface-variant"
                          }`}
                        >
                          {point.title}
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          {point.description}
                        </p>
                        {isActive && (
                          <div className="mt-3 flex items-center gap-2">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                              {isArctic
                                ? "6 Arctic nodes active"
                                : "10 maritime ports online"}
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
              <WorldMap
                key={activePoint}
                dots={mapDots}
                regions={mapRegions}
                lineColor={mapColor}
              />
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <div
                  className="glass-panel flex items-center gap-2 rounded px-3 py-1.5 border border-outline-variant/20 transition-all duration-300"
                  style={{ borderColor: `${mapColor}30` }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: mapColor }}
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full"
                      style={{ background: mapColor }}
                    />
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-white">
                    {isArctic ? "Arctic Coverage" : "Maritime Transit"}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface-container-low/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reliability ─────────────────────────────────────────────────── */}
      <section className="relative bg-surface px-8 py-32 overflow-hidden">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-24 text-center">
            <h2 className="font-headline text-4xl font-bold text-on-surface md:text-5xl">
              Precision Reliability
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {RELIABILITY_FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isPrimary = feature.accentColor === "primary";
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-lg bg-surface-container-low p-10 transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
                >
                  {/* Accent bar — visible at rest (1/4), full on hover */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 w-[2px] transition-all duration-500 group-hover:h-full",
                      isPrimary ? "bg-primary h-1/4" : "bg-secondary h-1/4",
                    )}
                  />
                  {/* Icon with tinted bg */}
                  <div
                    className={cn(
                      "mb-8 flex h-16 w-16 items-center justify-center rounded-lg transition-colors duration-300",
                      isPrimary
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-secondary/10 group-hover:bg-secondary/20",
                    )}
                  >
                    <Icon variant={feature.accentColor} size={28} />
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-light leading-relaxed text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Trust section removed — consolidated into trust bar below hero */}

      <section className="relative bg-surface px-8 py-24 overflow-hidden">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel color="primary">
                Latest News & Insights
              </SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Mission-Critical Updates
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-white transition-colors"
            >
              Explore all news
              <span className="material-symbols-outlined text-base">
                <ArrowForward />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {HOME_NEWS_PREVIEW_ITEMS.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group">
                <article className="rounded-lg overflow-hidden bg-surface-container-low border border-transparent hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={
                        item.imageUrl ??
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=960&h=540&fit=crop"
                      }
                      alt={item.imageAlt ?? item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 px-2 py-1 bg-background/80 text-primary text-[9px] uppercase tracking-widest font-black">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <time className="mb-3 text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {item.date}
                    </time>
                    <h3 className="mb-3 text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed grow">
                      {item.excerpt}
                    </p>
                    <div className="mt-6 pt-4 border-t border-outline-variant/10 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary group-hover:text-white transition-colors">
                      Read Article
                      <ArrowOutward
                        size={14}
                        variant="primary"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-container-low px-8 py-24 overflow-hidden">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOFT_DARK_BOTTOM_SCRIM} />
        <div className={SOOTHING_RADIAL_ACCENT} />
        <div className={SECTION_BLEND_TOP_FROM_SURFACE} />
        <div className={SECTION_BLEND_BOTTOM_TO_SURFACE} />
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel color="primary">From the Blog</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Architecture Deep Dives
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-white transition-colors"
            >
              View blog collection
              <span className="material-symbols-outlined text-base">
                <ArrowForward />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {HOME_BLOG_PREVIEW_ITEMS.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="group"
              >
                <article className="overflow-hidden rounded-lg border border-transparent hover:border-primary/20 bg-surface-container-high transition-all duration-300 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={post.coverImageUrl}
                        alt={post.coverImageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="mb-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {post.category} / {post.date}
                      </div>
                      <h3 className="mb-3 text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary group-hover:text-white transition-colors">
                        Read detail
                        <span className="material-symbols-outlined text-base">
                          <ArrowForward />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface px-8 py-32">
        <div className={SOFT_DARK_TOP_SCRIM} />
        <div className={SOFT_DARK_BOTTOM_SCRIM} />
        {/* top scrim — blends from blog section's surface-container-low */}
        <div className={SECTION_BLEND_TOP_FROM_SURFACE_LOW} />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-10 font-headline text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
            Ready to connect anywhere?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-on-surface-variant">
            Start your deployment today. Neotel provides end-to-end hardware,
            configuration, and maintenance.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to={REPORTS_ROUTE}
              className={cn(
                CTA_PRIMARY_LINK_CLASSES_LG,
                "inline-flex items-center gap-3",
              )}
            >
              Request System Spec
              <ArrowOutward size={18} />
            </Link>
            <Link
              to={CONTACT_ROUTE}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-white"
            >
              Consult an Engineer
              <SupportAgent size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
