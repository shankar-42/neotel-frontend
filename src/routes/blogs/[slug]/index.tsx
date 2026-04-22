import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BLOG_POST_PREVIEWS } from "@/routes/blogs/constants";
import {
  ACCENT_DOT_GLOW_CLASSES,
  badgeClassForNewsCategory,
  HEADING_GRADIENT_TEXT_CLASSES,
} from "@/utils/design-tokens";
import { Button } from "@/components/ui/Button";
import {
  Bookmark,
  Dns,
  GridView,
  Mail,
  Router,
  Public,
  Search,
  Share,
} from "@/components/icons/services-icons";
import { ArrowBack as MuiArrowBack } from "@mui/icons-material";

const BLOG_TAGS = ["Quantum Tech", "Cybersecurity", "Infrastructure"] as const;

const RELATED_RESEARCH = [
  {
    slug: "satellite-mesh-interoperability",
    title: "Satellite Mesh Interoperability",
    readTime: "8 min",
  },
  {
    slug: "sustainable-cooling-systems",
    title: "Sustainable Cooling Systems",
    readTime: "12 min",
  },
  {
    slug: "distributed-ledger-protocols",
    title: "Distributed Ledger Protocols",
    readTime: "15 min",
  },
] as const;

const FALLBACK_BLOG_SLUG = "quantum-hardened-infrastructure";
const BLOG_TITLE_SEPARATOR = ":";

