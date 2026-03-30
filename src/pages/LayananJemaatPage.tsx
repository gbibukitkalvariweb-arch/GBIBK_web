import React from 'react';

const LayananJemaatPage = () => {
  const accentColor = "text-[#a57b5f]";
  const iconBg = "bg-[#f2e9e1]";
  const cardBg = "bg-[#f9f8f6]";

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 flex flex-col">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter">
            LAYANAN JEMAAT
          </h1>
        </div>

        {/* Grid Layanan - Balik ke Gaya Lama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Konseling Pastoral - Keterangan DIGANTI Sesuai Request */}
          <div className={`${cardBg} rounded-[2rem] p-10 flex flex-col items-center justify-start transition-transform hover:-translate-y-1 shadow-sm`}>
            <div className={`w-14 h-14 ${iconBg} ${accentColor} rounded-2xl flex items-center justify-center mb-6`}>
              {/* Icon Handshake/Heart */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center leading-tight">Konseling<br/>Pastoral</h3>
            {/* Keterangan BARU */}
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              Bimbingan Rohani bersama Team Pastoral
            </p>
          </div>

          {/* Card 2: Bimbingan Pranikah */}
          <div className={`${cardBg} rounded-[2rem] p-10 flex flex-col items-center justify-start transition-transform hover:-translate-y-1 shadow-sm`}>
            <div className={`w-14 h-14 ${iconBg} ${accentColor} rounded-2xl flex items-center justify-center mb-6`}>
              {/* Icon Heart Outline */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center leading-tight">Bimbingan<br/>Pranikah</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              Persiapan pernikahan yang kokoh dalam Tuhan
            </p>
          </div>

          {/* Card 3: Pelayanan Kedukaan */}
          <div className={`${cardBg} rounded-[2rem] p-10 flex flex-col items-center justify-start transition-transform hover:-translate-y-1 shadow-sm`}>
            <div className={`w-14 h-14 ${iconBg} ${accentColor} rounded-2xl flex items-center justify-center mb-6`}>
              {/* Icon Flower */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center leading-tight">Pelayanan<br/>Kedukaan</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              Pendampingan dan dukungan di masa sulit
            </p>
          </div>

          {/* Card 4: Permohonan Doa Khusus */}
          <div className={`${cardBg} rounded-[2rem] p-10 flex flex-col items-center justify-start transition-transform hover:-translate-y-1 shadow-sm`}>
            <div className={`w-14 h-14 ${iconBg} ${accentColor} rounded-2xl flex items-center justify-center mb-6`}>
              {/* Icon Book */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center leading-tight">Permohonan<br/>Doa Khusus</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              Sampaikan pergumulan Anda kepada tim doa
            </p>
          </div>

        </div>

        {/* Keterangan */}
        <div className="text-center mt-6">
          <p className="inline-block text-gray-700 font-bold text-xl md:text-2xl italic bg-gray-50 px-8 py-5 rounded-full border border-gray-100 shadow-sm">
            "Hubungi No Sekretariat untuk Layanan Jemaat"
          </p>
        </div>

      </div>
    </div>
  );
};

export default LayananJemaatPage;