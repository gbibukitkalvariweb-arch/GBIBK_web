import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";

// Render Portable Text (field body dari Sanity) secara manual
// tanpa library tambahan agar tidak perlu install apapun
const renderBody = (blocks: any[]) => {
  if (!blocks || blocks.length === 0) return null;
  return blocks.map((block, i) => {
    if (block._type !== "block" || !block.children) return null;
    const text = block.children.map((child: any) => child.text).join("");
    if (block.style === "h1") return <h1 key={i} className="text-3xl font-black text-[#2A3338] mt-8 mb-4">{text}</h1>;
    if (block.style === "h2") return <h2 key={i} className="text-2xl font-bold text-[#2A3338] mt-6 mb-3">{text}</h2>;
    if (block.style === "h3") return <h3 key={i} className="text-xl font-bold text-[#2A3338] mt-4 mb-2">{text}</h3>;
    if (block.style === "blockquote") return (
      <blockquote key={i} className="border-l-4 border-[#A47151] pl-4 italic text-gray-500 my-4">{text}</blockquote>
    );
    return <p key={i} className="text-gray-700 leading-relaxed mb-4">{text}</p>;
  });
};

const CATEGORY_LABELS: Record<string, string> = {
  "buletin": "Buletin Rise!",
  "renungan-anak": "Renungan Anak",
  "artikel-rohani": "Artikel Rohani",
};

const RenunganDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const query = `*[_type == "renungan" && slug.current == $slug][0] {
      _id,
      title,
      mainImage,
      publishedAt,
      kategori,
      author,
      body
    }`;

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 font-bold animate-pulse uppercase tracking-widest text-xs">
      Sedang Memuat...
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-gray-400 font-bold">Renungan tidak ditemukan.</p>
      <button onClick={() => navigate("/renungan")} className="text-[#A47151] font-bold underline">
        Kembali ke Renungan
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">

        {/* Tombol kembali */}
        <button
          onClick={() => navigate(`/kategori/${post.kategori}`)}
          className="inline-flex items-center gap-2 text-[#A47151] font-black text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all"
        >
          <span className="text-xl">←</span> Kembali ke {CATEGORY_LABELS[post.kategori] || post.kategori}
        </button>

        {/* Label kategori + tanggal */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#F4F1ED] text-[#A47151] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {CATEGORY_LABELS[post.kategori] || post.kategori}
          </span>
          {post.publishedAt && (
            <span className="text-gray-400 text-sm">
              {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          )}
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-5xl font-black text-[#2A3338] leading-tight tracking-tighter mb-4">
          {post.title}
        </h1>

        {/* Author */}
        {post.author && (
          <p className="text-sm text-gray-400 mb-8">✍️ {post.author}</p>
        )}

        {/* Gambar utama */}
        {post.mainImage && (
          <div className="overflow-hidden rounded-2xl mb-10 shadow-md">
            <img
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Isi renungan */}
        <article className="prose prose-lg max-w-none">
          {renderBody(post.body)}
        </article>

        {/* Kembali ke kategori */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <button
            onClick={() => navigate(`/kategori/${post.kategori}`)}
            className="inline-flex items-center gap-2 text-[#A47151] font-bold text-sm hover:underline"
          >
            ← Baca renungan lainnya
          </button>
        </div>

      </div>
    </div>
  );
};

export default RenunganDetailPage;
