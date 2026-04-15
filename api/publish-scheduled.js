export default async function handler(req, res) {
  const now = new Date().toISOString();
  const DIRECTUS_URL = process.env.VITE_DIRECTUS_URL;
  const DIRECTUS_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN;

  try {
    await fetch(`${DIRECTUS_URL}/items/artikel?filter[status][_eq]=scheduled&filter[tanggal_publish][_lte]=${now}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'published' })
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
