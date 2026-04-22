import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  NEWS_CARD_ITEMS,
  NEWS_FILTER_LABELS,
  NEWS_SEARCH_PLACEHOLDER,
  NEWSLETTER_PLACEHOLDER,
  type NewsCardItem,
} from "@/routes/news/constants";
import {
  ArrowOutward,
  ArrowForward,
  Search,
  ArrowDownward,
  CorporateFare,
  Star,
  MarkAsUnread,
} from "@/components/icons/services-icons";
import { DOCUMENTATION_ROUTE, REPORTS_ROUTE } from "@/utils/constants";
import {
  badgeClassForNewsCategory,
  NEWSLETTER_CARD_SHADOW_CLASSES,
} from "@/utils/design-tokens";

const FEATURED_NEWS = {
  tag: "Breaking Update",
  category: "Infrastructure / Starlink",
  title: "Project Zenith: Orbital Mesh Integration Live",
  description:
    "Neotel deployed a multi-spectrum mesh connecting Starlink constellations with terrestrial fiber hubs across four continents.",
};

function StandardArticleCard({ article }: { article: NewsCardItem }) {
  const badgeClass = badgeClassForNewsCategory(article.category);
  return (
    <Link to={`/news/${article.id}`} className="group">
      <article className="overflow-hidden rounded-lg bg-tier-2 flex flex-col h-full transition-all hover:border-secondary/20 border border-transparent">
        <div className="relative aspect-video overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            data-alt={article.dataAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute left-4 top-4">
            <span className={badgeClass}>{article.category}</span>
          </div>
        </div>
        <div className="p-8 flex flex-col grow">
          <time className="mb-3 text-[10px] uppercase tracking-widest text-on-surface-variant">
            {article.date}
          </time>
          <h2 className="mb-4 font-headline text-xl font-bold text-white transition-colors group-hover:text-secondary">
            {article.title}
          </h2>
          <p className="mb-8 text-sm font-light leading-relaxed text-on-surface-variant/90">
            {article.excerpt}
          </p>
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              By {article.author}
            </span>
            <ArrowOutward size={16} variant="muted" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Recent");
  const [searchQuery, setSearchQuery] = useState("");

  // Derive filtered list
  const filteredItems = NEWS_CARD_ITEMS.filter((item) => {
    const matchesFilter =
      activeFilter === "Recent" ||
      item.category.toLowerCase() === activeFilter.toLowerCase() ||
      (activeFilter === "Case Studies" && item.type === "case-study");
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const standardCards = filteredItems.filter((i) => i.type === "standard");
  const caseStudyCard = filteredItems.find((i) => i.type === "case-study");
  const wideCard = filteredItems.find((i) => i.type === "wide");

  return (
    <main className="pt-32 pb-20 bg-tier-1">
      <section className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 group relative overflow-hidden rounded-lg aspect-21/9 bg-tier-2/95 border border-outline-variant/15">
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&h=900&fit=crop"
            alt="Global satellite network with illuminated continents"
            data-alt="Orbital view of Earth at night with glowing data highways"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="px-2 py-1 text-[10px] uppercase tracking-[0.2em] bg-secondary/10 text-secondary border border-secondary/20 font-bold">
                {FEATURED_NEWS.tag}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                {FEATURED_NEWS.category}
              </span>
            </div>
            <h1 className="mb-6 font-headline text-4xl lg:text-6xl font-black leading-none tracking-tighter text-white">
              {FEATURED_NEWS.title}
            </h1>
            <p className="mb-8 max-w-xl text-lg font-light leading-relaxed text-on-surface-variant">
              {FEATURED_NEWS.description}
            </p>
            <Link
              to={REPORTS_ROUTE}
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-secondary transition-all hover:gap-5 cursor-pointer">
              Deep Dive Report
              <ArrowForward size={24} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="p-8 rounded-lg bg-tier-2/95 border border-outline-variant/15 border-l-2 border-secondary flex flex-col justify-between">
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
                Network Status
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-white">
                99.99% Uptime Verified
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Global redundancy protocols remained stable during Q3 peak
                transit surges.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="h-1 w-32 rounded-full bg-surface-container overflow-hidden">
                <div className="h-full w-4/5 bg-secondary neon-pulse" />
              </div>
              <span className="text-[10px] tracking-tight font-mono text-on-surface-variant">
                SLA_CONFIRMED
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg p-8 bg-tier-2/95 border border-outline-variant/15">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop"
              alt="Data analysis overlay"
              data-alt="Abstract telemetry visualization on dark background"
              className="absolute inset-0 h-full w-full object-cover opacity-10"
            />
            <h3 className="relative z-10 mb-4 font-headline text-xl font-bold text-white">
              Quarterly Global Connectivity Index
            </h3>
            <p className="relative z-10 mb-6 text-sm leading-relaxed text-on-surface-variant">
              Benchmarking the shift from traditional enterprise fiber to hybrid
              satellite architectures.
            </p>
            <Link
              to={REPORTS_ROUTE}
              className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-secondary hover:text-white transition-colors">
              Download PDF
            </Link>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-12 flex flex-wrap items-center justify-between gap-8 border-b border-outline-variant/15 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          {NEWS_FILTER_LABELS.map((label) => {
            const isActive = activeFilter === label;
            return (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={[
                  "relative px-4 py-2 rounded-lg text-xs font-black tracking-widest uppercase transition-all",
                  isActive
                    ? "bg-secondary/10 text-secondary border border-secondary/30 after:content-[''] after:absolute after:-bottom-8 after:left-0 after:w-full after:h-[2px] after:bg-secondary"
                    : "text-on-surface-variant border border-transparent hover:text-white hover:border-outline-variant/20 hover:bg-tier-2",
                ].join(" ")}>
                {label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 rounded-lg border-b-2 border-outline-variant/20 bg-surface-container-low px-4 py-2">
          <Search size={18} variant="muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={NEWS_SEARCH_PLACEHOLDER}
            className="w-48 bg-transparent text-[10px] uppercase tracking-widest font-bold placeholder:text-on-surface-variant/60 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-on-surface-variant hover:text-white text-xs leading-none">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="px-4 md:px-8 max-w-screen-2xl mx-auto py-24 text-center">
          <p className="text-on-surface-variant text-sm uppercase tracking-widest">
            No articles found
          </p>
          <button
            onClick={() => {
              setActiveFilter("Recent");
              setSearchQuery("");
            }}
            className="mt-4 text-[10px] text-secondary uppercase tracking-widest hover:text-white transition-colors">
            Clear filters
          </button>
        </div>
      )}

      <section className="px-4 md:px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {standardCards.slice(0, 2).map((card) => (
          <StandardArticleCard key={card.id} article={card} />
        ))}

        {caseStudyCard ? (
          <article className="rounded-lg border-t-4 border-secondary bg-surface-container-high p-8 flex flex-col">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <span className="px-2 py-1 bg-secondary text-on-secondary text-[9px] uppercase tracking-widest font-black">
                  {caseStudyCard.category}
                </span>
                <time className="block mt-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {caseStudyCard.date}
                </time>
              </div>
              <Star size={24} variant="secondary" />
            </div>
            <h2 className="mb-6 font-headline text-2xl font-black tracking-tighter text-white">
              {caseStudyCard.title}
            </h2>
            <p className="mb-10 text-sm italic leading-relaxed text-on-surface-variant">
              {caseStudyCard.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                <CorporateFare size={24} variant="default" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white tracking-wide">
                  Maritime Global
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">
                  CTO / Logistics
                </span>
              </div>
            </div>
          </article>
        ) : null}

        {wideCard ? (
          <article className="lg:col-span-2 overflow-hidden rounded-lg bg-surface-container-low flex flex-col">
            <div className="flex h-full flex-col md:flex-row">
              <div className="md:w-2/5 overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={wideCard.imageUrl}
                  alt={wideCard.imageAlt ?? wideCard.title}
                  data-alt={wideCard.dataAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className={badgeClassForNewsCategory(wideCard.category)}>
                    {wideCard.category}
                  </span>
                  <time className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {wideCard.date}
                  </time>
                </div>
                <h2 className="mb-4 font-headline text-2xl font-bold leading-tight text-white hover:text-secondary transition-colors">
                  {wideCard.title}
                </h2>
                <p className="mb-8 text-sm font-light leading-relaxed text-on-surface-variant">
                  {wideCard.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    to={`/news/${wideCard.id}`}
                    className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium hover:text-white transition-colors">
                    Full Press Release
                  </Link>
                  <span className="font-mono text-xs text-outline">
                    {wideCard.author}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        {standardCards[2] ? (
          <StandardArticleCard article={standardCards[2]} />
        ) : null}

        <article
          className={`rounded-lg border border-secondary/35 bg-tier-2/95 p-10 text-center backdrop-blur-md flex flex-col items-center justify-center ${NEWSLETTER_CARD_SHADOW_CLASSES}`}>
          <span className="mb-6 text-4xl text-secondary">
            <MarkAsUnread size={36} variant="secondary" />
          </span>
          <h2 className="mb-4 font-headline text-2xl font-black tracking-tighter text-white">
            Stay Connected
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
            Receive critical network updates and intelligence reports directly
            in your inbox.
          </p>
          <div className="w-full space-y-3">
            <input
              type="email"
              placeholder={NEWSLETTER_PLACEHOLDER}
              className="w-full border-b-2 border-secondary/35 bg-surface-container-low/40 py-3 text-xs font-bold uppercase tracking-widest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary"
            />
            <Button
              variant="primary"
              className="w-full py-3 text-xs uppercase tracking-[0.2em]">
              Subscribe
            </Button>
          </div>
          <p className="mt-6 text-[9px] uppercase tracking-widest text-outline">
            NO SPAM. ONLY DATA.
          </p>
        </article>
      </section>

      <div className="mt-20 flex flex-col items-center">
        <Link
          to={DOCUMENTATION_ROUTE}
          className="group flex flex-col items-center gap-4 cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-on-surface-variant group-hover:text-secondary transition-colors">
            Load More Archives
          </span>
          <div className="relative h-10 w-px bg-outline-variant/30">
            <div className="absolute left-0 top-0 h-0 w-full bg-secondary transition-all duration-500 group-hover:h-full" />
          </div>
          <ArrowDownward size={24} variant="default" />
        </Link>
      </div>
    </main>
  );
}
