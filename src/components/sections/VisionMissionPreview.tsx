import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const VisionMissionPreview: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#141414] border-t border-white/[0.08] overflow-hidden">
      <div className="ambient-glow-pink -top-24 left-1/4 opacity-20 pointer-events-none" />
      <div className="ambient-glow-orange -bottom-24 right-1/4 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E94F9B]">
                OUR VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2]">
                Guiding Horizon
              </h3>
              <p className="text-base text-[#A09B9B] leading-relaxed">
                "To become a trusted technology company recognized for innovation, cybersecurity, software excellence, and intelligent digital solutions."
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-[#777272]">Stark Infotech Vision</span>
              <Link to="/about" className="text-xs font-semibold text-[#E94F9B] hover:underline flex items-center gap-1">
                Read About Us <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#FF706C]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
                OUR MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2]">
                Daily Purpose
              </h3>
              <p className="text-base text-[#A09B9B] leading-relaxed">
                "To empower businesses and individuals through secure, innovative, and accessible technology while continuously exploring new possibilities in software engineering and automation."
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-[#777272]">Stark Infotech Mission</span>
              <Link to="/services" className="text-xs font-semibold text-[#FF706C] hover:underline flex items-center gap-1">
                Explore Services <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPreview;
