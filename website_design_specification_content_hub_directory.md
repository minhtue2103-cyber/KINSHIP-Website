# TÀI LIỆU ĐẶC TẢ THIẾT KẾ WEBSITE (WEBSITE DESIGN SPECIFICATION)
**Thương hiệu:** Giúp Cha Mẹ (Hệ sinh thái Kinship AI)  
**Mô hình:** Cổng Thông Tin & Điểm Tựa Sức Khỏe Tuổi Trung Niên, Chăm Sóc Cha Mẹ Già Tại Nhà  
**Tên miền chính thức:** `https://giupchame.info.vn` (Hosting: Cloudflare Pages)  
**Nền tảng công nghệ:** Astro 4.x / 5.x (SSG) + TypeScript + Cloudflare Pages  
**Phiên bản:** 2.4 (Chuẩn hóa Chuyên gia Henry Tâm, Tích hợp Preloader Hybrid, Dynamic Sitemap XML, robots.txt & Trang Cẩm Nang Chăm Sóc)  

---

## 1. TỔNG QUAN DỰ ÁN & SITEMAP

### 1.1. Sứ mệnh, Định vị & Giọng văn Cốt lõi
* **Tagline định vị:** Điểm tựa thực tế cho người trưởng thành giữa hai đầu gánh nặng: giữ sức khỏe tinh thần cho mình và chăm sóc cha mẹ già tại nhà.
* **SEO Metadata chuẩn:**
  - **SEO Title:** `Giúp Cha Mẹ | Chăm sóc cha mẹ già & Điểm tựa sức khỏe tuổi trung niên`
  - **Meta Description:** `Kiến thức tâm lý & y khoa dễ hiểu từ Nhà tâm lý trị liệu Henry Tâm (ông chú ADHD), bài toán tài chính chăm sóc tại nhà từ Ông Minh và công cụ đồng hành giúp bạn chăm sóc cha mẹ mà không kiệt sức.`
* **Nguyên tắc giọng văn & Ngôn ngữ (3 quy tắc bắt buộc):**
  1. *Thẳng và Gần:* Giọng tâm sự tuổi trung niên, câu ngắn gọn, không dạy đời, không phán xét đạo đức.
  2. *Thuần Việt, đời thường:* Tuyệt đối tránh thuật ngữ hàn lâm, tiếng Anh pha tạp (quy đổi *Sandwich Generation / Bánh Mì Kẹp* $\rightarrow$ *Người con kẹt giữa hai đầu gánh nặng*; *Dual Burnout* $\rightarrow$ *Kiệt sức kép*; *Micro-care* $\rightarrow$ *Đỡ đần việc nhỏ mỗi ngày*; *Aging in place* $\rightarrow$ *Chăm sóc cha mẹ già tại nhà*).
  3. *Có căn cứ rõ ràng:* Kiến thức bệnh học tuổi già và chi phí đều có số liệu thực tế, thẩm định bởi chuyên gia.
* **Mục tiêu SEO/GEO:** Tối ưu hóa cấu trúc để AI Search (Google AI Overviews, ChatGPT Search, Perplexity) trích xuất trực tiếp câu trả lời qua **BLUF (Bottom Line Up Front)**, dữ liệu cấu trúc Schema.org (`Article`, `FAQPage`, `BreadcrumbList`, `Organization`), và khối định danh **Author GEO (E-E-A-T)**.

### 1.2. Kiến trúc Sitemap 2 Cấp Độ
```text
/ (Homepage - Drawer Menu, Hero Carousel 3 Slides, Người Đồng Hành E-E-A-T, Về Chúng Tôi, Cẩm Nang Thực Tế, Điểm Tựa Đồng Hành)
├── /cam-nang-cham-soc (Cẩm Nang Chăm Sóc Cho Mẹ - Lead Generation Form & Tải Tài Liệu PDF/Excel)
├── /blog (Cẩm nang Chăm sóc - Trung tâm tri thức)
│   ├── /blog (Blog Archive Hub: Lọc 4 chủ đề thuần Việt, Tìm kiếm tức thì, Tags)
│   └── /blog/[slug] (Chi tiết bài viết: Feature Photo 1200x630, Author GEO Box, Sticky TOC, GEO BLUF, FAQ Accordion, Sources)
├── /sitemap.xml (Native Dynamic XML Sitemap tự động cập nhật khi có bài mới)
└── /robots.txt (Chỉ dẫn lập chỉ mục chuẩn Googlebot & Bingbot)
```

