import { Link } from "react-router-dom";

const HeroSection = () => {
  // GANTI NOMOR DI BAWAH INI SAMA NOMOR WA GEREJA/ADMIN LO BRO
  // Pastiin depannya pakai 62 (jangan pakai 0 atau +)
  const waNumber = "6281234567890"; 
  const waMessage = "Shalom GBI Bukit Kalvari, saya ingin mendapatkan info lebih lanjut mengenai ibadah.";

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-16">
      
      {/* ========== BACKGROUND GAMBAR & GRADASI PUTIH ========== */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mandala2.png" 
          alt="Ibadah GBI Bukit Kalvari" 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-[85%]"></div>
      </div>

      {/* ========== KONTEN TEKS ========== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex">
        
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-start text-left">
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-[#2A3338] leading-[1.1] mb-6">
            <span className="block uppercase">Keluarga Yang</span>
            <span className="block font-serif italic text-[#B99A6A] tracking-normal py-2 text-5xl md:text-6xl lg:text-[4rem]">Dipulihkan,</span>
            <span className="block uppercase">Untuk</span>
            <span className="block uppercase">Melayani.</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-500 font-bold tracking-widest mb-6 uppercase">
            (Kisah Para Rasul 3 : 21)
          </p>

          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed font-medium">
            Membawa setiap jiwa pada restorasi total, membangun keluarga yang kuat, dan mempersiapkan Anda bagi kerajaan-Nya.
          </p>
          
          {/* ========== TOMBOL WHATSAPP ========== */}
          <a 
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 hover:border-gray-400 transition-all shadow-sm"
          >
            Hubungi Kami
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;