export function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const effectiveSlug = slug ?? FALLBACK_BLOG_SLUG;
  const blog =
    BLOG_POST_PREVIEWS.find((post) => post.slug === effectiveSlug) ??
    BLOG_POST_PREVIEWS[0];
  const titleParts = blog.title.split(BLOG_TITLE_SEPARATOR);
  const titlePrefix = titleParts[0] ?? blog.title;
  const titleSuffix = titleParts.slice(1).join(BLOG_TITLE_SEPARATOR).trim();

  // Scroll to top whenever the slug changes (related research clicks)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <main className="pt-24 pb-20 bg-tier-1">
      {/* ── Back nav ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-secondary transition-colors">
          <MuiArrowBack sx={{ fontSize: 14 }} />
          Back to Blogs
        </button>
      </div>
      <section className="relative h-[614px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            decoding="async"
            src={blog.coverImageUrl}
            alt={blog.coverImageAlt}
            data-alt={blog.coverDataAlt}
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className={badgeClassForNewsCategory(blog.category)}>
                {blog.category}
              </span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                {blog.date}
              </span>
            </div>
            <h1 className="max-w-4xl font-headline text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight uppercase">
              {titlePrefix}
              {titleSuffix ? (
                <>
                  {BLOG_TITLE_SEPARATOR}
                  <span className={HEADING_GRADIENT_TEXT_CLASSES}>
                    {" "}
                    {titleSuffix}
                  </span>
                </>
              ) : null}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg border border-outline-variant/20 bg-surface-container-high overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
                  alt={blog.authorName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase font-headline font-bold text-white">
                  {blog.authorName}
                </p>
                <p className="text-xs text-on-surface-variant">
                  {blog.authorRole}, NEOTEL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-7xl mt-12">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-8">
            <article className="text-on-surface">
              <p className="mb-8 text-xl italic leading-relaxed text-primary">
                As enterprise demand for ultra-low latency transit grows, the
                physical data layer is entering a new era. NEOTEL is deploying
                quantum-hardened corridors to secure speed and trust at global
                scale.
              </p>

              <h2 className="mt-12 mb-6 flex items-center gap-4 text-2xl uppercase font-headline font-bold text-white">
                <span className="h-[2px] w-8 bg-secondary" />
                The Architecture of Speed
              </h2>
              <p className="mb-6 leading-[1.8] text-on-surface-variant">
                Traditional pathways were not designed for autonomous traffic
                engineering and modern threat profiles. Our routing framework
                predicts congestion behavior before peak contention forms and
                shifts flow in real time.
              </p>

              <div className="my-12 p-8 rounded-lg bg-surface-container-low border-l-2 border-secondary relative overflow-hidden">
                <div className="absolute right-4 top-4">
                  <span className="material-symbols-outlined scale-150 text-secondary/30">
                    <GridView />
                  </span>
                </div>
                <h3 className="mb-8 text-xs uppercase tracking-widest text-secondary">
                  Diagram 04.1 // Packet Encapsulation Flow
                </h3>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  {["Node Alpha", "Quantum Hub", "Global Exit"].map(
                    (label, index) => (
                      <div
                        key={label}
                        className="flex items-center gap-5 w-full md:w-auto">
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-20 w-20 rounded-lg border border-outline-variant/20 bg-surface-container-high flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary scale-125">
                              {index === 0 ? (
                                <Dns />
                              ) : index === 1 ? (
                                <Router />
                              ) : (
                                <Public />
                              )}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase text-on-surface-variant">
                            {label}
                          </span>
                        </div>
                        {index < 2 ? (
                          <div className="relative h-[2px] flex-1 min-w-12 bg-linear-to-r from-primary via-secondary to-primary">
                            <div
                              className={`absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary ${ACCENT_DOT_GLOW_CLASSES}`}
                            />
                          </div>
                        ) : null}
                      </div>
                    ),
                  )}
                </div>
                <p className="mt-8 text-xs leading-relaxed text-on-surface-variant">
                  Our routing engine uses predictive congestion telemetry to
                  protect SLA-critical corridors while preserving deterministic
                  throughput.
                </p>
              </div>

              <p className="mb-6 leading-[1.8] text-on-surface-variant">
                This strategy is not only about bandwidth. It is about
                confidence in every packet’s journey. Each transfer carries
                integrity signatures and policy guards that can trigger
                node-level lockout in case of unauthorized extraction patterns.
              </p>

              <h2 className="mt-12 mb-6 flex items-center gap-4 text-2xl uppercase font-headline font-bold text-white">
                <span className="h-[2px] w-8 bg-secondary" />
                The Terabit Corridor
              </h2>
              <p className="mb-6 leading-[1.8] text-on-surface-variant">
                Looking forward, NEOTEL is scaling Obsidian Mesh corridors
                through underwater and subterranean routes to avoid metropolitan
                bottlenecks. This design also lowers thermal load for better
                sustainability.
              </p>

              <blockquote className="my-12 border-l-4 border-primary pl-8 py-2 italic text-2xl font-headline text-white">
                Innovation is not adding more cables. It is redesigning the
                signal path itself.
              </blockquote>

              <p className="leading-[1.8] text-on-surface-variant">
                As AI-assisted node control and quantum key distribution become
                mainstream, enterprise connectivity becomes both faster and more
                resilient.
              </p>

              <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                    Tagged:
                  </span>
                  {BLOG_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg border border-outline-variant/10 bg-surface-container-high text-[10px] uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {["share", "bookmark", "mail"].map((iconName) => (
                    <span
                      key={iconName}
                      className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-colors">
                      {iconName === "share" ? (
                        <Share />
                      ) : iconName === "bookmark" ? (
                        <Bookmark />
                      ) : (
                        <Mail />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <aside className="col-span-12 lg:col-span-4 space-y-12">
            <div className="rounded-lg border border-outline-variant/10 bg-surface-container-low p-6">
              <h4 className="mb-4 text-xs uppercase tracking-widest text-white">
                Search Archive
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="QUERY INFRASTRUCTURE..."
                  className="w-full border-b-2 border-outline-variant/20 bg-surface-container-highest py-3 px-4 text-xs uppercase tracking-widest text-on-surface focus:border-secondary outline-none transition-all"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <Search />
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-white flex items-center gap-3">
                <span className="w-4 h-px bg-secondary" />
                Synchronized Research
              </h4>
              <div className="space-y-4">
                {RELATED_RESEARCH.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blogs/${item.slug}`}
                    className="group block rounded-lg border border-transparent bg-surface-container-low p-4 transition-all hover:border-primary/20">
                    <div className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded bg-surface-container-high">
                        <img
                          loading="lazy"
                          decoding="async"
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&h=120&fit=crop"
                          alt={item.title}
                          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h5 className="text-xs uppercase font-headline font-bold text-white transition-colors group-hover:text-primary">
                          {item.title}
                        </h5>
                        <span className="text-[10px] uppercase text-on-surface-variant">
                          Read Time: {item.readTime}
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
                  Build Your Network
                </h4>
                <p className="mb-6 text-xs font-medium text-on-primary-container/80">
                  Ready to deploy high-performance infrastructure for your
                  enterprise?
                </p>
                <Button
                  variant="outline"
                  className="w-full rounded-lg bg-on-primary-container px-6 py-3 text-xs uppercase tracking-widest font-bold text-white active:scale-95 transition-transform cursor-pointer">
                  Consult an Architect
                </Button>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-on-primary-container/10 blur-3xl transition-all group-hover:bg-on-primary-container/20" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
