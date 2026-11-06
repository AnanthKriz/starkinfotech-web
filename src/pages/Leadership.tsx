import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import ceoImg from "@/leadershipimages/ceo.jpg";
import ctoImg from "@/leadershipimages/cto.jpg";
import cpmImg from "@/leadershipimages/chiefprojectmanager.jpg";
import netMktImg from "@/leadershipimages/network&marketing.jpg";

interface LeaderProfile {
  name: string;
  designation: string;
  image: string;
  description: string;
  roleBadge: string;
}

const leaders: LeaderProfile[] = [
  {
    name: "Ananthkrishnan R",
    designation: "Chief Executive Officer (CEO)",
    image: ceoImg,
    description:
      "Responsible for company leadership, strategic planning, business development, organizational management, and overall company operations.",
    roleBadge: "EXECUTIVE LEADERSHIP",
  },
  {
    name: "Aswin Sparky",
    designation: "Chief Technology Officer (CTO)",
    image: ctoImg,
    description:
      "Responsible for technology strategy, software architecture, technical development, cybersecurity solutions, innovation, and overseeing the company's technical infrastructure.",
    roleBadge: "TECHNOLOGY & ARCHITECTURE",
  },
  {
    name: "Javahar Unni",
    designation: "Chief Project Manager",
    image: cpmImg,
    description:
      "Responsible for project planning, team coordination, project execution, workflow management, deadlines, and ensuring successful project delivery.",
    roleBadge: "PROJECT EXECUTION & DELIVERY",
  },
  {
    name: "Aravind Krishnan",
    designation: "Head of Networking & Marketing",
    image: netMktImg,
    description:
      "Responsible for networking infrastructure, network-related operations, marketing strategies, brand development, partnerships, and business outreach.",
    roleBadge: "NETWORKING & GROWTH",
  },
];

const Leadership = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#111111] overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-pink -top-24 left-1/4 opacity-30 pointer-events-none" />
        <div className="ambient-glow-orange top-10 -right-20 opacity-30 pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              <span>EXECUTIVE LEADERSHIP</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              Meet Our <span className="text-gradient-brand">Leadership.</span>
            </h1>

            <p className="text-lg sm:text-xl font-heading font-semibold text-[#F5F3F2]">
              The People Behind Stark Infotech.
            </p>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-3xl mx-auto leading-relaxed">
              Behind every successful technology solution is a team driven by vision, expertise, and dedication. Meet the leadership team responsible for guiding Stark Infotech's direction, technology, projects, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles Grid */}
      <section className="py-24 lg:py-32 bg-[#111111] relative">
        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="group p-6 lg:p-8 rounded-3xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#202020] border border-white/10 mb-6">
                    <img
                      src={leader.image}
                      alt={`${leader.name} — ${leader.designation}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5F3F2] px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 inline-block">
                        {leader.roleBadge}
                      </span>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="space-y-1 mb-4">
                    <span className="text-xs font-mono text-[#E94F9B] font-semibold">
                      0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2] group-hover:text-gradient-brand transition-colors">
                      {leader.name}
                    </h2>
                    <p className="text-sm font-heading font-semibold text-[#FF706C]">
                      {leader.designation}
                    </p>
                  </div>

                  {/* Responsibilities Description */}
                  <p className="text-sm text-[#A09B9B] leading-relaxed">
                    {leader.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#777272]">
                  <span>Stark Infotech Core Team</span>
                  <span className="text-[#38B2AC]">Verified Profile ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-[#0e0e0e] text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="ambient-glow-pink -bottom-20 left-1/3 opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-10 relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            Connect With Our Team.
          </h2>
          <p className="text-base text-[#A09B9B] mb-8 leading-relaxed">
            Ready to discuss your software architecture, digital products, or automation roadmap with our leadership team?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-base hover:bg-white hover:shadow-2xl hover:shadow-[#E94F9B]/20 transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight
              size={18}
              className="text-[#E94F9B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
