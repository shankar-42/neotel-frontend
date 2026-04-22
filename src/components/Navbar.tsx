import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, Close } from "@mui/icons-material";
import { Button } from "./ui/Button";

const NAV_ITEMS = [
  { label: "Solutions", href: "/" },
  { label: "Infrastructure", href: "/about" },
  { label: "Global Network", href: "/global-network" },
  { label: "Services", href: "/service" },
  { label: "Support", href: "/contact" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#111417]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(99,102,241,0.08)]"
          : "bg-transparent",
      )}>
      {/* ── Main bar ── */}
      <div className="flex justify-between items-center w-full px-8 py-4 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-black tracking-tighter text-indigo-100 dark:text-white uppercase font-headline">
          NEOTEL
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "font-medium font-headline tracking-tight transition-colors",
                  active
                    ? "text-indigo-300 border-b-2 border-indigo-500 pb-1"
                    : "text-slate-400 hover:text-indigo-200",
                )}>
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            className="text-slate-400 font-medium hover:text-white transition-colors text-sm uppercase tracking-widest">
            Client Login
          </Button>
          <Button
            variant="primary"
            className="font-headline font-bold py-2 px-6 rounded-lg scale-95 active:scale-90 transition-transform hover:shadow-[0_0_20px_rgba(192,193,255,0.4)]">
            Get a Quote
          </Button>
        </div>

        {/* Hamburger — mobile only */}
        <Button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-surface-container-high transition-colors">
          {mobileOpen ? (
            <Close sx={{ fontSize: 22 }} />
          ) : (
            <Menu sx={{ fontSize: 22 }} />
          )}
        </Button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-outline-variant/10",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        )}>
        <nav className="flex flex-col px-6 py-4 bg-[#111417]/95 backdrop-blur-2xl gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors",
                isActive(item.href)
                  ? "text-indigo-300 bg-indigo-500/10"
                  : "text-slate-400 hover:text-white hover:bg-surface-container-high",
              )}>
              {item.label}
            </a>
          ))}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-outline-variant/10">
            <Button className="text-slate-400 font-medium hover:text-white transition-colors text-xs uppercase tracking-widest py-2">
              Client Login
            </Button>
            <Button className="bg-[#c0c1ff] text-[#1000a9] font-headline font-bold py-3 px-6 rounded-lg active:scale-95 transition-transform w-full">
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
