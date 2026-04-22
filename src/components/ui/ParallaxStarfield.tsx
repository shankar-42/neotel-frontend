import { useCallback, useEffect, useMemo, useRef } from "react";

/* ─── Types ────────────────────────────────────────────────────────────────── */

interface Star {
  x: number; // % position
  y: number; // % position
  size: number; // px
  opacity: number;
  delay: number; // animation delay (s)
}

interface LayerConfig {
  count: number;
  sizeRange: [number, number];
  opacityRange: [number, number];
  speed: number; // multiplier for mouse parallax
  color: string;
}

/* ─── Config ───────────────────────────────────────────────────────────────── */

const LAYERS: LayerConfig[] = [
  // Far stars — small, slow, many
  {
    count: 80,
    sizeRange: [2, 3],
    opacityRange: [0.2, 0.45],
    speed: 0.008,
    color: "rgba(255, 255, 255,",
  },
  // Mid stars — medium
  {
    count: 40,
    sizeRange: [2.5, 3.5],
    opacityRange: [0.3, 0.6],
    speed: 0.02,
    color: "rgba(192, 193, 255,", // primary tint
  },
  // Near stars — large, fast, few
  {
    count: 15,
    sizeRange: [3.5, 5.5],
    opacityRange: [0.4, 0.75],
    speed: 0.04,
    color: "rgba(68, 226, 205,", // secondary tint
  },
];

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateStars(layer: LayerConfig): Star[] {
  return Array.from({ length: layer.count }, () => ({
    x: rand(0, 100),
    y: rand(0, 100),
    size: rand(...layer.sizeRange),
    opacity: rand(...layer.opacityRange),
    delay: rand(0, 6),
  }));
}

/* ─── Component ────────────────────────────────────────────────────────────── */

export function ParallaxStarfield() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<HTMLDivElement[]>([]);
  const stars = useMemo(() => LAYERS.map(generateStars), []);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        const tx = dx * layer.speed;
        const ty = dy * layer.speed;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    });
  }, []);

  useEffect(() => {
    const layers = containerRef.current?.querySelectorAll<HTMLDivElement>(
      '[data-star-layer="true"]',
    );
    layerRefs.current = layers ? Array.from(layers) : [];

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {LAYERS.map((layer, layerIdx) => (
        <div
          key={layerIdx}
          data-star-layer="true"
          className="absolute inset-[-20px] transition-transform duration-800 ease-out will-change-transform"
        >
          {stars[layerIdx].map((star, starIdx) => (
            <span
              key={starIdx}
              className="starfield-star absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                background: `${layer.color} ${star.opacity})`,
                boxShadow: `0 0 ${star.size * 2}px ${layer.color} ${star.opacity * 0.5})`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
