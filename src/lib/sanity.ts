import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qt8qfjbm", // Ini ID Dapur Sanity lo bro
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-28", // Pakai tanggal hari ini
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}