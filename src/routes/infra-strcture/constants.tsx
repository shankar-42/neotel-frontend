// ─── Assets & Data ────────────────────────────────────────────────────────────
import { Speed, Security, Hub } from "@/components/icons/services-icons";

// const HERO_IMAGE_URL =
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuDcZXVUve6n8L5MH4ezoqx7W_e8bW9Mm7JTJlBhUXSpfNuFGY_jcpSpBldg2Af9CtDzx_o5jAY8N8MPwDacPrh9foRqZxUHcb3Utdptb6_WqqJQOlZu2p9xZw8ZllMK3w3I_MOpYAWzuKusK_kaj4URBu9lAXgZHWOR8qQp0CsZeJsQ2J1bX1pEAxL8lKNtOt4t9dxWkZjELalslrJBgDsdFV_aIE89Ve6Dk76o15R1rSQFtMpMvhq79pflY6hYrAWWwK0iYhWesv8";

export const STARLINK_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9Pb-IvJ1D2Ocxcl3AsajX9kMRGFKbLfFrIvvya1K35_kP1AYfQorbM0Bx5D_zY0bw1v9f-FyxS7lajxp4lpCklj6elp8yNfWT7HHB_XeGVlm6tWdRrPKJtF7eOWVhnkG8VNRvFwyxcZrlAb56YeNimf1d1wwXJM9A5a_aB9ptdHm-ajDNvvOGliPCy-wtZyDxxmNCg_Z4RnF90yu3AylVijQa2X4BuHWPG8zLggFHITp9AtpJl-nlxLI0Vq_QgxZoMquYYzMTig";

export const HERO_STATS = [
  { value: "99.99", suffix: "%", label: "Uptime SLA" },
  { value: "240", suffix: "+", label: "Global Nodes" },
] as const;

export const VALUES = [
  {
    icon: Security,
    title: "Absolute Security",
    description:
      "Encrypted hardware layers designed for sovereign-grade protection.",
  },
  {
    icon: Speed,
    title: "Radical Speed",
    description: "Fiber-backbone optimization reducing hop-count by 40%.",
  },
  {
    icon: Hub,
    title: "Omnichannel Nodes",
    description:
      "Hybrid routing switching between satellite and terrestrial automatically.",
  },
] as const;

export const STARLINK_FEATURES = [
  {
    title: "Maritime & Mobile Deployment",
    description:
      "High-performance tracking for assets in motion, anywhere on Earth.",
  },
  {
    title: "Custom Antenna Arrays",
    description:
      "Engineered mounting solutions for extreme environments (-40°C to +50°C).",
  },
] as const;

export const INDUSTRIES = [
  {
    number: "01",
    title: "Mining & Energy",
    description:
      "Connecting deep-pit mining operations and offshore rigs with low-latency telemetry and worker welfare networks.",
  },
  {
    number: "02",
    title: "Public Sector",
    description:
      "Secure government-grade backhaul for municipal services, emergency response, and national defense agencies.",
  },
  {
    number: "03",
    title: "Maritime Logistics",
    description:
      "Enabling real-time cargo tracking and crew connectivity across international waters via LEO satellite fleets.",
  },
  {
    number: "04",
    title: "Enterprise FinTech",
    description:
      "High-frequency trading connections requiring millisecond-level precision across global stock exchanges.",
  },
] as const;

// ── Components ───────────────────────────────────────────────────────────────