---

## 2. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM TOKENS)

### 2.1. Bảng Màu (Color Palette)
Hệ màu tự nhiên, ấm áp và đáng tin cậy:

| Vai trò | Token CSS | Mã HEX | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Primary Light** | `--primary-light` | `#8DC435` | Đường viền gạch chân Heading, hover state, badge accent. |
| **Primary Mid** | `--primary-mid` | `#34C435` | Điểm nhấn icon check, trạng thái active thứ cấp. |
| **Primary Dark** | `--primary-dark` | `#428442` | Nút bấm chính, tiêu đề nhấn mạnh, icon thương hiệu, footer link. |
| **Secondary (Accent)**| `--secondary` | `#FF9046` | Nút CTA chuyển đổi chính, dot carousel active, YouTube social badge. |
| **Secondary Hover** | `--secondary-hover` | `#E6782E` | Trạng thái hover của các nút CTA Accent. |
| **Background Tints** | `--primary-50` / `100` | `#F4FBE8` / `#E5F6C8` | Nền hero badge, nền hộp BLUF callout, nền Author GEO box. |
| **Background Main** | `--bg-main` | `#FFFFFF` | Nền chính của website và vùng đọc bài viết. |
| **Background Soft** | `--bg-secondary` | `#F7FAF5` | Nền khu vực Hero, thẻ chuyên gia, thẻ Về chúng tôi, FAQ, Footer. |
| **Text Primary** | `--text-primary` | `#374047` | Màu chữ chính cho toàn bộ nội dung và tiêu đề. |
| **Text Secondary** | `--text-secondary` | `#525E66` | Mô tả dẫn nhập, ngày đăng, số phút đọc, chú thích. |

#### Bảng màu & Tên gọi 4 Chủ đề Nội dung (Umbrex Matrix Quy Đổi)
* **Educate $\rightarrow$ Hiểu Bệnh & Chi Phí:** Nền `#F4FBE8`, chữ `#428442` (Kiến thức Y khoa & Bài toán dòng tiền).
* **Inspire $\rightarrow$ Nỗi Lòng Người Con:** Nền `#FFF3EB`, chữ `#C25512` (Cảm xúc & Tâm tư gia đình).
* **Entertain $\rightarrow$ Chuyện Nhà & Lối Sống:** Nền `#EEFBE8`, chữ `#217A22` (Khoảng cách thế hệ & Cuộc sống đời thường).
* **Convince $\rightarrow$ Cách Chăm Sóc Tại Nhà:** Nền `#428442`, chữ `#FFFFFF` (Dịch vụ hỗ trợ & Thuê người phụ giúp).

### 2.2. Hệ thống Chữ & Chuẩn Heading Style
* **Font chữ Nội dung (Body Font):** `'Source Serif 4'`, system-ui, serif — Trang nhã, thoáng đãng, ấm cúng và dễ đọc ở kích thước lớn (`17px`, line-height `1.75`).
* **Font chữ Tiêu đề (Heading Font):** `'Merriweather'`, system-ui, serif — Cổ điển, vững chãi, rõ nét chuẩn tiếng Việt.
* **Quy chuẩn Heading Style:** Tất cả các tiêu đề mục lớn (`.section-title`, `.trust-bar-title`, `.article-header__title`, `.blog-hub-hero__title`, `.prose h2`, `.faq-section__title`, `.sources-section__title`) đều áp dụng:
  ```css
  border-bottom: 2px solid #8dc435;
  padding-bottom: 20px;
  margin-bottom: 20px;
  ```

