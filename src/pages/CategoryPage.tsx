import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { directus, getImageUrl, readItems } from "@/lib/directus";

const CATEGORY_LABELS: Record<string, string> = {
  "buletin_rise": "Buletin Rise!",
  "renungan_anak": "Renungan Anak",
  "artikel": "Artikel",
};

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryName = CATEGORY_LABELS[slug || ""] || slug?.replace(/_/g, " ").toUpperCase();

  useEffect(() => {
    setLoading(true);
    directus.request(readItems('artikel', {
      filter: {
        status: { _eq: 'published' },
        kategori: { _eq: slug }
      },
      sort: ['-tanggal_publish'],
    }))
    .then((data: any) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Directus Error:", err);
      setLoading(false);
    });
  }, [slug]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <button onClick={() => navigate("/renungan")} className="inline-flex items-center gap-2 text-[#A47151] font-black text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all">
          <span className="text-xl">←</span> Kembali ke Renungan & Buletin
        </button>

        <div className="mb-12">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kategori Konten</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#2A3338] mb-4 uppercase tracking-tighter leading-none">{categoryName}</h1>
          <div className="h-2 w-20 bg-[#A47151]"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20 animate-pulse font-bold text-gray-400 uppercase tracking-widest text-xs">Sedang Memuat...</div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div key={post.id} className="group cursor-pointer" onClick={() => navigate(`/renungan/${post.id}`)}>
                <div className="overflow-hidden rounded-2xl mb-6 h-72 bg-gray-100 border border-gray-100 shadow-sm transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                  {post.gambar ? (
                    <img src={getImageUrl(post.gambar) || ''} alt={post.judul} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold">NO IMAGE</div>
                  )}
                </div>
                {post.tanggal_publish && (
                  <p className="text-[10px] font-black text-[#A47151] uppercase mb-2">{new Date(post.tanggal_publish).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                )}
                <h3 className="text-2xl font-bold text-[#2A3338] leading-tight group-hover:text-[#A47151] transition-colors mb-1">{post.judul}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 py-32 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 font-bold text-xl uppercase italic">Belum ada konten untuk kategori ini.</p>
            <button onClick={() => navigate("/renungan")} className="mt-6 inline-block text-[#A47151] font-bold underline">Cari di kategori lain</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
