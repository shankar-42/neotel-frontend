export const NEWS_FILTER_LABELS = [
  "Recent",
  "Starlink",
  "Enterprise",
  "Corporate",
  "Case Studies",
] as const;

export const NEWS_SEARCH_PLACEHOLDER = "QUERY DATABASE";
export const NEWSLETTER_PLACEHOLDER = "ENTER WORK EMAIL";

export interface NewsCardItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  imageUrl?: string;
  imageAlt?: string;
  dataAlt?: string;
  type: "standard" | "case-study" | "wide";
}

export const NEWS_CARD_ITEMS: NewsCardItem[] = [
  {
    id: "spacemesh-latency",
    category: "Starlink",
    date: "Oct 24, 2024",
    title: "Advancing Low-Latency Transatlantic Links via SpaceMesh",
    excerpt:
      "Neotel engineering teams report a 25% reduction in latency for high-frequency financial traffic using Starlink V2 integration.",
    author: "Neotel Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=960&h=540&fit=crop",
    imageAlt: "Satellite ground station at dusk",
    dataAlt:
      "Close-up satellite receiver dish reflecting purple and teal sunset light",
    type: "standard",
  },
  {
    id: "edge-security-sdwan",
    category: "Enterprise",
    date: "Oct 18, 2024",
    title: "Securing the Edge: New SD-WAN Protocols for Remote Operations",
    excerpt:
      "Deploying robust security layers for mining and energy operations outside standard LTE coverage zones.",
    author: "Security Protocol Department",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=960&h=540&fit=crop",
    imageAlt: "High-density server room",
    dataAlt: "Cinematic server room with glowing blue LED strips",
    type: "standard",
  },
  {
    id: "riyadh-node",
    category: "Corporate",
    date: "Oct 05, 2024",
    title: "Neotel Expands MENA Region Headquarters with New Riyadh Node",
    excerpt:
      "Strengthening our physical footprint to support Vision 2030 infrastructure initiatives across the Middle East.",
    author: "NR_REL_0942",
    imageUrl:
      "https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=1200&h=720&fit=crop",
    imageAlt: "Digital map with glowing connection lines",
    dataAlt: "Digital holographic world map in indigo tones",
    type: "wide",
  },
  {
    id: "orbital-compression",
    category: "Starlink",
    date: "Sep 28, 2024",
    title: "Adaptive Orbital Compression Improves Edge Throughput by 19%",
    excerpt:
      "A new packet compression profile helps energy and logistics customers stabilize uplink behavior during weather disruptions.",
    author: "Core Network Lab",
    imageUrl:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=960&h=540&fit=crop",
    imageAlt: "Satellite telemetry dashboard",
    dataAlt: "Dark telemetry board with neon charts and route overlays",
    type: "standard",
  },
  {
    id: "nexus4-expansion",
    category: "Case Study",
    date: "Oct 12, 2024",
    title: "Enabling Global Logistics: The Nexus-4 Expansion",
    imageUrl: "",
    excerpt:
      '"Neotel provided a backbone that scaled with real-time fleet tracking across 140 vessels."',
    author: "Maritime Global / CTO",
    type: "case-study",
  },
];
