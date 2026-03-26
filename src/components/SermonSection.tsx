import { motion } from "framer-motion";
import { Play } from "lucide-react";
import sermonMain from "@/assets/sermon-main.jpg";
import thumb1 from "@/assets/sermon-thumb-1.jpg";
import thumb2 from "@/assets/sermon-thumb-2.jpg";
import thumb3 from "@/assets/sermon-thumb-3.jpg";

const previousSermons = [
  { img: thumb1, title: "Hidup Dalam Kasih Karunia", date: "16 Maret 2026" },
  { img: thumb2, title: "Pujian yang Mengubahkan", date: "9 Maret 2026" },
  { img: thumb3, title: "Kuasa Doa Bersama", date: "2 Maret 2026" },
];

const SermonSection = () => {
  return (
    <section id="sermon" className="py-16 md:py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Khotbah Terbaru
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-background uppercase">
            Dengarkan Firman Tuhan
          </h2>
        </motion.div>

        {/* Main video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer mb-12"
        >
          <img
            src={sermonMain}
            alt="Khotbah terbaru"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center accent-glow group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previousSermons.map((sermon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={sermon.img}
                alt={sermon.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-xs text-background/60">{sermon.date}</p>
                <p className="text-sm font-semibold text-background">{sermon.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