### 2.3. Quy Chuẩn Khung Khối & Bố Cục
* **Quy tắc Div Phẳng:** Toàn bộ thẻ `div` áp dụng `border: none; margin-left: 0; padding-left: 0;` để loại bỏ các đường viền thừa và căn lề phẳng, nhất quán.
* **Độ rộng Container:** Giới hạn `--container-max: 1200px` (trung tâm) và `--prose-max: 820px` (vùng đọc bài viết).
* **Banner Điểm Tựa Đồng Hành Full-Width:** Nền banner mở rộng 100% bề ngang màn hình (`width: 100%`), nội dung bên trong gói gọn trong `.container.micro-care-banner__inner`.
* **Chống tràn thanh cuộn ngang (Horizontal Scrollbar Prevention):** Áp dụng `overflow-x: clip;` trên `html, body`. Drawer Menu được tách rời khỏi `<header>` để neo trực tiếp theo viewport và gán `visibility: hidden; pointer-events: none;` khi đóng.

### 2.4. Hệ Thống Icon, Logo, Media & Form Thu Thập Thông Tin
* **Icon CDN:** Sử dụng trọn bộ **Bootstrap Icons** (`bootstrap-icons@1.11.3`) nhúng qua CDN tại `<head>`.
* **Logo Thương hiệu:** Sử dụng tệp chuẩn nội bộ `/media/logoMDAgri500x500.webp` cho logo Header, Drawer Menu, Preloader và favicon.
* **Mạng xã hội (Social Media Links):**
  - Facebook: `https://www.facebook.com/ongchuadhd` (*Facebook Henry Tâm - Ông chú ADHD*)
  - YouTube: `https://www.youtube.com/@suckhoe_tuoitrungnien` (*Sức Khỏe Tuổi Trung Niên*)
* **Biểu mẫu Đăng ký Nhận Cẩm Nang (Lead Generation Form):**
  - Google Form URL: `https://docs.google.com/forms/d/1yPN1MAyIpcuHC_Uau909Ca-KzYf9_qC7Vusd2j0wbC4/viewform` (Đăng ký nhận cẩm nang chăm sóc cha mẹ định dạng PDF + Bảng tính Excel dự toán chi phí).
* **Media Assets Nội bộ (`public/media/`):**
  - Hero Carousel Slides: `/media/giup-cha-me-2.jpg`, `/media/giup-cha-me-3.jpg`, `/media/giup-cha-me-4.jpg`
  - Banner Vi mô: `/media/giup-cha-me-1.jpg`
  - Avatars E-E-A-T: `/media/profile-1.jpg` (Henry Tâm), `/media/profile-3.jpg` (Ông Minh), `/media/profile-2.jpg` (Nhung Phạm)

---

## 3. BỐ CỤC TRANG & WIREFRAME KIẾN TRÚC

### 3.1. Trang 1: Trang Chủ (Homepage - `/`)

