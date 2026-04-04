import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";

// Definisi kategori sesuai nilai di Sanity
const CATEGORIES = [
  { label: "Buletin Rise!", slug: "buletin" },
  { label: "Renungan Anak", slug: "renungan-anak" },
  { label: "Artikel Rohani", slug: "artikel-rohani" },
];

const ResourcesSection = () => {
  const navigate = useNavigate();
  // Simpan 1 artikel terbaru per kategori
  const [latest, setLatest] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch 1 artikel terbaru dari setiap kategori sekaligus
    const query = `{
      "buletin": *[_type == "renungan" && kategori == "buletin"] | order(publishedAt desc) [0] {
        _id, title, mainImage, publishedAt, author
      },
      "renunganAnak": *[_type == "renungan" && kategori == "renungan-anak"] | order(publishedAt desc) [0] {
        _id, title, mainImage, publishedAt, author
      },
      "artikelRohani": *[_type == "renungan" && kategori == "artikel-rohani"] | order(publishedAt desc) [0] {
        _id, title, mainImage, publishedAt, author
      }
    }`;

    client.fetch(query)
      .then((data) => {
        setLatest(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  // Map key result ke slug kategori
  const categoryData = [
    { ...CATEGORIES[0], post: latest.buletin },
    { ...CATEGORIES[1], post: latest.renunganAnak },
    { ...CATEGORIES[2], post: latest.artikelRohani },
  ];

  return (
    <section id="resources" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header section */}
        <div className="mb-12">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">
            Kumpulan Renungan
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#2A3338] uppercase tracking-tighter leading-none">
            Renungan & Buletin
          </h2>
        </div>

        {loading ? (
          <div className="py-20 text-center font-bold text-gray-400 animate-pulse text-xs uppercase tracking-widest">
            Memuat...
          </div>
        ) : (
          // 3 card sejajar, masing-masing mewakili satu kategori
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData.map(({ label, slug, post }) => (
              <div
                key={slug}
                onClick={() => navigate(`/kategori/${slug}`)}
                className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail artikel terbaru */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  {post?.mainImage ? (
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

                {/* Info card */}
                <div className="p-5">
                  {/* Label kategori */}
                  <span className="inline-block bg-[#F4F1ED] text-[#A47151] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                    {label}
                  </span>

                  {/* Judul artikel terbaru */}
                  {post ? (
                    <>
                      <h3 className="text-lg font-black text-[#2A3338] leading-tight group-hover:text-[#A47151] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      {post.publishedAt && (
                        <p className="text-xs text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                            day: 'numeric', month: 'long', year: 'numeric'
                          })}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-gray-400 italic">Belum ada konten</p>
                  )}

                  {/* CTA */}
                  <p className="text-[#A47151] font-bold text-xs mt-4 group-hover:underline">
                    Lihat Semua {label} →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Link ke halaman renungan lengkap */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/renungan")}
            className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline"
          >
            Lihat Semua Renungan →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;
