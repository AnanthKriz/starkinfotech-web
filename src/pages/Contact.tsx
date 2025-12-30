import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it. 
              Reach out to us and let's start building something great together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Card */}
              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">Email Us</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Send us an email and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:contact@starksinfotech.com"
                    className="text-primary hover:underline font-medium"
                  >
                    contact@starksinfotech.com
                  </a>
                </CardContent>
              </Card>

              {/* GitHub Card */}
              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Github className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">GitHub</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Check out our open source projects and contributions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/starksinfotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    github.com/starksinfotech
                  </a>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">Location</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    We work with clients globally.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-foreground font-medium">Remote & Worldwide</span>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">Business Hours</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    We're available during standard business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-foreground font-medium">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Contact us today for a free consultation. Let's discuss your requirements 
              and find the perfect solution for your business.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contact@starksinfotech.com">
                Send Us an Email
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
