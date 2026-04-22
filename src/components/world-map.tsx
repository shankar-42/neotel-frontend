"use client";
import { colors } from "@/lib/tokens";
import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import DottedMap from "dotted-map";

// ─── Types ─────────────────────────────────────────────────────────────────────

export type CoverageType = "LEO" | "Terrestrial" | "Hybrid";

export interface RegionHub {
  lat: number;
  lng: number;
  name: string;
  type: CoverageType;
  nodes: number;
  latency: string;
}

interface MapDot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
  type?: CoverageType;
}

interface TooltipState {
  hub: RegionHub;
  svgX: number;
  svgY: number;
}

interface WorldMapProps {
  dots?: MapDot[];
  regions?: RegionHub[];
  lineColor?: string;
  className?: string;
  /** Called with the hovered hub (or null on leave). Useful for parent state sync. */
  onHubHover?: (hub: RegionHub | null) => void;
}

// ─── Coverage type metadata ────────────────────────────────────────────────────

const TYPE_COLOR: Record<CoverageType, string> = {
  LEO: colors.secondary,
  Terrestrial: colors.primary,
  Hybrid: colors.tertiary,
};

const TYPE_LABEL: Record<CoverageType, string> = {
  LEO: "Low Earth Orbit",
  Terrestrial: "Terrestrial",
  Hybrid: "LEO + Terrestrial",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorldMap({
  dots = [],
  regions = [],
  lineColor = colors.secondary,
  className,
  onHubHover,
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#FFFFFF25",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  const createCurvedPath = useCallback(
    (
      start: { lat: number; lng: number },
      end: { lat: number; lng: number },
    ) => {
      const startPoint = projectPoint(start.lat, start.lng);
      const endPoint = projectPoint(end.lat, end.lng);
      const midX = (startPoint.x + endPoint.x) / 2;
      const midY = Math.min(startPoint.y, endPoint.y) - 50;
      return `M ${startPoint.x} ${startPoint.y} Q ${midX} ${midY} ${endPoint.x} ${endPoint.y}`;
    },
    [projectPoint],
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      setContainerWidth(containerRef.current?.getBoundingClientRect().width ?? 800);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const tooltipLayout = useMemo(() => {
    if (!tooltip) return null;
    const pixelLeft = (tooltip.svgX / 800) * containerWidth;
    const pixelTop = (tooltip.svgY / 400) * (containerWidth / 2);
    return {
      left: Math.min(pixelLeft + 16, containerWidth - 210),
      top: pixelTop - 8,
      color: TYPE_COLOR[tooltip.hub.type],
    };
  }, [tooltip, containerWidth]);

  return (
    <div
      ref={containerRef}
      className={
        className ??
        "w-full aspect-2/1 rounded-lg relative font-sans bg-transparent overflow-hidden"
      }
    >
      {/* Dotted world map base */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full object-cover mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] opacity-80"
        alt="world map"
        draggable={false}
      />

      {/* SVG overlay — arcs + interactive hub dots */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="path-grad-leo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="white"           stopOpacity="0" />
            <stop offset="5%"  stopColor={TYPE_COLOR.LEO}  stopOpacity="1" />
            <stop offset="95%" stopColor={TYPE_COLOR.LEO}  stopOpacity="1" />
            <stop offset="100%" stopColor="white"          stopOpacity="0" />
          </linearGradient>
          <linearGradient id="path-grad-terrestrial" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="white"                   stopOpacity="0" />
            <stop offset="5%"  stopColor={TYPE_COLOR.Terrestrial}  stopOpacity="1" />
            <stop offset="95%" stopColor={TYPE_COLOR.Terrestrial}  stopOpacity="1" />
            <stop offset="100%" stopColor="white"                  stopOpacity="0" />
          </linearGradient>
          <linearGradient id="path-grad-hybrid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="white"             stopOpacity="0" />
            <stop offset="5%"  stopColor={TYPE_COLOR.Hybrid} stopOpacity="1" />
            <stop offset="95%" stopColor={TYPE_COLOR.Hybrid} stopOpacity="1" />
            <stop offset="100%" stopColor="white"            stopOpacity="0" />
          </linearGradient>
          <linearGradient id="path-grad-default" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="white"     stopOpacity="0" />
            <stop offset="5%"  stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white"    stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Arcs */}
        {dots.map((dot, i) => {
          const gradId = dot.type
            ? `path-grad-${dot.type.toLowerCase()}`
            : "path-grad-default";
          const arcColor = dot.type ? TYPE_COLOR[dot.type] : lineColor;
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(dot.start, dot.end)}
                fill="none"
                stroke={arcColor}
                strokeWidth="1"
                strokeOpacity="0.12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.4 * i }}
              />
              <motion.path
                d={createCurvedPath(dot.start, dot.end)}
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {/* Arc endpoint dots — visual pulse only, no interaction */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint   = projectPoint(dot.end.lat, dot.end.lng);
          const clr = dot.type ? TYPE_COLOR[dot.type] : lineColor;
          return (
            <g key={`arc-points-${i}`}>
              <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={clr} />
              <motion.circle
                cx={startPoint.x} cy={startPoint.y}
                initial={{ r: 2, opacity: 0.4 }}
                animate={{ r: 8, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                fill="none" stroke={clr} strokeWidth="1.5"
              />
              <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={clr} />
              <motion.circle
                cx={endPoint.x} cy={endPoint.y}
                initial={{ r: 2, opacity: 0.4 }}
                animate={{ r: 8, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 + 0.75, ease: "easeOut" }}
                fill="none" stroke={clr} strokeWidth="1.5"
              />
            </g>
          );
        })}

        {/* Named region hubs — interactive with hover tooltip */}
        {regions.map((hub, i) => {
          const pt  = projectPoint(hub.lat, hub.lng);
          const clr = TYPE_COLOR[hub.type];
          const isActive =
            tooltip?.hub.name === hub.name && tooltip?.hub.lat === hub.lat;
          return (
            <g
              key={`hub-${i}`}
              style={{ pointerEvents: "all", cursor: "pointer" }}
              onMouseEnter={() => {
                setTooltip({ hub, svgX: pt.x, svgY: pt.y });
                onHubHover?.(hub);
              }}
              onMouseLeave={() => {
                setTooltip(null);
                onHubHover?.(null);
              }}
              onClick={() =>
                setTooltip((prev) =>
                  prev?.hub.name === hub.name ? null : { hub, svgX: pt.x, svgY: pt.y },
                )
              }
            >
              {/* Pulsing ring */}
              <motion.circle
                cx={pt.x} cy={pt.y}
                initial={{ r: 4, opacity: 0.6 }}
                animate={{ r: isActive ? 16 : 12, opacity: 0 }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
                fill="none" stroke={clr} strokeWidth="1"
              />
              {/* Hit area */}
              <circle cx={pt.x} cy={pt.y} r="10" fill="transparent" />
              {/* Visible dot */}
              <circle
                cx={pt.x} cy={pt.y}
                r={isActive ? 5 : 4}
                fill={clr}
                style={{ transition: "r 0.2s" }}
              />
              {/* Bright core */}
              <circle cx={pt.x} cy={pt.y} r="2" fill="white" opacity="0.9" />
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      <AnimatePresence>
        {tooltip && tooltipLayout &&
          (() => {
            const clr = tooltipLayout.color;
            return (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: "absolute",
                  left: tooltipLayout.left,
                  top: tooltipLayout.top,
                  transform: "translateY(-100%)",
                  pointerEvents: "none",
                  zIndex: 50,
                }}
                className="w-48 rounded-xl bg-[#1d2023]/90 p-3 shadow-2xl backdrop-blur-2xl"
              >
                {/* Thin colour accent top-bar */}
                <div
                  className="mb-2 h-0.5 w-8 rounded-full"
                  style={{ background: clr }}
                />
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: clr, boxShadow: `0 0 6px ${clr}` }}
                  />
                  <span className="truncate text-[11px] font-bold uppercase tracking-widest text-white">
                    {tooltip.hub.name}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-white/40">Type</span>
                    <span style={{ color: clr }} className="font-semibold">
                      {TYPE_LABEL[tooltip.hub.type]}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-white/40">Nodes</span>
                    <span className="font-semibold text-white">
                      {tooltip.hub.nodes}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-white/40">Latency</span>
                    <span className="font-semibold text-white">
                      {tooltip.hub.latency}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
}
