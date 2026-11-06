import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Shield, Users, Target, Award, ArrowUpRight, Cpu, Sparkles } from "lucide-react";

interface ValueItem {
  number: string;
  icon: typeof Shield;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    number: "01",
    icon: Shield,
    title: "Security First",
    description:
      "Every architecture we deploy prioritizes data integrity and defense-in-depth. We build software that protects customer trust from day zero.",
  },
  {
    number: "02",
    icon: Users,
    title: "Client Partnership",
    description:
      "We operate as technical partners and engineering allies, not transactional vendors. Your operational growth is our primary benchmark of success.",
  },
  {
    number: "03",
    icon: Target,
    title: "Results Driven",
    description:
      "We cut through digital vanity metrics. Every automation trigger, custom ERP module, and API endpoint is built to produce measurable ROI.",
  },
  {
    number: "04",
    icon: Award,
    title: "Excellence in Craft",
    description:
      "We take deep pride in clean, modular, self-documenting code. Our software is engineered to stand the test of time, scale, and refactoring.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#111111] overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-pink -top-20 left-10 opacity-30 pointer-events-none" />
        <div className="ambient-glow-orange top-20 right-0 opacity-25 pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              <span>AGENCY MANIFESTO</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              Engineering Tomorrow's <br />
              <span className="text-gradient-brand">Intelligent Systems.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-2xl mx-auto leading-relaxed">
              STARK INFOTECH is a premier custom software and digital solutions company. We bridge the gap between ambitious business vision and bulletproof technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Identity & Mission Section */}
      <section className="py-24 lg:py-32 bg-[#141414] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
                ORIGIN & PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F3F2]">
                Sovereign Code. <br />
                Uncompromising Quality.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A09B9B] leading-relaxed">
                <p>
                  At <span className="text-[#F5F3F2] font-semibold">STARK INFOTECH</span>, we specialize in high-impact custom software and digital solutions tailored to modern enterprise workflows.
                </p>
                <p>
                  We engineer bespoke web applications, native mobile experiences, enterprise database clusters, intelligent automations, and cybersecurity defense frameworks for forward-thinking clients worldwide.
                </p>
                <p>
                  We believe software should be an enduring company asset, not a perpetual recurring cost. We deliver complete source code ownership, zero hidden vendor dependencies, and architectures engineered to scale smoothly.
                </p>
              </div>
            </div>

            {/* Right Abstract Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#181818] to-[#111111] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="ambient-glow-pink -top-10 -right-10 opacity-30" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777272]">EST. STARK INFOTECH</span>
                  <span className="text-xs font-mono text-[#E94F9B]">GLOBAL REMOTE</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="text-7xl font-heading font-bold text-gradient-brand">
                    SI
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#A09B9B] mt-2">
                    Custom Software & Digital Solutions
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#777272] font-mono">
                  <span>Architecture: Sovereign</span>
                  <span className="text-[#38B2AC]">Production-Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 lg:py-36 bg-[#111111] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mt-2 mb-4">
              Our Core <span className="text-gradient-brand">Values.</span>
            </h2>
            <p className="text-base text-[#A09B9B]">
              The principles and engineering discipline that guide every technical decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="p-8 lg:p-10 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-[#E94F9B] font-semibold">
                      {val.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/5 flex items-center justify-center text-[#FF706C] group-hover:bg-[#E94F9B]/10 transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#F5F3F2] mb-3 group-hover:text-gradient-brand transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A09B9B] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#141414] border-b border-white/[0.08]">
        <div className="container mx-auto px-5 lg:px-10 max-w-4xl">
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F3F2]">
              The STARK Engineering Philosophy
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#A09B9B] leading-relaxed divide-y divide-white/[0.06]">
            <div className="pt-6 first:pt-0">
              <h4 className="text-lg font-heading font-bold text-[#F5F3F2] mb-2">
                1. Continuous Learning & Modern Standards
              </h4>
              <p>
                The digital ecosystem changes rapidly. We continuously refine our mastery across modern runtimes, edge computing, TypeScript best practices, and AI agent frameworks to ensure your products never suffer from early technical obsolescence.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-heading font-bold text-[#F5F3F2] mb-2">
                2. Pragmatic Simplicity Over Over-Engineering
              </h4>
              <p>
                We do not add complex microservices or unnecessary dependencies where clean, modular code is faster and cheaper to run. Simple systems break less, deploy faster, and cost significantly less to maintain.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-heading font-bold text-[#F5F3F2] mb-2">
                3. Total Transparency & High Communication
              </h4>
              <p>
                You never have to wonder what we are doing. With shared git repositories, staging preview links, and asynchronous video demos, we work as a seamless extension of your core team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-[#0e0e0e] text-center relative overflow-hidden">
        <div className="ambient-glow-orange -bottom-20 right-1/4 opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-10 relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F5F3F2] tracking-tight mb-4">
            Let's Engineer Together.
          </h2>
          <p className="text-base text-[#A09B9B] mb-8 leading-relaxed">
            Have an upcoming software build, bot automation requirement, or security overhaul? We are ready to collaborate.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-base hover:bg-white hover:shadow-2xl hover:shadow-[#E94F9B]/20 transition-all duration-300"
          >
            <span>Initiate Contact</span>
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

export default About;