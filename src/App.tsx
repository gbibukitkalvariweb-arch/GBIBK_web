import { BrowserRouter, Routes, Route } from "react-router-dom";

// === IMPORT KOMPONEN ===
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // <-- Udah gue benerin alamatnya ke folder components

// === IMPORT HALAMAN ===
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangPage from "./pages/TentangPage";
import IbadahPage from "./pages/IbadahPage";
import LayananJemaatPage from "./pages/LayananJemaatPage"; // Pastiin nama filenya pas!

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/ibadah" element={<IbadahPage />} />
        <Route path="/layanan" element={<LayananJemaatPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;