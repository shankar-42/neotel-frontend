import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowForward, Public } from "@/components/icons/services-icons";
import HubIcon from "@mui/icons-material/Hub";
import ActivityIcon from "@mui/icons-material/Insights";
import WrenchIcon from "@mui/icons-material/Build";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import {
  CONTACT_ROUTE,
  NETWORK_STATUS_ROUTE,
  SOFT_DARK_BOTTOM_SCRIM,
  SOFT_DARK_HERO_OVERLAY,
  TECHNICAL_SPECS_ROUTE,
} from "@/utils/constants";
import { colors } from "@/lib/tokens";
import {
  CTA_OUTLINE_LINK_CLASSES,
  CTA_PRIMARY_LINK_CLASSES_MD,
  RING_PANEL_GLOW_CLASSES,
} from "@/utils/design-tokens";

// ─── Data ─────────────────────────────────────────────────────────────────────

const IMAGES = {
  fiber:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0tWE4uWu-Ir3VqexyX5zh_1M325l5FlLzf19E6fhJMozV7_bVXgoIMM341X_29L5PuF92itsso2wlnE6wOpO6ohAOKiFk8lLIMazmd2fd2W7ShTVfNrVkqwe_u952eMICOcevGjQpxYoEAYdoynoL-gMKdAg9OHht7jEo6qKsOU2AwImVT4zn5WVxWpWQ4TaX9bUI-6HK3_hgPT4pYUP-xaQVYqqek8o6UUshoFJTNgc-WFr5BUIUL_xwvIgtKQTSRHtG_LhEFJI",
  dashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB95o0haOauQ6iWSwAK80uX1aJnbjxyJjAQ_4q6r1e2Ri6aaBEd9tTCiD98cDBdboUOYs6CF9wdf9Ibd3kF506zaltvWNJeocU4M6_Vvweuq5K6Lsz1CwaABPkI14KHn3O-ls1K_7VF9NqSKswuR1bhRMC_twWGKyT6PhNIqp00MugFCEhQBodalQQkO5vpzaIPtooaIUGKRFLXV7GfZ1n6pXWiNm5DBWva_ZoUmwwIZLxIsxUGNj6G7yKnuW5dg1vcc3-4iRR-aJw",
};

const HERO_STATS = [
  { value: "4HR", label: "Critical response SLA" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "Global", label: "Dispatch coverage" },
  { value: "72HR", label: "Deployment lead time" },
];

