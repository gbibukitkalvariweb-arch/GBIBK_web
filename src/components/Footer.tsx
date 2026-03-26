import { Instagram, Youtube, Wallet, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h3 className="font-heading text-lg font-extrabold text-primary tracking-tight mb-4">
            GBI BUKIT KALVARI
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Jl. Margonda Raya No.123, Depok,<br />
            Jawa Barat 16431
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:info@gbibukitkalvari.id" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> info@gbibukitkalvari.id
            </a>
            <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" /> +62 812-3456-7890
            </a>
          </div>
        </div>

        {/* Middle */}
        <div>
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
            Menu
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Jadwal Ibadah</a></li>
            <li><a href="#resources" className="hover:text-foreground transition-colors">Renungan</a></li>
            <li><a href="#care" className="hover:text-foreground transition-colors">Layanan Jemaat</a></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
            Ikuti Kami
          </h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-lg bg-surface-raised flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-surface-raised flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Youtube className="w-5 h-5" />
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

      <div className="border-t border-border text-center py-6 text-xs text-muted-foreground">
        © 2026 GBI Bukit Kalvari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
