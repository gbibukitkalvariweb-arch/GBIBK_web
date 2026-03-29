import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Ini jurus buat ngecek kita lagi di halaman mana

  // Daftar menu Navbar biar gampang diatur
  const navLinks = [
    { name: "BERANDA", path: "/" },
    { name: "TENTANG", path: "/tentang" },
    { name: "IBADAH", path: "/ibadah" },
    { name: "LAYANAN", path: "/layanan" },
    { name: "RENUNGAN", path: "/renungan" },
    { name: "EVENT", path: "/event" },
  ];

  // Fungsi buat ngecek apakah menu ini lagi aktif/dibuka
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ========== KIRI: LOGO ========== */}
          <Link to="/" className="flex items-center gap-3">
            {/* Pastiin logo lo bener namanya logo.png atau sesuaikan */}
            <img src="/logo-gbi.png" alt="Logo GBI Bukit Kalvari" className="w-10 h-10 object-contain" />
            <span className="font-black text-xl tracking-tight text-[#2A3338] hidden sm:block">
              GBI BUKIT KALVARI
            </span>
          </Link>

          {/* ========== KANAN: DESKTOP MENU ========== */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wider transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#A47151]" // Warna cokelat kalau lagi aktif
                    : "text-gray-500 hover:text-[#A47151]" // Warna abu-abu kalau ngga aktif
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ========== MOBILE MENU BUTTON ========== */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#A47151] focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========== MOBILE MENU DROPDOWN ========== */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Tutup menu kalau diklik
                className={`block text-base font-bold tracking-wider px-2 py-2 rounded-lg ${
                  isActive(link.path)
                    ? "text-[#A47151] bg-[#F4F1ED]"
                    : "text-gray-600 hover:text-[#A47151] hover:bg-gray-50"
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