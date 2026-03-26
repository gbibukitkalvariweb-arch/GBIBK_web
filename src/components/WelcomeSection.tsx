import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest mb-3">
            Selamat Datang
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-secondary-foreground leading-tight uppercase">
            Selamat Datang di Rumah
          </h2>
          <p className="mt-6 text-secondary-foreground/80 leading-relaxed text-lg">
            Kami percaya bahwa setiap orang diciptakan untuk hidup dalam komunitas yang penuh kasih. 
            Di GBI Bukit Kalvari, Anda bukan sekadar pengunjung — Anda adalah keluarga. 
            Temukan tujuan hidup Anda dan bertumbuhlah bersama kami.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-secondary-foreground font-semibold hover:gap-3 transition-all group"
          >
            Kenal Kami Lebih Dekat
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right — overlapping images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <img
            src={community1}
            alt="Komunitas gereja"
            loading="lazy"
            width={800}
            height={1024}
            className="rounded-xl shadow-2xl col-span-1 row-span-2 object-cover h-full"
          />
          <img
            src={community2}
            alt="Kelompok kecil"
            loading="lazy"
            width={800}
            height={600}
            className="rounded-xl shadow-xl object-cover"
          />
          <img
            src={community3}
            alt="Pelayanan komunitas"
            loading="lazy"
            width={800}
            height={600}
            className="rounded-xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
