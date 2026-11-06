import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Globe,
  Bot,
  Smartphone,
  Database,
  Receipt,
  Shield,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface DetailedService {
  id: string;
  index: string;
  icon: typeof Globe;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
}

const detailedServices: DetailedService[] = [
  {
    id: "web",
    index: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "High-Performance Modern Web Platforms",
    description:
      "We design and build powerful, lightning-fast web applications that drive verifiable business growth. From bespoke brand websites and reactive single-page applications to intricate multi-tenant SaaS dashboards, every platform is engineered for speed, security, and effortless scale.",
    features: [
      "Custom React & Next.js SSR / SSG Architectures",
      "Enterprise E-Commerce Platforms & Gateways",
      "Interactive Admin Telemetry & Client Portals",
      "High-Throughput RESTful & GraphQL API Gateways",
      "Pixel-Perfect UI/UX Design System Implementations",
    ],
    techStack: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "chatbot",
    index: "02",
    icon: Bot,
    title: "Bot Development & Automation",
    tagline: "Autonomous WhatsApp & Workflow Systems",
    description:
      "STARK INFOTECH delivers enterprise WhatsApp automation and intelligent workflow systems designed to streamline customer communication and business workflows directly inside WhatsApp. We build autonomous userbots, transactional dispatch systems, and scheduled cron engines that eliminate manual repetitive labor.",
    features: [
      "WhatsApp Business API & Userbot Frameworks",
      "Real-Time Webhook Routing & CRM Auto-Sync",
      "Interactive Natural Language & Multi-Level Menus",
      "Scheduled Broadcasts & Auto-Trigger Notifications",
      "24/7 Uninterrupted Self-Healing Server Daemon",
    ],
    techStack: ["Node.js", "Python", "WhatsApp API", "Webhooks", "Redis"],
  },
  {
    id: "mobile",
    index: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Fluid Native iOS & Android Experiences",
    description:
      "Transform high-impact ideas into intuitive mobile products. We build native and cross-platform mobile applications with 60fps animations, robust offline sync, and deep hardware sensor integrations that users love returning to.",
    features: [
      "Native Android Application Development (Kotlin/Java)",
      "Native iOS Application Development (Swift)",
      "Cross-Platform Engineering (Flutter & React Native)",
      "Polished Human Interface (HIG) UI/UX Design",
      "Continuous App Store Deployment & Lifecycle Support",
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "database",
    index: "04",
    icon: Database,
    title: "Database Architecture & Management",
    tagline: "Fault-Tolerant Enterprise Data Infrastructure",
    description:
      "Your company's data is its most critical competitive asset. We architect, implement, and manage resilient database infrastructures that guarantee transactional ACID integrity, sub-millisecond query performance, and total disaster resilience.",
    features: [
      "Relational Clusters: PostgreSQL, MySQL, SQLite",
      "Distributed NoSQL: MongoDB, Firebase, Supabase",
      "High-Concurrency Schema Modeling & Index Tuning",
      "Zero-Downtime Data Migration & Pipeline Sync",
      "Automated Continuous Backups & Multi-Region Recovery",
    ],
    techStack: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "AWS RDS"],
  },
  {
    id: "billing",
    index: "05",
    icon: Receipt,
    title: "Billing & Business Systems",
    tagline: "Custom POS, Invoicing & ERP Architectures",
    description:
      "Streamline your day-to-day operations with custom software built specifically for your business model. From point-of-sale registers to complete custom ERP suites, our tools eliminate inventory shrinkage, accelerate cash flow, and ensure compliance.",
    features: [
      "Retail & Wholesale POS Cashier Systems",
      "Multi-Warehouse Inventory Management Software",
      "Automated GST-Compliant Tax Invoicing Modules",
      "Automated Payment Reconciliation & Receipts",
      "Modular Custom ERP Dashboards for Executive Teams",
    ],
    techStack: ["React", "Express", "PostgreSQL", "TypeScript", "Node.js"],
  },
  {
    id: "security",
    index: "06",
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    tagline: "Proactive Defense & Threat Neutralization",
    description:
      "Safeguard your mission-critical infrastructure from sophisticated cyber threats and ransom exploits. Our security engineers perform aggressive penetration testing, enforce zero-trust policies, and set up continuous monitoring around the clock.",
    features: [
      "Perimeter Network Security Audits & Vulnerability Scans",
      "Ethical Penetration Testing (Web, Mobile & Network)",
      "Ransomware Isolation & Data Theft Prevention",
      "End-to-End Encryption & Endpoint Hardening",
      "Incident Response Protocols, Forensic Recovery & SOC Setup",
    ],
    techStack: ["OWASP Standards", "Wireshark", "Burp Suite", "Kali", "TLS 1.3"],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#111111] overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-pink -top-24 left-1/4 opacity-30 pointer-events-none" />
        <div className="ambient-glow-orange top-10 -right-20 opacity-30 pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              <span>FULL-SPECTRUM ENGINEERING</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              Engineered For <br />
              <span className="text-gradient-brand">Unrivaled Velocity.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-2xl mx-auto leading-relaxed">
              From intelligent WhatsApp automations to enterprise cloud software, we build robust systems that convert complexity into sustainable competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Deep-Dives */}
      <div className="bg-[#111111]">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 lg:py-32 scroll-mt-24 border-b border-white/[0.08] relative ${
                isEven ? "bg-[#111111]" : "bg-[#141414]"
              }`}
            >
              <div className="container mx-auto px-5 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono text-[#E94F9B] font-semibold">
                        {service.index}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#A09B9B] px-3 py-1 rounded-full bg-[#181818] border border-white/5">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F3F2]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#A09B9B] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-3">
                      <div className="text-xs uppercase tracking-wider text-[#F5F3F2] font-semibold">
                        Core Capabilities
                      </div>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-[#F5F3F2]">
                          <CheckCircle2
                            size={18}
                            className="text-[#FF706C] shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#777272] mr-2">Stack:</span>
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-[#202020] border border-white/5 text-[#A09B9B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Consultation Trigger */}
                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181818] border border-white/10 text-sm font-semibold text-[#F5F3F2] hover:bg-[#202020] hover:border-[#E94F9B]/50 transition-all duration-300"
                      >
                        <span>Request a Quote for {service.title}</span>
                        <ArrowUpRight
                          size={16}
                          className="text-[#FF706C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#181818] to-[#141414] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-[#E94F9B]/40 transition-all duration-500">
                      {/* Ambient corner light */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#E94F9B]/20 to-transparent blur-2xl rounded-full pointer-events-none" />

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#777272]">{service.id}.starkinfotech.system</span>
                        <span className="text-xs font-mono text-[#FF706C]">PRODUCTION READY</span>
                      </div>

                      {/* Large Centerpiece Icon */}
                      <div className="my-auto text-center py-8">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#202020] to-[#181818] border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                          <Icon size={48} className="text-[#F6A23B]" />
                        </div>
                        <div className="mt-4 text-xs font-mono text-[#A09B9B] uppercase tracking-widest">
                          {service.title}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#777272] font-mono">
                        <span>Architecture Tier: High-Load</span>
                        <span className="text-[#38B2AC]">SLA: 99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-[#0e0e0e] text-center relative overflow-hidden">
        <div className="ambient-glow-pink -bottom-20 left-1/3 opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-10 relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            Need a Custom Architecture?
          </h2>
          <p className="text-base text-[#A09B9B] mb-8 leading-relaxed">
            Every business has unique technical constraints. Schedule a direct technical scoping session with our lead architects.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-base hover:bg-white hover:shadow-2xl hover:shadow-[#E94F9B]/20 transition-all duration-300"
          >
            <span>Start Technical Scoping</span>
            <ArrowUpRight
              size={18}
              className="text-[#E94F9B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;