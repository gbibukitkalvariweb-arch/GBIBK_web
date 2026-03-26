import { motion } from "framer-motion";
import { HandMetal, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: HandMetal,
    title: "Baru di sini?",
    text: "Temukan langkah pertamamu bersama kami.",
    cta: "Mulai di Sini",
  },
  {
    icon: Heart,
    title: "Butuh Dukungan Doa?",
    text: "Tim pendoa kami rindu mendoakan pergumulan Anda.",
    cta: "Minta Doa",
  },
];

const NextStepSection = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Langkah Selanjutnya
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase">
          Kami Di Sini Untuk Anda
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 md:p-12 flex flex-col items-start gap-6 hover:border-primary/50 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
              <card.icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-muted-foreground">{card.text}</p>
            </div>
            <Button variant="hero" className="mt-auto">
              {card.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NextStepSection;
