// ─── Data ─────────────────────────────────────────────────────────────────────
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import {
  Shield,
  SatelliteAlt,
  Router,
  Security,
  Bolt,
  Hub,
  Cloud,
  AutoAwesome,
} from "@/components/icons/services-icons";
import { CoverageType } from "@/components/world-map";

/** Named region hubs shown as interactive dots on the map */
export const REGION_HUBS = [
  {
    lat: 40.7128,
    lng: -74.006,
    name: "New York",
    type: "LEO" as CoverageType,
    nodes: 12,
    latency: "22ms",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    name: "London",
    type: "Hybrid" as CoverageType,
    nodes: 18,
    latency: "19ms",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    name: "Tokyo",
    type: "LEO" as CoverageType,
    nodes: 14,
    latency: "27ms",
  },
  {
    lat: 34.0522,
    lng: -118.244,
    name: "Los Angeles",
    type: "Terrestrial" as CoverageType,
    nodes: 10,
    latency: "31ms",
  },
  {
    lat: -23.55,
    lng: -46.633,
    name: "São Paulo",
    type: "Hybrid" as CoverageType,
    nodes: 8,
    latency: "38ms",
  },
  {
    lat: 6.5244,
    lng: 3.3792,
    name: "Lagos",
    type: "LEO" as CoverageType,
    nodes: 6,
    latency: "45ms",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    name: "Dubai",
    type: "Terrestrial" as CoverageType,
    nodes: 9,
    latency: "33ms",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    name: "Singapore",
    type: "Hybrid" as CoverageType,
    nodes: 15,
    latency: "24ms",
  },
  {
    lat: -33.869,
    lng: 151.2093,
    name: "Sydney",
    type: "LEO" as CoverageType,
    nodes: 7,
    latency: "41ms",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    name: "Moscow",
    type: "Terrestrial" as CoverageType,
    nodes: 11,
    latency: "29ms",
  },
  {
    lat: 39.9042,
    lng: 116.4074,
    name: "Beijing",
    type: "Hybrid" as CoverageType,
    nodes: 13,
    latency: "26ms",
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    name: "Nairobi",
    type: "LEO" as CoverageType,
    nodes: 5,
    latency: "48ms",
  },
] as const;

/** Arc routes between hubs — typed for filter support */
export const HERO_MAP_DOTS = [
  {
    start: { lat: 40.7128, lng: -74.006 },
    end: { lat: 51.5074, lng: -0.1278 },
    type: "LEO" as CoverageType,
  },
  {
    start: { lat: 35.6762, lng: 139.6503 },
    end: { lat: 34.0522, lng: -118.244 },
    type: "LEO" as CoverageType,
  },
  {
    start: { lat: -23.55, lng: -46.633 },
    end: { lat: 6.5244, lng: 3.3792 },
    type: "Hybrid" as CoverageType,
  },
  {
    start: { lat: 25.2048, lng: 55.2708 },
    end: { lat: 1.3521, lng: 103.8198 },
    type: "Terrestrial" as CoverageType,
  },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: -1.2921, lng: 36.8219 },
    type: "Hybrid" as CoverageType,
  },
  {
    start: { lat: -33.869, lng: 151.2093 },
    end: { lat: 1.3521, lng: 103.8198 },
    type: "LEO" as CoverageType,
  },
  {
    start: { lat: 55.7558, lng: 37.6173 },
    end: { lat: 39.9042, lng: 116.4074 },
    type: "Terrestrial" as CoverageType,
  },
] as const;

export const STAT_CARDS = [
  {
    label: "Bandwidth Cap",
    value: "10 Gbps+",
    valueClassName: "text-primary",
    footnote: "†",
  },
  {
    label: "Availability",
    value: "99.99%",
    valueClassName: "text-secondary",
    footnote: "†",
  },
] as const;

export const SYSTEM_FEATURES = [
  { label: "Dual-Polarized Antennas", icon: Router },
  { label: "SpaceX Ground Gateways", icon: Security },
  { label: "AES-256 Link Encryption", icon: Bolt },
] as const;

