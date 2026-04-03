import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const RenunganPage = () => {
  const renunganLain = [
    {
      id: 1,
      category: "Renungan Anak",
      date: "22 Mar 2026",
      title: "Iman yang Teguh di Tengah Badai Kehidupan",
      image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Buletin Rise!",
      date: "15 Mar 2026",
      title: "Edisi Spesial Paskah: Kasih yang Tidak Bersyarat",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Artikel",
      date: "08 Mar 2026",
      title: "Membangun Mezbah Keluarga di Era Digital",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-[#2A3338] tracking-tighter uppercase mb-4">
            RENUNGAN & ARTIKEL
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Temukan inspirasi dan kekuatan rohani harian untuk pertumbuhan iman Anda dalam Kristus.
          </p>
        </div>

        {/* FEATURED ARTICLE (ARTIKEL UTAMA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 group cursor-pointer">
          <div className="lg:col-span-7 overflow-hidden rounded-3xl shadow-xl aspect-video md:aspect-auto md:h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#F4F1ED] text-[#A47151] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Artikel Terkini
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                29 Maret 2026
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#2A3338] mb-6 group-hover:text-[#A47151] transition-colors leading-tight">
              Hidup Dalam Rencana Tuhan di Tengah Ketidakpastian
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Bagaimana kita bisa tetap tenang dan menemukan kedamaian saat dunia di sekitar kita terasa kacau? Temukan langkah-langkah praktis untuk menyelaraskan hidup Anda dengan rencana-Nya melalui perenungan firman Tuhan yang mendalam.
            </p>
            <button className="bg-[#2A3338] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#A47151] transition-all flex items-center justify-center md:justify-start w-fit group/btn">
              Baca Renungan Penuh
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SECTION: RENUNGAN LAINNYA */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-[#2A3338] uppercase tracking-tight">Arsip Renungan</h3>
            <div className="h-px bg-gray-100 flex-grow ml-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {renunganLain.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-md aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#A47151] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-[#2A3338] group-hover:text-[#A47151] transition-colors leading-tight line-clamp-2">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RenunganPage;