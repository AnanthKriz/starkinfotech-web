import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Award, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every solution we build prioritizes security, protecting your data and your customers' trust.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work alongside you as partners, not just vendors. Your success is our success.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Award,
    title: "Excellence in Craft",
    description: "We take pride in writing clean, maintainable code that stands the test of time.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About STARKS INFOTECH
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a technology solutions company dedicated to helping businesses 
              thrive in the digital age through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At STARKS INFOTECH, we believe that great technology should be accessible 
                to businesses of all sizes. Our mission is to deliver enterprise-grade 
                software solutions that are secure, scalable, and tailored to your unique needs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine technical expertise with business acumen to create solutions 
                that not only work flawlessly but also drive real business value. From 
                startups to established enterprises, we're committed to being your 
                trusted technology partner for the long term.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30">SI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Expertise
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With years of experience in software development, we've built a team of 
                skilled professionals who are passionate about technology and dedicated 
                to delivering excellence. Our expertise spans across web development, 
                mobile applications, database management, business software, and cybersecurity.
              </p>
              <p>
                We stay ahead of the curve by continuously learning and adopting the 
                latest technologies and best practices. Whether you need a simple website 
                or a complex enterprise system, we have the knowledge and experience to 
                deliver solutions that exceed expectations.
              </p>
              <p>
                What sets us apart is our commitment to building long-term relationships 
                with our clients. We don't just deliver projects; we become your technology 
                partner, providing ongoing support and guidance as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to start your next project? We'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contact@starksinfotech.com">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
