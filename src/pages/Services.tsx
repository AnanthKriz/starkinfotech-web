import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Shield,
  Receipt,
  Smartphone,
  Globe,
  Bot,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface DetailedService {
  id: string;
  index: string;
  icon: typeof Shield;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
}

const detailedServices: DetailedService[] = [
  {
    id: "security",
    index: "01",
    icon: Shield,
    title: "Cybersecurity Solutions",
    tagline: "Digital Protection & Vulnerability Defense",
    description:
      "We develop security-focused software and digital protection solutions designed to strengthen digital infrastructure and improve security practices.",
    features: [
      "Cybersecurity software development",
      "Security tools and utilities",
      "Vulnerability assessment solutions",
      "Digital security and protection systems",
    ],
    techStack: ["Defense Architectures", "Security Auditing", "Threat Analysis", "Zero-Trust Protocols"],
  },
  {
    id: "billing",
    index: "02",
    icon: Receipt,
    title: "Business & Billing Software",
    tagline: "Operations Management & Financial Workflow",
    description:
      "We build customized business management and billing solutions that simplify operations and improve efficiency.",
    features: [
      "Billing and invoicing systems",
      "Business management software",
      "Inventory management solutions",
      "Custom business automation",
    ],
    techStack: ["Invoicing Engines", "Inventory Sync", "GST Compliance", "POS Software"],
  },
  {
    id: "mobile",
    index: "03",
    icon: Smartphone,
    title: "Application Development",
    tagline: "Modern Mobile & Cross-Platform Software",
    description:
      "We develop modern mobile applications focused on performance, usability, reliability, and seamless user experiences.",
    features: [
      "Android application development",
      "iOS application development",
      "Cross-platform applications",
      "Custom mobile solutions",
    ],
    techStack: ["Flutter", "React Native", "Android SDK", "iOS Swift", "Mobile APIs"],
  },
  {
    id: "web",
    index: "04",
    icon: Globe,
    title: "Website Development",
    tagline: "Scalable Web Applications & Digital Platforms",
    description:
      "We create modern, responsive, and scalable websites and web applications tailored to business requirements.",
    features: [
      "Business and corporate websites",
      "Custom web applications",
      "E-commerce platforms",
      "Modern and responsive web solutions",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "chatbot",
    index: "05",
    icon: Bot,
    title: "Bot Development",
    tagline: "Intelligent Bots & Messaging Platform Automations",
    description:
      "We develop customized bots and messaging-platform integrations to automate communication and improve digital interactions.",
    features: [
      "Telegram bot development",
      "Discord bot development",
      "WhatsApp automation integrations",
      "Custom intelligent bots",
    ],
    techStack: ["WhatsApp API", "Telegram Bot API", "Discord.js", "Python", "Node.js"],
  },
  {
    id: "automation",
    index: "06",
    icon: Zap,
    title: "Automation Solutions",
    tagline: "Workflow Optimization & API Integrations",
    description:
      "We design automation systems that reduce repetitive work, connect digital services, and improve business operations.",
    features: [
      "Business workflow automation",
      "API integrations",
      "Task automation",
      "Custom automation systems",
    ],
    techStack: ["Workflow Engines", "Webhook Handlers", "Custom APIs", "Data Pipelines"],
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
              <span>ADVANCED TECHNOLOGY SERVICES</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              Our Professional <br />
              <span className="text-gradient-brand">Services.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-2xl mx-auto leading-relaxed">
              We specialize in cybersecurity software, business management systems, billing and invoicing software, mobile application development, website development, bot development, networking solutions, and intelligent automation systems.
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
                        Service Scope & Deliverables
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
                      <span className="text-xs font-mono text-[#777272] mr-2">Focus:</span>
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
                        <span>Inquire About {service.title}</span>
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
                        <span>Quality: Enterprise</span>
                        <span className="text-[#38B2AC]">Support: Active</span>
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
            Need a Custom Solution?
          </h2>
          <p className="text-base text-[#A09B9B] mb-8 leading-relaxed">
            Every business has unique technical requirements. Reach out to discuss how Stark Infotech can assist your next digital project.
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