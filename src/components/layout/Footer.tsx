import { Link } from "react-router-dom";
import { Github, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cybersecurity Solutions", path: "/services#security" },
    { name: "Business & Billing Software", path: "/services#billing" },
    { name: "Application Development", path: "/services#mobile" },
    { name: "Website Development", path: "/services#web" },
    { name: "Bot Development", path: "/services#chatbot" },
    { name: "Automation Solutions", path: "/services#automation" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Leadership", path: "/leadership" },
    { name: "About Our Company", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/[0.08] text-[#A09B9B] overflow-hidden">
      {/* Ambient background reflection */}
      <div className="ambient-glow-pink -bottom-40 -left-40 opacity-40" />
      <div className="ambient-glow-orange -bottom-40 -right-40 opacity-30" />

      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-heading font-bold text-[#F5F3F2]">
              <span>STARK</span>
              <span className="text-gradient-brand">INFOTECH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E94F9B]" />
            </Link>
            <p className="text-[#A09B9B] text-sm leading-relaxed max-w-sm">
              We are a technology-driven IT company focused on developing innovative software solutions,
              building intelligent digital products, and providing advanced technology services.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#777272]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-white/5 text-[#A09B9B]">
                <ShieldCheck size={14} className="text-[#FF706C]" />
                Custom Software & Digital Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-white/5 text-[#A09B9B]">
                Global Remote
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F3F2] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#F5F3F2] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#E94F9B]">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F3F2] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#F5F3F2] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F3F2] font-semibold">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contact@starkinfotech.com"
                className="flex items-center gap-2 hover:text-[#F5F3F2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-white/5 flex items-center justify-center text-[#E94F9B] group-hover:border-[#E94F9B]/40 transition-colors">
                  <Mail size={15} />
                </div>
                <span>contact@starkinfotech.com</span>
              </a>

              <a
                href="https://github.com/starkinfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F5F3F2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-white/5 flex items-center justify-center text-[#F6A23B] group-hover:border-[#F6A23B]/40 transition-colors">
                  <Github size={15} />
                </div>
                <span className="flex items-center gap-1">
                  GitHub <ArrowUpRight size={13} className="text-[#A09B9B] group-hover:text-[#F5F3F2]" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777272]">
          <p>© {currentYear} Stark Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#F5F3F2] transition-colors">
              Agency Values
            </Link>
            <Link to="/services" className="hover:text-[#F5F3F2] transition-colors">
              Tech Solutions
            </Link>
            <Link to="/contact" className="hover:text-[#F5F3F2] transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;