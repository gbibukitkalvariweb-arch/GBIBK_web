import { Target, Heart } from "lucide-react";

const TentangPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      {/* ========== HERO SECTION TENTANG KAMI ========== */}
      <section className="bg-[#8A9A86] py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="block text-sm md:text-base font-bold tracking-[0.15em] uppercase mb-4 text-white/80">
              Mengenal Lebih Dekat
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 uppercase">
              GBI BUKIT KALVARI
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Membawa setiap jiwa pada restorasi total, membangun keluarga yang kuat, dan mempersiapkan Anda bagi kerajaan-Nya.
            </p>
          </div>
        </div>
      </section>

      {/* ========== VISI & MISI SECTION ========== */}
      <section className="py-20 md:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2A3338] uppercase">
              VISI & MISI
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi Card */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F4F1ED] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#A47151]" />
              </div>
              <h3 className="text-2xl font-bold text-[#A47151] mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-medium mb-3">
                Menjadi jemaat yang mengalami restorasi total baik dalam kehidupan pribadi, keluarga, bergereja dan bermasyarakat.
              </p>
              <p className="text-gray-500 italic font-medium">
                (Kisah Para Rasul 3:21)
              </p>
            </div>

            {/* Misi Card */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F4F1ED] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#A47151]" />
              </div>
              <h3 className="text-2xl font-bold text-[#A47151] mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                Menjangkau jiwa, memimpin mereka ke dalam restorasi total serta mempersiapkan mereka untuk pelayanan bagi Kristus dan kerajaanNya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SEJARAH GEREJA SECTION ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Foto Sejarah/Gedung Gereja */}
            <div className="lg:col-span-5 h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/mandala2.png" 
                alt="Sejarah GBI Bukit Kalvari" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 object-top"
              />
            </div>
            
            {/* Teks Sejarah Asli Tanpa Diringkas */}
            <div className="lg:col-span-7">
              <span className="block text-sm font-bold tracking-[0.15em] uppercase mb-4 text-[#A47151]">
                SEJARAH GEREJA
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2A3338] mb-8 uppercase leading-tight">
                PERJALANAN GBI BUKIT KALVARI
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Gereja Bethel Indonesia Bukit Kalvari, didirikan pada tahun 1988. Berawal dari sebuah Persekutuan Doa yang diadakan di rumah kediaman Bapak Hendrik Lumanau, di Jl. S. Parman – Jakarta Barat, Pdt. Ade Manuhutu memulai pelayanan penggembalaannya.
                </p>
                <p>
                  Persekutuan Doa ini terus berkembang dan bertumbuh sehingga tidak mungkin lagi hanya menjadi sebuah Persekutuan Doa. Masuk tahun 1990, Pdt. Ade Manuhutu mendapatkan misi dari Tuhan untuk memulai perintisan pelayanan pekabaran Injil di daerah. 
                </p>
                <p>
                  Dan pada tahun 1991, Gereja Bethel Indonesia Bukit Kalvari resmi memulai dan mengembangkan pelayanannya. Pada tahun 2019, Gereja Bethel Indonesia Mandala Utara mengubah namanya kembali seperti semula yakni GBI Bukit Kalvari.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default TentangPage;