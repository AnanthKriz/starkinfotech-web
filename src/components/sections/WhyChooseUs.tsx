import { Shield, Layers, Code2, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security-First Development",
    description: "Every line of code is written with security best practices, protecting your data and your users.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business, from startup to enterprise-level operations.",
  },
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description: "Well-documented, modular code that's easy to maintain, update, and extend over time.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "Technology that solves real business problems and delivers measurable ROI.",
  },
  {
    icon: Headphones,
    title: "Reliable Long-Term Support",
    description: "Ongoing maintenance, updates, and support to ensure your systems run smoothly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose STARKS INFOTECH
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver excellence through proven methodologies and unwavering commitment to quality
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
