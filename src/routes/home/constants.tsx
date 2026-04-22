import { NEWS_CARD_ITEMS } from "@/routes/news/constants";
import { BLOG_POST_PREVIEWS } from "@/routes/blogs/constants";
import type { ReliabilityFeature } from "@/types";
import {
  Bolt,
  SupportAgent,
  Security,
} from "@/components/icons/services-icons";

export const COVERAGE_POINTS = [
  {
    number: "01",
    title: "Arctic Coverage",
    description:
      "Full throughput availability even in high-latitude environments.",
  },
  {
    number: "02",
    title: "Maritime Transit",
    description:
      "Stay connected during mid-ocean crossings with phased-array technology.",
  },
] as const;

export const ARCTIC_MAP_DOTS = [
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: 34.0522, lng: -118.2437 },
    type: "LEO" as const,
  },
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: -15.7975, lng: -47.8919 },
    type: "LEO" as const,
  },
  {
    start: { lat: -15.7975, lng: -47.8919 },
    end: { lat: 38.7223, lng: -9.1393 },
    type: "Hybrid" as const,
  },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: 28.6139, lng: 77.209 },
    type: "Terrestrial" as const,
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: 43.1332, lng: 131.9113 },
    type: "LEO" as const,
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: -1.2921, lng: 36.8219 },
    type: "Hybrid" as const,
  },
  {
    start: { lat: 78.2232, lng: 15.6467 },
    end: { lat: 64.2008, lng: -149.4937 },
    type: "LEO" as const,
  },
];

export const ARCTIC_REGION_HUBS = [
  {
    lat: 64.2008,
    lng: -149.4937,
    name: "Fairbanks Hub",
    type: "LEO" as const,
    nodes: 8,
    latency: "18ms",
  },
  {
    lat: 78.2232,
    lng: 15.6467,
    name: "Svalbard Station",
    type: "LEO" as const,
    nodes: 4,
    latency: "22ms",
  },
  {
    lat: 69.6492,
    lng: 18.9553,
    name: "Tromsø Gateway",
    type: "Hybrid" as const,
    nodes: 6,
    latency: "28ms",
  },
  {
    lat: 66.5,
    lng: -20.0,
    name: "Iceland Node",
    type: "Terrestrial" as const,
    nodes: 5,
    latency: "31ms",
  },
  {
    lat: 60.472,
    lng: 8.4689,
    name: "Oslo Relay",
    type: "Terrestrial" as const,
    nodes: 9,
    latency: "25ms",
  },
  {
    lat: 72.0,
    lng: 102.5,
    name: "Siberia Express",
    type: "LEO" as const,
    nodes: 3,
    latency: "40ms",
  },
];

export const MARITIME_MAP_DOTS = [
  // Trans-Pacific crossing
  {
    start: { lat: 34.0522, lng: -118.2437 },
    end: { lat: 35.6762, lng: 139.6503 },
    type: "LEO" as const,
  },
  // North Atlantic crossing
  {
    start: { lat: 40.7128, lng: -74.006 },
    end: { lat: 51.5074, lng: -0.1278 },
    type: "LEO" as const,
  },
  // Indian Ocean lane
  {
    start: { lat: 25.2048, lng: 55.2708 },
    end: { lat: 1.3521, lng: 103.8198 },
    type: "Hybrid" as const,
  },
  // Cape of Good Hope route
  {
    start: { lat: 51.9244, lng: 4.4777 },
    end: { lat: -33.9249, lng: 18.4241 },
    type: "Terrestrial" as const,
  },
  // Panama Canal → Pacific
  {
    start: { lat: 8.9936, lng: -79.5197 },
    end: { lat: 34.0522, lng: -118.2437 },
    type: "Hybrid" as const,
  },
  // South Atlantic
  {
    start: { lat: -23.9618, lng: -46.3322 },
    end: { lat: -33.9249, lng: 18.4241 },
    type: "LEO" as const,
  },
  // South Pacific
  {
    start: { lat: -33.869, lng: 151.2093 },
    end: { lat: 1.3521, lng: 103.8198 },
    type: "Hybrid" as const,
  },
];

