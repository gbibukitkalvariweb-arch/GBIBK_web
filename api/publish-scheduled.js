export default async function handler(req, res) {
  // Bikin waktu WIB (UTC + 7 jam) biar cocok sama database Directus
  const utcTime = new Date().getTime();
  const wibTime = new Date(utcTime + (7 * 60 * 60 * 1000));
  
  // Potong formatnya jadi "YYYY-MM-DDTHH:mm:ss" (hapus Z di belakang)
  const nowWIB = wibTime.toISOString().slice(0, 19);

  const DIRECTUS_URL = process.env.VITE_DIRECTUS_URL;
  const DIRECTUS_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN;

  if (!DIRECTUS_URL || !DIRECTUS_TOKEN) {
    return res.status(500).json({ error: "URL atau Token Directus belum diset!" });
  }

  try {
    const getReq = await fetch(`${DIRECTUS_URL}/items/artikel?filter[status][_eq]=scheduled&filter[tanggal_publish][_lte]=${nowWIB}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${DIRECTUS_TOKEN}` }
    });
    
    const getRes = await getReq.json();

    if (!getReq.ok) {
      return res.status(getReq.status).json({ error: "Gagal nyari data", details: getRes });
    }

    const items = getRes.data || [];

    if (items.length === 0) {
      return res.status(200).json({ 
        ok: true, 
        pesan: "Nggak ada artikel scheduled yang waktunya cocok.",
        waktu_pencarian_wib: nowWIB,
        updated_items: [] 
      });
    }

    const ids = items.map(item => item.id);

    const patchReq = await fetch(`${DIRECTUS_URL}/items/artikel`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keys: ids,
        data: { status: "published" }
      })
    });

    const patchRes = await patchReq.json();

    res.status(200).json({ ok: true, pesan: "Berhasil update!", updated_items: patchRes.data });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}