import { motion } from "framer-motion";
import { HeartHandshake, Heart, Flower2, BookOpen } from "lucide-react";

const services = [
  { icon: HeartHandshake, title: "Konseling Pastoral", desc: "Bimbingan rohani pribadi bersama gembala" },
  { icon: Heart, title: "Bimbingan Pranikah", desc: "Persiapan pernikahan yang kokoh dalam Tuhan" },
  { icon: Flower2, title: "Pelayanan Kedukaan", desc: "Pendampingan dan dukungan di masa sulit" },
  { icon: BookOpen, title: "Permohonan Doa Khusus", desc: "Sampaikan pergumulan Anda kepada tim doa" },
];

const CareSection = () => {
  return (
    <section id="care" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Layanan Jemaat
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Kami Peduli Dengan Anda
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-surface rounded-2xl p-8 text-center border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <svc.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{svc.title}</h3>
            <p className="text-sm text-muted-foreground">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareSection;
