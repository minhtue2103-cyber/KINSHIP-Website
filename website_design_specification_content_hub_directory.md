# TÀI LIỆU ĐẶC TẢ THIẾT KẾ WEBSITE (WEBSITE DESIGN SPECIFICATION)
**Dự án:** Kinship AI — Cổng Thông Tin & Đồng Hành Chăm Sóc Cha Mẹ Già Tại Gia  
**Mô hình:** Editorial Knowledge Hub & Caregiver Support Portal (Chuẩn hóa GEO & Umbrex Matrix)  
**Nền tảng công nghệ:** Astro 5.x (SSG) + TypeScript + Cloudflare Pages  
**Phiên bản:** 2.2 (Cập nhật Bộ nhận diện Màu/Font, Hero Carousel, Top 4 Feature Posts, Drawer Menu & Social Media)  

---

## 1. TỔNG QUAN DỰ ÁN & SITEMAP

### 1.1. Sứ mệnh & Mục tiêu
Kinship AI là nền tảng tri thức và đồng hành vi mô dành cho **Thế hệ Bánh Mì Kẹp (35–55 tuổi)** chăm sóc cha mẹ già tại gia (*Aging in Place*).
* **Mục tiêu SEO/GEO:** Tối ưu hóa cấu trúc để AI Search (Google AI Overviews, ChatGPT Search, Perplexity) trích xuất trực tiếp câu trả lời thông qua cấu trúc **BLUF (Bottom Line Up Front)**, dữ liệu cấu trúc Schema.org (`Article`, `FAQPage`, `BreadcrumbList`, `Organization`), và khối định danh **Author GEO (E-E-A-T)**.
* **Mục tiêu Chuyển đổi (CRO):** Dẫn dắt người chăm sóc từ bế tắc, dằn vặt (*Caregiver Guilt*) sang các hành động đồng hành vi mô (*Micro-care*) với bảo chứng từ Hội đồng chuyên gia (**TS. BS. Tâm** & **Ông Minh**).

### 1.2. Kiến trúc Sitemap 2 Cấp Độ
```text
/ (Homepage - Drawer Menu, Hero Carousel 3 Slides, Trust Bar, Top 4 Feature Posts, Umbrex Grid, Micro-Care Banner)
└── /blog (Caregiver Blog - Trung tâm tri thức)
    ├── /blog (Blog Archive Hub: Lọc theo Umbrex Quadrant, Tìm kiếm tức thì, Tags)
    └── /blog/[slug] (Chi tiết bài viết: Feature Photo 1200x630, Author GEO Box, Sticky TOC, GEO BLUF, FAQ Accordion, Sources)
```

---

## 2. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM TOKENS)

### 2.1. Bảng Màu (Color Palette)
Hệ màu mới thân thiện, tươi sáng mang phong cách thiên nhiên và hy vọng:

| Vai trò | Token CSS | Mã HEX | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Primary Light** | `--primary-light` | `#8DC435` | Đường viền gạch chân Heading, hover state, badge accent. |
| **Primary Mid** | `--primary-mid` | `#34C435` | Điểm nhấn icon check, trạng thái active thứ cấp. |
| **Primary Dark** | `--primary-dark` | `#428442` | Nút bấm chính, tiêu đề nhấn mạnh, icon thương hiệu, footer link. |
| **Secondary (Accent)**| `--secondary` | `#FF9046` | Nút CTA chuyển đổi chính, dot carousel active, YouTube social badge. |
| **Secondary Hover** | `--secondary-hover` | `#E6782E` | Trạng thái hover của các nút CTA Accent. |
| **Background Tints** | `--primary-50` / `100` | `#F4FBE8` / `#E5F6C8` | Nền hero badge, nền hộp BLUF callout, nền Author GEO box. |
| **Background Main** | `--bg-main` | `#FFFFFF` | Nền chính của website và vùng đọc bài viết. |
| **Background Soft** | `--bg-secondary` | `#F7FAF5` | Nền khu vực Hero, nền FAQ section, nền Footer. |
| **Text Primary** | `--text-primary` | `#374047` | Màu chữ chính cho toàn bộ nội dung và tiêu đề. |
| **Text Secondary** | `--text-secondary` | `#525E66` | Mô tả dẫn nhập, ngày đăng, số phút đọc, chú thích. |

