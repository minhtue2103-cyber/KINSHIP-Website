/**
 * KINSHIP AI / GIÚP CHA MẸ — TAXONOMY & CONTENT SETTINGS
 * File cấu hình danh mục chủ đề theo góc nhìn (Umbrex Matrix Quadrants)
 * Dễ dàng tùy chỉnh nhãn hiển thị tiếng Việt, icon và mô tả.
 */

export interface QuadrantConfig {
  key: string;
  label: string;
  shortLabel?: string;
  iconClass: string;
  className: string;
  description: string;
}

export const QUADRANT_SETTINGS: Record<string, QuadrantConfig> = {
  Educate: {
    key: 'Educate',
    label: 'Hiểu Bệnh & Chi Phí',
    shortLabel: 'Hiểu Bệnh & Chi Phí',
    iconClass: 'bi bi-journal-medical',
    className: 'quadrant-badge--educate',
    description: 'Kiến thức y khoa lão khoa & bài toán chi phí chăm sóc thực tế',
  },
  Inspire: {
    key: 'Inspire',
    label: 'Nỗi Lòng Người Con',
    shortLabel: 'Nỗi Lòng Người Con',
    iconClass: 'bi bi-heart-fill',
    className: 'quadrant-badge--inspire',
    description: 'Góc nhìn thấu cảm, giải tỏa áp lực tâm lý và gắn kết tình thân',
  },
  Entertain: {
    key: 'Entertain',
    label: 'Chuyện Nhà & Lối Sống',
    shortLabel: 'Chuyện Nhà & Lối Sống',
    iconClass: 'bi bi-cup-hot-fill',
    className: 'quadrant-badge--entertain',
    description: 'Những mẩu chuyện sinh hoạt gia đình, thói quen và lối sống tuổi già',
  },
  Convince: {
    key: 'Convince',
    label: 'Cách Chăm Sóc Tại Nhà',
    shortLabel: 'Cách Chăm Sóc Tại Nhà',
    iconClass: 'bi bi-compass-fill',
    className: 'quadrant-badge--convince',
    description: 'Giải pháp thực tế, kỹ năng chăm sóc và thiết lập phương án tại nhà',
  },
};

/**
 * Trả về cấu hình quadrant theo key. Nếu không tìm thấy, trả về mặc định hoặc fallback an toàn.
 */
export function getQuadrantConfig(quadrant?: string): QuadrantConfig {
  if (!quadrant) return QUADRANT_SETTINGS.Educate;
  return (
    QUADRANT_SETTINGS[quadrant] || {
      key: quadrant,
      label: quadrant,
      shortLabel: quadrant,
      iconClass: 'bi bi-tree-fill',
      className: 'quadrant-badge--educate',
      description: '',
    }
  );
}

/**
 * URL Google Form nhận Cẩm nang Chăm sóc cho Mẹ (Lead Generation)
 * Người quản trị có thể thay đổi đường link biểu mẫu Google Form tại đây bất cứ lúc nào.
 */
export const LEAD_FORM_SETTINGS = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-PLACEHOLDER/viewform?usp=sf_link',
  officialWebsiteUrl: 'https://giupchame.info.vn/',
  supportEmail: 'hotro@giupchame.info.vn',
  brandTagline: 'Chăm sóc cha mẹ già nhẹ nhàng hơn',
};

