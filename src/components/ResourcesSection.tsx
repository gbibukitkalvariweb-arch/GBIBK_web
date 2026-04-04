import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";

const CATEGORIES = [
  { label: "Buletin Rise!", slug: "buletin" },
  { label: "Renungan Anak", slug: "renungan-anak" },
  { label: "Artikel", slug: "artikel" },
];

const ResourcesSection = () => {
  const [latestPosts, setLatestPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil 1 artikel terbaru dari setiap kategori
    const query = `{
      "buletin": *[_type == "renungan" && kategori == "buletin"] | order(publishedAt desc) [0] {
        _id, title, "slug": slug.current, mainImage, publishedAt, kategori, author
      },
      "renunganAnak": *[_type == "renungan" && kategori == "renungan-anak"] | order(publishedAt desc) [0] {
        _id, title, "slug": slug.current, mainImage, publishedAt, kategori, author
      },
      "artikel": *[_type == "renungan" && kategori == "artikel"] | order(publishedAt desc) [0] {
        _id, title, "slug": slug.current, mainImage, publishedAt, kategori, author
      }
    }`;

    client.fetch(query)
      .then((data) => {
        const posts = [data.buletin, data.renunganAnak, data.artikel].filter(Boolean);
        setLatestPosts(posts);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const getCategoryLabel = (slug: string) => {
    return CATEGORIES.find((c) => c.slug === slug)?.label || slug;
  };

  return (
    <section id="resources" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Kumpulan Renungan</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none">
              Renungan & Buletin
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/kategori/${cat.slug}`}
                className="px-5 py-2 border border-gray-200 rounded-full font-bold text-[10px] uppercase hover:bg-[#A47151] hover:text-white hover:border-[#A47151] transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center font-bold text-gray-400 animate-pulse text-xs uppercase tracking-widest">Memuat...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post._id}
                to={`/kategori/${post.kategori}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gray-100 shadow-sm group-hover:shadow-xl transition-all">
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
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black text-[#A47151] uppercase tracking-wider">
                    {getCategoryLabel(post.kategori)}
                  </span>
                  <span className="text-gray-300">•</span>
                  {post.publishedAt && (
                    <span className="text-gray-400 text-xs">
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#2A3338] leading-tight group-hover:text-[#A47151] transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h3>
                {post.author && (
                  <p className="text-xs text-gray-400">✍️ {post.author}</p>
                )}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/renungan"
            className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline"
          >
            Lihat Semua Renungan →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;
