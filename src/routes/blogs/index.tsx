import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BLOG_LISTING_FILTER_LABELS,
  BLOG_POST_PREVIEWS,
  BLOG_SEARCH_PLACEHOLDER,
} from "@/routes/blogs/constants";
import {
  ArrowForward,
  ArrowOutward,
  Search,
} from "@/components/icons/services-icons";
import { badgeClassForNewsCategory } from "@/utils/design-tokens";
import { Input } from "@/components/ui/input";
import React from "react";

export function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = BLOG_POST_PREVIEWS.filter((post) => {
    const matchesCategory =
      activeFilter === "All" || post.category === activeFilter;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filtered[0];
  const secondaryPosts = filtered.slice(1);

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-screen-2xl mx-auto bg-tier-1">
      {/* ── Hero header ── */}
      <section className="mb-14 rounded-lg bg-tier-2/95 p-8 md:p-10 border border-outline-variant/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">
              Insights Archive
            </span>
            <h1 className="mt-4 mb-6 font-headline text-4xl md:text-6xl leading-none font-black tracking-tighter text-white">
              Engineering Blogs{" "}
              <span className="text-gradient-heading">&amp; Research</span>
            </h1>
            <p className="max-w-2xl text-sm md:text-base leading-relaxed text-on-surface-variant">
              A collection of field-tested ideas from NEOTEL engineers building
              enterprise-grade satellite and fiber infrastructure.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <div className="w-full flex items-center gap-4 rounded-lg border-b-2 border-outline-variant/20 bg-surface-container px-4 py-3">
              <span className="material-symbols-outlined text-on-surface-variant">
                <Search />
              </span>
              <Input
                type="text"
                placeholder={BLOG_SEARCH_PLACEHOLDER}
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full bg-transparent text-xs uppercase tracking-widest font-bold placeholder:text-on-surface-variant/60 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Category tabs ── */}
      <section className="mb-12 flex flex-wrap items-center gap-2">
        {BLOG_LISTING_FILTER_LABELS.map((label) => {
          const isActive = activeFilter === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveFilter(label)}
              className={[
                "rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200",
                isActive
                  ? "bg-secondary/15 text-secondary border border-secondary/40 ring-2 ring-secondary/25"
                  : "border border-transparent text-on-surface-variant hover:bg-tier-2 hover:text-white hover:border-outline-variant/25",
              ].join(" ")}>
              {label}
            </button>
          );
        })}
      </section>

      {/* ── No results ── */}
      {filtered.length === 0 && (
        <div className="py-24 text-center text-on-surface-variant">
          <p className="text-sm uppercase tracking-widest">No posts found</p>
        </div>
      )}

      {/* ── Featured post ── */}
      {featuredPost && (
        <section className="mb-10">
          <article className="overflow-hidden rounded-lg bg-tier-2/95 border border-outline-variant/15">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={featuredPost.coverImageUrl}
                  alt={featuredPost.coverImageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <div className="mb-4 flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
                  <span
                    className={badgeClassForNewsCategory(
                      featuredPost.category,
                    )}>
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link to={`/blogs/${featuredPost.slug}`}>
                  <h2 className="mb-4 font-headline text-3xl font-black tracking-tight text-white hover:text-secondary transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white font-bold">
                      {featuredPost.authorName}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {featuredPost.authorRole}
                    </p>
                  </div>
                  <Link
                    to={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-secondary hover:text-white transition-colors">
                    Read Article
                    <span className="material-symbols-outlined text-base">
                      <ArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ── Secondary posts ── */}
      {secondaryPosts.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {secondaryPosts.map((post) => (
            <Link key={post.slug} to={`/blogs/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-tier-2/95 border border-outline-variant/15 hover:border-secondary/30 transition-all flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={post.coverImageUrl}
                    alt={post.coverImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span className={badgeClassForNewsCategory(post.category)}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col grow">
                  <div className="mb-3 text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {post.date} / {post.readTime}
                  </div>
                  <h3 className="mb-3 font-headline text-xl font-bold text-white group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-sm text-on-surface-variant leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      {post.authorName}
                    </span>
                    <ArrowOutward size={16} variant="muted" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
