import React from 'react';

const IbadahPage = () => {
  const accentColor = "text-[#a57b5f]";
  const accentBg = "bg-[#f4ebe1]";

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
            JADWAL IBADAH
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Kami mengundang Anda untuk hadir dan bertumbuh bersama dalam hadirat Tuhan melalui ibadah mingguan kami.
          </p>
        </div>

        {/* Grid Jadwal Ibadah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card Ibadah Raya */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 ${accentBg} ${accentColor} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ibadah Raya</h3>
            <p className="text-gray-500 mb-6">Ibadah pujian, penyembahan, dan pemberitaan Firman Tuhan untuk umum.</p>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Setiap Hari Minggu
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                08.00 WIB
              </div>
            </div>
          </div>

          {/* Card Sekolah Minggu */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 ${accentBg} ${accentColor} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sekolah Minggu</h3>
            <p className="text-gray-500 mb-6">Ibadah dan pengajaran firman Tuhan yang disesuaikan untuk anak-anak.</p>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Setiap Hari Minggu
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                08.00 WIB
              </div>
            </div>
          </div>

          {/* Card Youth */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 ${accentBg} ${accentColor} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ibadah Youth</h3>
            <p className="text-gray-500 mb-6">Wadah bagi para pemuda dan remaja untuk memuji Tuhan dan bersekutu.</p>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Setiap Hari Sabtu
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                17.00 WIB
              </div>
            </div>
          </div>

        </div>

        {/* Info Lokasi Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">LOKASI GEREJA KAMI</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kami beribadah di lokasi yang strategis dan mudah dijangkau. Jangan ragu untuk menghubungi kami jika Anda membutuhkan petunjuk arah.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className={`w-6 h-6 mr-4 mt-1 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <h4 className="font-bold text-gray-900">GBI Bukit Kalvari</h4>
                  <p className="text-gray-600 mt-1">Jl. Mandala Utara No. 26,<br/>Tomang, Jakarta Barat</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Jl.+Mandala+Utara+No.26+Tomang+Jakarta+Barat"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-[#a57b5f] hover:bg-[#8a654c] transition-colors w-fit"
            >
              Buka di Google Maps
            </a>
          </div>
          
          {/* Google Maps Embed */}
          <div className="md:w-1/2 min-h-[350px]">
            <iframe
              title="Lokasi GBI Bukit Kalvari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.7947!3d-6.1731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70a5b5b5b5b%3A0x0!2sJl.+Mandala+Utara+No.26%2C+Tomang%2C+Jakarta+Barat!5e0!3m2!1sid!2sid!4v1617000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default IbadahPage;
