import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 bg-[#0e0e0e] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-pink -top-20 -left-20 opacity-30 pointer-events-none" />
      <div className="ambient-glow-orange bottom-0 right-0 opacity-35 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
            <span>READY TO LAUNCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
            Have an Idea? <br />
            <span className="text-gradient-brand">Let's Build It.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A09B9B] max-w-2xl mx-auto leading-relaxed">
            Whether you require an automated WhatsApp bot, an enterprise web application, or a bulletproof cloud database, we are ready to engineer your solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-base hover:bg-white hover:shadow-2xl hover:shadow-[#E94F9B]/20 transition-all duration-300"
            >
              <span>Schedule a Consultation</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#E94F9B]"
              />
            </Link>

            {/* Direct Mail Action */}
            <a
              href="mailto:contact@starkinfotech.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#181818] border border-white/10 text-[#F5F3F2] font-medium text-base hover:border-white/25 hover:bg-[#202020] transition-all duration-300"
            >
              <Mail size={18} className="text-[#FF706C]" />
              <span>contact@starkinfotech.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;