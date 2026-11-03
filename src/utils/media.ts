/**
 * Trung tâm quản lý đường dẫn Media & Mockup Placeholders (placehold.co)
 * Đồng bộ 100% với Mục 2.3 trong Website Design Specification v2.1
 * Tất cả tài nguyên tĩnh nội bộ được đặt tại thư mục tập trung: /public/media/
 */

export const MEDIA_BASE_FOLDER = '/media';

export const MEDIA_ASSETS = {
  favicon: `${MEDIA_BASE_FOLDER}/favicon.svg`,
  logo: `${MEDIA_BASE_FOLDER}/logo-kinship.svg`,

  // 1. Homepage Hero Image (Right 50% - 800x600, 4:3)
  heroFamilyImage: 'https://placehold.co/800x600/0f766e/ffffff?text=Kinship+AI+Family+Hero',

  // 2. Article Feature Photo (1200x630, 1.91:1 chuẩn OG & Web)
  defaultFeaturePhoto: 'https://placehold.co/1200x630/0f766e/ffffff?text=Feature+Photo+1200x630',

  // 3. Article Card Thumbnail (600x338, 16:9)
  defaultCardThumbnail: 'https://placehold.co/600x338/f0fdfa/0f766e?text=Thumbnail+16%3A9',

  // 4. Author & E-E-A-T Reviewers Avatars (160x160, 1:1)
  avatars: {
    nhungPham: 'https://placehold.co/160x160/0f766e/ffffff?text=Nhung+Pham',
    drTam: 'https://placehold.co/160x160/115e59/ffffff?text=Dr.+Tam',
    mrMinh: 'https://placehold.co/160x160/d97706/ffffff?text=Mr.+Minh',
  },

  // 5. Micro-care Banner Graphic (600x400, 3:2)
  microCareGraphic: 'https://placehold.co/600x400/0f766e/ffffff?text=Micro+Care+Guide',
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
  return `https://placehold.co/1200x630/0f766e/ffffff?text=${label}`;
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
    Educate: 'f0fdfa/0f766e',
    Inspire: 'fff1f2/9f1239',
    Entertain: 'fffbeb/92400e',
    Convince: 'ecfdf5/065f46',
  };
  const colors = (quadrant && bgMap[quadrant]) || 'f0fdfa/0f766e';
  const label = quadrant ? `${encodeURIComponent(quadrant)}+16%3A9` : 'Thumbnail+16%3A9';
  return `https://placehold.co/600x338/${colors}?text=${label}`;
}

