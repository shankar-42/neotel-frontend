import { motion } from "motion/react";
import { colors } from "@/lib/tokens";

/* ─── Types ────────────────────────────────────────────────────────────────── */

interface RingConfig {
  radiusX: number;  // ellipse semi-axis X (px)
  radiusY: number;  // ellipse semi-axis Y (px)
  rotation: number; // tilt of the ellipse plane (deg)
  duration: number; // orbit period (s)
  color: string;
  opacity: number;
  strokeWidth: number;
  dashArray?: string;
  reverse?: boolean;
  dotSize?: number;  // orbiting dot radius
  dotColor?: string;
}

/* ─── Config ───────────────────────────────────────────────────────────────── */

const RINGS: RingConfig[] = [
  {
    radiusX: 120,
    radiusY: 44,
    rotation: -25,
    duration: 18,
    color: "rgba(192, 193, 255, 0.25)",
    opacity: 1,
    strokeWidth: 1,
    dashArray: "6 8",
    dotSize: 3,
    dotColor: colors.primary,
  },
  {
    radiusX: 170,
    radiusY: 62,
    rotation: -20,
    duration: 28,
    color: "rgba(0, 229, 200, 0.18)",
    opacity: 1,
    strokeWidth: 0.75,
    dashArray: "4 12",
    reverse: true,
    dotSize: 2.5,
    dotColor: colors.secondary,
  },
  {
    radiusX: 230,
    radiusY: 84,
    rotation: -30,
    duration: 40,
    color: "rgba(192, 193, 255, 0.10)",
    opacity: 1,
    strokeWidth: 0.5,
    dashArray: "2 16",
    dotSize: 2,
    dotColor: "rgba(192, 193, 255, 0.5)",
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export function OrbitRings({ className = "" }: { className?: string }) {
  const svgSize = 520;
  const center = svgSize / 2;

  return (
    <div
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        className="block"
      >
        {RINGS.map((ring, i) => {
          const { radiusX, radiusY, rotation, duration, color, strokeWidth, dashArray, reverse, dotSize, dotColor } = ring;

          // Ellipse path for the ring
          const pathId = `orbit-path-${i}`;
          const ellipsePath = `
            M ${center - radiusX} ${center}
            A ${radiusX} ${radiusY} 0 1 1 ${center + radiusX} ${center}
            A ${radiusX} ${radiusY} 0 1 1 ${center - radiusX} ${center}
          `;

          return (
            <g
              key={i}
              style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${center}px ${center}px` }}
            >
              {/* Ring ellipse */}
              <motion.ellipse
                cx={center}
                cy={center}
                rx={radiusX}
                ry={radiusY}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                fill="none"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
              />

              {/* Orbiting dot */}
              {dotSize && (
                <>
                  <defs>
                    <path id={pathId} d={ellipsePath} />
                  </defs>
                  <motion.circle
                    r={dotSize}
                    fill={dotColor}
                    filter={`drop-shadow(0 0 ${dotSize * 2}px ${dotColor})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.3 + 0.8 }}
                  >
                    <animateMotion
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      keyPoints={reverse ? "1;0" : "0;1"}
                      keyTimes="0;1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </motion.circle>
                </>
              )}
            </g>
          );
        })}

        {/* Central glow */}
        <defs>
          <radialGradient id="orbit-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(192, 193, 255, 0.15)" />
            <stop offset="60%" stopColor="rgba(192, 193, 255, 0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx={center} cy={center} r={40} fill="url(#orbit-center-glow)" />
      </svg>
    </div>
  );
}
