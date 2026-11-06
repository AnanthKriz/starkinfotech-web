import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Bot,
  Smartphone,
  Database,
  Receipt,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";

interface ServiceItem {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  gradient: string;
  visual: React.ReactNode;
}

export const ServicesOverview: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "web",
      index: "01",
      category: "Full-Stack Web Engineering",
      title: "Web Development",
      description:
        "We construct enterprise-grade, blazing-fast web applications. From reactive single-page applications to high-throughput SaaS platforms, every interface is engineered for conversion, security, and effortless scaling.",
      features: [
        "Custom Next.js & React Architectures",
        "High-Conversion Enterprise Dashboards",
        "Resilient API Services & Micro-frontends",
      ],
      gradient: "from-[#E94F9B] to-[#FF706C]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#E94F9B]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF706C]/70" />
              <span className="w-3 h-3 rounded-full bg-[#F6A23B]/70" />
              <span className="w-3 h-3 rounded-full bg-[#38B2AC]/70" />
            </div>
            <span className="text-[11px] font-mono text-[#777272]">app.starkinfotech.com</span>
          </div>
          <div className="space-y-3 my-auto py-2">
            <div className="h-6 w-3/4 rounded bg-gradient-to-r from-[#E94F9B]/20 to-transparent border-l-2 border-[#E94F9B] px-3 flex items-center text-xs font-mono text-[#F5F3F2]">
              &lt;EngineeredForScale /&gt;
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">LCP</div>
                <div className="text-sm font-bold text-[#E94F9B]">0.4s</div>
              </div>
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">Score</div>
                <div className="text-sm font-bold text-[#38B2AC]">100</div>
              </div>
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">Security</div>
                <div className="text-sm font-bold text-[#F6A23B]">A+</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>SSR / SSG Hybrid Engine</span>
            <span className="text-[#E94F9B] font-mono">React 18 + TypeScript</span>
          </div>
        </div>
      ),
    },
    {
      id: "chatbot",
      index: "02",
      category: "Conversational Automation",
      title: "Bot Development & Automation",
      description:
        "Specialized WhatsApp bots and intelligent task automation engines. STARK INFOTECH streamlines customer communications, scheduled workflows, and transactional triggers with zero latency.",
      features: [
        "Autonomous WhatsApp Userbot & Business API",
        "Dynamic NLP & Rule-Based Routing",
        "Multi-Service Webhook Integration",
      ],
      gradient: "from-[#FF706C] to-[#F6A23B]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#FF706C]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38B2AC] animate-ping" />
              <span className="text-xs font-mono text-[#F5F3F2]">WhatsApp Bot Worker #01</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#38B2AC]/20 text-[#38B2AC] font-mono">
              ACTIVE 24/7
            </span>
          </div>
          <div className="space-y-2.5 my-auto">
            <div className="p-2.5 rounded-xl bg-[#202020] border border-white/5 max-w-[85%] text-xs text-[#A09B9B]">
              <span className="text-[#FF706C] font-semibold">User:</span> /automate order #8921 status
            </div>
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF706C]/10 to-[#F6A23B]/10 border border-[#FF706C]/20 ml-auto max-w-[85%] text-xs text-[#F5F3F2]">
              <span className="text-[#F6A23B] font-semibold">StarkBot:</span> Verified ✓ Order dispatched. Tracking telemetry updated.
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Latency: 12ms</span>
            <span className="text-[#F6A23B] font-mono">Webhook Auto-Sync</span>
          </div>
        </div>
      ),
    },
    {
      id: "mobile",
      index: "03",
      category: "Native & Cross-Platform",
      title: "Mobile App Development",
      description:
        "Fluid, intuitive mobile applications engineered for iOS and Android. Built with Flutter and React Native, our mobile products provide native 60fps performance and deeply polished user experiences.",
      features: [
        "Native iOS & Android Architecture",
        "Flutter & React Native Cross-Platform",
        "Offline-First Data Synchronization",
      ],
      gradient: "from-[#E94F9B] to-[#C747A8]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-[#E94F9B]/40 transition-all duration-500">
          <div className="w-48 h-full rounded-2xl bg-[#202020] border border-white/10 p-3 flex flex-col justify-between shadow-2xl">
            <div className="w-12 h-2.5 rounded-full bg-white/20 mx-auto mb-2" />
            <div className="space-y-2">
              <div className="h-10 rounded-lg bg-gradient-to-r from-[#E94F9B]/30 to-[#C747A8]/20 border border-[#E94F9B]/30 flex items-center px-3 justify-between">
                <span className="text-[10px] font-bold text-[#F5F3F2]">STARK MOBILE</span>
                <Zap size={12} className="text-[#E94F9B]" />
              </div>
              <div className="h-6 rounded bg-white/5" />
              <div className="h-6 rounded bg-white/5" />
            </div>
            <div className="w-16 h-1 rounded-full bg-white/30 mx-auto mt-2" />
          </div>
        </div>
      ),
    },
    {
      id: "database",
      index: "04",
      category: "High-Availability Infrastructure",
      title: "Database Architecture",
      description:
        "Data is the foundation of modern enterprise operations. We design fault-tolerant database clusters, perform zero-downtime migrations, and optimize queries across relational and document engines.",
      features: [
        "PostgreSQL, MySQL & SQLite Clusters",
        "MongoDB, Supabase & Distributed NoSQL",
        "Automated Backup & Disaster Recovery",
      ],
      gradient: "from-[#F6A23B] to-[#FF706C]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#F6A23B]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F5F3F2]">Cluster Topology</span>
            <span className="text-[11px] text-[#38B2AC] font-mono">Sync: OK</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 rounded-xl bg-[#202020] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Database size={14} className="text-[#F6A23B]" />
                <span className="text-xs font-bold text-[#F5F3F2]">Primary (Master)</span>
              </div>
              <p className="text-[11px] text-[#A09B9B]">Postgres v16 • Read/Write</p>
            </div>
            <div className="p-3 rounded-xl bg-[#202020] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Layers size={14} className="text-[#38B2AC]" />
                <span className="text-xs font-bold text-[#F5F3F2]">Replica (Edge)</span>
              </div>
              <p className="text-[11px] text-[#A09B9B]">Sub-millisecond queries</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>ACID Compliant</span>
            <span className="text-[#F6A23B] font-mono">Zero Data Loss SLA</span>
          </div>
        </div>
      ),
    },
    {
      id: "billing",
      index: "05",
      category: "Enterprise Systems",
      title: "Billing & Business Software",
      description:
        "Custom billing engines, automated POS systems, and bespoke ERP solutions. We engineer software tailored to the exact accounting, inventory, and regulatory requirements of your operations.",
      features: [
        "GST-Compliant Invoicing & POS",
        "Automated Ledger & Inventory Sync",
        "Custom Tailored ERP Modules",
      ],
      gradient: "from-[#FF706C] to-[#E94F9B]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#FF706C]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F5F3F2]">Invoice Generator Module</span>
            <span className="text-[11px] text-[#FF706C] font-mono">GST Verified</span>
          </div>
          <div className="p-4 rounded-xl bg-[#202020] border border-white/5 space-y-2 my-auto">
            <div className="flex justify-between text-xs text-[#A09B9B]">
              <span>INV-2026-904</span>
              <span className="text-[#38B2AC]">PAID</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF706C] to-[#E94F9B] w-full" />
            </div>
            <div className="flex justify-between text-xs font-mono text-[#F5F3F2] pt-1">
              <span>Automatic Reconciliation</span>
              <span>100% Acc.</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Real-Time Auditing</span>
            <span className="text-[#FF706C] font-mono">Instant Export</span>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      index: "06",
      category: "Defense & Threat Intelligence",
      title: "Cybersecurity & Protection",
      description:
        "Comprehensive cyber defense frameworks to safeguard your intellectual property, client data, and application runtimes against sophisticated adversaries and automated exploits.",
      features: [
        "Network Penetration Testing & Audits",
        "Ransomware & Zero-Day Mitigation",
        "Incident Response & SOC Hardening",
      ],
      gradient: "from-[#E94F9B] to-[#F6A23B]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#E94F9B]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F5F3F2]">Perimeter Threat Guard</span>
            <span className="text-[11px] text-[#38B2AC] font-mono">SHIELD ENGAGED</span>
          </div>
          <div className="my-auto flex items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E94F9B]/20 to-[#FF706C]/20 border border-[#E94F9B]/40 flex items-center justify-center">
              <Shield size={32} className="text-[#FF706C]" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="text-[#F5F3F2] font-bold">256-Bit TLS Endpoints</div>
              <div className="text-[#A09B9B]">0 Vulnerabilities Detected</div>
              <div className="text-[#38B2AC] font-mono text-[11px]">Real-Time Firewall Active</div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>SOC 2 Type II Aligned</span>
            <span className="text-[#E94F9B] font-mono">Continuous Threat Scan</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#111111] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-pink top-1/4 -right-40 opacity-25" />
      <div className="ambient-glow-orange bottom-1/4 -left-40 opacity-25" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C] mb-3">
            <span>01 / CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-6">
            What We <span className="text-gradient-brand">Build.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A09B9B] leading-relaxed">
            We reject off-the-shelf software compromises. Every system we build is architected from clean foundations for resilience, speed, and real business dominance.
          </p>
        </div>

        {/* Editorial Alternating Services Stack */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={`preview-${service.id}`}
                className="group p-8 lg:p-12 rounded-3xl bg-[#181818]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono text-[#777272] tracking-widest">
                        {service.index}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#A09B9B] font-medium px-3 py-1 rounded-full bg-[#202020] border border-white/5">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#F5F3F2]">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A09B9B] leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-sm text-[#F5F3F2]">
                          <CheckCircle2 size={16} className="text-[#FF706C] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link to deep-dive on Services page */}
                    <div className="pt-4">
                      <Link
                        to={`/services#${service.id}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#F5F3F2] hover:text-[#E94F9B] transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-[#FF706C]"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Bespoke Visual Composition Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {service.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;