```text
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL HEADER] Logo Giúp Cha Mẹ | Social (FB, YT) | [MENU Toggle Button (MekongDeltaAgri Style)]       |
+---------------------------------------------------------------------------------------------------------+
| [OFF-CANVAS SLIDE DRAWER MENU] (Trượt từ phải sang khi click MENU, kèm Backdrop mờ)                     |
|  - Logo + Nút [X] Đóng                                                                                  |
|  - Menu chính: Trang chủ | Cẩm nang Chăm sóc | Bài viết Tiêu điểm | Người Đồng Hành | Về Chúng Tôi     |
|  - Phân loại: Hiểu Bệnh & Chi Phí | Nỗi Lòng Người Con | Chuyện Nhà & Lối Sống | Cách Chăm Sóc Tại Nhà  |
|  - Nút kết nối Social: Facebook | YouTube                                                               |
+---------------------------------------------------------------------------------------------------------+
| [1. HERO SECTION — USLIDER 3-SLIDE CAROUSEL VỚI SOFT ANIMATION]                                         |
|                                                                                                         |
|   <--- CỘT TRÁI (50% TEXT & ACTIONS) --->       <--- CỘT PHẢI (50% FEATURE HERO IMAGE) --->             |
|   [ Badge Icon + Danh mục Slide ]                +-----------------------------------------------------+ |
|   H1: Tiêu đề có gạch chân #8dc435               |                                                     | |
|       (Slide 1: Người con kẹt 2 đầu gánh nặng)   |    [ Ảnh Slide 800x600 từ /media/ ]                 | |
|       (Slide 2: Henry Tâm - Thương đúng cách)    |                                                     | |
|       (Slide 3: Ông Minh - Tính đúng chi phí)    |    [ Floating Badge góc ảnh ]                       | |
|   Lead: Đoạn tóm tắt thông điệp...               |                                                     | |
|   Nút CTA Chính + Phụ                            +-----------------------------------------------------+ |
|   Trust Proof vi mô (Nhìn thẳng áp lực thực tế | Căn cứ rõ ràng | Không phán xét đạo đức)               |
|                                                                                                         |
|   [ Điều khiển Slider: Nút Prev | 3 Dấu chấm chỉ báo (Dots) | Nút Next ]                                |
+---------------------------------------------------------------------------------------------------------+
| [2. NGƯỜI ĐỒNG HÀNH CÙNG BẠN (#hoi-dong-chuyen-gia)]                                                    |
|   3 Thẻ chuyên gia:                                                                                     |
|   - Nhà tâm lý trị liệu Henry Tâm (ông chú ADHD): Tâm lý trị liệu & Sức khỏe Lão khoa, thương đúng cách.|
|   - Ông Minh: Cố vấn Tài chính Gia đình & Chăm sóc Tại gia, tính đúng chi phí, bảo vệ kinh tế.          |
|   - Nhung Phạm: Đồng sáng lập, đại diện tiếng nói người con cân bằng giữa việc công và phụng dưỡng.     |
+---------------------------------------------------------------------------------------------------------+
| [2.5. VỀ CHÚNG TÔI (#ve-chung-toi)]                                                                     |
|   Khối giới thiệu câu chuyện sáng lập & 3 nguyên tắc không thỏa hiệp:                                    |
|   - Thấu hiểu thực tế (Nhìn thẳng áp lực tiền bạc, mệt mỏi kép mà không phán xét đạo đức).             |
|   - Thông tin chuẩn xác (Kiểm chứng bởi Henry Tâm & Cố vấn tài chính Ông Minh).                         |
|   - Giữ trọn tình người (Công nghệ & dịch vụ chỉ đỡ đần việc nhỏ, không thay thế tình cảm thật).        |
|   Chữ ký: Nhung Phạm (Đồng sáng lập) cùng đội ngũ Giúp Cha Mẹ.                                         |
+---------------------------------------------------------------------------------------------------------+
| [3. SECTION BAI-VIET: TOP 4 FEATURE POSTS + LƯỚI BÀI VIẾT (#bai-viet)]                                  |
|   H2: Chuyện chăm sóc cha mẹ già: Nói thật, tính thật (gạch chân #8dc435)                               |
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
|   Taxonomy Pills: ( Tất cả ) ( 📚 Hiểu Bệnh & Chi Phí ) ( ❤️ Nỗi Lòng ) ( ☕ Chuyện Nhà ) ( 🎯 Tại Nhà )|
|   Lưới bài viết 3 cột (Responsive Grid các bài còn lại)                                                 |
+---------------------------------------------------------------------------------------------------------+
| [4. ĐIỂM TỰA ĐỒNG HÀNH MIỄN PHÍ (#cam-nang-vi-mo) — NỀN 100% WIDTH, NỘI DUNG CONTAINER]                |
|   Nền trải rộng toàn màn hình: Gradient #428442 -> #2d5e2d                                              |
|   Nội dung: "Bạn không phải một mình gồng gánh tất cả" + Tải bản hướng dẫn đối thoại & chi phí + Ảnh đồ họa|
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL FOOTER] Brand logo + Tuyên bố y tế + Social Links + Bản đồ Sitemap + Bản quyền                  |
+---------------------------------------------------------------------------------------------------------+
```

---

### 3.2. Các Trang Nội Dung & Cẩm Nang Chuyên Sâu

