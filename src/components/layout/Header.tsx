import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Leadership", path: "/leadership" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent border-b border-white/[0.04] py-5 lg:py-6"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2 text-xl lg:text-2xl font-heading font-bold tracking-tight text-[#F5F3F2]"
          >
            <span>STARK</span>
            <span className="text-gradient-brand">INFOTECH</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E94F9B] group-hover:scale-150 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-all duration-200 relative py-1 ${
                    active
                      ? "text-[#F5F3F2] font-semibold"
                      : "text-[#A09B9B] hover:text-[#F5F3F2] font-medium"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E94F9B] to-[#F6A23B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk ↗ */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold px-5 py-2.5 rounded-full bg-[#181818] border border-white/10 text-[#F5F3F2] hover:border-[#E94F9B]/50 hover:bg-[#202020] transition-all duration-300 hover:shadow-lg hover:shadow-[#E94F9B]/10"
            >
              <span>Let's Talk</span>
              <ArrowUpRight
                size={16}
                className="text-[#FF706C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-[#F5F3F2] hover:text-[#E94F9B] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-white/[0.08] bg-[#141414] rounded-2xl p-6 shadow-2xl animate-accordion-down">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-[#E94F9B]"
                      : "text-[#A09B9B] hover:text-[#F5F3F2]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full bg-gradient-to-r from-[#E94F9B] to-[#F6A23B] text-white hover:opacity-95 transition-opacity"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;