import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServiceTicker from "@/components/sections/ServiceTicker";
import ServicesOverview from "@/components/sections/ServicesOverview";
import VisionMissionPreview from "@/components/sections/VisionMissionPreview";
import Stats from "@/components/sections/Stats";
import LeadershipPreview from "@/components/sections/LeadershipPreview";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceTicker />
      <ServicesOverview />
      <VisionMissionPreview />
      <Stats />
      <LeadershipPreview />
      <Testimonials />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <CTA />
    </Layout>
  );
};

export default Index;