#### 3.2.1. Trang Cẩm Nang Chăm Sóc Cho Mẹ (`/cam-nang-cham-soc`)
* **Mục đích:** Trang Landing Page / Lead Magnet tặng bộ tài liệu thực hành PDF & Bảng tính Excel dự toán chi phí chăm sóc cha mẹ tại nhà.
* **Bố cục chính:**
  - **Hero Lead:** Tiêu đề H1 gạch chân `#8dc435`, thông điệp đồng hành và nút CTA chính liên kết trực tiếp tới Google Form (`https://docs.google.com/forms/d/1yPN1MAyIpcuHC_Uau909Ca-KzYf9_qC7Vusd2j0wbC4/viewform`).
  - **Lưới 3 Tập Cẩm Nang:**
    + *Phần 1: Y Khoa & Tâm Lý:* Dấu hiệu cảnh báo sớm, cách đối thoại khi cha mẹ từ chối đi khám (Biên soạn: Nhà tâm lý trị liệu Henry Tâm).
    + *Phần 2: Dự Toán Chi Phí & Họp Gia Đình:* Bảng tính chi phí thuê người phụ giúp theo giờ, kịch bản họp gia đình không bất hòa (Biên soạn: Cố vấn tài chính Ông Minh).
    + *Phần 3: Danh Mục Dịch Vụ Hỗ Trợ:* Tiêu chí chọn người chăm sóc tin cậy, ứng dụng công nghệ hỗ trợ theo dõi huyết áp/nhắc giờ thuốc.
  - **Hộp Form Đăng Ký An Toàn:** Kêu gọi độc giả mở Google Form nhận tài liệu tự động qua email.
  - **Khối Bảo Chứng Chuyên Môn:** Lời trích dẫn cam kết từ Hội đồng Giúp Cha Mẹ (Henry Tâm, Ông Minh, Nhung Phạm).
  - **FAQ Thường Gặp:** Trả lời các thắc mắc về cẩm nang và thời gian nhận tài liệu.

#### 3.2.2. Trang Lưu Trữ Blog (`/blog`)
* **Breadcrumb:** `Trang chủ > Cẩm nang Chăm sóc`.
* **Tiêu đề & Bộ lọc:** `H1` gạch chân `#8dc435` (*"Cẩm Nang Thực Tế & Kinh Nghiệm Chăm Sóc Cha Mẹ Già"*), thanh lọc danh mục thuần Việt và ô tìm kiếm tức thì.
* **Lưới bài viết:** Hiển thị toàn bộ bài viết dạng `ArticleCard` (Thumbnail 16:9, Meta ngày/giờ đọc, Tags, nút đọc).

#### 3.2.3. Trang Chi Tiết Bài Viết (`/blog/[slug]`)
* **Header bài viết:** `H1` gạch chân `#8dc435`, badge chủ đề thuần Việt, ngày cập nhật, thời gian đọc, tags.
* **Khối Author GEO (`AuthorGeoBox`):** Đặt ngay dưới Header. Định danh tác giả chính Nhung Phạm (Đồng sáng lập) cùng 2 chuyên gia thẩm định E-E-A-T (Nhà tâm lý trị liệu Henry Tâm & Cố vấn tài chính Ông Minh).
* **Ảnh đại diện Feature Photo (`FeaturePhoto`):** Tỷ lệ chuẩn `1200x630 px` (`1.91:1`), tối ưu LCP với `fetchpriority="high"`, kèm `figcaption`.
* **Bố cục 2 cột (Desktop):**
  - **Cột trái (Sticky Sidebar 270px):** Sticky TOC (Mục lục bài viết cuộn mượt tự động) + Mini CTA Box.
  - **Cột phải (Vùng đọc tối đa 820px):**
    + Khối tóm tắt trực diện GEO: `> [!SUMMARY] BLUF:` tự động chuyển thành hộp Callout nền `#f4fbe8` có icon 💡.
    + Thân bài Markdown phân tích chuyên sâu, số liệu thực chứng.
    + Khối CTA ngữ cảnh giữa bài (*"Chăm sóc cha mẹ già mà không làm khổ chính mình"*).
    + Khối Hỏi & Đáp tương tác `FaqAccordion` (đồng bộ `FAQPage` JSON-LD trên `<head>`).
    + Khối Nguồn tham khảo công khai `SourcesList` (`↗`).
