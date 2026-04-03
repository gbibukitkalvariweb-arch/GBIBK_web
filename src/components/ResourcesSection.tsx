import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";

const ResourcesSection = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "renungan"] | order(_createdAt desc) [0...4] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      "category": category->title,
      "categorySlug": category->slug.current,
      excerpt
    }`;

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div className="py-20 text-center font-bold text-gray-400 animate-pulse">MEMUAT...</div>;

  const headline = posts[0];
  const sidePosts = posts.slice(1);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER - Samain sama Pesan Minggu Ini */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kumpulan Renungan</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none">
              Renungan & Buletin
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/kategori/buletin-rise" className="px-5 py-2 bg-[#A47151] text-white rounded-full font-bold text-[10px] uppercase transition-transform hover:scale-105 active:scale-95">Buletin Rise!</Link>
            <Link to="/kategori/renungan-anak" className="px-5 py-2 border border-gray-200 rounded-full font-bold text-[10px] uppercase hover:bg-gray-50">Renungan Anak</Link>
            <Link to="/kategori/artikel" className="px-5 py-2 border border-gray-200 rounded-full font-bold text-[10px] uppercase hover:bg-gray-50">Artikel</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* SISI KIRI (LIST) */}
          <div className="lg:col-span-5 space-y-8">
            {sidePosts.map((post) => (
              <Link key={post._id} to={`/kategori/${post.categorySlug || 'artikel'}`} className="flex gap-6 group">
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all group-hover:shadow-lg">
                  {post.mainImage && (
                    <img src={urlFor(post.mainImage).url()} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] font-black text-[#A47151] uppercase mb-1">
                    {post.category} — {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                  </p>
                  <h3 className="text-xl font-bold text-[#2A3338] leading-tight group-hover:text-[#A47151] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* SISI KANAN (HEADLINE) */}
          {headline && (
            <div className="lg:col-span-7">
              <Link to={`/kategori/${headline.categorySlug || 'artikel'}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-gray-100 mb-8 aspect-video shadow-xl transition-all group-hover:shadow-2xl">
                  {headline.mainImage && (
                    <img src={urlFor(headline.mainImage).url()} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <p className="text-xs font-black text-[#A47151] uppercase mb-2">
                  {headline.category} — {new Date(headline.publishedAt).toLocaleDateString('id-ID')}
                </p>
                <h3 className="text-3xl md:text-5xl font-black text-[#2A3338] leading-[0.9] tracking-tighter mb-4 group-hover:text-[#A47151] transition-colors">
                  {headline.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {headline.excerpt || "Klik untuk membaca selengkapnya..."}
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;