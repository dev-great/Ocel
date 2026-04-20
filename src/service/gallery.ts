/**
 * Shared gallery source. Uses Vite's import.meta.glob to pull every
 * image in `src/assets/Gallery` at build time, so any page can use
 * the same list without manually importing files.
 *
 * Drop new photos into the Gallery folder and they'll automatically
 * appear in the Hero, OurWorks page, About section, etc.
 */

const modules = import.meta.glob<{ default: string }>("../assets/Gallery/*.{jpeg,jpg,png,JPG,JPEG,PNG}", { eager: true });

export const galleryImages: string[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

/* ══════════════════════════════════════════════════════════════
   CATEGORIES
   Indices are 0-based (first image = 0, matches galleryImages[0]).
   Any image not in MEN_INDICES is assumed to be women's work.
   ══════════════════════════════════════════════════════════════ */

export const MEN_INDICES: number[] = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 81, 87, 89, 90];

/** Men's images only */
export const menImages: string[] = MEN_INDICES.map((idx) => galleryImages[idx]).filter((src): src is string => Boolean(src));

/** Women's images (everything not in MEN_INDICES) */
export const womenImages: string[] = galleryImages.filter((_, idx) => !MEN_INDICES.includes(idx));

/* ══════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════ */

/** Check if a given index belongs to the men's set */
export const isMenImage = (idx: number): boolean => MEN_INDICES.includes(idx);

/** Get the first N images from the full gallery */
export const getGalleryImages = (count?: number): string[] => {
  if (count === undefined) return galleryImages;
  return galleryImages.slice(0, count);
};

/** Get a random image from the full gallery */
export const getRandomGalleryImage = (seed?: number): string => {
  const idx = seed !== undefined ? seed % galleryImages.length : Math.floor(Math.random() * galleryImages.length);
  return galleryImages[idx] ?? "";
};
