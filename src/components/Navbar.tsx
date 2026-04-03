import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Daftar menu (Renungan sudah dihapus sesuai request)
  const navLinks = [
    { name: "BERANDA", path: "/" },
    { name: "TENTANG", path: "/tentang" },
    { name: "IBADAH", path: "/ibadah" },
    { name: "LAYANAN", path: "/layanan" },
    { name: "EVENT", path: "/event" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // --- JURUS SAKTI SCROLL KE ATAS ---
  const handleNavClick = (path: string) => {
    setIsOpen(false); // Tutup menu mobile otomatis
    
    // Kalau klik menu yang sama dengan halaman sekarang, paksa scroll ke atas
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Efek scroll halus
      });
    } else {
      // Kalau pindah halaman, langsung ke atas juga
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link to="/" onClick={() => handleNavClick("/")} className="flex items-center gap-3">
            <img src="/logo-gbi.png" alt="Logo GBI Bukit Kalvari" className="w-10 h-10 object-contain" />
            <span className="font-black text-xl tracking-tight text-[#2A3338] hidden sm:block">
              GBI BUKIT KALVARI
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-bold tracking-wider transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#A47151]"
                    : "text-gray-500 hover:text-[#A47151]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block text-base font-bold tracking-wider px-2 py-2 rounded-lg ${
                  isActive(link.path)
                    ? "text-[#A47151] bg-[#F4F1ED]"
                    : "text-gray-600 hover:text-[#A47151]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;