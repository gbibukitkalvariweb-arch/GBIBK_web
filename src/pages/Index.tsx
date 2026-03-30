import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import SermonSection from "../components/SermonSection";
import ResourcesSection from "../components/ResourcesSection";

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
      
      {/* CareSection (Layanan Jemaat) udah resmi kita cabut dari sini bro! Pindah ke halamannya sendiri. */}

    </main>
  );
};

export default Index;