import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { directus, getImageUrl, readItems } from "@/lib/directus";

const CATEGORIES = [
  { label: "Buletin Rise!", slug: "buletin_rise" },
  { label: "Renungan Anak", slug: "renungan_anak" },
  { label: "Artikel", slug: "artikel" },
];

const ResourcesSection = () => {
  const navigate = useNavigate();
  const [latest, setLatest] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      CATEGORIES.map(cat =>
        directus.request(readItems('artikel', {
          filter: {
            status: { _eq: 'published' },
            kategori: { _eq: cat.slug }
          },
          sort: ['-tanggal_publish'],
          limit: 1,
        })).then((data: any) => ({ slug: cat.slug, post: data[0] || null }))
      )
    ).then((results) => {
      const map: Record<string, any> = {};
      results.forEach(r => { map[r.slug] = r.post; });
      setLatest(map);
      setLoading(false);
    }).catch(console.error);
  }, []);

  return (
    <section id="resources" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kumpulan Renungan</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none">Renungan & Buletin</h2>
        </div>

        {loading ? (
          <div className="py-20 text-center font-bold text-gray-400 animate-pulse text-xs uppercase tracking-widest">Memuat...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map(({ label, slug }) => {
              const post = latest[slug];
              return (
                <div key={slug} onClick={() => navigate(`/kategori/${slug}`)} className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    {post?.gambar ? (
                      <img src={getImageUrl(post.gambar) || ''} alt={post.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">NO IMAGE</div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-[#F4F1ED] text-[#A47151] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">{label}</span>
                    {post ? (
                      <>
                        <h3 className="text-lg font-black text-[#2A3338] leading-tight group-hover:text-[#A47151] transition-colors line-clamp-2 mb-2">{post.judul}</h3>
                        {post.tanggal_publish && (
                          <p className="text-xs text-gray-400">{new Date(post.tanggal_publish).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-gray-400 italic">Belum ada konten</p>
                    )}
                    <p className="text-[#A47151] font-bold text-xs mt-4 group-hover:underline">Lihat Semua {label} →</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <button onClick={() => navigate("/renungan")} className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline">
            Lihat Semua Renungan →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
