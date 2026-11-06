import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Github, MapPin, Clock, ArrowUpRight, Check, Copy, Send, ShieldAlert } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "WhatsApp Bot & Automation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const email = "contact@starkinfotech.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's email client with prefilled subject and body
    const subject = encodeURIComponent(`Project Inquiry: ${formState.service} — ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\n\nProject Scope:\n${formState.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#111111] overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-pink -top-20 right-10 opacity-30 pointer-events-none" />
        <div className="ambient-glow-orange top-20 left-10 opacity-25 pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF706C]">
              <span>TECHNICAL CONSULTATION</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F5F3F2] tracking-tight leading-[1.08]">
              Have an Idea? <br />
              <span className="text-gradient-brand">Let's Build It.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A09B9B] max-w-2xl mx-auto leading-relaxed">
              We discuss real architectures, honest timelines, and exact technical scopes. Reach out to schedule an introductory engineering call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 lg:py-32 bg-[#111111] relative">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Interactive Project Scoping Form */}
            <div className="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-[#161616] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF706C]">
                  PROJECT INQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2] mt-1">
                  Tell Us About Your Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#A09B9B] mt-1">
                  Fill out the parameters below to draft a direct technical briefing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A09B9B]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#202020] border border-white/10 text-sm text-[#F5F3F2] placeholder-[#777272] focus:outline-none focus:border-[#E94F9B] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A09B9B]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#202020] border border-white/10 text-sm text-[#F5F3F2] placeholder-[#777272] focus:outline-none focus:border-[#E94F9B] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A09B9B]">
                    Primary Solution Required
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#202020] border border-white/10 text-sm text-[#F5F3F2] focus:outline-none focus:border-[#E94F9B] transition-colors"
                  >
                    <option value="WhatsApp Bot & Automation">WhatsApp Bot & Workflow Automation</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                    <option value="Database Architecture">Database Architecture & Management</option>
                    <option value="Billing & ERP Systems">Billing & Business ERP Solutions</option>
                    <option value="Cybersecurity & Audit">Cybersecurity & Penetration Testing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A09B9B]">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current system, key objectives, and target delivery timeframe..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#202020] border border-white/10 text-sm text-[#F5F3F2] placeholder-[#777272] focus:outline-none focus:border-[#E94F9B] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E94F9B] via-[#FF706C] to-[#F6A23B] text-white font-semibold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#E94F9B]/20"
                >
                  <Send size={16} />
                  <span>Send Project Brief</span>
                </button>

                {submitted && (
                  <p className="text-xs font-mono text-[#38B2AC] text-center pt-2">
                    ✓ Email client triggered. We guarantee response within 24 hours.
                  </p>
                )}
              </form>
            </div>

            {/* Right Column: Verified Channels & Direct Actions */}
            <div className="lg:col-span-5 space-y-6">
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#E94F9B]/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/5 flex items-center justify-center text-[#E94F9B]">
                    <Mail size={18} />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-[#A09B9B] hover:text-[#F5F3F2] flex items-center gap-1 px-2.5 py-1 rounded bg-[#202020] border border-white/5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-[#38B2AC]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777272]">
                  Direct Electronic Mail
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-heading font-bold text-[#F5F3F2] hover:text-[#E94F9B] transition-colors inline-block mt-1"
                >
                  {email}
                </a>
                <p className="text-xs text-[#A09B9B] mt-2">
                  Average initial response latency: &lt; 24 hours.
                </p>
              </div>

              {/* GitHub Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#F6A23B]/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/5 flex items-center justify-center text-[#F6A23B]">
                    <Github size={18} />
                  </div>
                  <span className="text-xs font-mono text-[#777272]">OPEN SOURCE</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777272]">
                  Engineering Repository
                </div>
                <a
                  href="https://github.com/starkinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-heading font-bold text-[#F5F3F2] hover:text-[#F6A23B] transition-colors flex items-center gap-1.5 mt-1"
                >
                  <span>github.com/starkinfotech</span>
                  <ArrowUpRight size={14} className="text-[#A09B9B]" />
                </a>
                <p className="text-xs text-[#A09B9B] mt-2">
                  Explore public modules, bot scripts, and contributions.
                </p>
              </div>

              {/* Working Hours & Global Remote Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-white/[0.08] space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#202020] flex items-center justify-center text-[#FF706C] shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#777272]">
                      Operating Base
                    </div>
                    <div className="text-sm font-semibold text-[#F5F3F2]">
                      Worldwide Remote Operations
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#202020] flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#777272]">
                      Consultation Hours
                    </div>
                    <div className="text-sm font-semibold text-[#F5F3F2]">
                      Mon — Fri: 9:00 AM — 6:00 PM IST
                    </div>
                    <div className="text-xs font-mono text-[#38B2AC] mt-0.5">
                      24/7 Priority Emergency Monitoring for Active SLA Contracts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;