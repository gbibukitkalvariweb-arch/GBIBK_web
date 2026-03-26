import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import resource1 from "@/assets/resource-1.jpg";
import resource2 from "@/assets/resource-2.jpg";

const tabs = ["Buletin Rise!", "Renungan Anak"];

const buletinItems = [
  { img: resource1, date: "20 Maret 2026", title: "Hidup Dalam Rencana Tuhan", excerpt: "Bagaimana menemukan dan menjalani rencana Tuhan dalam kehidupan sehari-hari..." },
  { img: resource1, date: "13 Maret 2026", title: "Iman yang Teguh di Tengah Badai", excerpt: "Ketika tantangan datang, iman kita diuji. Berikut renungan tentang..." },
  { img: resource1, date: "6 Maret 2026", title: "Kasih yang Tidak Bersyarat", excerpt: "Merenungkan kasih Tuhan yang melampaui segala pengertian manusia..." },
];

const renunganAnakItems = [
  { img: resource2, date: "20 Maret 2026", title: "Yesus Sahabatku", excerpt: "Cerita bergambar tentang persahabatan dengan Yesus untuk anak-anak..." },
  { img: resource2, date: "13 Maret 2026", title: "Doa Anak Kecil", excerpt: "Mengajarkan anak-anak berdoa dengan hati yang tulus dan sederhana..." },
  { img: resource2, date: "6 Maret 2026", title: "Kisah Daud si Gembala", excerpt: "Petualangan Daud kecil yang berani karena percaya pada Tuhan..." },
];

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  const items = activeTab === 0 ? buletinItems : renunganAnakItems;
  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="resources" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Sumber Daya
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase">
              Renungan & Buletin
            </h2>
          </div>
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-semibold hover:gap-2 transition-all"
                >
                  Baca selengkapnya <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
