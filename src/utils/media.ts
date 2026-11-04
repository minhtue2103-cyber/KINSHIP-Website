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
    'https://placehold.co/800x600/428442/ffffff?text=Kinship+AI+%E2%80%A2+Aging+In+Place',
    'https://placehold.co/800x600/8dc435/ffffff?text=Tam+Ly+Lao+Khoa+%E2%80%A2+Dr.+Tam',
    'https://placehold.co/800x600/ff9046/ffffff?text=Tai+Chinh+Duong+Lao+%E2%80%A2+Mr.+Minh',
  ],

  heroFamilyImage: 'https://placehold.co/800x600/428442/ffffff?text=Kinship+AI+Family+Hero',

  // Article Feature Photo (1200x630, 1.91:1 chuẩn OG & Web)
  defaultFeaturePhoto: 'https://placehold.co/1200x630/428442/ffffff?text=Feature+Photo+1200x630',

  // Article Card Thumbnail (600x338, 16:9)
  defaultCardThumbnail: 'https://placehold.co/600x338/f4fbe8/428442?text=Thumbnail+16%3A9',

  // Author & E-E-A-T Reviewers Avatars (160x160, 1:1)
  avatars: {
    nhungPham: 'https://placehold.co/160x160/428442/ffffff?text=Nhung+Pham',
    drTam: 'https://placehold.co/160x160/8dc435/ffffff?text=Dr.+Tam',
    mrMinh: 'https://placehold.co/160x160/ff9046/ffffff?text=Mr.+Minh',
  },

  // Micro-care Banner Graphic (600x400, 3:2)
  microCareGraphic: 'https://placehold.co/600x400/8dc435/ffffff?text=Micro+Care+Guide',
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
  const label = quadrant ? `Kinship+AI+%E2%80%A2+${encodeURIComponent(quadrant)}` : 'Feature+Photo+1200x630';
  return `https://placehold.co/1200x630/428442/ffffff?text=${label}`;
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
  const label = quadrant ? `${encodeURIComponent(quadrant)}+16%3A9` : 'Thumbnail+16%3A9';
  return `https://placehold.co/600x338/${colors}?text=${label}`;
}
