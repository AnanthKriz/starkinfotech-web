import React from "react";

const tickerItems = [
  "WEB DEVELOPMENT",
  "BOT DEVELOPMENT",
  "MOBILE APPLICATIONS",
  "AUTOMATION & AI",
  "DATABASE SYSTEMS",
  "CYBERSECURITY",
  "DIGITAL SOLUTIONS",
  "ENTERPRISE ERP",
];

export const ServiceTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#161616] border-y border-white/[0.08] py-4 select-none">
      {/* Subtle edge fades for smooth entry/exit */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-ticker">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {tickerItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center">
              <span className="text-xs sm:text-sm font-heading font-bold tracking-widest text-[#F5F3F2]/90 hover:text-white transition-colors px-6">
                {item}
              </span>
              <span className="text-[#FF706C] text-sm animate-spin-slow">✦</span>
            </div>
          ))}
        </div>

        {/* Duplicate Track 2 for seamless infinite marquee loop */}
        <div className="flex items-center shrink-0">
          {tickerItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center">
              <span className="text-xs sm:text-sm font-heading font-bold tracking-widest text-[#F5F3F2]/90 hover:text-white transition-colors px-6">
                {item}
              </span>
              <span className="text-[#FF706C] text-sm animate-spin-slow">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTicker;
