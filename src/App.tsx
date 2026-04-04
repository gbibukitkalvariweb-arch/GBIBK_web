import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangPage from "./pages/TentangPage";
import IbadahPage from "./pages/IbadahPage";
import LayananJemaatPage from "./pages/LayananJemaatPage"; 
import RenunganPage from "./pages/RenunganPage";
import CategoryPage from "./pages/CategoryPage";
import EventPage from "./pages/EventPage";
import PersembahanPage from "./pages/PersembahanPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/ibadah" element={<IbadahPage />} />
          <Route path="/layanan" element={<LayananJemaatPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/persembahan" element={<PersembahanPage />} />
          <Route path="/kategori/:slug" element={<CategoryPage />} /> 
          <Route path="/renungan" element={<RenunganPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;