#### Bảng màu 4 Góc phần tư Umbrex Matrix
* **Educate:** Nền `#F4FBE8`, chữ `#428442` (Kiến thức Lão khoa & Tài chính).
* **Inspire:** Nền `#FFF3EB`, chữ `#C25512` (Cảm xúc & Tình thân).
* **Entertain:** Nền `#EEFBE8`, chữ `#217A22` (Khoảng cách Thế hệ).
* **Convince:** Nền `#428442`, chữ `#FFFFFF` (Giải pháp Hành động Vi mô).

### 2.2. Hệ thống Chữ & Chuẩn Heading Style
* **Font chữ Nội dung (Body Font):** `'Raleway'`, sans-serif — Trang nhã, thoáng đãng, dễ đọc ở kích thước lớn (`17px`, line-height `1.75`).
* **Font chữ Tiêu đề (Heading Font):** `'Noto Sans'`, sans-serif — Vững chãi, rõ nét chuẩn tiếng Việt.
* **Quy chuẩn Heading Style:** Tất cả các tiêu đề mục lớn (`.section-title`, `.trust-bar-title`, `.article-header__title`, `.blog-hub-hero__title`, `.prose h2`, `.faq-section__title`, `.sources-section__title`) đều áp dụng:
  ```css
  border-bottom: 2px solid #8dc435;
  padding-bottom: 20px;
  margin-bottom: 20px;
  ```

### 2.3. Quy Chuẩn Khung Khối & Bố Cục
* **Quy tắc Div Phẳng:** Toàn bộ thẻ `div` áp dụng `border: none; margin-left: 0; padding-left: 0;` để loại bỏ các đường viền thừa và căn lề phẳng, nhất quán.
* **Độ rộng Container:** Giới hạn `--container-max: 1200px` (trung tâm) và `--prose-max: 820px` (vùng đọc bài viết).
* **Micro-Care Banner Full-Width:** Nền banner mở rộng 100% bề ngang màn hình (`width: 100%`), nội dung bên trong gói gọn trong `.container.micro-care-banner__inner`.

### 2.4. Hệ Thống Icon, Logo & Media Mockup
* **Icon CDN:** Sử dụng trọn bộ **Bootstrap Icons** (`bootstrap-icons@1.11.3`) nhúng qua CDN tại `<head>`.
* **Logo Thương hiệu:** Sử dụng tệp chuẩn nội bộ `/media/logoMDAgri500x500.webp` cho cả logo Header, Drawer Menu và favicon.
* **Mạng xã hội (Social Media Links):**
  - Facebook: `https://www.facebook.com/ongchuadhd` (`bi-facebook`)
  - YouTube: `https://www.youtube.com/@suckhoe_tuoitrungnien` (`bi-youtube`)
* **Mockup Placeholder (`placehold.co`):**
  - Hero Carousel Slides: `https://placehold.co/800x600/428442/ffffff?text=...` (4:3)
  - Feature Photo bài viết: `https://placehold.co/1200x630/428442/ffffff?text=...` (1.91:1)
  - Card Thumbnail: `https://placehold.co/600x338/f4fbe8/428442?text=...` (16:9)
  - Avatars E-E-A-T: `https://placehold.co/160x160/...` (1:1)

---

## 3. BỐ CỤC TRANG & WIREFRAME KIẾN TRÚC

### 3.1. Trang 1: Trang Chủ (Homepage - `/`)

