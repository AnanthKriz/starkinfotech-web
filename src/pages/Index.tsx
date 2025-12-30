import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <CTA />
    </Layout>
  );
};

export default Index;
