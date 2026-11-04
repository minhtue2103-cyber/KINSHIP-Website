/**
 * Trung tâm quản lý đường dẫn Media & Mockup Placeholders (placehold.co)
 * Tất cả tài nguyên tĩnh nội bộ được đặt tại thư mục tập trung: /public/media/
 */

export const MEDIA_BASE_FOLDER = '/media';

export const MEDIA_ASSETS = {
  favicon: `${MEDIA_BASE_FOLDER}/logoMDAgri500x500.webp`,
  logo: `${MEDIA_BASE_FOLDER}/logoMDAgri500x500.webp`,

  // Homepage Hero Carousel (3 Slides - 800x600, 4:3)
  heroSlides: [
    `${MEDIA_BASE_FOLDER}/giup-cha-me-2.jpg`,
    `${MEDIA_BASE_FOLDER}/giup-cha-me-3.jpg`,
    `${MEDIA_BASE_FOLDER}/giup-cha-me-4.jpg`,
  ],

  heroFamilyImage: `${MEDIA_BASE_FOLDER}/giup-cha-me-2.jpg`,

  // Article Feature Photo mặc định (1200x630, 1.91:1 chuẩn OG & Web)
  defaultFeaturePhoto: `${MEDIA_BASE_FOLDER}/giup-cha-me-4.jpg`,

  // Article Card Thumbnail mặc định (600x338, 16:9)
  defaultCardThumbnail: `${MEDIA_BASE_FOLDER}/giup-cha-me-4.jpg`,

  // Author & E-E-A-T Reviewers Avatars (160x160, 1:1)
  avatars: {
    nhungPham: `${MEDIA_BASE_FOLDER}/profile-2.jpg`,
    drTam: `${MEDIA_BASE_FOLDER}/profile-1.jpg`,
    mrMinh: `${MEDIA_BASE_FOLDER}/profile-3.jpg`,
  },

  // Micro-care Banner Graphic (600x400, 3:2)
  microCareGraphic: `${MEDIA_BASE_FOLDER}/giup-cha-me-1.jpg`,
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/ongchuadhd',
  youtube: 'https://www.youtube.com/@suckhoe_tuoitrungnien',
} as const;

/**
 * Sinh URL Feature Photo (1200x630) theo bài viết hoặc trả về ảnh tùy chỉnh trong thư mục /media/
 */
export function getArticleFeaturePhoto(customSrc?: string, slug?: string, quadrant?: string): string {
  if (customSrc) {
    return customSrc.startsWith('http') || customSrc.startsWith('/')
      ? customSrc
      : `${MEDIA_BASE_FOLDER}/${customSrc}`;
  }
  // Mặc định sử dụng ảnh ngang chất lượng cao trong thư mục media
  return MEDIA_ASSETS.defaultFeaturePhoto;
}

/**
 * Sinh URL Thumbnail Card (600x338 - 16:9) theo góc phần tư Umbrex hoặc trả về ảnh tùy chỉnh trong /media/
 */
export function getArticleThumbnail(customSrc?: string, quadrant?: string): string {
  if (customSrc) {
    return customSrc.startsWith('http') || customSrc.startsWith('/')
      ? customSrc
      : `${MEDIA_BASE_FOLDER}/${customSrc}`;
  }
  const bgMap: Record<string, string> = {
    Educate: 'f4fbe8/428442',
    Inspire: 'fff3eb/ff9046',
    Entertain: 'eefbe8/34c435',
    Convince: '428442/ffffff',
  };
  const colors = (quadrant && bgMap[quadrant]) || 'f4fbe8/428442';
  const label = quadrant ? `${encodeURIComponent(quadrant)}+16%3A9` : 'Giup+Cha+Me';
  return `https://placehold.co/600x338/${colors}?text=${label}`;
}
