import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowOutward } from "@/components/icons/services-icons";
import { CONTACT_ROUTE, INFO_PAGE_CARD_RADIAL } from "@/utils/constants";
import { CTA_PRIMARY_LINK_CLASSES_SM } from "@/utils/design-tokens";

interface InfoPageProps {
  label: string;
  title: string;
  description: string;
}

function InfoPage({ label, title, description }: InfoPageProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Neotel</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-8 py-24">
      <section className="relative w-full overflow-hidden rounded-xl border border-outline-variant/20 bg-tier-2 p-10 md:p-14">
        <div className={INFO_PAGE_CARD_RADIAL} />
        <div className="relative z-10">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
            {label}
          </p>
          <h1 className="mb-6 font-headline text-4xl font-black tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-on-surface-variant">
            {description}
          </p>
          <Link
            to={CONTACT_ROUTE}
            className={["inline-flex items-center gap-2", CTA_PRIMARY_LINK_CLASSES_SM].join(
              " ",
            )}
          >
            Talk to an Architect
            <ArrowOutward size={14} />
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}

export function DocumentationPage() {
  return (
    <InfoPage
      label="Resources"
      title="Documentation"
      description="Implementation guides, deployment notes, and architecture references are available on request while we finalize the self-serve docs center."
    />
  );
}

export function NetworkStatusPage() {
  return (
    <InfoPage
      label="Operations"
      title="Network Status"
      description="All current links are operational. For incident-level telemetry and historical uptime exports, contact the network operations center."
    />
  );
}

export function TechnicalSpecsPage() {
  return (
    <InfoPage
      label="Engineering"
      title="Technical Specs"
      description="Detailed uplink, antenna, failover, and integration specifications are available for qualified deployments and procurement reviews."
    />
  );
}

export function CoverageMapPage() {
  return (
    <InfoPage
      label="Coverage"
      title="Coverage Map"
      description="Global terrestrial and LEO blended coverage maps, including regional hub overlays and route availability, are available in the latest map pack."
    />
  );
}

export function ReportsPage() {
  return (
    <InfoPage
      label="Reports"
      title="Deployment Reports"
      description="Performance reports include SLA metrics, latency trends, and infrastructure change logs tailored to your deployment footprint."
    />
  );
}

export function PrivacyPolicyPage() {
  return (
    <InfoPage
      label="Legal"
      title="Privacy Policy"
      description="This page outlines how communication details, support requests, and operational metadata are handled across the platform."
    />
  );
}

export function TermsOfUsePage() {
  return (
    <InfoPage
      label="Legal"
      title="Terms of Use"
      description="Terms define permitted platform use, service responsibilities, and standard contractual boundaries for information provided on this site."
    />
  );
}

export function SecurityPolicyPage() {
  return (
    <InfoPage
      label="Security"
      title="Security Policy"
      description="Security practices include encrypted communication channels, access controls, and continuous monitoring of production infrastructure."
    />
  );
}

export function CookiePolicyPage() {
  return (
    <InfoPage
      label="Legal"
      title="Cookie Policy"
      description="Cookie usage includes essential session support and anonymized analytics signals to improve reliability and product experience."
    />
  );
}
