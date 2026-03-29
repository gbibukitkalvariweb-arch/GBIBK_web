import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import SermonSection from "../components/SermonSection";
import ResourcesSection from "../components/ResourcesSection";
import CareSection from "../components/CareSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* BAGIAN INI UDAH GW BERSIHIN BRO! 
        Navbar ngga ada lagi di sini, dia udah pindah ngantri di App.tsx 
      */}
      
      <HeroSection />
      
      {/* NextStepSection udah kita buang kemaren, jadi ngga gw masukin sini lagi ya */}
      
      <WelcomeSection />
      
      <SermonSection />
      
      <ResourcesSection />
      
      <CareSection />

      {/* Kalau lo punya Footer di sini, biarin aja dulu atau kalau mau dibersihin sekalian (pindah ke App.tsx), kabarin gw */}
    </main>
  );
};

export default Index;