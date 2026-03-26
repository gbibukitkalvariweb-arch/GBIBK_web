import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-worship.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] text-balance uppercase">
            Tempat untuk{" "}
            <span className="text-primary italic normal-case">Bertumbuh,</span>{" "}
            Bukan Sekadar Datang
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg">
            Komunitas yang menolong Anda bertumbuh dalam iman, keluarga, dan kehidupan.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Datang Minggu Ini
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              Hubungi Kami
            </Button>
          </div>
        </motion.div>

        {/* Right — Circular cropped image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] rounded-full overflow-hidden shadow-2xl border-4 border-muted">
            <img
              src={heroImg}
              alt="Ibadah raya GBI Bukit Kalvari"
              className="w-full h-full object-cover"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
