import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickInfoBar from "@/components/QuickInfoBar";
import WelcomeSection from "@/components/WelcomeSection";
import SermonSection from "@/components/SermonSection";
import NextStepSection from "@/components/NextStepSection";
import ResourcesSection from "@/components/ResourcesSection";
import CareSection from "@/components/CareSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickInfoBar />
      <WelcomeSection />
      <SermonSection />
      <NextStepSection />
      <ResourcesSection />
      <CareSection />
      <Footer />
    </div>
  );
};

export default Index;
