import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";

const CATEGORIES = [
  { label: "Buletin Rise!", slug: "buletin" },
  { label: "Renungan Anak", slug: "renungan-anak" },
  { label: "Artikel Rohani", slug: "artikel-rohani" },
];

const ResourcesSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].slug);
  const [featured, setFeatured] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const query = `*[_type == "renungan" && kategori == $slug] | order(publishedAt desc) [0...9] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      kategori,
      author
    }`;

    client.fetch(query, { slug: activeCategory })
      .then((data) => {
        if (data.length > 0) {
          setFeatured(data[0]);
          setPosts(data.slice(1, 9));
        } else {
          setFeatured(null);
          setPosts([]);
        }
        setLoading(false);
      })
      .catch(console.error);
  }, [activeCategory]);

  const getCategoryLabel = (slug: string) => {
    return CATEGORIES.find((c) => c.slug === slug)?.label || slug;
  };

  return (
    <section id="resources" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADER + FILTER TABS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kumpulan Renungan</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none">
              Renungan & Buletin
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 rounded-full font-bold text-[11px] uppercase transition-all border ${
                  activeCategory === cat.slug
                    ? "bg-[#A47151] text-white border-[#A47151]"
                    : "bg-white text-[#2A3338] border-gray-200 hover:border-[#A47151] hover:text-[#A47151]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center font-bold text-gray-400 animate-pulse text-xs uppercase tracking-widest">
            Memuat...
          </div>
        ) : !featured && posts.length === 0 ? (
          <div className="bg-gray-50 py-20 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 font-bold uppercase italic">Belum ada konten.</p>
          </div>
        ) : (
          <>
            {/* FEATURED */}
            {featured && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 group cursor-pointer"
                onClick={() => navigate(`/kategori/${activeCategory}`)}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl aspect-video lg:h-[400px]">
                  {featured.mainImage ? (
                    <img
                      src={urlFor(featured.mainImage).url()}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 font-bold">NO IMAGE</div>
                  )}
                </div>
                <div className="flex flex-col justify-center pl-0 lg:pl-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#F4F1ED] text-[#A47151] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {getCategoryLabel(activeCategory)}
                    </span>
                    {featured.publishedAt && (
                      <span className="text-gray-400 text-sm">
                        {new Date(featured.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-[#2A3338] mb-3 group-hover:text-[#A47151] transition-colors leading-tight">
                    {featured.title}
                  </h3>
                  {featured.author && (
                    <p className="text-sm text-gray-400 mb-6">✍️ {featured.author}</p>
                  )}
                  <span className="text-[#A47151] font-bold text-sm group-hover:underline">
                    Klik untuk membaca selengkapnya →
                  </span>
                </div>
              </div>
            )}

            {/* GRID 4 KOLOM MAX 8 */}
            {posts.length > 0 && (
              <>
                <div className="h-px bg-gray-100 mb-10"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {posts.map((post) => (
                    <div
                      key={post._id}
                      className="group cursor-pointer"
                      onClick={() => navigate(`/kategori/${activeCategory}`)}
                    >
                      <div className="overflow-hidden rounded-xl mb-3 aspect-square bg-gray-100 shadow-sm group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                        {post.mainImage ? (
                          <img
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">NO IMAGE</div>
                        )}
                      </div>
                      {post.publishedAt && (
                        <p className="text-[10px] text-gray-400 mb-1">
                          {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      )}
                      <h4 className="text-sm font-bold text-[#2A3338] group-hover:text-[#A47151] transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      {post.author && (
                        <p className="text-[10px] text-gray-400 mt-1">✍️ {post.author}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* LIHAT SEMUA */}
            <div className="mt-10 text-center">
              <button
                onClick={() => navigate("/renungan")}
                className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline"
              >
                Lihat Semua Renungan →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
