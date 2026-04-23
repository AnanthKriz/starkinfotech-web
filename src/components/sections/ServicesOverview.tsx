import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Database, Receipt, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, admin dashboards, and API services built with modern technologies.",
  },
   {
    id: "chatbot",
    icon: Bot,
    title: "Bot Development",
    description: "About
Kriz Bot Inc is a WhatsApp userbot developed by Ananth Kriz, designed to enhance and automate your WhatsApp experience. It offers a wide range of advanced features, enabling efficient communication, customization, and productivity directly within WhatsApp..",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native Android & iOS apps, cross-platform solutions with Flutter & React Native, complete with UI/UX design.",
  },
  {
    id: "database",
    icon: Database,
    title: "Database Development & Management",
    description: "MySQL, PostgreSQL, MongoDB, Firebase setup, architecture design, migration, and optimization services.",
  },
  {
    id: "billing",
    icon: Receipt,
    title: "Billing & Business Software",
    description: "POS systems, inventory management, GST-compliant billing, invoice automation, and custom ERP modules.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    description: "Network security audits, penetration testing, ransomware protection, and incident response services.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