```text
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL HEADER] Logo logoMDAgri | Social (FB, YT) | [MENU Toggle Button (MekongDeltaAgri Style)]        |
+---------------------------------------------------------------------------------------------------------+
| [OFF-CANVAS SLIDE DRAWER MENU] (Trượt từ phải sang khi click MENU, kèm Backdrop mờ)                     |
|  - Logo + Nút [X] Đóng                                                                                  |
|  - Menu chính: Trang chủ | Caregiver Blog | Bài viết Tiêu điểm | Hội đồng E-E-A-T | Cẩm nang            |
|  - Phân loại Umbrex: Educate | Inspire | Entertain | Convince                                           |
|  - Nút kết nối Social: Facebook | YouTube                                                               |
+---------------------------------------------------------------------------------------------------------+
| [1. HERO SECTION — USLIDER 3-SLIDE CAROUSEL VỚI SOFT ANIMATION]                                         |
|                                                                                                         |
|   <--- CỘT TRÁI (50% TEXT & ACTIONS) --->       <--- CỘT PHẢI (50% FEATURE HERO IMAGE) --->             |
|   [ Badge Icon + Danh mục Slide ]                +-----------------------------------------------------+ |
|   H1: Tiêu đề có gạch chân #8dc435               |                                                     | |
|       (Slide 1: Thế hệ Bánh Mì Kẹp)              |    [ Ảnh Slide 800x600 từ placehold.co ]            | |
|       (Slide 2: Tâm lý Lão khoa & Tê liệt Hiếu)  |                                                     | |
|       (Slide 3: Quản trị Tài chính & Micro-care) |    [ Floating Badge góc ảnh ]                       | |
|   Lead: Đoạn tóm tắt thông điệp...               |                                                     | |
|   Nút CTA Chính + Phụ                            +-----------------------------------------------------+ |
|   Trust Proof vi mô (72% người trẻ, 100% E-E-A-T)                                                      |
|                                                                                                         |
|   [ Điều khiển Slider: Nút Prev | 3 Dấu chấm chỉ báo (Dots) | Nút Next ]                                |
+---------------------------------------------------------------------------------------------------------+
| [2. HỘI ĐỒNG CỐ VẤN CHUYÊN MÔN (E-E-A-T TRUST BAR)]                                                     |
|   3 Thẻ chuyên gia: TS. BS. Tâm (Lão khoa) | Ông Minh (Tài chính) | Nhung Pham (Founder POV)            |
+---------------------------------------------------------------------------------------------------------+
| [3. SECTION BAI-VIET: TOP 4 FEATURE POSTS + LƯỚI MA TRẬN UMBREX]                                        |
|   H2: Bài viết chuyên sâu nổi bật (gạch chân #8dc435)                                                   |
|                                                                                                         |
|   TOP 4 FEATURE POST GRID:                                                                              |
|   +---------------------------------------------+ +---------------------------------------------------+ |
|   | [1 BÀI VIẾT CHÍNH BÊN TRÁI - MAIN CARD]     | | [3 BÀI VIẾT PHỤ BÊN PHẢI - SIDE LIST STACKED]     | |
|   | Ảnh lớn 16:9 1200x630                       | | Item 1: Thumbnail 160px + Meta + H4 + Excerpt     | |
|   | Meta (Badge + Ngày + Phút đọc)              | | Item 2: Thumbnail 160px + Meta + H4 + Excerpt     | |
|   | H3: Tiêu đề bài viết chính                  | | Item 3: Thumbnail 160px + Meta + H4 + Excerpt     | |
|   | Excerpt 3 dòng + Tags + Nút Đọc bài         | |                                                   | |
|   +---------------------------------------------+ +---------------------------------------------------+ |
|                                                                                                         |
|   Taxonomy Pills: ( Tất cả ) ( 📚 Educate ) ( ❤️ Inspire ) ( ☕ Entertain ) ( 🎯 Convince )             |
|   Lưới bài viết 3 cột (Responsive Grid các bài còn lại)                                                 |
+---------------------------------------------------------------------------------------------------------+
| [4. MICRO-CARE INITIATIVE BANNER — NỀN 100% WIDTH, NỘI DUNG CONTAINER]                                  |
|   Nền trải rộng toàn màn hình: Gradient #428442 -> #2d5e2d                                              |
|   Khối nội dung trong 1200px: Badge + H2 gạch chân + Đoạn mô tả + Nút Tải Cẩm Nang + Ảnh đồ họa 600x400  |
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL FOOTER] Brand logo + Tuyên bố y tế + Social Links + Bản đồ Sitemap + Bản quyền                  |
+---------------------------------------------------------------------------------------------------------+
```

---

### 3.2. Trang 2: Caregiver Blog

#### 3.2.1. Trang Lưu Trữ Blog (`/blog`)
* **Breadcrumb:** `Trang chủ > Caregiver Blog`.
* **Tiêu đề & Bộ lọc:** `H1` gạch chân `#8dc435`, thanh lọc Umbrex Pills và ô tìm kiếm tức thì (`Search Input`).
* **Lưới bài viết:** Hiển thị toàn bộ bài viết dạng `ArticleCard` (kèm Thumbnail 16:9, Meta ngày/giờ đọc, Tags, nút đọc).

