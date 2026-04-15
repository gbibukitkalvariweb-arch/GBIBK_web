import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'https://directus-production-3eb6.up.railway.app';

export const directus = createDirectus(DIRECTUS_URL).with(rest());

export const getImageUrl = (fileId: string | null | undefined) => {
  if (!fileId) return null;
  return `${DIRECTUS_URL}/assets/${fileId}`;
};

export { readItems, readItem };
