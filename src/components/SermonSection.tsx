import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { client } from "@/lib/sanity";

// Fungsi buat ngambil ID video YouTube biar bisa ditampilin gambarnya
const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const SermonsSection = () => {
  const [sermons, setSermons] = useState<any[]>([]);

  useEffect(() => {
    // Ngambil data dari Sanity pakai nama variabel bahasa Indonesia yang udah kita benerin tadi
    client
      .fetch(
        `*[_type == "khotbah"] | order(tanggal desc)[0...3] {
          _id,
          title,
          pengkhotbah,
          tanggal,
          linkYoutube
        }`
      )
      .then((data) => setSermons(data))
      .catch(console.error);
  }, []);

  return (
    <section id="sermons" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase mb-4">
            Khotbah Terbaru
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Dengarkan kembali firman Tuhan dan temukan kekuatan baru untuk menjalani hari-hari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sermons.map((sermon) => {
            const videoId = getYouTubeId(sermon.linkYoutube);
            const thumbnailUrl = videoId 
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=1000&auto=format&fit=crop";

            return (
              <a 
                key={sermon._id}
                href={sermon.linkYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={thumbnailUrl} 
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Khotbah
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {sermon.tanggal ? new Date(sermon.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric", month: "long", year: "numeric",
                      }) : ""}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mt-auto">
                    Oleh: {sermon.pengkhotbah}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;