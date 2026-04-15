import { useEffect, useState } from "react";
import { directus, getImageUrl, readItems } from "@/lib/directus";

const EventPage = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    directus.request(readItems('event', {
      filter: { status: { _eq: 'published' } },
      sort: ['tanggal'],
    }))
    .then((data: any) => {
      setEvents(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Directus Error:", err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-[10px] font-black text-[#A47151] uppercase tracking-[0.2em] mb-2">Jadwal Kegiatan</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#2A3338] mb-4 uppercase tracking-tighter leading-none">EVENT</h1>
          <div className="h-2 w-20 bg-[#A47151]"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20 animate-pulse font-bold text-gray-400 uppercase tracking-widest text-xs">Sedang Memuat...</div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {events.map((event) => (
              <div key={event.id} className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
                {event.poster && (
                  <div className="h-56 overflow-hidden">
                    <img src={getImageUrl(event.poster) || ''} alt={event.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-[10px] font-black text-[#A47151] uppercase mb-2">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <h3 className="text-xl font-bold text-[#2A3338] mb-2">{event.judul}</h3>
                  {event.lokasi && <p className="text-sm text-gray-500">📍 {event.lokasi}</p>}
                  {event.deskripsi && <p className="text-sm text-gray-400 mt-2 line-clamp-3">{event.deskripsi}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 py-32 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 font-bold text-xl uppercase italic">Belum ada event.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
