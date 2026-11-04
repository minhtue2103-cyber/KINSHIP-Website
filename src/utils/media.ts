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
    'https://placehold.co/800x600/428442/ffffff?text=Giup+Cha+Me+%E2%80%A2+Diem+Tua+Thuc+Te',
    'https://placehold.co/800x600/8dc435/ffffff?text=TS.+BS.+Tam+%E2%80%A2+Ong+Chu+ADHD',
    'https://placehold.co/800x600/ff9046/ffffff?text=Ong+Minh+%E2%80%A2+Tai+Chinh+Gia+Dinh',
  ],

  heroFamilyImage: 'https://placehold.co/800x600/428442/ffffff?text=Giup+Cha+Me+%E2%80%A2+Gia+Dinh',

  // Article Feature Photo (1200x630, 1.91:1 chuẩn OG & Web)
  defaultFeaturePhoto: 'https://placehold.co/1200x630/428442/ffffff?text=Giup+Cha+Me+%E2%80%A2+Bai+Viet',

  // Article Card Thumbnail (600x338, 16:9)
  defaultCardThumbnail: 'https://placehold.co/600x338/f4fbe8/428442?text=Giup+Cha+Me',

  // Author & E-E-A-T Reviewers Avatars (160x160, 1:1)
  avatars: {
    nhungPham: 'https://placehold.co/160x160/428442/ffffff?text=Nhung+Pham',
    drTam: 'https://placehold.co/160x160/8dc435/ffffff?text=BS.+Tam',
    mrMinh: 'https://placehold.co/160x160/ff9046/ffffff?text=Ong+Minh',
  },

  // Micro-care Banner Graphic (600x400, 3:2)
  microCareGraphic: 'https://placehold.co/600x400/8dc435/ffffff?text=Cam+Nang+Giup+Cha+Me',
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
  const label = quadrant ? `Giup+Cha+Me+%E2%80%A2+${encodeURIComponent(quadrant)}` : 'Giup+Cha+Me+1200x630';
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
  const label = quadrant ? `${encodeURIComponent(quadrant)}+16%3A9` : 'Giup+Cha+Me';
  return `https://placehold.co/600x338/${colors}?text=${label}`;
}