#### 3.2.2. Trang Chi Tiết Bài Viết (`/blog/[slug]`)
* **Header bài viết:** `H1` gạch chân `#8dc435`, badge Umbrex, ngày cập nhật, thời gian đọc, tags.
* **Khối Author GEO (`AuthorGeoBox`):** Đặt ngay dưới Header. Định danh tác giả chính Nhung Pham (`schema.org/Person`) cùng 2 chứng nhận thẩm định E-E-A-T từ TS. BS. Tâm và Ông Minh.
* **Ảnh đại diện Feature Photo (`FeaturePhoto`):** Tỷ lệ chuẩn `1200x630 px` (`1.91:1`), tối ưu LCP với `fetchpriority="high"`, kèm `figcaption`.
* **Bố cục 2 cột (Desktop):**
  - **Cột trái (Sticky Sidebar 270px):** Sticky TOC (Mục lục bài viết cuộn mượt tự động) + Mini CTA Box.
  - **Cột phải (Vùng đọc tối đa 820px):**
    + Khối tóm tắt trực diện GEO: `> [!SUMMARY] BLUF:` tự động chuyển thành hộp Callout nền `#f4fbe8` có icon 💡.
    + Thân bài Markdown phân tích chuyên sâu, bảng đối chiếu số liệu, trích dẫn thực chứng.
    + Khối CTA ngữ cảnh giữa bài.
    + Khối Hỏi & Đáp tương tác `FaqAccordion` (đồng bộ `FAQPage` JSON-LD trên `<head>`).
    + Khối Nguồn tham khảo công khai `SourcesList` (`↗`).
* **Bài viết cùng chủ đề:** Lưới 3 bài viết liên quan ở chân trang.

---

## 4. TÓM TẮT ĐẶC TẢ CÁC COMPONENT CHÍNH

1. **`QuadrantBadge.astro`:** Hiển thị huy hiệu góc phần tư Umbrex kèm icon Bootstrap tương ứng (`bi-journal-medical`, `bi-heart-fill`, `bi-cup-hot-fill`, `bi-compass-fill`).
2. **`AuthorGeoBox.astro`:** Khối tác giả tối ưu hóa cho AI Search trích dẫn, áp dụng Microdata Schema `itemscope itemtype="https://schema.org/Person"` không viền ngoài.
3. **`FeaturePhoto.astro`:** Render ảnh bìa bài viết chuẩn `1200x630`, bo góc `rounded-2xl`, hỗ trợ lazy/eager loading và chú thích ảnh.
4. **`BlufCallout.astro`:** Render hộp tóm tắt trực diện BLUF ở đầu mỗi phân đoạn `H2`.
5. **`FaqAccordion.astro`:** Render mảng `faqSchema` dạng `<details><summary>` HTML5 thuần, có mũi tên chuyển động mượt không phụ thuộc JavaScript nặng.
6. **`SourcesList.astro`:** Danh sách trích dẫn tài liệu tham khảo công khai minh bạch.
7. **`ArticleCard.astro`:** Thẻ bài viết responsive với ảnh Thumbnail 16:9, meta info và hiệu ứng hover nhẹ.

---

## 5. HIỆU NĂNG & TRIỂN KHAI CLOUDFLARE PAGES

* **Kiến trúc SSG Không JavaScript Runtime:** HTML tĩnh sinh 100% tại thời điểm build (`output: 'static'`). Các tương tác nhỏ (Menu Drawer, Slider, Bộ lọc tìm kiếm, Accordion) dùng script inline siêu nhẹ (~2KB).
* **Quản lý CSS & Media Tách Biệt:** Toàn bộ kiểu dáng tập trung tại `src/styles/global.css`; toàn bộ ảnh tĩnh đặt tại `public/media/`.
* **Chỉ số Mục tiêu Core Web Vitals:** LCP < 0.8s, CLS = 0.00, INP < 30ms, điểm Google Lighthouse 98–100/100.
* **Quy trình Xuất bản:** Biên dịch nội dung sang `KNOWLEDGE_VAULT/09_PublishContent/`, sau đó chạy `python pushtowebsite.py` để đồng bộ sang `src/content/blog/` và đẩy lên GitHub tự động kích hoạt Cloudflare Pages build.
