import React from "react";
import { Search, Compass, Code, ShieldCheck, Rocket } from "lucide-react";

interface Step {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const Process: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      phase: "Phase 1",
      title: "Discovery & Analysis",
      description:
        "We audit your operational bottlenecks, business objectives, user flows, and technical prerequisites before writing a single line of code.",
      deliverables: ["Product Specification", "Architecture Blueprint", "Technical Feasibility"],
    },
    {
      number: "02",
      phase: "Phase 2",
      title: "Strategy & Architecture",
      description:
        "Drafting modular database models, API contracts, interactive UI/UX wireframes, and secure cloud topologies for scale.",
      deliverables: ["Database Schemas", "Interactive Prototypes", "API Contract Spec"],
    },
    {
      number: "03",
      phase: "Phase 3",
      title: "Agile Development",
      description:
        "Sprint-based software development with continuous integration, bi-weekly milestone demos, clean code practices, and strict typing.",
      deliverables: ["Modular Codebase", "Sprint Demos", "Staging Environments"],
    },
    {
      number: "04",
      phase: "Phase 4",
      title: "Testing & Security Review",
      description:
        "Penetration testing, load stress simulations, cross-device QA, vulnerability audits, and edge-case validation.",
      deliverables: ["Security Audit Report", "Stress Test Metrics", "Zero-Bug Signoff"],
    },
    {
      number: "05",
      phase: "Phase 5",
      title: "Deployment & Support",
      description:
        "Zero-downtime production launch, automated cloud backups, 24/7 telemetry monitoring, and proactive system upgrades.",
      deliverables: ["Production Rollout", "Telemetry Dashboards", "24/7 Incident SLA"],
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#0e0e0e] border-y border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-orange top-1/3 -right-20 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C] mb-3">
            <span>03 / METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            From Concept to <span className="text-gradient-brand">Creation.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A09B9B] leading-relaxed">
            Our 5-phase engineering protocol guarantees precision, predictability, and uncompromising code quality from kickoff to release.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-px bg-gradient-to-r from-[#E94F9B]/40 via-[#FF706C]/40 to-[#F6A23B]/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#FF706C]/40 transition-all duration-300"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-[#202020] border border-white/10 flex items-center justify-center font-heading font-bold text-lg text-[#F5F3F2] group-hover:bg-gradient-to-br group-hover:from-[#E94F9B] group-hover:to-[#F6A23B] group-hover:text-white transition-all duration-300">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#777272]">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#F5F3F2] mb-3 group-hover:text-[#FF706C] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A09B9B] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider text-[#777272] font-semibold">
                    Outputs
                  </div>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-[#A09B9B] font-mono flex items-center gap-1.5">
                      <span className="text-[#E94F9B]">›</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;