import { BrowserRouter, Routes, Route } from "react-router-dom";

// === IMPORT HALAMAN & KOMPONEN ===
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangPage from "./pages/TentangPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar selalu nangkring di atas */}
      <Navbar />
      
      {/* Area ganti-ganti halaman */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;