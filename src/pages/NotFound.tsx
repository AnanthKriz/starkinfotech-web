import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[75vh] items-center justify-center bg-[#111111] px-5 py-24 text-center relative overflow-hidden">
        <div className="ambient-glow-pink -top-20 left-1/3 opacity-25 pointer-events-none" />

        <div className="max-w-md mx-auto space-y-6 relative z-10">
          <div className="text-8xl font-heading font-bold text-gradient-brand">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F3F2]">
            Endpoint Not Found
          </h1>
          <p className="text-sm text-[#A09B9B] leading-relaxed">
            The requested route <code className="text-[#FF706C] font-mono">{location.pathname}</code> does not exist on this system.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F3F2] text-[#111111] font-semibold text-sm hover:bg-white transition-all shadow-lg"
            >
              <ArrowLeft size={16} />
              <span>Return to Headquarters</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;