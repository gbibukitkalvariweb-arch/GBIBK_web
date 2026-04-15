import React, { useEffect, useState } from 'react';
import { directus, getImageUrl, readItems } from '../lib/directus';

const accentColor = "text-[#a57b5f]";
const accentBg = "bg-[#f4ebe1]";

const SermonSection = () => {
  const [khotbahList, setKhotbahList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    directus.request(readItems('khotbah', {
      filter: { status: { _eq: 'published' } },
      sort: ['-tanggal'],
      limit: 4,
    }))
    .then((data: any) => {
      const processedData = data.map((item: any) => ({
        ...item,
        thumbnailUrl: item.thumbnail_custom
          ? getImageUrl(item.thumbnail_custom)
          : getYoutubeThumbnail(item.link_youtube)
      }));
      setKhotbahList(processedData);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching khotbah:", err);
      setLoading(false);
    });
  }, []);

  const getYoutubeThumbnail = (url: string) => {
    if (!url) return 'https://via.placeholder.com/640x360?text=No+Video';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'https://via.placeholder.com/640x360?text=Invalid+URL';
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  const CalendarIcon = () => (
    <svg className="w-4 h-4 mr-1.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
  );

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium animate-pulse">Memuat Khotbah...</div>;

  const khotbahTerbaru = khotbahList[0];
  const khotbahLainnya = khotbahList.slice(1);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-10 pb-4 border-b border-gray-100">
          <div>
            <p className={`${accentColor} font-bold text-sm tracking-widest uppercase mb-1.5`}>Kumpulan Khotbah</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">PESAN MINGGU INI</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-gray-900 font-bold hover:text-[#a57b5f] transition-colors text-sm group">
            Lihat Semua Khotbah
            <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        {khotbahList.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            <a href={(khotbahTerbaru as any)?.link_youtube} target="_blank" rel="noopener noreferrer" className="lg:w-[60%] group flex flex-col no-underline">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-black">
                <img src={(khotbahTerbaru as any)?.thumbnailUrl} alt={(khotbahTerbaru as any)?.judul} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm font-semibold text-gray-400 mb-3 space-x-4">
                <span className={`${accentBg} ${accentColor} px-3 py-1 rounded font-bold text-xs uppercase tracking-widest`}>Terbaru</span>
                <span className="flex items-center"><CalendarIcon />{formatDate((khotbahTerbaru as any)?.tanggal)}</span>
              </div>
              <h3 className={`text-4xl md:text-5xl font-extrabold ${accentColor} leading-[1.1] tracking-tighter mb-2`}>{(khotbahTerbaru as any)?.judul}</h3>
              {(khotbahTerbaru as any)?.pengkhotbah && (
                <p className="text-lg font-medium text-gray-500 mt-1">Oleh: <span className="font-bold text-gray-800">{(khotbahTerbaru as any).pengkhotbah}</span></p>
              )}
            </a>

            <div className="lg:w-[40%] flex flex-col space-y-6 pt-1">
              {khotbahLainnya.map((khotbah: any, index: number) => (
                <a key={khotbah.id || index} href={khotbah.link_youtube} target="_blank" rel="noopener noreferrer" className="flex gap-5 items-center group bg-white hover:bg-gray-50 p-2 rounded-2xl transition-all duration-300 no-underline">
                  <div className="relative w-44 rounded-xl overflow-hidden aspect-video flex-shrink-0 bg-black">
                    <img src={khotbah.thumbnailUrl} alt={khotbah.judul} className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-sm">
                        <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-1 flex-grow">
                    <div className="flex items-center text-xs font-semibold text-gray-400 mb-1.5"><CalendarIcon />{formatDate(khotbah.tanggal)}</div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#a57b5f] transition-colors leading-snug line-clamp-2 tracking-tight">{khotbah.judul}</h4>
                    {khotbah.pengkhotbah && <p className="text-sm font-medium text-gray-500 mt-1.5 line-clamp-1">{khotbah.pengkhotbah}</p>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12 bg-gray-50 rounded-2xl font-medium">Belum ada data khotbah.</p>
        )}
      </div>
    </div>
  );
};

export default SermonSection;
