import { Link } from "react-router-dom";
import { ArrowOutward } from "@/components/icons/services-icons";
import {
  COOKIE_POLICY_ROUTE,
  DOCUMENTATION_ROUTE,
  NETWORK_STATUS_ROUTE,
  PRIVACY_POLICY_ROUTE,
  SECURITY_ROUTE,
  TERMS_OF_USE_ROUTE,
} from "@/utils/constants";
import { CTA_PRIMARY_LINK_CLASSES_SM } from "@/utils/design-tokens";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_NAV = [
  {
    heading: "Company",
    links: [
      { label: "Solutions", href: "/" },
      { label: "Infrastructure", href: "/about" },
      { label: "Global Network", href: "/global-network" },
      { label: "Services", href: "/service" },
      { label: "Support", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "News & Insights", href: "/news" },
      { label: "Blog", href: "/blogs" },
      { label: "Case Studies", href: "/news" },
      { label: "Documentation", href: DOCUMENTATION_ROUTE },
      { label: "Network Status", href: NETWORK_STATUS_ROUTE },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: PRIVACY_POLICY_ROUTE },
      { label: "Terms of Use", href: TERMS_OF_USE_ROUTE },
      { label: "Security", href: SECURITY_ROUTE },
      { label: "Cookie Policy", href: COOKIE_POLICY_ROUTE },
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-tier-3 border-t border-outline-variant/10">
      {/* top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-surface to-transparent" />

      <div className="mx-auto max-w-screen-2xl px-8">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="font-headline text-2xl font-black tracking-tighter text-white uppercase">
              NEOTEL
            </a>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-on-surface-variant">
              Enterprise-grade satellite connectivity powered by Starlink.
              Deployed in days, operational wherever you are.
            </p>

            {/* Starlink badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded border border-secondary/20 bg-secondary/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                Authorized Starlink Partner
              </span>
            </div>

            {/* Coverage note */}
            <p className="mt-6 text-[11px] uppercase tracking-widest text-outline">
              Serving Asia-Pacific, Arctic &amp; Maritime routes
            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className={[
                "mt-8 inline-flex items-center gap-2 hover:scale-[1.02] transition-transform",
                CTA_PRIMARY_LINK_CLASSES_SM,
              ].join(" ")}>
              Get a Quote
              <ArrowOutward size={12} />
            </Link>
          </div>

          {/* Nav cols */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-6 font-label text-[10px] uppercase tracking-[0.25em] text-outline">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-on-surface-variant/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/10 py-8 md:flex-row">
          <span className="font-label text-[10px] uppercase tracking-widest text-outline">
            © {year} NEOTEL Communications. All systems operational — 99.9% SLA
          </span>
          <div className="flex gap-6">
            {[
              { label: "Privacy", href: PRIVACY_POLICY_ROUTE },
              { label: "Terms", href: TERMS_OF_USE_ROUTE },
              { label: "Legal", href: PRIVACY_POLICY_ROUTE },
              { label: "Security", href: SECURITY_ROUTE },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="font-label text-[10px] uppercase tracking-widest text-outline transition-colors hover:text-secondary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