export const ARCHITECTURE_ITEMS = [
  {
    Icon: Hub,
    title: "Terrestrial Backbone",
    description:
      "Integrated with 14 global sub-sea cable landing stations to ensure data flows through the most efficient path available.",
    color: "text-primary",
  },
  {
    Icon: SatelliteAlt,
    title: "LEO Integration",
    description:
      "Low Earth Orbit satellites reduce packet travel time, making real-time voice and video conferencing possible anywhere.",
    color: "text-secondary",
  },
  {
    Icon: Cloud,
    title: "Cloud Edge Connect",
    description:
      "Direct peering with AWS, Azure, and Google Cloud regions directly from the satellite downlink for zero-hop performance.",
    color: "text-primary",
  },
  {
    Icon: AutoAwesome,
    title: "Adaptive Mesh",
    description:
      "AI-driven traffic routing shifts bandwidth dynamically to areas of high demand or critical emergency priority.",
    color: "text-secondary",
  },
] as const;

export const INDUSTRIES = [
  {
    id: "mining",
    title: "Deep-Pit Mining",
    description:
      "Remote autonomous hauling systems and real-time telemetry for subsurface operations in the Australian Outback and Andes.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWLABWKbOfcw-iz5YVnf7kGijOS0iaA_lsZRrAkERS2zjbRvLFPWreGRZe1WBK_sg45762au8J0vN-dIvlistgTgYNEYLDqlR3sfaZdJ3yPu1qSlIJOT9VJGVvA-3VDih1D6aGkHcALCtmKftzFubFlWwoWI2WHAYSa74h7G7MTpqRTwqYl7_FtAdahnyUrYWoqsnKLfwuBFCI7M_YplkK92kjVSOzaE-cZcDvxnNqJBprjmMfno5DJRrM9f3wEBk3JHsotAS3QqU",
    imageAlt:
      "Heavy industrial mining equipment operating in a deep open pit mine",
    accent: "border-primary",
  },
  {
    id: "maritime",
    title: "Maritime & Offshore",
    description:
      "Global fleet management and crew welfare via continuous high-bandwidth links in high seas.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdQOla1XOe4yPPHeOJCkWQfaNiK-4udZCWX0sSC3wi1B4fG7ZaAIgvZEZpgkifRI6ThLTvmzOM5txuX2AAZoIXhptxeZQJKUYxEu4FZUJ5D_zeNU88SJZr15EhXGz64ED9B3_G9JXL5ivM3OkG7lW1z-IqxTG3JvENxVJpgkCnFqwMgV3-NJchjOznZEB-tC8j6SGMxt8ZCviNuBIFQlb7gryIx0IqpPSOcYufN3XwT0GxSY-TKNBeD6p5EsiLNvXo9mWn3mlH0uA",
    imageAlt: "Large container cargo ship navigating rough ocean waters",
    accent: "border-secondary",
    Icon: DirectionsBoatIcon,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Encrypted tactical communication networks for defence, emergency services, and public infrastructure — rated for classified workloads.",
    imageUrl:
      "https://images.unsplash.com/photo-1616873354936-b9e21b744c54?w=800&q=80",
    imageAlt:
      "Government operations center with secure communications equipment",
    accent: "border-white/30",
    Icon: Shield,
  },
  {
    id: "rural",
    title: "Rural Enterprise",
    description:
      "Broadband connectivity for agriculture, remote mining camps, and distributed worksites beyond the reach of any cable network.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJpiM5E3ag2r78d1poimdqHgJDTtiUtS6mCAB8QN1V3GYdqNNA5mvLe7CnTNCQRZyzwVTC7a0RxsvymM14Ogo8HOMmG1mR5sO12C8KYKgoZGo25st1NMuEYbdjPCmaKTGkyaHeQHV9WVa_9MFESEMqbqpezLKK9mIHm8K7o-sfwAtfAmZ2-tgWEFrytGu0K_6M2ZlNhVW08bT9qeK1MUTv3Q-Yb5qcivbn6EAVllg6-sD4pEU006TCn3nIg146r44YLYUeWeu_RxY",
    imageAlt: "Aerial view of vast agricultural farmland during sunset",
    accent: "border-tertiary",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────
