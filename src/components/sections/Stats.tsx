import React from "react";

interface Metric {
  value: string;
  label: string;
  sublabel: string;
}

export const Stats: React.FC = () => {
  const metrics: Metric[] = [
    {
      value: "50+",
      label: "Delivered Solutions",
      sublabel: "Custom software & automations built",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      sublabel: "Proven track record of reliability",
    },
    {
      value: "12+",
      label: "Core Technologies",
      sublabel: "Modern full-stack & cloud stacks",
    },
    {
      value: "24/7",
      label: "System Support",
      sublabel: "Uninterrupted bot & server monitoring",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-[#0e0e0e] border-y border-white/[0.08] overflow-hidden">
      {/* Background subtle ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E94F9B]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#F6A23B]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center lg:text-left">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-4 flex flex-col justify-between group"
            >
              {/* Optional divider line on desktop */}
              {idx > 0 && (
                <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-px bg-white/[0.06]" />
              )}

              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight group-hover:text-gradient-brand transition-all duration-300">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#F5F3F2]">
                  {metric.label}
                </div>
              </div>

              <p className="text-xs text-[#777272] mt-2 font-mono">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
