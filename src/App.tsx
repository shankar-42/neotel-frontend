import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageLayout } from "@/layouts/PageLayout";

// ─── Route-level code splitting ───────────────────────────────────────────────
// Each route is its own JS chunk — only downloaded when the user visits that page.
const HomePage        = lazy(() => import("@/routes/home").then(m => ({ default: m.HomePage })));
const GlobalNetworkPage = lazy(() => import("@/routes/global-network/index").then(m => ({ default: m.GlobalNetworkPage })));
const AboutPage       = lazy(() => import("@/routes/infra-strcture/index").then(m => ({ default: m.AboutPage })));
const ContactPage     = lazy(() => import("@/routes/contact/index").then(m => ({ default: m.ContactPage })));
const ServicesPage    = lazy(() => import("@/routes/service/index").then(m => ({ default: m.ServicesPage })));
const NewsPage        = lazy(() => import("@/routes/news").then(m => ({ default: m.NewsPage })));
const BlogsPage       = lazy(() => import("@/routes/blogs").then(m => ({ default: m.BlogsPage })));
const BlogDetailPage  = lazy(() => import("@/routes/blogs/[slug]").then(m => ({ default: m.BlogDetailPage })));
const NewsDetailPage  = lazy(() => import("@/routes/news/[id]").then(m => ({ default: m.NewsDetailPage })));
const DocumentationPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.DocumentationPage })));
const NetworkStatusPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.NetworkStatusPage })));
const TechnicalSpecsPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.TechnicalSpecsPage })));
const CoverageMapPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.CoverageMapPage })));
const ReportsPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.ReportsPage })));
const PrivacyPolicyPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfUsePage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.TermsOfUsePage })));
const SecurityPolicyPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.SecurityPolicyPage })));
const CookiePolicyPage = lazy(() => import("@/routes/info-pages").then(m => ({ default: m.CookiePolicyPage })));

// ─── Scroll to top on navigation ─────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// ─── Minimal page skeleton shown while a route chunk loads ───────────────────

function PageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-1 w-24 overflow-hidden rounded-full bg-surface-container-high">
          <div
            className="h-full w-full animate-[shimmer_1.2s_ease-in-out_infinite] bg-linear-to-r from-transparent via-primary/40 to-transparent"
            style={{ backgroundSize: "200% 100%" }}
          />
        </div>
        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">
          NEOTEL
        </span>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/"               element={<PageLayout><HomePage /></PageLayout>} />
          <Route path="/global-network" element={<PageLayout><GlobalNetworkPage /></PageLayout>} />
          <Route path="/about"          element={<PageLayout><AboutPage /></PageLayout>} />
          <Route path="/contact"        element={<PageLayout><ContactPage /></PageLayout>} />
          <Route path="/service"        element={<PageLayout><ServicesPage /></PageLayout>} />
          <Route path="/news"           element={<PageLayout><NewsPage /></PageLayout>} />
          <Route path="/blogs"          element={<PageLayout><BlogsPage /></PageLayout>} />
          <Route path="/blogs/:slug"    element={<PageLayout><BlogDetailPage /></PageLayout>} />
          <Route path="/news/:id"       element={<PageLayout><NewsDetailPage /></PageLayout>} />
          <Route path="/documentation"  element={<PageLayout><DocumentationPage /></PageLayout>} />
          <Route path="/network-status" element={<PageLayout><NetworkStatusPage /></PageLayout>} />
          <Route path="/technical-specs" element={<PageLayout><TechnicalSpecsPage /></PageLayout>} />
          <Route path="/coverage-map"   element={<PageLayout><CoverageMapPage /></PageLayout>} />
          <Route path="/reports"        element={<PageLayout><ReportsPage /></PageLayout>} />
          <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
          <Route path="/terms-of-use"   element={<PageLayout><TermsOfUsePage /></PageLayout>} />
          <Route path="/security"       element={<PageLayout><SecurityPolicyPage /></PageLayout>} />
          <Route path="/cookie-policy"  element={<PageLayout><CookiePolicyPage /></PageLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
