import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { directus, getImageUrl, readItem } from "@/lib/directus";

const CATEGORY_LABELS: Record<string, string> = {
  "buletin_rise": "Buletin Rise!",
  "renungan_anak": "Renungan Anak",
  "artikel": "Artikel",
};

const RenunganDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fix 1: Hapus pengecekan isNaN dan biarkan id sebagai string
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Fix 2: Langsung pakai id, dan tambahkan fields: ['*']
    directus.request(readItem('artikel', id, { fields: ['*'] }))
      .then((res: any) => {
        setPost(res || null);
      })
      .catch((err) => {
        console.error("Directus Error:", err);
        setPost(null);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 font-bold animate-pulse uppercase tracking-widest text-xs">
      Sedang Memuat...
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-gray-400 font-bold">Artikel tidak ditemukan.</p>
      <button
        onClick={() => navigate("/renungan")}
        className="text-[#A47151] font-bold underline"
      >
        Kembali ke Renungan
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">

        <button
          onClick={() => navigate(`/kategori/${post.kategori}`)}
          className="inline-flex items-center gap-2 text-[#A47151] font-black text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all"
        >
          <span className="text-xl">←</span>
          Kembali ke {CATEGORY_LABELS[post.kategori] || post.kategori}
        </button>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#F4F1ED] text-[#A47151] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {CATEGORY_LABELS[post.kategori] || post.kategori}
          </span>

          {post.tanggal_publish && (
            <span className="text-gray-400 text-sm">
              {new Date(post.tanggal_publish).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[#2A3338] leading-tight tracking-tighter mb-8">
          {post.judul}
        </h1>

        {post.gambar && (
          <div className="overflow-hidden rounded-2xl mb-10 shadow-md">
            <img
              src={getImageUrl(post.gambar) || ""}
              alt={post.judul}
              className="w-full object-cover"
            />
          </div>
        )}

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.konten || "" }}
        />

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            onClick={() => navigate(`/kategori/${post.kategori}`)}
            className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline"
          >
            ← Baca artikel lainnya
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.judul, text: `Baca renungan: ${post.judul}`, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link berhasil disalin!');
              }
            }}
            className="inline-flex items-center gap-2 bg-[#A47151] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#8a5d3b] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Bagikan
          </button>
        </div>

      </div>
    </div>
  );
};

export default RenunganDetailPage;