* **Bài viết cùng chủ đề:** Lưới 3 bài viết liên quan ở chân trang.

---

## 4. TÓM TẮT ĐẶC TẢ CÁC COMPONENT CHÍNH

1. **`QuadrantBadge.astro`:** Hiển thị huy hiệu chủ đề kèm icon Bootstrap tương ứng (`bi-journal-medical`, `bi-heart-fill`, `bi-cup-hot-fill`, `bi-compass-fill`).
2. **`AuthorGeoBox.astro`:** Khối tác giả tối ưu hóa cho AI Search trích dẫn, áp dụng Microdata Schema `itemscope itemtype="https://schema.org/Person"` không viền ngoài.
3. **`FeaturePhoto.astro`:** Render ảnh bìa bài viết chuẩn `1200x630`, bo góc `rounded-2xl`, hỗ trợ lazy/eager loading và chú thích ảnh.
4. **`FaqAccordion.astro`:** Render mảng `faqSchema` dạng `<details><summary>` HTML5 thuần, có mũi tên chuyển động mượt không phụ thuộc JavaScript nặng.
5. **`SourcesList.astro`:** Danh sách trích dẫn tài liệu tham khảo công khai minh bạch.
6. **`ArticleCard.astro`:** Thẻ bài viết responsive với ảnh Thumbnail 16:9, meta info và hiệu ứng hover nhẹ.
7. **`Preloader.astro`:** Màn hình loading nhận diện thương hiệu chuẩn hệ màu website (Xanh lá `#8dc435`, `#428442` và Cam ấm `#ff9046`), lồng ghép logo tròn xoay chuyển động nhịp thở. Tích hợp cơ chế Hybrid:
   - *First-load:* Hiển thị đầy đủ ~1.1s ở lần đầu truy cập trong phiên (lưu `sessionStorage`).
   - *Chuyển trang (Page Transition):* Thanh tiến trình đỉnh trang (Top Progress Bar) kết hợp màn chuyển cảnh mềm mại ~0.3s khi click bài viết, không làm chậm LCP và an toàn 100% cho SEO.

---

## 5. HIỆU NĂNG, SEO TỰ ĐỘNG & TRIỂN KHAI CLOUDFLARE PAGES

* **Kiến trúc SSG Không JavaScript Runtime:** HTML tĩnh sinh 100% tại thời điểm build (`output: 'static'`). Các tương tác nhỏ (Menu Drawer, Slider, Bộ lọc tìm kiếm, Accordion, Preloader) dùng script inline siêu nhẹ (~2KB).
* **Quản lý CSS & Media Tách Biệt:** Toàn bộ kiểu dáng tập trung tại `src/styles/global.css`; toàn bộ ảnh tĩnh đặt tại `public/media/`.
* **SEO Kỹ thuật & Tự Động Hóa Sitemap (Zero-Dependency):**
  - **XML Sitemap động (`src/pages/sitemap.xml.ts`):** Tự động truy vấn toàn bộ bài viết từ `src/content/blog/`, trích xuất thời gian cập nhật `<lastmod>` ISO-8601, tự động gán tần suất `<changefreq>` và trọng số `<priority>`. Tự động tái tạo khi có bài viết mới.
  - **Tệp chỉ dẫn bọ tìm kiếm (`public/robots.txt`):** Khai báo chỉ dẫn `Sitemap: https://giupchame.info.vn/sitemap.xml` và `Allow: /` cho toàn bộ bot Google/Bing.
  - **Tên miền Canonical chuẩn:** Cố định `https://giupchame.info.vn` tại `astro.config.mjs` và Schema Metadata trong `Layout.astro`.
* **Chỉ số Mục tiêu Core Web Vitals:** LCP < 0.8s, CLS = 0.00, INP < 30ms, điểm Google Lighthouse 98–100/100.
* **Quy trình Xuất bản Khép Kín:** Biên dịch nội dung sang `KNOWLEDGE_VAULT/09_PublishContent/`, sau đó chạy `python pushtowebsite.py` để đồng bộ sang `src/content/blog/` và đẩy lên GitHub tự động kích hoạt Cloudflare Pages build.
