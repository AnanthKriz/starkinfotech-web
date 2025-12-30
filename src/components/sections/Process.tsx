import { ClipboardList, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Analysis",
    description: "We dive deep into understanding your business needs, goals, and technical requirements.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Architecture & Design",
    description: "Creating blueprints for scalable, secure, and efficient system architecture.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Agile development with regular updates, clean code, and continuous integration.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & Security Review",
    description: "Rigorous testing, security audits, and quality assurance before any deployment.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Ongoing Support",
    description: "Smooth deployment with monitoring, maintenance, and continuous improvement.",
  },
];

const Process = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that delivers results on time and within budget
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>

                  {/* Step Number */}
                  <div className="text-primary font-bold text-sm mb-2">{step.number}</div>

                  {/* Step Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>

                  {/* Step Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
