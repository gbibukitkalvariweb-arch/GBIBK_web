import { HeartHandshake, Heart, Flower2, BookOpen } from "lucide-react";

const CareSection = () => {
  // Data dummy buat nampilin 4 kotak layanan
  const services = [
    {
      id: 1,
      icon: <HeartHandshake className="w-7 h-7 text-[#A47151]" />,
      title: "Konseling Pastoral",
      description: "Bimbingan rohani pribadi bersama gembala"
    },
    {
      id: 2,
      icon: <Heart className="w-7 h-7 text-[#A47151]" />,
      title: "Bimbingan Pranikah",
      description: "Persiapan pernikahan yang kokoh dalam Tuhan"
    },
    {
      id: 3,
      icon: <Flower2 className="w-7 h-7 text-[#A47151]" />,
      title: "Pelayanan Kedukaan",
      description: "Pendampingan dan dukungan di masa sulit"
    },
    {
      id: 4,
      icon: <BookOpen className="w-7 h-7 text-[#A47151]" />,
      title: "Permohonan Doa Khusus",
      description: "Sampaikan pergumulan Anda kepada tim doa"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ========== HEADER ========== */}
        <div className="text-center mb-16">
          {/* Tulisan kecil merah yang lo coret udah DIBASMI dari sini 🚀 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#2A3338] uppercase">
            LAYANAN JEMAAT
          </h2>
        </div>

        {/* ========== SERVICES GRID ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#F4F1ED] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-[#EBE5D9] rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#2A3338] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareSection;