import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, Receipt, Shield, Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "We create powerful, responsive web applications that drive business results. From custom websites to complex enterprise platforms, our solutions are built for performance, security, and scalability.",
    features: [
      "Custom Website Development",
      "E-Commerce Platforms",
      "Admin Dashboards",
      "API & Backend Services",
      "UI/UX Integration",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile experiences. We build native and cross-platform applications that users love, with intuitive interfaces and robust functionality.",
    features: [
      "Native Android App Development",
      "Native iOS App Development",
      "Cross-Platform Apps (Flutter / React Native)",
      "App UI/UX Design",
      "App Maintenance & Updates",
    ],
  },
  {
    id: "database",
    icon: Database,
    title: "Database Development & Management",
    description: "Your data is your most valuable asset. We design, implement, and manage database solutions that ensure data integrity, performance, and security.",
    features: [
      "MySQL, PostgreSQL, SQLite",
      "MongoDB, Firebase, Supabase",
      "Database Architecture Design",
      "Data Migration & Optimization",
      "Backup & Recovery",
    ],
  },
  {
    id: "billing",
    icon: Receipt,
    title: "Billing & Business Software",
    description: "Streamline your business operations with custom software solutions. From POS systems to complete ERP modules, we build tools that increase efficiency and reduce costs.",
    features: [
      "POS Systems",
      "Inventory Management Software",
      "GST-Compliant Billing Solutions",
      "Invoice Automation",
      "Custom ERP Modules",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    description: "Protect your business from evolving cyber threats. Our comprehensive security services ensure your systems, data, and customers are protected around the clock.",
    features: [
      "Network Security Audits",
      "Penetration Testing",
      "Ransomware Protection",
      "Data Theft Prevention",
      "Firewall & Endpoint Security",
      "Incident Response & Disaster Recovery",
      "SOC Setup",
    ],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              End-to-end technology solutions designed to transform your business. 
              From concept to deployment, we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 ${isEven ? "bg-card" : "bg-background"} scroll-mt-24`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="text-primary flex-shrink-0" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <a href="mailto:contact@starksinfotech.com">
                      Get Started
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </Button>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                    <Icon className="text-primary/40" size={120} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contact@starksinfotech.com">
                Schedule a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
