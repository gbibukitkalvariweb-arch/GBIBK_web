import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="bg-[#8A9A86] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ========== KIRI: TEKS WELCOME ========== */}
          <div className="text-white z-10">
            <span className="block text-sm md:text-base font-bold tracking-[0.15em] uppercase mb-4 text-white/80">
              TENTANG GBI BUKIT KALVARI
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 uppercase">
              MENGENAI KAMI
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium mb-10 max-w-lg lg:pr-6">
              Berawal dari persekutuan doa sederhana yang dirintis oleh Pdt. Ade Manuhutu, GBI Bukit Kalvari kini bertumbuh dengan satu kerinduan: melihat setiap jiwa mengalami restorasi total. Di sini, Anda bukan sekadar pengunjung. Kami mengundang Anda menjadi bagian dari keluarga rohani yang saling menguatkan, dipulihkan, dan dipersiapkan untuk melayani Kristus.
            </p>
            <Link to="/tentang" className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-white/80 transition-colors group">
              Kenal Kami Lebih Dekat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* ========== KANAN: 3 FOTO MASONRY (RATA ATAS BAWAH) ========== */}
          <div className="grid grid-cols-12 gap-4 lg:gap-5 h-[450px] lg:h-[550px] w-full">
            
            {/* Foto Kiri: Jatah 5 kolom, Full tinggi */}
            <div className="col-span-5 h-full rounded-2xl overflow-hidden shadow-xl group">
              {/* Zoom 1.20: Black bar hilang, tapi penari tetep utuh! */}
              <img 
                src="/mandala7.jpeg" 
                alt="Ibadah Jemaat GBI 1" 
                className="w-full h-full object-cover object-center scale-[1.20] group-hover:scale-[1.30] transition-transform duration-700"
              />
            </div>
            
            {/* Foto Kanan: Jatah 7 kolom, Dibagi 2 atas bawah persis */}
            <div className="col-span-7 h-full flex flex-col gap-4 lg:gap-5">
              
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl group">
                {/* Zoom 1.25: Black bar musnah dari foto kanan atas */}
                <img 
                  src="/mandala8.jpeg" 
                  alt="Ibadah Jemaat GBI 2" 
                  className="w-full h-full object-cover object-center scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
                />
              </div>
              
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl group">
                {/* Zoom 1.25: Black bar musnah dari foto kanan bawah */}
                <img 
                  src="/mandala9.jpeg" 
                  alt="Ibadah Jemaat GBI 3" 
                  className="w-full h-full object-cover object-center scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;