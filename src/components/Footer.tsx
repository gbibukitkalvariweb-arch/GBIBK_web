import { Instagram, Facebook, Wallet, Phone, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }
    setIsMobile(/Android|iPhone|iPad/.test(navigator.userAgent));
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      const isSamsung = /SamsungBrowser/.test(navigator.userAgent);
      const isIOS = /iPhone|iPad/.test(navigator.userAgent);
      if (isIOS) {
        alert("Di Safari: Tap tombol Share lalu Add to Home Screen");
      } else if (isSamsung) {
        alert("Tap menu titik 3 lalu Add page to lalu Home screen");
      } else {
        alert("Tap menu titik 3 lalu Add to Home screen");
      }
    }
  };

  return (
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
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

        <div>
          <h4 className="font-heading text-sm font-bold text-background mb-4 uppercase tracking-widest">
            Menu
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-background/60">
            <li>
              <Link to="/ibadah" className="hover:text-background transition-colors">
                Jadwal Ibadah
              </Link>
            </li>
            <li>
              <Link to="/renungan" className="hover:text-background transition-colors">
                Renungan
              </Link>
            </li>
            <li>
              <Link to="/layanan" className="hover:text-background transition-colors">
                Layanan Jemaat
              </Link>
            </li>
          </ul>
        </div>

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
          <div className="flex flex-col gap-3">
            <Link
              to="/persembahan"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/80 transition-colors"
            >
              <Wallet className="w-4 h-4" />
              Beri Persembahan
            </Link>
            {isMobile && !isInstalled && (
              <button
                onClick={handleInstall}
                className="inline-flex items-center gap-2 bg-background/10 text-background px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-background/20 transition-colors border border-background/20"
              >
                <Download className="w-4 h-4" />
                Install Aplikasi
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 text-center py-6 text-xs text-background/40">
        © 2026 GBI Bukit Kalvari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
