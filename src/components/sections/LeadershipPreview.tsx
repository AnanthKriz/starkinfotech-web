import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ceoImg from "@/leadershipimages/ceo.jpg";
import ctoImg from "@/leadershipimages/cto.jpg";
import cpmImg from "@/leadershipimages/chiefprojectmanager.jpg";
import netMktImg from "@/leadershipimages/network&marketing.jpg";

interface LeaderSummary {
  name: string;
  designation: string;
  image: string;
}

const leaders: LeaderSummary[] = [
  {
    name: "Ananthkrishnan R",
    designation: "Chief Executive Officer (CEO)",
    image: ceoImg,
  },
  {
    name: "Aswin Sparky",
    designation: "Chief Technology Officer (CTO)",
    image: ctoImg,
  },
  {
    name: "Javahar Unni",
    designation: "Chief Project Manager",
    image: cpmImg,
  },
  {
    name: "Aravind Krishnan",
    designation: "Head of Networking & Marketing",
    image: netMktImg,
  },
];

export const LeadershipPreview: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#111111] border-t border-white/[0.08] overflow-hidden">
      <div className="ambient-glow-pink -top-24 right-1/4 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF706C]">
              <span>EXECUTIVE TEAM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight">
              Meet Our <span className="text-gradient-brand">Leadership.</span>
            </h2>
            <p className="text-base text-[#A09B9B] leading-relaxed">
              The people behind Stark Infotech guiding our technology, operations, and growth.
            </p>
          </div>

          <div>
            <Link
              to="/leadership"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181818] border border-white/10 text-sm font-semibold text-[#F5F3F2] hover:bg-[#202020] hover:border-[#E94F9B]/50 transition-all duration-300"
            >
              <span>Meet Our Leadership</span>
              <ArrowRight
                size={16}
                className="text-[#FF706C] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* 4 Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <Link
              key={leader.name}
              to="/leadership"
              className="group p-5 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#202020] border border-white/10 mb-4">
                  <img
                    src={leader.image}
                    alt={`${leader.name} — ${leader.designation}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-50" />
                </div>
                <div className="text-[11px] font-mono text-[#E94F9B] font-semibold mb-1">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#FF706C] font-heading font-medium mt-1">
                  {leader.designation}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
