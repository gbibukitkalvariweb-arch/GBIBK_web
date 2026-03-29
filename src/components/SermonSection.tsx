import { PlayCircle, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SermonSection = () => {
  return (
    <section className="bg-[#F8F7F4] py-20 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ========== HEADER ========== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="block text-sm md:text-base font-bold tracking-[0.15em] uppercase mb-4 text-[#A47151]">
              KUMPULAN KHOTBAH
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2A3338] uppercase">
              PESAN MINGGU INI
            </h2>
          </div>
          
          <Link to="/khotbah" className="inline-flex items-center text-[#2A3338] font-bold text-base hover:text-[#A47151] transition-colors group">
            Lihat Semua Khotbah
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ========== FEATURED & LIST LAYOUT (SAMA KAYAK RESOURCES, TAPI GEDE DI KIRI) ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ========== KIRI: FEATURED VIDEO (Jatah 7 Kolom) ========== */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-6 shadow-md aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=1200&auto=format&fit=crop" 
                alt="Khotbah Utama" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gelap & Tombol Play */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform drop-shadow-lg" />
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#A47151]/10 text-[#A47151] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Terbaru
              </span>
              <span className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> 22 Maret 2026
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-[#2A3338] mb-3 group-hover:text-[#A47151] transition-colors leading-tight">
              Mengalahkan Raksasa Dalam Hidupmu
            </h3>
            <p className="text-gray-600 text-lg font-medium">Oleh: Pdt. Ade Manuhutu</p>
          </div>

          {/* ========== KANAN: LIST VIDEOS (Jatah 5 Kolom) ========== */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-2">
            
            {/* Item List 1 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white opacity-90" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 45 Menit
                  </span>
                  <span className="text-gray-400 text-xs font-medium">15 Maret 2026</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Kuasa Doa yang Mengubahkan
                </h4>
              </div>
            </div>

            {/* Item List 2 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white opacity-90" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 50 Menit
                  </span>
                  <span className="text-gray-400 text-xs font-medium">8 Maret 2026</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Berjalan Dalam Janji Tuhan
                </h4>
              </div>
            </div>

            {/* Item List 3 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white opacity-90" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 42 Menit
                  </span>
                  <span className="text-gray-400 text-xs font-medium">1 Maret 2026</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Menjadi Terang di Tengah Kegelapan
                </h4>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SermonSection;