import PersembahanPage from "./pages/PersembahanPage";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const rekening = [
  { bank: "BCA", norek: "7350046091", an: "GBI MANDALA UTARA" },
  { bank: "BANK DKI", norek: "10323154994", an: "GBI MANDALA UTARA" },
];

const RekeningCard = ({ bank, norek, an }: { bank: string; norek: string; an: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(norek);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
      <p className="text-xs font-black text-[#A47151] uppercase tracking-widest">{bank}</p>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-black text-[#2A3338] tracking-wider">{norek}</p>
          <p className="text-sm text-gray-400 mt-1">a/n {an}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-[#2A3338] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#A47151] transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Tersalin!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Salin
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const PersembahanPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">GBI Bukit Kalvari</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none mb-4">
            Persembahan
          </h1>
          <div className="h-2 w-20 bg-[#A47151] mx-auto"></div>
        </div>

        {/* Info */}
        <div className="bg-[#2A3338] rounded-2xl p-6 mb-8 text-center">
          <p className="text-white font-semibold text-base leading-relaxed">
            Persembahan Dapat Ditransfer Ke Nomor Rekening Di Bawah Ini
          </p>
        </div>

        {/* Rekening */}
        <div className="flex flex-col gap-4 mb-8">
          {rekening.map((r) => (
            <RekeningCard key={r.bank} {...r} />
          ))}
        </div>

        {/* Terima kasih */}
        <div className="text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-[#A47151] font-black text-lg uppercase tracking-wide">
            Terima Kasih Atas Persembahan Anda
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Tuhan memberkati setiap pemberi yang memberi dengan sukacita.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PersembahanPage;
