import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qt8qfjbm", // ID Project lu dari screenshot tadi
  dataset: "production",
  useCdn: true, // Biar cepet loading-nya
  apiVersion: "2024-03-31", // Pake tanggal hari ini aja biar fresh
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}