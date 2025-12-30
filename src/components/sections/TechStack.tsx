const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Firebase", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Docker", category: "DevOps" },
];

const TechStack = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            We work with industry-leading technologies to build robust solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
            >
              <span className="text-foreground font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Categories Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {["Frontend", "Mobile", "Backend", "Database", "Cloud", "DevOps"].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
