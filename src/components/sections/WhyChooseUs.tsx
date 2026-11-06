import React from "react";
import { Shield, Layers, Code2, Target, Headphones, ArrowRight } from "lucide-react";

interface Strength {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export const WhyChooseUs: React.FC = () => {
  const strengths: Strength[] = [
    {
      number: "01",
      tag: "Vulnerability-Proof",
      title: "Security-First Engineering",
      description:
        "Security is never an afterthought. Every database schema, API gateway, and automation pipeline is built following strict OWASP standards with zero-trust validation and robust encryption.",
    },
    {
      number: "02",
      tag: "Elastic Throughput",
      title: "Scalable Architecture",
      description:
        "We build for tomorrow's traffic spikes today. Our cloud native and micro-modular infrastructures dynamically adapt under heavy concurrent loads without latency degradation.",
    },
    {
      number: "03",
      tag: "Zero Generic Templates",
      title: "Custom-Built Solutions",
      description:
        "Every line of business code is tailored directly to your operational logic and competitive edge. No bloated generic CMSs or cookie-cutter template compromises.",
    },
    {
      number: "04",
      tag: "Engineering Discipline",
      title: "Clean & Maintainable Code",
      description:
        "Strict TypeScript typing, modular directory architecture, continuous integration, and exhaustive documentation ensure your team or ours can extend systems seamlessly for years.",
    },
    {
      number: "05",
      tag: "True Partnership",
      title: "Client-Focused Development",
      description:
        "We operate as technical co-founders and senior advisors. Regular sprint demos, transparent roadmaps, and continuous direct communication ensure high-velocity delivery.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#111111] overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-magenta -top-32 right-10 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C]">
              <span>02 / WHY PARTNER WITH US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-tight">
              Why <br />
              <span className="text-gradient-brand">STARK INFOTECH?</span>
            </h2>
            <p className="text-base text-[#A09B9B] leading-relaxed max-w-md">
              We replace brittle SaaS workarounds with sovereign digital assets designed to outlast, outscale, and outperform market competition.
            </p>
            <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.08] space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#F5F3F2] font-semibold">
                Our Guarantee
              </div>
              <p className="text-xs text-[#A09B9B] leading-relaxed">
                Clean source code ownership, zero hidden vendor lock-in, and uncompromising engineering integrity.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Minimalist List (Not generic cards) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="py-8 lg:py-10 first:pt-0 last:pb-0 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm font-mono text-[#E94F9B] font-semibold">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#777272] group-hover:text-[#FF706C] transition-colors">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-all duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A09B9B] leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;