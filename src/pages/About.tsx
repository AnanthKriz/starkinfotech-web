import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Shield,
  Lightbulb,
  CheckCircle,
  Eye,
  Zap,
  TrendingUp,
  ArrowUpRight,
  Code2,
  Lock,
  Layers,
  Terminal,
  Smartphone,
  Network,
} from "lucide-react";

interface CoreValue {
  number: string;
  icon: typeof Shield;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously exploring forward-thinking engineering patterns, new technologies, and creative software architectures to solve modern business challenges.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Security",
    description:
      "Prioritizing cybersecurity, zero-trust data protection, and defensive system hardening across every product and infrastructure we deploy.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Reliability",
    description:
      "Engineering resilient, fault-tolerant digital solutions that operate dependably under heavy production loads without compromise.",
  },
  {
    number: "04",
    icon: Eye,
    title: "Transparency",
    description:
      "Maintaining open technical communication, clear timelines, collaborative code ownership, and honest engineering partnerships.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing every database query, frontend paint, and automation trigger for speed, efficiency, and resource conservation.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Continuous Development",
    description:
      "Constantly evolving our engineering practices, refining client systems, and adopting leading-edge IT standards to ensure long-term relevance.",
  },
];

const specializations = [
  { icon: Lock, label: "Cybersecurity Software" },
  { icon: Layers, label: "Business Management Systems" },
  { icon: Code2, label: "Billing & Invoicing Software" },
  { icon: Smartphone, label: "Mobile Application Development" },
  { icon: Terminal, label: "Website Development" },
  { icon: Zap, label: "Bot Development" },
  { icon: Network, label: "Networking Solutions" },
  { icon: Lightbulb, label: "Intelligent Automation Systems" },
];

const About = () => {
  return (
    <Layout>
      {/* 1. Hero / About Our Company Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#111111] overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-pink -top-20 left-10 opacity-30 pointer-events-none" />
        <div className="ambient-glow-orange top-20 right-0 opacity-25 pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              <span>ABOUT OUR COMPANY</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              About <span className="text-gradient-brand">Stark Infotech.</span>
            </h1>

            <p className="text-lg sm:text-xl font-heading font-semibold text-[#F5F3F2]">
              Custom Software Development & Digital Solutions Company
            </p>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-3xl mx-auto leading-relaxed">
              We are a technology-driven IT company focused on developing innovative software solutions, building intelligent digital products, and providing advanced technology services for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-24 lg:py-32 bg-[#141414] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F3F2]">
                Practical Solutions for <br />
                Real-World Problems.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A09B9B] leading-relaxed">
                <p>
                  At <span className="text-[#F5F3F2] font-semibold">Stark Infotech</span>, our mission is to simplify technology, strengthen digital security, and transform ideas into powerful, reliable, and scalable solutions.
                </p>
                <p>
                  From developing custom software to automating complex business operations, we aim to deliver technology that makes a real difference. We believe in innovation, security, performance, and quality. Every project we undertake is driven by our commitment to creating practical solutions for real-world challenges.
                </p>
                <p>
                  Whether working with emerging startups, established commercial enterprises, or individual visionaries, we operate with technical rigor, architectural clarity, and unwavering dedication to project success.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/leadership"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F5F3F2] hover:text-[#E94F9B] transition-colors"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#FF706C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Right Abstract Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#181818] to-[#111111] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="ambient-glow-pink -top-10 -right-10 opacity-30" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777272]">EST. STARK INFOTECH</span>
                  <span className="text-xs font-mono text-[#E94F9B]">GLOBAL IT COMPANY</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="text-7xl font-heading font-bold text-gradient-brand">
                    SI
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#A09B9B] mt-2">
                    Custom Software & Digital Solutions
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#777272] font-mono">
                  <span>Standard: Security & Quality</span>
                  <span className="text-[#38B2AC]">Production-Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do Section */}
      <section className="py-24 lg:py-32 bg-[#111111] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              WHAT WE DO
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mt-2 mb-4">
              Comprehensive Technology <span className="text-gradient-brand">Expertise.</span>
            </h2>
            <p className="text-base text-[#A09B9B] leading-relaxed">
              We specialize in cybersecurity software, business management systems, billing and invoicing software, mobile application development, website development, bot development, networking solutions, and intelligent automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {specializations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/5 flex items-center justify-center text-[#FF706C] group-hover:bg-[#E94F9B]/10 transition-colors shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-colors">
                      {item.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="py-24 lg:py-32 bg-[#141414] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="p-8 lg:p-12 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="ambient-glow-pink -top-20 -right-20 opacity-20" />
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E94F9B]">
                  FORWARD ASPIRATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#F5F3F2]">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-[#F5F3F2] leading-relaxed pt-2">
                  "To become a trusted technology company recognized for innovation, cybersecurity, software excellence, and intelligent digital solutions."
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-white/5 text-xs font-mono text-[#777272]">
                Guiding Horizon • Stark Infotech
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 lg:p-12 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#FF706C]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="ambient-glow-orange -top-20 -right-20 opacity-20" />
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
                  CORE PURPOSE
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#F5F3F2]">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-[#F5F3F2] leading-relaxed pt-2">
                  "To empower businesses and individuals through secure, innovative, and accessible technology while continuously exploring new possibilities in software engineering and automation."
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-white/5 text-xs font-mono text-[#777272]">
                Daily Execution • Stark Infotech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values Section */}
      <section className="py-24 lg:py-36 bg-[#111111] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mt-2 mb-4">
              Our Core <span className="text-gradient-brand">Values.</span>
            </h2>
            <p className="text-base text-[#A09B9B]">
              The six foundational principles that steer our software engineering, client partnerships, and technical innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="p-8 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-mono text-[#E94F9B] font-semibold">
                        {val.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/5 flex items-center justify-center text-[#FF706C] group-hover:bg-[#E94F9B]/10 transition-colors">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-[#F5F3F2] mb-3 group-hover:text-gradient-brand transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-sm text-[#A09B9B] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-[#0e0e0e] text-center relative overflow-hidden">
        <div className="ambient-glow-orange -bottom-20 right-1/4 opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-10 relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            Build With Stark Infotech.
          </h2>
          <p className="text-base text-[#A09B9B] mb-8 leading-relaxed">
            Have an upcoming software build, bot automation requirement, or security overhaul? We are ready to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-base hover:bg-white hover:shadow-2xl hover:shadow-[#E94F9B]/20 transition-all duration-300"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight
                size={18}
                className="text-[#E94F9B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#181818] border border-white/10 text-[#F5F3F2] font-medium text-base hover:border-white/25 hover:bg-[#202020] transition-all duration-300"
            >
              <span>Meet Our Leadership</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;