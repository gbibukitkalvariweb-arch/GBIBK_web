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
            <a href="https://wa.me/6281218990403" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-background transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +62 812-1899-0403
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
