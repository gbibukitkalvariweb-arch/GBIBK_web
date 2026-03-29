import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesSection = () => {
  return (
    <section className="bg-white py-20 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ========== HEADER & TABS BUTTONS ========== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2A3338] uppercase">
              RENUNGAN & BULETIN
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#A47151] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm">
              Buletin Rise!
            </button>
            <button className="bg-white text-gray-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              Renungan Anak
            </button>
            <button className="bg-white text-gray-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              Artikel
            </button>
          </div>
        </div>

        {/* ========== FEATURED & LIST LAYOUT (FLIPPED) ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ========== KIRI (Desktop): LIST ITEMS (3 Artikel Kecil) ========== */}
          {/* order-2 di mobile (bawah), order-1 di Desktop (kiri) */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            
            {/* Item List 1 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#A47151] text-xs font-bold uppercase tracking-wider">Renungan Anak</span>
                  <span className="text-gray-400 text-xs font-medium">22 Maret</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Iman yang Teguh di Tengah Badai Kehidupan
                </h4>
              </div>
            </div>

            {/* Item List 2 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#A47151] text-xs font-bold uppercase tracking-wider">Buletin Rise!</span>
                  <span className="text-gray-400 text-xs font-medium">15 Maret</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Edisi Spesial Paskah: Kasih yang Tidak Bersyarat
                </h4>
              </div>
            </div>

            {/* Item List 3 */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 group cursor-pointer">
              <div className="w-full sm:w-40 lg:w-full xl:w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop" 
                  alt="Thumbnail 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#A47151] text-xs font-bold uppercase tracking-wider">Artikel</span>
                  <span className="text-gray-400 text-xs font-medium">8 Maret</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] mb-2 group-hover:text-[#A47151] transition-colors line-clamp-2 leading-tight">
                  Membangun Mezbah Keluarga di Era Digital
                </h4>
              </div>
            </div>

          </div>

          {/* ========== KANAN (Desktop): FEATURED ITEM (1 Artikel Besar) ========== */}
          {/* order-1 di mobile (atas), order-2 di Desktop (kanan) */}
          <div className="lg:col-span-7 group cursor-pointer order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl mb-6 shadow-md aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop" 
                alt="Artikel Utama" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#F4F1ED] text-[#A47151] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Artikel Terkini
              </span>
              <span className="text-gray-400 text-sm font-medium">29 Maret 2026</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-[#2A3338] mb-4 group-hover:text-[#A47151] transition-colors leading-tight">
              Hidup Dalam Rencana Tuhan di Tengah Ketidakpastian
            </h3>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Bagaimana kita bisa tetap tenang dan menemukan kedamaian saat dunia di sekitar kita terasa kacau? Temukan langkah-langkah praktis untuk menyelaraskan hidup Anda dengan rencana-Nya.
            </p>
            
            <Link to="/renungan" className="inline-flex items-center text-[#A47151] font-bold text-base hover:text-[#8e6145] transition-colors group/link">
              Baca selengkapnya
              <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;