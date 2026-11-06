import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Receipt,
  Smartphone,
  Globe,
  Bot,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Layers,
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
      id: "security",
      index: "01",
      category: "Digital Protection & Defense",
      title: "Cybersecurity Solutions",
      description:
        "We develop security-focused software and digital protection solutions designed to strengthen digital infrastructure and improve security practices.",
      features: [
        "Cybersecurity software development",
        "Security tools and utilities",
        "Vulnerability assessment solutions",
      ],
      gradient: "from-[#E94F9B] to-[#FF706C]",
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
              <div className="text-[#F5F3F2] font-bold">Vulnerability Shield</div>
              <div className="text-[#A09B9B]">0 Vulnerabilities Detected</div>
              <div className="text-[#38B2AC] font-mono text-[11px]">Real-Time Security Active</div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Security Utilities</span>
            <span className="text-[#E94F9B] font-mono">Continuous Threat Scan</span>
          </div>
        </div>
      ),
    },
    {
      id: "billing",
      index: "02",
      category: "Business Operations",
      title: "Business & Billing Software",
      description:
        "We build customized business management and billing solutions that simplify operations and improve efficiency.",
      features: [
        "Billing and invoicing systems",
        "Business management software",
        "Inventory management solutions",
      ],
      gradient: "from-[#FF706C] to-[#F6A23B]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#FF706C]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F5F3F2]">Business Billing Module</span>
            <span className="text-[11px] text-[#FF706C] font-mono">SYNC OK</span>
          </div>
          <div className="p-4 rounded-xl bg-[#202020] border border-white/5 space-y-2 my-auto">
            <div className="flex justify-between text-xs text-[#A09B9B]">
              <span>INV-2026-904</span>
              <span className="text-[#38B2AC]">PAID</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF706C] to-[#F6A23B] w-full" />
            </div>
            <div className="flex justify-between text-xs font-mono text-[#F5F3F2] pt-1">
              <span>Automatic Invoicing</span>
              <span>100% Efficiency</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Inventory Management</span>
            <span className="text-[#FF706C] font-mono">Custom ERP Modules</span>
          </div>
        </div>
      ),
    },
    {
      id: "mobile",
      index: "03",
      category: "Native & Cross-Platform",
      title: "Application Development",
      description:
        "We develop modern mobile applications focused on performance, usability, reliability, and seamless user experiences.",
      features: [
        "Android application development",
        "iOS application development",
        "Cross-platform applications",
      ],
      gradient: "from-[#E94F9B] to-[#C747A8]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-[#E94F9B]/40 transition-all duration-500">
          <div className="w-48 h-full rounded-2xl bg-[#202020] border border-white/10 p-3 flex flex-col justify-between shadow-2xl">
            <div className="w-12 h-2.5 rounded-full bg-white/20 mx-auto mb-2" />
            <div className="space-y-2">
              <div className="h-10 rounded-lg bg-gradient-to-r from-[#E94F9B]/30 to-[#C747A8]/20 border border-[#E94F9B]/30 flex items-center px-3 justify-between">
                <span className="text-[10px] font-bold text-[#F5F3F2]">STARK APP</span>
                <Smartphone size={12} className="text-[#E94F9B]" />
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
      id: "web",
      index: "04",
      category: "Full-Stack Web Solutions",
      title: "Website Development",
      description:
        "We create modern, responsive, and scalable websites and web applications tailored to business requirements.",
      features: [
        "Business and corporate websites",
        "Custom web applications",
        "E-commerce platforms",
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
              &lt;ResponsiveWebSolutions /&gt;
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">Performance</div>
                <div className="text-sm font-bold text-[#E94F9B]">Fast</div>
              </div>
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">Responsive</div>
                <div className="text-sm font-bold text-[#38B2AC]">100%</div>
              </div>
              <div className="p-3 rounded-lg bg-[#202020] border border-white/5 text-center">
                <div className="text-xs font-mono text-[#A09B9B]">Security</div>
                <div className="text-sm font-bold text-[#F6A23B]">A+</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Corporate & E-Commerce</span>
            <span className="text-[#E94F9B] font-mono">React + Modern Stack</span>
          </div>
        </div>
      ),
    },
    {
      id: "chatbot",
      index: "05",
      category: "Conversational Automation",
      title: "Bot Development",
      description:
        "We develop customized bots and messaging-platform integrations to automate communication and improve digital interactions.",
      features: [
        "Telegram bot development",
        "Discord bot development",
        "WhatsApp automation integrations",
      ],
      gradient: "from-[#FF706C] to-[#F6A23B]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#FF706C]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38B2AC] animate-ping" />
              <span className="text-xs font-mono text-[#F5F3F2]">Messaging Bot Engine</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#38B2AC]/20 text-[#38B2AC] font-mono">
              ONLINE 24/7
            </span>
          </div>
          <div className="space-y-2.5 my-auto">
            <div className="p-2.5 rounded-xl bg-[#202020] border border-white/5 max-w-[85%] text-xs text-[#A09B9B]">
              <span className="text-[#FF706C] font-semibold">Client:</span> /query system status
            </div>
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF706C]/10 to-[#F6A23B]/10 border border-[#FF706C]/20 ml-auto max-w-[85%] text-xs text-[#F5F3F2]">
              <span className="text-[#F6A23B] font-semibold">Bot:</span> All services operational. 0 delays.
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Telegram • Discord • WhatsApp</span>
            <span className="text-[#F6A23B] font-mono">Real-Time Routing</span>
          </div>
        </div>
      ),
    },
    {
      id: "automation",
      index: "06",
      category: "Workflow & API Integration",
      title: "Automation Solutions",
      description:
        "We design automation systems that reduce repetitive work, connect digital services, and improve business operations.",
      features: [
        "Business workflow automation",
        "API integrations",
        "Task automation",
      ],
      gradient: "from-[#F6A23B] to-[#FF706C]",
      visual: (
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-[#F6A23B]/40 transition-all duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F5F3F2]">Workflow Automation Bus</span>
            <span className="text-[11px] text-[#38B2AC] font-mono">AUTO-TRIGGER</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 rounded-xl bg-[#202020] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={14} className="text-[#F6A23B]" />
                <span className="text-xs font-bold text-[#F5F3F2]">API Pipeline</span>
              </div>
              <p className="text-[11px] text-[#A09B9B]">Connected Services</p>
            </div>
            <div className="p-3 rounded-xl bg-[#202020] border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Layers size={14} className="text-[#38B2AC]" />
                <span className="text-xs font-bold text-[#F5F3F2]">Task Engine</span>
              </div>
              <p className="text-[11px] text-[#A09B9B]">Zero Repetitive Work</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-[#A09B9B]">
            <span>Custom Automation Systems</span>
            <span className="text-[#F6A23B] font-mono">Optimized Ops</span>
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
            <span>01 / WHAT WE BUILD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-6">
            What We <span className="text-gradient-brand">Build.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A09B9B] leading-relaxed">
            From developing custom software to automating complex business operations, we aim to deliver technology that makes a real difference.
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