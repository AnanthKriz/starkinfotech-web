import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  tag: string;
  avatarInitial: string;
  avatarGradient: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      tag: "Custom POS & Invoicing",
      quote:
        "Stark Infotech replaced our fragile retail software with a bespoke billing and inventory engine. We eliminated daily reconciliation discrepancies and accelerated customer checkout speeds by 3x.",
      author: "Vikram Shenoy",
      role: "VP of Retail Operations",
      company: "Apex Distribution Hub",
      avatarInitial: "V",
      avatarGradient: "from-[#E94F9B] to-[#FF706C]",
    },
    {
      tag: "WhatsApp Bot & Workflow",
      quote:
        "The automated WhatsApp bot built by Stark Infotech handles thousands of daily customer inquiries and order dispatches seamlessly. It operates 24/7 without a single hiccup and saved us hundreds of support hours.",
      author: "Sophia Alvarez",
      role: "Head of Digital Experience",
      company: "Nexus Logistics",
      avatarInitial: "S",
      avatarGradient: "from-[#FF706C] to-[#F6A23B]",
    },
    {
      tag: "Database & Cloud Scaling",
      quote:
        "Their engineering architects restructured our PostgreSQL cluster and API gateway before our peak traffic season. Queries that previously timed out now consistently return in sub-12 milliseconds.",
      author: "David Chen",
      role: "Chief Technology Officer",
      company: "Kinetix Cloud Systems",
      avatarInitial: "D",
      avatarGradient: "from-[#F6A23B] to-[#E94F9B]",
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#111111] overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-pink -top-20 left-1/3 opacity-20 pointer-events-none" />
      <div className="ambient-glow-orange -bottom-20 right-1/4 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header inspired by reference "Our happy Customers" */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C]">
            <span>05 / CLIENT PROOF</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F5F3F2] tracking-tight">
            Our Happy <span className="text-gradient-brand">Clients.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A09B9B] max-w-xl mx-auto leading-relaxed">
            Real feedback from growing companies running mission-critical operations on Stark Infotech software.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* Top Bar: Tag & 5 Stars */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A09B9B] px-3 py-1 rounded-full bg-[#202020] border border-white/5">
                    {t.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[#F6A23B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F6A23B" stroke="none" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#F5F3F2] leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center font-heading font-bold text-white text-base shadow-md`}
                >
                  {t.avatarInitial}
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#A09B9B]">
                    {t.role} • <span className="text-[#777272]">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
