import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowForward } from "@/components/icons/services-icons";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
  accentColor: "primary" | "secondary";
  image?: string;
}

interface Props {
  testimonials: Testimonial[];
  /** Auto-advance interval in ms. Default: 5000 */
  interval?: number;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function TestimonialCarousel({ testimonials, interval = 5000 }: Props) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number, direction: 1 | -1) => {
      setDir(direction);
      setActive((next + testimonials.length) % testimonials.length);
    },
    [testimonials.length],
  );

  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1, 1);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1, 1), interval);
    return () => clearTimeout(t);
  }, [active, paused, interval, go]);

  const t = testimonials[active];
  const isPrimary = t.accentColor === "primary";
  const accentClass = isPrimary ? "bg-primary" : "bg-secondary";
  const accentText = isPrimary ? "text-primary" : "text-secondary";
  const accentRing = isPrimary ? "ring-primary/40" : "ring-secondary/40";
  const accentBg = isPrimary
    ? "bg-primary/15 text-primary"
    : "bg-secondary/15 text-secondary";

  const variants = {
    enter: (d: number) => ({ x: d * 24, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -24, opacity: 0 }),
  };

  return (
    <div
      className="relative mx-auto max-w-xl overflow-hidden rounded-lg border border-outline-variant/15 bg-surface-container-low"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-outline-variant/10">
        {!paused && (
          <motion.div
            key={active}
            className={`h-full ${accentClass}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
          />
        )}
      </div>

      <div className="p-6">
        {/* Stars — tiny row */}
        <div className="mb-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${accentText}`}>
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className="relative min-h-[72px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-sm font-light leading-relaxed text-on-surface">
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Author + controls */}
        <div className="mt-5 flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className={`h-8 w-8 rounded-full object-cover ring-2 ${accentRing}`}
                />
              ) : (
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${accentBg}`}>
                  {t.initials}
                </div>
              )}
              <div>
                <p className="text-xs font-bold text-white leading-none">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[10px] text-on-surface-variant leading-none">
                  {t.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots + arrows */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active
                      ? `w-4 ${accentClass}`
                      : "w-1 bg-outline-variant/40 hover:bg-outline"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-0.5 ml-1">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-6 w-6 items-center justify-center rounded text-outline-variant transition-colors hover:text-white">
                <span className="rotate-180 inline-flex">
                  <ArrowForward size={11} />
                </span>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex h-6 w-6 items-center justify-center rounded text-outline-variant transition-colors hover:text-white">
                <ArrowForward size={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
