import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import HeroSculpture from "./HeroSculpture";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-24 lg:pt-32 pb-16 overflow-hidden bg-[#111111]">
      {/* Ambient Blurred Lighting Reflected from Reference */}
      <div className="ambient-glow-pink -top-24 -left-20 opacity-40 pointer-events-none" />
      <div className="ambient-glow-orange top-10 right-0 opacity-45 pointer-events-none" />
      <div className="ambient-glow-magenta bottom-10 left-1/3 opacity-30 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Top Centered Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10 lg:mb-12">
          {/* Subtle Agency Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#E94F9B] animate-ping" />
            <span className="text-xs font-medium tracking-wider uppercase text-[#A09B9B]">
              Custom Software & Digital Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.05]">
            Technology <br className="hidden sm:inline" />
            Built <span className="text-gradient-brand">Beyond</span> <br className="hidden sm:inline" />
            <span className="text-gradient-brand">Expectations.</span>
          </h1>
        </div>

        {/* 3-Column Asymmetrical Hero Grid inspired by Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center max-w-6xl mx-auto">
          {/* Left Column: Floating Stat Cards */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 justify-center order-2 lg:order-1">
            {/* Stat Card 1 */}
            <div className="flex-1 lg:flex-initial p-5 rounded-2xl bg-[#181818]/80 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#E94F9B]/40 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-[#F5F3F2] tracking-tight">
                50+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A09B9B] mt-1 font-medium">
                Systems Delivered
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="flex-1 lg:flex-initial p-5 rounded-2xl bg-[#181818]/80 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#FF706C]/40 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-[#F5F3F2] tracking-tight">
                99.4%
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A09B9B] mt-1 font-medium">
                High-Load Reliability
              </div>
            </div>
          </div>

          {/* Central Column: Sculptural Visual Asset */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <HeroSculpture />
          </div>

          {/* Right Column: Supporting Manifesto & CTAs */}
          <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left space-y-6 order-3">
            <p className="text-sm lg:text-base text-[#A09B9B] leading-relaxed">
              We engineer custom software ecosystems, intelligent WhatsApp automations, and resilient backend architectures built for brands that demand absolute precision.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-start">
              {/* Primary CTA */}
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-sm hover:bg-white hover:shadow-xl hover:shadow-[#E94F9B]/15 transition-all duration-300"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] border border-white/10 text-[#F5F3F2] font-medium text-sm hover:border-white/25 hover:bg-[#202020] transition-all duration-300"
              >
                <span>Let's Discuss a Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;