export const MARITIME_REGION_HUBS = [
  {
    lat: 34.0522,
    lng: -118.2437,
    name: "Port of LA",
    type: "Terrestrial" as const,
    nodes: 12,
    latency: "24ms",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    name: "Tokyo Bay",
    type: "LEO" as const,
    nodes: 14,
    latency: "20ms",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    name: "New York Harbor",
    type: "Hybrid" as const,
    nodes: 10,
    latency: "22ms",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    name: "Port of London",
    type: "Terrestrial" as const,
    nodes: 11,
    latency: "19ms",
  },
  {
    lat: 51.9244,
    lng: 4.4777,
    name: "Rotterdam",
    type: "Terrestrial" as const,
    nodes: 16,
    latency: "18ms",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    name: "Singapore Strait",
    type: "LEO" as const,
    nodes: 18,
    latency: "16ms",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    name: "Dubai Port",
    type: "Hybrid" as const,
    nodes: 9,
    latency: "28ms",
  },
  {
    lat: -33.9249,
    lng: 18.4241,
    name: "Cape Town",
    type: "LEO" as const,
    nodes: 6,
    latency: "42ms",
  },
  {
    lat: 8.9936,
    lng: -79.5197,
    name: "Panama Canal",
    type: "Hybrid" as const,
    nodes: 7,
    latency: "35ms",
  },
  {
    lat: -33.869,
    lng: 151.2093,
    name: "Port of Sydney",
    type: "Terrestrial" as const,
    nodes: 8,
    latency: "38ms",
  },
];

export const RELIABILITY_FEATURES: ReliabilityFeature[] = [
  {
    icon: Bolt,
    title: "Fast Deployment",
    description:
      "Go from quote to online in less than 72 hours. Our logistical network bypasses traditional telco bureaucracy.",
    accentColor: "secondary", // Updated to secondary (purple)
  },
  {
    icon: Security,
    title: "Reliable Connectivity",
    description:
      "Built-in redundancy and automated failover protocols ensure your critical data always finds a path.",
    accentColor: "primary", // Updated to primary (teal)
  },
  {
    icon: SupportAgent,
    title: "24/7 Human Support",
    description:
      "Direct access to L3 engineers who understand your infrastructure. No tiered waiting, just solutions.",
    accentColor: "secondary", // Updated to secondary (purple)
  },
];

export const CLIENT_LOGOS = [
  "AETHER",
  "VORTEX",
  "NOVA_SYS",
  "QUANTUM",
  "CORE.AI",
];

export const HOME_NEWS_PREVIEW_ITEMS = NEWS_CARD_ITEMS.slice(0, 3);
export const HOME_BLOG_PREVIEW_ITEMS = BLOG_POST_PREVIEWS.slice(0, 2);

export const TESTIMONIALS = [
  {
    quote:
      "NEOTEL had us live in under 48 hours — offshore, mid-season, in weather that grounds helicopters. Nothing else comes close.",
    name: "James Okafor",
    title: "VP of Operations, Meridian Maritime",
    initials: "JO",
    accentColor: "secondary" as const,
  },
  {
    quote:
      "We run critical telemetry from three Arctic drilling sites. Since switching to NEOTEL, we've had zero unplanned outages over 14 months.",
    name: "Lena Voss",
    title: "Head of Digital Infrastructure, Polaris Energy Group",
    initials: "LV",
    accentColor: "primary" as const,
  },
  {
    quote:
      "The deployment speed is unlike anything we’ve seen from a telco. Our remote mining ops are now as connected as our HQ in Johannesburg.",
    name: "Sipho Ndlovu",
    title: "CTO, Aurum Mining Consortium",
    initials: "SN",
    accentColor: "secondary" as const,
  },
  {
    quote:
      "Real-time transaction processing across six Pacific island branches — that was impossible before Starlink. NEOTEL made it happen in a week.",
    name: "Mei Lin Chen",
    title: "Director of Technology, Pacific Rim Financial",
    initials: "MC",
    accentColor: "primary" as const,
  },
  {
    quote:
      "Redundancy planning used to mean accepting degraded comms. Now our forward bases have the same uptime guarantees as our data centres.",
    name: "Col. Adrian Marsh",
    title: "Communications Officer, Allied Logistics Command",
    initials: "AM",
    accentColor: "secondary" as const,
  },
];
