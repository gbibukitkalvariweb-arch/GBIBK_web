import { Instagram, Facebook, Wallet, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h3 className="font-heading text-lg font-extrabold text-primary tracking-tight mb-4">
            GBI BUKIT KALVARI
          </h3>
          <p className="text-sm text-background/60 leading-relaxed mb-4">
            Jl. Mandala Utara No. 26, Tomang,<br />
            Jakarta Barat
          </p>
          <div className="flex flex-col gap-2 text-sm text-background/60">
            <a href="tel:0215668890" className="inline-flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> (021) 566 8890
            </a>
            <a href="tel:0215668443" className="inline-flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> (021) 566 8443
            </a>
          </div>
        </div>

        {/* Middle */}
        <div>
          <h4 className="font-heading text-sm font-bold text-background mb-4 uppercase tracking-widest">
            Menu
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-background/60">
            <li><a href="#" className="hover:text-background transition-colors">Jadwal Ibadah</a></li>
            <li><a href="#resources" className="hover:text-background transition-colors">Renungan</a></li>
            <li><a href="#care" className="hover:text-background transition-colors">Layanan Jemaat</a></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-heading text-sm font-bold text-background mb-4 uppercase tracking-widest">
            Ikuti Kami
          </h4>
          <div className="flex gap-4 mb-6">
            <a href="https://www.instagram.com/gbi_mu26/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-primary hover:bg-primary/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/gbi.mandalautara.7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-primary hover:bg-primary/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/80 transition-colors"
          >
            <Wallet className="w-4 h-4" />
            Beri Persembahan
          </a>
        </div>
      </div>

      <div className="border-t border-background/10 text-center py-6 text-xs text-background/40">
        © 2026 GBI Bukit Kalvari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
