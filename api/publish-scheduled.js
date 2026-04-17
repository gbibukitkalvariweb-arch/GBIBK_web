export default async function handler(req, res) {
  const now = new Date().toISOString();
  const DIRECTUS_URL = process.env.VITE_DIRECTUS_URL;
  const DIRECTUS_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN;

  if (!DIRECTUS_URL || !DIRECTUS_TOKEN) {
    return res.status(500).json({ error: "URL atau Token Directus belum diset!" });
  }

  try {
    // 1. CARI DULU artikelnya (GET)
    const getReq = await fetch(`${DIRECTUS_URL}/items/artikel?filter[status][_eq]=scheduled&filter[tanggal_publish][_lte]=${now}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${DIRECTUS_TOKEN}` }
    });
    
    const getRes = await getReq.json();

    if (!getReq.ok) {
      return res.status(getReq.status).json({ error: "Gagal nyari data", details: getRes });
    }

    const items = getRes.data || [];

    // Kalau ternyata kosong, kita balikin pesan biar gampang nge-debug jam-nya
    if (items.length === 0) {
      return res.status(200).json({ 
        ok: true, 
        pesan: "Nggak ada artikel scheduled yang waktunya cocok.",
        waktu_server_sekarang: now,
        updated_items: [] 
      });
    }

    // 2. Kalau ketemu, kumpulin ID artikelnya
    const ids = items.map(item => item.id);

    // 3. UPDATE statusnya berdasarkan ID (PATCH)
    const patchReq = await fetch(`${DIRECTUS_URL}/items/artikel`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keys: ids, // Langsung tembak ID-nya
        data: { status: "published" }
      })
    });

    const patchRes = await patchReq.json();

    res.status(200).json({ ok: true, pesan: "Berhasil update!", updated_items: patchRes.data });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}