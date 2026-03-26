import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-worship.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Ibadah raya GBI Bukit Kalvari"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight text-balance">
          Tempat untuk Bertumbuh,{" "}
          <span className="text-primary">Bukan Sekadar Datang</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Komunitas yang menolong Anda bertumbuh dalam iman, keluarga, dan kehidupan.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Datang Minggu Ini
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            Hubungi Kami
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
