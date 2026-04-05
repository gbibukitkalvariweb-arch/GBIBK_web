import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';

const CATEGORIES = [
  { label: 'Buletin Rise!', slug: 'buletin' },
  { label: 'Renungan Anak', slug: 'renungan-anak' },
  { label: 'Artikel Rohani', slug: 'artikel-rohani' },
];

const RenunganPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].slug);
  const [posts, setPosts] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);
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
      .catch((err) => {
        console.error('Sanity Error:', err);
        setLoading(false);
      });
  }, [activeCategory]);

  const getCategoryLabel = (slug: string) => {
    return CATEGORIES.find((c) => c.slug === slug)?.label || slug;
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kumpulan Renungan</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#2A3338] uppercase tracking-tighter leading-none mb-4">
            Renungan & Buletin
          </h1>
          <div className="h-2 w-20 bg-[#A47151]"></div>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat.slug
                  ? 'bg-[#A47151] text-white border-[#A47151]'
                  : 'bg-white text-[#2A3338] border-gray-200 hover:border-[#A47151] hover:text-[#A47151]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-32 animate-pulse font-bold text-gray-400 uppercase tracking-widest text-xs">
            Sedang Memuat...
          </div>
        ) : !featured && posts.length === 0 ? (
          <div className="bg-gray-50 py-32 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 font-bold text-xl uppercase italic">Belum ada konten.</p>
          </div>
        ) : (
          <>
            {/* FEATURED - flex bukan grid biar lebih stabil */}
            {featured && (
              <div
                className="flex flex-col lg:flex-row gap-8 mb-16 cursor-pointer group"
                onClick={() => navigate(`/renungan/${featured.slug}`)}
              >
                {/* Gambar kiri */}
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-3xl shadow-xl aspect-video lg:aspect-auto lg:h-[400px]">
                  {featured.mainImage ? (
                    <img
                      src={urlFor(featured.mainImage).url()}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 font-bold">
                      NO IMAGE
                    </div>
                  )}
                </div>

                {/* Teks kanan */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#F4F1ED] text-[#A47151] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {getCategoryLabel(activeCategory)}
                    </span>
                    {featured.publishedAt && (
                      <span className="text-gray-400 text-sm">
                        {new Date(featured.publishedAt).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'long', year: 'numeric'
                        })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#2A3338] mb-3 group-hover:text-[#A47151] transition-colors leading-tight">
                    {featured.title}
                  </h2>
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
                      onClick={() => navigate(`/renungan/${post.slug}`)}
                    >
                      <div className="overflow-hidden rounded-xl mb-3 aspect-square bg-gray-100 shadow-sm group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                        {post.mainImage ? (
                          <img
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">
                            NO IMAGE
                          </div>
                        )}
                      </div>
                      {post.publishedAt && (
                        <p className="text-[10px] text-gray-400 mb-1">
                          {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
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
          </>
        )}
      </div>
    </div>
  );
};

export default RenunganPage;
