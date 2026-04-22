/** 24h clock → 12h display + period. */
export function get12HourParts(h24: number): { h12: number; period: 'AM' | 'PM' } {
  if (h24 === 0) return { h12: 12, period: 'AM' };
  if (h24 < 12) return { h12: h24, period: 'AM' };
  if (h24 === 12) return { h12: 12, period: 'PM' };
  return { h12: h24 - 12, period: 'PM' };
}

/** 12h + period → 24h hour (0–23). */
export function to24Hour(h12: number, period: 'AM' | 'PM'): number {
  if (period === 'AM') {
    if (h12 === 12) return 0;
    return h12;
  }
  if (h12 === 12) return 12;
  return h12 + 12;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Snap minute to grid (e.g. step 15 → 0,15,30,45). */
export function snapMinute(m: number, step: number): number {
  const s = Math.max(1, step);
  return (Math.round(m / s) * s) % 60;
}
