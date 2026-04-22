import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NEWS_CARD_ITEMS } from "@/routes/news/constants";
import {
  ArrowForward,
  Share,
  Bookmark,
  Mail,
} from "@/components/icons/services-icons";
import { ArrowBack as MuiArrowBack } from "@mui/icons-material";

const FALLBACK_ID = "spacemesh-latency";

export function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article =
    NEWS_CARD_ITEMS.find((n) => n.id === id) ??
    NEWS_CARD_ITEMS.find((n) => n.id === FALLBACK_ID) ??
    NEWS_CARD_ITEMS[0];

  // Scroll to top whenever the article changes (related article clicks)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const related = NEWS_CARD_ITEMS.filter(
    (n) => n.id !== article.id && n.imageUrl,
  ).slice(0, 2);

  return (
    <main className="pt-24 pb-20">
      {/* ── Back nav ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2">
        <button
          onClick={() => navigate("/news")}
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-secondary transition-colors">
          <MuiArrowBack sx={{ fontSize: 14 }} />
          Back to News
        </button>
      </div>

      {/* ── Hero ── */}
      <section className="relative h-[500px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            decoding="async"
            src={
              article.imageUrl ??
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&h=900&fit=crop"
            }
            alt={article.imageAlt ?? article.title}
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 border-l-2 border-secondary bg-secondary/10 text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">
              {article.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant">
              {article.date}
            </span>
          </div>
          <h1 className="max-w-4xl font-headline text-white text-4xl md:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            {article.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-widest text-on-surface-variant">
            By {article.author}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Article content */}
          <article className="col-span-12 lg:col-span-8 text-on-surface">
            <p className="mb-8 text-xl italic leading-relaxed text-secondary">
              {article.excerpt}
            </p>

            <p className="mb-6 leading-[1.8] text-on-surface-variant">
              The global satellite communications sector is entering a period of
              rapid consolidation. Advances in low-Earth orbit constellations
              are enabling unprecedented link reliability, pushing enterprise
              adoption to new heights across maritime, mining, and remote
              logistics sectors.
            </p>

            <h2 className="mt-12 mb-6 flex items-center gap-4 text-2xl uppercase font-headline font-bold text-white">
              <span className="h-[2px] w-8 bg-secondary" />
              Technical Context
            </h2>
            <p className="mb-6 leading-[1.8] text-on-surface-variant">
              Neotel's engineering infrastructure is built on a multi-layer
              redundancy model that combines terrestrial fiber with satellite
              fallback. This dual-path design ensures deterministic throughput
              even during contested spectrum environments or adverse weather
              conditions that would otherwise degrade single-path systems.
            </p>

            <blockquote className="my-12 border-l-4 border-secondary pl-8 py-2 italic text-2xl font-headline text-white">
              Resilience is not a feature — it is the architecture itself.
            </blockquote>

            <p className="leading-[1.8] text-on-surface-variant">
              Field deployments across four continents have confirmed that
              adaptive routing, combined with predictive congestion telemetry,
              can deliver sub-50ms latency at enterprise scale. The NEOTEL
              operations team continues to iterate on core protocols with
              quarterly releases.
            </p>

            {/* Tags + share row */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Tagged:
                </span>
                {[article.category, "Neotel", "Infrastructure"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg border border-outline-variant/10 bg-surface-container-high text-[10px] uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {(
                  [
                    ["share", <Share key="s" />],
                    ["bookmark", <Bookmark key="b" />],
                    ["mail", <Mail key="m" />],
                  ] as const
                ).map(([name, icon]) => (
                  <span
                    key={name as string}
                    className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-secondary transition-colors">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-white flex items-center gap-3">
                <span className="w-4 h-px bg-secondary" />
                Related Articles
              </h4>
              <div className="space-y-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="group block rounded-lg border border-transparent bg-surface-container-low p-4 transition-all hover:border-secondary/20">
                    <div className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded bg-surface-container-high">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h5 className="text-xs uppercase font-headline font-bold text-white transition-colors group-hover:text-secondary">
                          {item.title}
                        </h5>
                        <span className="text-[10px] uppercase text-on-surface-variant">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-primary-container p-8 group">
              <div className="relative z-10">
                <h4 className="mb-2 text-xl uppercase font-headline font-black text-on-primary-container">
                  Stay Informed
                </h4>
                <p className="mb-6 text-xs font-medium text-on-primary-container/80">
                  Subscribe to receive critical network updates directly.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-on-primary-container px-6 py-3 text-xs uppercase tracking-widest font-bold text-white hover:opacity-90 transition-all">
                  Contact Us
                  <ArrowForward size={14} />
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-on-primary-container/10 blur-3xl group-hover:bg-on-primary-container/20 transition-all" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