const SERVICES_DATA = {
  starlink: {
    tag: "Tier 1 Deployment",
    title: "Starlink Installation & Setup",
    description:
      "Certified precision installation of high-performance satellite terminals with optimized signal alignment and ballistic-grade hardware mounting.",
    benefits: [
      {
        label: "Sub-milliradian Alignment",
        context: "Dish positioned to within 0.1° for peak throughput.",
      },
      {
        label: "Weather-hardened Mounts",
        context: "Grade-5 titanium brackets rated for 200 km/h winds.",
      },
      {
        label: "Signal Path Optimization",
        context: "AI-selected beam routing for your exact coordinates.",
      },
    ],
    useCases: [
      "Residential Luxury",
      "Commercial High-Rise",
      "Off-Grid Estates",
    ],
  },
  enterprise: {
    tag: "System Architecture",
    title: "Enterprise Network Integration",
    description:
      "Seamlessly merging Starlink technology with existing MPLS, SD-WAN, and local LAN environments for unified throughput.",
    featureTitle: "SD-WAN orchestration",
    featureDesc:
      "Automated failover and load balancing across multi-carrier backhauls.",
  },
  remote: {
    title: "Remote Site Connectivity",
    description:
      "Ubiquitous high-speed access for mining, maritime, and research outposts regardless of geographical isolation.",
    items: [
      { label: "Mining Operations", detail: "Subsurface telemetry-ready" },
      { label: "Offshore Vessels", detail: "Mid-ocean phased-array links" },
      { label: "Research Outposts", detail: "Polar & equatorial coverage" },
    ],
  },
  managed: {
    title: "Managed Services",
    description:
      "24/7/365 proactive NOC monitoring with AI-driven threat detection and traffic optimization.",
    features: [
      {
        id: "01",
        text: "Real-time latency shielding",
        context: "Sub-5ms rerouting on congestion",
      },
      {
        id: "02",
        text: "Encrypted data tunneling",
        context: "AES-256 over every uplink",
      },
      {
        id: "03",
        text: "Dynamic traffic shaping",
        context: "Automated QoS for critical apps",
      },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ServicesPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans">
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="relative w-full bg-tier-1 overflow-hidden">
          <div className={SOFT_DARK_HERO_OVERLAY} />
          <div className={SOFT_DARK_BOTTOM_SCRIM} />
          <section className="relative z-10 pt-32 pb-0 px-8 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/10 pb-12 mb-0">
              <div className="max-w-2xl">
                <span className="text-secondary font-label text-[10px] tracking-[0.25em] uppercase mb-6 block">
                  Architecting Connectivity
                </span>
                <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter text-on-background mb-8">
                  Mission Critical <br />
                  {/* Changed from text-gradient-heading to text-primary */}
                  <span className="text-primary block">Infrastructure.</span>
                </h1>
                <p className="text-on-surface text-lg leading-relaxed max-w-xl mb-8">
                  We deploy advanced network solutions across the most
                  challenging environments on Earth, merging satellite precision
                  with enterprise-grade reliability.
                </p>
                <Link
                  to={CONTACT_ROUTE}
                  className={cn(CTA_PRIMARY_LINK_CLASSES_MD, "gap-2")}>
                  Talk to an Architect
                  <ArrowForward size={14} />
                </Link>
              </div>
              <div className="max-w-xs text-right hidden md:block">
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  From remote deployment to lifecycle operations, every NEOTEL
                  service module is designed to be resilient, observable, and
                  enterprise-ready.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ── Stats bar — above fold trust signals ───────────────────────── */}
        <section className="bg-surface-container-low py-8 border-b border-outline-variant/10">
          <div className="px-8 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 pl-4 border-l-2 ${
                  i % 2 === 0 ? "border-secondary" : "border-primary/50"
                }`}>
                <span className="font-headline text-2xl font-black tracking-tighter text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Service Grid ──────────────────────────────────────────────────── */}
        <section className="bg-surface py-16">
          <div className="px-8 max-w-screen-2xl mx-auto space-y-4 pb-20">
            {/* Row 1 — Starlink + Enterprise */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              {/* Starlink Installation */}
              <div className="md:col-span-7 bg-surface-container-low/95 p-10 relative overflow-hidden group border border-outline-variant/15 rounded-lg h-full flex flex-col">
                {/* Satellite icon — decorative, revealed on hover */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <HubIcon sx={{ fontSize: 56, color: colors.secondary }} />
                </div>

                <div className="relative z-10 flex flex-col grow">
                  <div className="mb-10">
                    {/* Kicker — only level using all-caps */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase mb-5 border-l-2 border-secondary">
                      {SERVICES_DATA.starlink.tag}
                    </span>
                    <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">
                      {SERVICES_DATA.starlink.title}
                    </h2>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                      {SERVICES_DATA.starlink.description}
                    </p>
                  </div>

                  {/* Benefits + Use Cases */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10 mt-auto">
                    {/* Benefits with context */}
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                        Key Benefits
                      </h4>
                      <ul className="space-y-4">
                        {SERVICES_DATA.starlink.benefits.map((item) => (
                          <li key={item.label}>
                            <div className="flex items-start gap-2 mb-0.5">
                              <span className="mt-1.5 shrink-0 w-1 h-1 bg-secondary rounded-full" />
                              <span className="text-sm font-medium text-on-surface">
                                {item.label}
                              </span>
                            </div>
                            <p className="ml-3 text-[11px] text-outline leading-snug">
                              {item.context}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Use Cases */}
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                        Use Cases
                      </h4>
                      <ul className="space-y-3">
                        {SERVICES_DATA.starlink.useCases.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <CheckIcon
                              sx={{ fontSize: 14, color: colors.secondary }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/30 to-transparent" />
              </div>

              {/* Enterprise Network Integration */}
              <div className="md:col-span-5 bg-surface-container-high/95 p-10 relative flex flex-col justify-between overflow-hidden group rounded-lg h-full border border-outline-variant/15">
                <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src={IMAGES.fiber}
                    alt="Fiber optics"
                  />
                </div>

                <div className="relative z-10">
                  <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3 block">
                    {SERVICES_DATA.enterprise.tag}
                  </span>
                  <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 leading-tight">
                    {SERVICES_DATA.enterprise.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                    {SERVICES_DATA.enterprise.description}
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="p-4 bg-surface-container-lowest border-l-2 border-primary rounded-sm">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface mb-1">
                      {SERVICES_DATA.enterprise.featureTitle}
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      {SERVICES_DATA.enterprise.featureDesc}
                    </p>
                  </div>

                  {/* Ghost button with affordance cues */}
                  <Link
                    to={TECHNICAL_SPECS_ROUTE}
                    className="group/btn w-full flex items-center justify-between py-3 px-4 border border-outline-variant/30 rounded-md text-on-surface text-xs font-bold uppercase tracking-widest hover:border-primary/50 hover:bg-surface-container-lowest transition-all duration-200 cursor-pointer">
                    View Specifications
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">
                      <ArrowForward size={14} color="var(--color-primary)" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2 — Remote Site + Managed Services */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              {/* Remote Site Connectivity */}
              <div className="md:col-span-4 bg-surface-container-low/95 p-10 flex flex-col justify-between border border-outline-variant/15 rounded-lg h-full">
                <div>
                  <Public size={32} variant="secondary" className="mb-6" />
                  <h2 className="text-2xl font-headline font-bold text-on-surface mb-3">
                    {SERVICES_DATA.remote.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                    {SERVICES_DATA.remote.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {SERVICES_DATA.remote.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 bg-surface-container rounded-md">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface block">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-outline">
                          {item.detail}
                        </span>
                      </div>
                      <CheckIcon
                        sx={{ fontSize: 16, color: colors.secondary }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Managed Services — full content, decorative panel hidden on mobile */}
              <div className="md:col-span-8 bg-surface-container-low/95 overflow-hidden group border border-outline-variant/15 rounded-lg h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Content column */}
                  <div className="p-10 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3 block">
                        24/7 Operations
                      </span>
                      <h2 className="text-4xl font-headline font-black text-on-surface mb-4 leading-tight">
                        {SERVICES_DATA.managed.title}
                      </h2>
                      <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                        {SERVICES_DATA.managed.description}
                      </p>
                      <ul className="space-y-5">
                        {SERVICES_DATA.managed.features.map((feat) => (
                          <li key={feat.id} className="flex gap-4">
                            <span className="flex-none w-8 h-8 flex items-center justify-center bg-primary/10 text-primary text-xs font-black rounded-sm">
                              {feat.id}
                            </span>
                            <div>
                              <div className="text-sm font-medium text-on-surface mb-0.5">
                                {feat.text}
                              </div>
                              <div className="text-[11px] text-outline">
                                {feat.context}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Ghost text link — only secondary action in this card */}
                    <Link
                      to={NETWORK_STATUS_ROUTE}
                      className="group/btn mt-10 self-start flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all duration-200 cursor-pointer">
                      Explore Portal
                      <ArrowForward size={14} color="var(--color-secondary)" />
                    </Link>
                  </div>

                  {/* Decorative ring panel — hidden on mobile so it doesn't render as empty */}
                  <div className="hidden md:relative md:flex bg-surface-container-high items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent" />
                    <img
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                      src={IMAGES.dashboard}
                      alt="Dashboard"
                    />
                    {/* Concentric rings */}
                    <div className="relative w-56 h-56 border border-primary/20 flex items-center justify-center rounded-full">
                      <div className="w-40 h-40 border border-primary/40 flex items-center justify-center rounded-full animate-pulse">
                        <div
                          className={cn(
                            "w-28 h-28 border-2 border-secondary flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm",
                            RING_PANEL_GLOW_CLASSES,
                          )}>
                          <ActivityIcon
                            sx={{ fontSize: 36, color: colors.secondary }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 — Support Banner (stats removed — now above fold) */}
            <div className="bg-surface-container-high/80 backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-8 border-t-2 border-secondary rounded-lg">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 rounded-lg">
                  <WrenchIcon sx={{ fontSize: 28, color: colors.primary }} />
                </div>
                <div>
                  <h2 className="text-lg font-headline font-bold text-on-surface">
                    Support & Maintenance
                  </h2>
                  <p className="text-[10px] text-outline uppercase tracking-widest mt-0.5">
                    99.9% SLA · On-site field engineering · Lifecycle management
                  </p>
                </div>
              </div>
              {/* Single primary CTA for this section */}
              <Link
                to={CONTACT_ROUTE}
                className={cn(
                  CTA_PRIMARY_LINK_CLASSES_MD,
                  "shrink-0 px-8 py-3",
                )}>
                Submit a Ticket
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24">
          <div className="px-8 max-w-4xl mx-auto text-center">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.25em] mb-6 block">
              Get started
            </span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-6 tracking-tighter leading-none">
              Ready to upgrade?{" "}
              <span className="text-gradient-heading">Let's talk.</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
              Contact our systems architects to design a bespoke network
              solution tailored to your operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={CONTACT_ROUTE} className={CTA_PRIMARY_LINK_CLASSES_MD}>
                Contact Sales
              </Link>
              <Link
                to={TECHNICAL_SPECS_ROUTE}
                className={CTA_OUTLINE_LINK_CLASSES}>
                Technical Specs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
