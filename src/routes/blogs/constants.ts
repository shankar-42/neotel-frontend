export const BLOG_LISTING_FILTER_LABELS = [
  "All",
  "Technical Analysis",
  "Global Network",
  "Infrastructure",
  "Security",
] as const;

export const BLOG_SEARCH_PLACEHOLDER = "SEARCH BLOG ARCHIVE";

export interface BlogPostPreview {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  coverImageUrl: string;
  coverImageAlt: string;
  coverDataAlt: string;
}

export const BLOG_POST_PREVIEWS: BlogPostPreview[] = [
  {
    slug: "quantum-hardened-infrastructure",
    category: "Technical Analysis",
    date: "Mar 24, 2024",
    readTime: "10 min read",
    title: "Quantum-Hardened Infrastructure: Securing the Terabit Corridor",
    excerpt:
      "How NEOTEL is hardening long-haul fiber routes with predictive node orchestration and encryption-at-transit standards.",
    authorName: "Dr. Elias Vance",
    authorRole: "Chief Technology Officer",
    coverImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=720&fit=crop",
    coverImageAlt: "Futuristic fiber corridor and network control center",
    coverDataAlt: "Data center with illuminated high-speed links",
  },
  {
    slug: "satellite-mesh-interoperability",
    category: "Global Network",
    date: "Mar 11, 2024",
    readTime: "8 min read",
    title: "Satellite Mesh Interoperability for Multi-Region Enterprises",
    excerpt:
      "A field report on how distributed branches preserve uptime across fluctuating terrestrial and satellite routes.",
    authorName: "Nora Caldwell",
    authorRole: "Principal Network Architect",
    coverImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=720&fit=crop",
    coverImageAlt: "Global map with satellite mesh links",
    coverDataAlt: "Orbital and terrestrial routes over a world map",
  },
  {
    slug: "sustainable-cooling-systems",
    category: "Infrastructure",
    date: "Feb 27, 2024",
    readTime: "12 min read",
    title: "Sustainable Cooling Systems for High-Density Data Transit",
    excerpt:
      "Inside the thermal strategy behind NEOTEL edge nodes and how it reduces cooling energy in harsh environments.",
    authorName: "Marcus Lee",
    authorRole: "Director of Infrastructure Systems",
    coverImageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=720&fit=crop",
    coverImageAlt: "Cooling systems inside enterprise edge facility",
    coverDataAlt: "Server aisles with green and teal cooling light",
  },
  {
    slug: "distributed-ledger-protocols",
    category: "Security",
    date: "Feb 14, 2024",
    readTime: "15 min read",
    title: "Distributed Ledger Protocols for Tamper-Resistant Routing Logs",
    excerpt:
      "How immutable event ledgers improve incident traceability for global traffic engineering teams.",
    authorName: "Sanjay Iyer",
    authorRole: "Security Research Lead",
    coverImageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=720&fit=crop",
    coverImageAlt: "Abstract distributed network security visualization",
    coverDataAlt: "Geometric blockchain-like nodes in deep indigo",
  },
];
