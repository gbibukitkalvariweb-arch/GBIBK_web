import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// === INI BAGIAN YANG GW UBAH BUAT NYARI GAMBAR MANDALA LO ===
import heroImageLocal from "@/assets/mandala2.png";

const HeroSection = () => {
  // Gambar cadangan kalau gambar lokal belum ada (untuk antisipasi)
  const heroFallback = "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1600&auto=format&fit=crop";
  const heroImageUrl = heroImageLocal || heroFallback;

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
      {/* Efek Gradasi Halus di Background */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.08)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ========== BAGIAN KIRI: TULISAN & TOMBOL ========== */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <MapPin className="w-4 h-4" />
              Depok, West Java
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Keluarga yang <span className="text-primary">Dipulihkan</span> dan Menjadi Berkat
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              GBI Bukit Kalvari adalah gereja yang relevan, tempat untuk beribadah, bertumbuh, dan melayani bersama dalam kasih Kristus bagi komunitas di Depok dan sekitarnya.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/ibadah" className="button-primary group inline-flex items-center gap-2">
                Jadwal Ibadah
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/tentang" className="button-outline">
                Selengkapnya
              </Link>
            </div>
          </div>

          {/* ========== BAGIAN KANAN: GAMBAR ARC (LENGKUNGAN) ========== */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-[5/6] md:aspect-[4/5] lg:aspect-[3/4]">
              {/* Bingkai Luar dengan Lengkungan Ekstrim */}
              <div className="absolute inset-0 bg-secondary/50 rounded-[999px_999px_40px_40px] border-[16px] border-background shadow-2xl overflow-hidden">
                {/* Gambar MANDALA di dalam bingkai, ikut melengkung */}
                <img 
                  src={heroImageUrl}
                  alt="GBI Bukit Kalvari Worship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Efek Lingkaran Kecil Aksen Design */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20 z-[-1]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;