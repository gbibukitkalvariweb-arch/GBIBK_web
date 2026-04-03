import { BrowserRouter, Routes, Route } from "react-router-dom";

// === IMPORT KOMPONEN UTAMA ===
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

// === IMPORT HALAMAN ===
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangPage from "./pages/TentangPage";
import IbadahPage from "./pages/IbadahPage";
import LayananJemaatPage from "./pages/LayananJemaatPage"; 
import RenunganPage from "./pages/RenunganPage";
import CategoryPage from "./pages/CategoryPage"; // <-- Import Halaman Kategori Baru

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar nangkring paling atas */}
      <Navbar />
      
      {/* Area ganti-ganti halaman */}
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/ibadah" element={<IbadahPage />} />
          <Route path="/layanan" element={<LayananJemaatPage />} /> 
          
          {/* Jalur dinamis buat Buletin, Renungan Anak, dll */}
          <Route path="/kategori/:slug" element={<CategoryPage />} /> 
          
          {/* Jalur lama (opsional) */}
          <Route path="/renungan" element={<RenunganPage />} /> 
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer nangkring paling bawah */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;