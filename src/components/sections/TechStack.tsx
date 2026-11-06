import React, { useState } from "react";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database & Cloud" | "DevOps & Languages";
  desc: string;
}

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const technologies: TechItem[] = [
    { name: "React 18", category: "Frontend", desc: "Component architecture & concurrent rendering" },
    { name: "Next.js", category: "Frontend", desc: "Hybrid SSR / SSG & edge runtime" },
    { name: "TypeScript", category: "DevOps & Languages", desc: "End-to-end static type safety" },
    { name: "Tailwind CSS", category: "Frontend", desc: "Design token & fluid utility system" },
    { name: "Node.js", category: "Backend", desc: "High-throughput asynchronous event loops" },
    { name: "Express", category: "Backend", desc: "Robust microservices & REST APIs" },
    { name: "Python", category: "DevOps & Languages", desc: "Data processing, bots & automation scripts" },
    { name: "Flutter", category: "Mobile", desc: "Cross-platform native iOS & Android engine" },
    { name: "React Native", category: "Mobile", desc: "Native modular mobile ecosystem" },
    { name: "PostgreSQL", category: "Database & Cloud", desc: "Enterprise relational database clusters" },
    { name: "MongoDB", category: "Database & Cloud", desc: "Flexible document-based storage" },
    { name: "Supabase & Firebase", category: "Database & Cloud", desc: "Real-time edge sync & auth infrastructure" },
    { name: "AWS Cloud", category: "Database & Cloud", desc: "Elastic compute, S3 storage & Lambda" },
    { name: "Docker", category: "DevOps & Languages", desc: "Containerized reproducible deployment" },
  ];

  const categories = ["All", "Frontend", "Backend", "Mobile", "Database & Cloud", "DevOps & Languages"];

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="relative py-24 lg:py-36 bg-[#111111] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-pink bottom-0 left-10 opacity-15 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C] mb-3">
            <span>04 / STACK & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            Powered by <span className="text-gradient-brand">Technology.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A09B9B] leading-relaxed">
            We build with modern, battle-tested technologies selected for long-term maintainability, security compliance, and raw performance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#F5F3F2] text-[#111111] font-bold shadow-md"
                  : "bg-[#181818] text-[#A09B9B] hover:text-[#F5F3F2] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Typographic Tech Grid (No generic oversized pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#777272] mb-1">
                  {tech.category}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-colors">
                  {tech.name}
                </h3>
              </div>
              <p className="text-xs text-[#A09B9B] mt-3 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;