# TÀI LIỆU ĐẶC TẢ THIẾT KẾ WEBSITE (WEBSITE DESIGN SPECIFICATION)
**Dự án:** Kinship AI — Cổng Thông Tin & Đồng Hành Chăm Sóc Cha Mẹ Già Tại Gia  
**Mô hình:** Editorial Knowledge Hub & Caregiver Support Portal (Chuẩn hóa GEO & Umbrex Matrix)  
**Nền tảng công nghệ mục tiêu:** Astro 5.x (SSG) + Tailwind CSS + TypeScript + Cloudflare Pages  
**Phiên bản:** 2.1 (Bổ sung Bố cục Hero 50/50, Khối Author GEO, Feature Photo & Chuẩn Ảnh Mockup `placehold.co`)  

---

## 1. TỔNG QUAN DỰ ÁN & TRIẾT LÝ THIẾT KẾ (PROJECT OVERVIEW)

### 1.1. Sứ mệnh & Mục tiêu của Website
Website Kinship AI được thiết kế là nền tảng tri thức và cầu nối tinh thần dành riêng cho **Thế hệ Bánh Mì Kẹp (Sandwich Generation - người con độ tuổi 35–55)** đang gánh vác trách nhiệm kép: nuôi dạy con cái và chăm sóc cha mẹ già yếu tại Việt Nam.

Website tập trung vào 2 mục tiêu chiến lược:
1. **Dẫn đầu về Tìm kiếm Tự nhiên & Trích xuất AI (SEO & GEO):** 
   - Tối ưu hóa cấu trúc nội dung để các cỗ máy tìm kiếm thế hệ mới (Google AI Overviews / SGE, ChatGPT Search, Perplexity, Gemini) trích xuất trực tiếp câu trả lời thông qua cấu trúc **BLUF (Bottom Line Up Front)** và dữ liệu cấu trúc Schema.org (`FAQPage`, `Article`, `BreadcrumbList`).
   - Cung cấp **Khối Author chuẩn GEO (`AuthorGeoBox`)** định danh rõ ràng tác giả và chuyên gia thẩm định y khoa/tài chính, thiết lập tín hiệu E-E-A-T tối thượng để AI xếp hạng và gán trích dẫn uy tín.
   - Phân loại nội dung theo ma trận giá trị **Umbrex Matrix** (4 góc phần tư: *Educate, Inspire, Entertain, Convince*).
2. **Xây dựng Lòng tin & Chuyển đổi Hành vi (E-E-A-T & CRO):**
   - Mỗi bài viết sở hữu **Feature Photo** chất lượng cao, định dạng chuyên nghiệp, tạo ấn tượng thị giác sâu sắc và truyền tải sự ấm áp của tình thân.
   - Đưa ra góc nhìn đa chiều từ Hội đồng chuyên gia: **TS. BS. Tâm** (Tâm lý Lão khoa) và **Ông Minh** (Quản trị Tài chính Gia đình), phối hợp cùng góc nhìn thấu cảm của Founder (**Nhung POV**).
   - Chuyển hóa từ sự dằn vặt của người chăm sóc (*Caregiver Guilt, Filial Paralysis*) thành các **hành động vi mô (Micro-care)** và giải pháp chăm sóc bền vững tại gia (*Aging in Place*).

### 1.2. Sitemap Tinh Gọn (Target Sitemap Architecture)
Kiến trúc website được tổ chức gọn gàng thành **2 cấp độ trang cốt lõi**:
```text
/ (Homepage - Hero 50/50, Hội đồng chuyên gia & Bài viết tâm điểm)
└── /blog (Caregiver Blog - Trung tâm tri thức & Bài viết chuyên sâu)
    ├── /blog (Blog Archive Hub: Lọc theo Umbrex Quadrant, Tags, Tìm kiếm)
    ├── /blog?quadrant=[Educate|Inspire|Entertain|Convince] (Lọc theo góc phần tư ma trận)
    └── /blog/[slug] (Trang chi tiết bài viết: Feature Photo, Khối Author GEO, GEO BLUF, FAQ Schema, Nguồn tham khảo)
```

### 1.3. Triết lý UX/UI chủ đạo
* **Empathy & Reassurance (Thấu cảm & An tâm):** Tông màu dịu mát, bố cục thoáng đãng, mang lại cảm giác bình yên, giải tỏa căng thẳng cho người chăm sóc.
* **Senior & Middle-Age Readability (Tối ưu thị lực tuổi trung niên):** Cỡ chữ lớn (`17px - 18px`), chiều cao dòng rộng (`1.75`), tương phản cao chuẩn WCAG AAA, phân cấp tiêu đề rành mạch.
* **Visual Storytelling (Kể chuyện bằng hình ảnh):** Mỗi bài viết bắt buộc có 1 ảnh đại diện (Feature Photo) giàu cảm xúc, sử dụng dịch vụ placeholder `https://placehold.co/` trong giai đoạn phát triển giao diện.
* **Zero-Friction Scannability (Dễ đọc lướt):** Mỗi phân đoạn đều có tóm tắt trực diện BLUF, bảng so sánh trực quan, danh sách gạch đầu dòng rõ ràng.
* **Evidence-Based Integrity (Minh bạch thực chứng):** 100% số liệu y tế và chi phí đều có nguồn trích dẫn công khai minh bạch (`sources`).

---

## 2. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM TOKENS)

### 2.1. Bảng màu (Color Palette)
Hệ màu lấy cảm hứng từ thiên nhiên và sức sống gia đình, tạo sự ấm áp, tin cậy và chuyên nghiệp.

| Vai trò (Role) | Token Tailwind | Mã HEX | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `teal-700` / `teal-800` | `#0F766E` / `#115E59` | Thanh điều hướng, nút chính, tiêu đề nhấn mạnh, icon thương hiệu. |
| **Primary Light / Tint** | `teal-50` / `teal-100` | `#F0FDFA` / `#CCFBF1` | Nền hero badge, nền hộp tóm tắt BLUF, nền Author GEO box, hover card. |
| **Primary Border** | `teal-200` | `#99F6E4` | Đường viền hộp BLUF, viền Author GEO box, viền active category pill. |
| **Accent / CTA Action** | `amber-600` / `orange-600` | `#D97706` / `#EA580C` | Nút kêu gọi hành động quan trọng (Tải cẩm nang, Khám phá công cụ vi mô). |
| **Background Main** | `white` | `#FFFFFF` | Nền chính của website và trang đọc bài viết. |
| **Background Secondary**| `slate-50` | `#F8FAFC` | Nền khu vực Hero, nền phần FAQ Accordion, nền Footer. |
| **Text Primary** | `slate-900` | `#0F172A` | Tiêu đề (`H1`–`H4`), văn bản bài viết (Đạt chuẩn WCAG AAA). |
| **Text Secondary** | `slate-600` | `#475569` | Mô tả dẫn nhập, ngày đăng, số phút đọc, chú thích. |
| **Border / Divider** | `slate-200` | `#E2E8F0` | Đường phân cách section, viền Card bài viết. |

#### Bảng màu Nhận diện 4 Góc Phần Tư (Umbrex Matrix Quadrants)
| Quadrant | Tông màu đại diện | Token Tailwind Badge | Ý nghĩa nội dung |
| :--- | :--- | :--- | :--- |
| **Educate** | Deep Teal (Xanh tri thức) | `bg-teal-50 text-teal-800 border-teal-200` | Kiến thức y tế lão khoa, bài toán viện dưỡng lão, tài chính. |
| **Inspire** | Rose / Coral (Ấm áp tình thân) | `bg-rose-50 text-rose-800 border-rose-200` | Câu chuyện cảm xúc, hóa giải dằn vặt, gắn kết thế hệ. |
| **Entertain** | Amber (Nhẹ nhàng gần gũi) | `bg-amber-50 text-amber-800 border-amber-200` | Khoảng cách thế hệ qua góc nhìn hóm hỉnh, thói quen của người già. |
| **Convince** | Emerald (Hành động thực tế) | `bg-emerald-50 text-emerald-800 border-emerald-200` | Hướng dẫn đối thoại, giải pháp micro-care, hành động cụ thể. |

### 2.2. Hệ thống Chữ (Typography)
* **Font chữ Tiêu đề & Nội dung:** `Plus Jakarta Sans` kết hợp `Inter` hoặc `system-ui` dự phòng.
* **Cỡ chữ & Chiều cao dòng (Ưu tiên người đọc 35–55 tuổi):**

| Cấp độ | Desktop | Mobile | Line Height | Letter Spacing | Font Weight | Ứng dụng |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero/Title)** | `40px` (`2.5rem`) | `30px` (`1.875rem`) | `1.25` | `-0.02em` | `Bold (700)` | Tiêu đề Hero trang chủ, Tiêu đề bài viết. |
| **H2 (Section/Heading)** | `28px` (`1.75rem`) | `22px` (`1.375rem`) | `1.35` | `-0.01em` | `SemiBold (600)` | Các phân đoạn lớn trong bài viết, tiêu đề khối. |
| **H3 (Sub-section/Card)** | `20px` (`1.25rem`) | `18px` (`1.125rem`) | `1.4` | `0` | `SemiBold (600)` | Tiêu đề trên Card bài viết, câu hỏi FAQ. |
| **Body Lead (Mô tả)** | `18px` (`1.125rem`) | `16px` (`1rem`) | `1.65` | `0` | `Normal (400)` | Đoạn giới thiệu đầu bài, phụ đề Hero. |
| **Body Content (Nội dung)**| `17px` (`1.0625rem`)| `16px` (`1rem`) | `1.75` | `0` | `Normal (400)` | Nội dung chi tiết bài viết, đảm bảo đọc lâu không mỏi mắt. |
| **BLUF Summary** | `16px` (`1rem`) | `15px` (`0.9375rem`)| `1.6` | `0` | `Medium (500)` | Đoạn tóm tắt trực diện trong Callout Box. |
| **Meta / Badge / Author**| `13px` (`0.8125rem`)| `12px` (`0.75rem`) | `1.4` | `+0.01em` | `Medium (500)` | Tag, thông tin tác giả GEO, ngày đăng, thời gian đọc. |

### 2.3. Quy Chuẩn Hình Ảnh & Mockup Template (`placehold.co`)
Toàn bộ hình ảnh mẫu trong thiết kế giao diện, template và mockup thành phần đều sử dụng thống nhất dịch vụ **`https://placehold.co/`** với quy chuẩn màu thương hiệu Kinship AI (`#0F766E` và `#F0FDFA`):

| Thành phần hiển thị | Kích thước chuẩn | Tỷ lệ | URL Mẫu Chuẩn `placehold.co` |
| :--- | :--- | :--- | :--- |
| **Homepage Hero Image (Right 50%)** | `800x600 px` | `4:3` | `https://placehold.co/800x600/0f766e/ffffff?text=Kinship+AI+Family+Hero` |
| **Article Feature Photo (Đầu bài viết)**| `1200x630 px` | `1.91:1` | `https://placehold.co/1200x630/0f766e/ffffff?text=Feature+Photo+1200x630` |
| **Article Card Thumbnail (Lưới bài viết)** | `600x338 px` | `16:9` | `https://placehold.co/600x338/f0fdfa/0f766e?text=Thumbnail+16%3A9` |
| **Author Avatar (Tác giả chính Nhung Pham)**| `160x160 px` | `1:1` | `https://placehold.co/160x160/0f766e/ffffff?text=Nhung+Pham` |
| **Reviewer Avatar (TS. BS. Tâm - Lão khoa)** | `160x160 px` | `1:1` | `https://placehold.co/160x160/115e59/ffffff?text=Dr.+Tam` |
| **Reviewer Avatar (Mr. Minh - Tài chính)** | `160x160 px` | `1:1` | `https://placehold.co/160x160/d97706/ffffff?text=Mr.+Minh` |
| **Micro-care Banner Graphic** | `600x400 px` | `3:2` | `https://placehold.co/600x400/0f766e/ffffff?text=Micro+Care+Guide` |

---

## 3. KIẾN TRÚC WIREFRAME & BỐ CỤC TỪNG TRANG (LAYOUT ARCHITECTURE)

### 3.1. Trang 1: Trang Chủ (Homepage - `/`)

Bố cục khu vực Hero được thiết kế chia đôi cân xứng **50% Trái (Nội dung Text) & 50% Phải (Hình ảnh minh họa)** trên màn hình Desktop, tự động xếp chồng (stack) trên Mobile:

```text
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL HEADER] 🌱 Kinship AI | Trang chủ | Bài viết | Về chúng tôi | [Cẩm nang chăm sóc]               |
+---------------------------------------------------------------------------------------------------------+
| [1. HERO SECTION] (Bố cục 2 cột 50/50 - Background: Slate-50 kết hợp Gradient nhẹ)                     |
|                                                                                                         |
|   <--- CỘT TRÁI (50% TEXT & ACTIONS) --->       <--- CỘT PHẢI (50% FEATURE HERO IMAGE) --->             |
|   [ 🌱 Cầu nối gia đình & Đồng hành vi mô ]      +-----------------------------------------------------+ |
|   H1: Đồng hành cùng thế hệ Bánh Mì Kẹp          |                                                     | |
|       chăm sóc cha mẹ già tại gia                |        [ ẢNH MẪU HERO 800x600 ]                     | |
|                                                  |   https://placehold.co/800x600/0f766e/ffffff        | |
|   Lead: Thấu hiểu tâm lý lão khoa, hóa giải      |   ?text=Kinship+AI+Family+Hero                      | |
|   dằn vặt chữ Hiếu và thiết kế hệ thống chăm     |                                                     | |
|   sóc bền vững cho gia đình Việt Nam hiện đại.   |   (Bo góc rounded-2xl, bóng đổ shadow-lg,           | |
|                                                  |    viền border-teal-100)                            | |
|   CTA Group:                                     |   [Floating Badge góc ảnh: "💡 Micro-Care 24/7"]    | |
|   [ Nút Chính: Khám phá Bài viết Chuyên sâu ↓ ]  |                                                     | |
|   [ Nút Phụ: Về Hội đồng Chuyên gia ]            +-----------------------------------------------------+ |
|                                                                                                         |
|   Trust Proof vi mô: "✓ 72% người trẻ sẵn sàng chăm sóc  ✓ 100% dữ liệu thực chứng"                     |
+---------------------------------------------------------------------------------------------------------+
| [2. HỘI ĐỒNG CỐ VẤN CHUYÊN MÔN (E-E-A-T TRUST BAR)]                                                     |
|   "Góc nhìn đa chiều bảo chứng chất lượng bởi Hội đồng chuyên gia Kinship AI"                           |
|   +------------------------------------------+  +----------------------------------------------------+  |
|   | [Avatar 64x64: Dr. Tâm]                  |  | [Avatar 64x64: Mr. Minh]                           |  |
|   | 👨‍⚕️ TS. BS. Tâm                          |  | 💼 Chuyên gia Tài chính Minh                       |  |
|   | Chuyên gia Tâm lý Lão khoa               |  | Hoạch định dòng tiền dưỡng lão                     |  |
|   | Hóa giải Caregiver Guilt                 |  | Dự phòng rủi ro chi phí y tế dài hạn               |  |
|   +------------------------------------------+  +----------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------------+
| [3. FEATURED POST HERO CARD] (Bài viết tâm điểm mới nhất)                                                |
|   +---------------------------------------------------------------------------------------------------+ |
|   | [Badge: Educate] • Ngày 02/11/2026 • 8 phút đọc                                                   | |
|   | H2: Gen Z Đưa Cha Mẹ Vào Viện Dưỡng Lão: Nghịch Lý Chữ Hiếu & Giải Pháp                           | |
|   | Lead: Phân tích nghịch lý nhận thức giữa lý trí hiện đại và cảm giác tội lỗi...                   | |
|   | Tags: #GenZ #VienDuongLao #ChuHieu                                                                | |
|   | [ Đọc bài phân tích đầy đủ → ]                                                                    | |
|   +---------------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------+
| [4. LƯỚI BÀI VIẾT THEO MA TRẬN UMBREX (3 Cột Responsive Grid)]                                          |
|   Header: Bài viết chuyên sâu mới nhất                                                                   |
|   Taxonomy Tabs: [ Tất cả ] [ 📚 Educate ] [ ❤️ Inspire ] [ ☕ Entertain ] [ 🎯 Convince ]                |
|                                                                                                         |
|   +----------------------------+  +----------------------------+  +----------------------------+        |
|   | [Thumbnail 16:9 600x338]   |  | [Thumbnail 16:9 600x338]   |  | [Thumbnail 16:9 600x338]   |        |
|   | [Educate] • 02/11/2026     |  | [Inspire] • 02/11/2026     |  | [Convince] • 03/11/2026    |        |
|   | H3: Tiêu đề bài 1          |  | H3: Khủng hoảng tuổi 40    |  | H3: Lối đi thứ ba từ       |        |
|   | Mô tả ngắn 2 dòng...       |  | thế hệ bánh kẹp...         |  | dưỡng lão bán trú...       |        |
|   | Tags: #LaoKhoa #ChiPhi     |  | Tags: #Stress #GiaDinh     |  | Tags: #MicroCare           |        |
|   | [Đọc tiếp →]               |  | [Đọc tiếp →]               |  | [Đọc tiếp →]               |        |
|   +----------------------------+  +----------------------------+  +----------------------------+        |
+---------------------------------------------------------------------------------------------------------+
| [5. GIẢI PHÁP ĐỒNG HÀNH VI MÔ (MICRO-CARE INITIATIVE BANNER)] (Background: Teal-800)                     |
|   "Bạn không đơn độc trên hành trình phụng dưỡng cha mẹ."                                                |
|   Tải ngay 'Cẩm nang Đối thoại Gia đình & Lập ngân sách Chăm sóc Tuổi già'                              |
|                                                            [ Nút: Tải Cẩm Nang Miễn Phí ]               |
+---------------------------------------------------------------------------------------------------------+
| [GLOBAL FOOTER] Thông tin thương hiệu, Tuyên bố phi y tế, Bản quyền, Sitemap                            |
+---------------------------------------------------------------------------------------------------------+
```

---

### 3.2. Trang 2: Caregiver Blog

#### 3.2.1. Trang Danh mục / Lưu trữ Blog (`/blog`)
```text
+---------------------------------------------------------------------------------------------------------+
| Breadcrumb: Trang chủ > Caregiver Blog                                                                  |
| H1: Góc Nhìn Chuyên Sâu & Cẩm Nang Chăm Sóc Cha Mẹ Già                                                   |
| Subtitle: Dữ liệu thực chứng, phân tích tâm lý lão khoa và giải pháp tài chính...                        |
+---------------------------------------------------------------------------------------------------------+
| [FILTER BAR - UMBREX PILLS & SEARCH]                                                                    |
|   Pills: ( Tất cả )  ( 📚 Educate )  ( ❤️ Inspire )  ( ☕ Entertain )  ( 🎯 Convince )                        |
|   Search: [ 🔍 Tìm kiếm bài viết, chủ đề (chữ hiếu, viện dưỡng lão, chi phí...)]                         |
+---------------------------------------------------------------------------------------------------------+
| [LƯỚI BÀI VIẾT FEED GRID - Kèm Thumbnail 16:9 mỗi Card]                                                 |
|   Mỗi card hiển thị ảnh 600x338, Badge Quadrant, Ngày đăng, Tiêu đề H3, Excerpt, Tags.                  |
+---------------------------------------------------------------------------------------------------------+
```

#### 3.2.2. Trang Chi tiết Bài viết (`/blog/[slug]`)
Được thiết kế tối ưu hóa cho đọc sâu, tích hợp **Feature Photo** ở vị trí tâm điểm và **Khối Author chuẩn GEO** để AI Search trích dẫn nguồn uy tín:

```text
+---------------------------------------------------------------------------------------------------------+
| Breadcrumb: Trang chủ > Blog > [Quadrant: Educate] > [Tên bài viết]                                      |
+---------------------------------------------------------------------------------------------------------+
| [ARTICLE HEADER]                                                                                         |
|   - Badges: [Educate Badge] • 🗓️ Cập nhật: 03/11/2026 • ⏱️ 8 phút đọc                                     |
|   - H1: Tiêu đề bài viết chuẩn SEO/GEO (Ví dụ: Gen Z Đưa Cha Mẹ Vào Viện Dưỡng Lão...)                    |
|   - Lead Paragraph: Đoạn mô tả bối cảnh giàu tính đồng cảm (description)                                |
|   - Tags: #GenZ #VienDuongLao #ChuHieu #CaregiverGuilt #AgingInPlace                                     |
+---------------------------------------------------------------------------------------------------------+
| [KHỐI AUTHOR DÀNH RIÊNG CHO GEO - DIV AUTHOR & E-E-A-T CARD]                                            |
| +-----------------------------------------------------------------------------------------------------+ |
| | [Avatar 56x56]  ✍️ Tác giả: Nhung Pham — Founder & Caregiver Advocate                                | |
| |                 Kinh nghiệm thực tiễn đồng hành chăm sóc cha mẹ già tuổi 70+                        | |
| |                                                                                                     | |
| | [Badge Kiểm duyệt Chuyên môn (E-E-A-T Signals for AI Search)]:                                      | |
| |   ✓ Thẩm định Lão khoa: TS. BS. Tâm (Chuyên gia Lão học & Tâm lý gia đình)                          | |
| |   ✓ Thẩm định Tài chính: Ông Minh (Cố vấn Hoạch định Chi phí Chăm sóc Dài hạn)                      | |
| +-----------------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------+
| [FEATURE PHOTO - ẢNH ĐẠI DIỆN BÀI VIẾT BẮT BUỘC (1200x630 px)]                                          |
| +-----------------------------------------------------------------------------------------------------+ |
| |                                                                                                     | |
| |                        [ ẢNH FEATURE BÀI VIẾT CHUẨN 1200x630 ]                                      | |
| |               https://placehold.co/1200x630/0f766e/ffffff?text=Feature+Photo+1200x630               | |
| |                                                                                                     | |
| +-----------------------------------------------------------------------------------------------------+ |
| <figcaption class="text-center text-sm text-slate-500 mt-2">Ảnh minh họa: Tình thân và lối đi dung hòa...|
+---------------------------------------------------------------------------------------------------------+
| [BODY CONTAINER - Max width 820px canh giữa hoặc 2 cột kèm Sticky TOC]                                   |
|                                                                                                         |
|   ## 1/ Nghịch lý nhận thức: Cởi mở lý tính nhưng tê liệt trước mặc cảm tội lỗi                          |
|   +---------------------------------------------------------------------------------------------------+ |
|   | 💡 [!SUMMARY] BLUF: Khảo sát cho thấy 72% người trẻ sẵn sàng chăm sóc đấng sinh thành...          | |
|   +---------------------------------------------------------------------------------------------------+ |
|   Nội dung phân tích chuyên sâu...                                                                       |
|   Trích dẫn nghiên cứu, tiếng lòng người chăm sóc...                                                     |
|   Liên kết nội bộ tự nhiên: [khủng hoảng tuổi 40](/blog/me-gen-y-khung-hoang-qua-tai-tuoi-40)            |
|                                                                                                         |
|   ## 2/ Bài toán dòng tiền: Viện dưỡng lão 15-25 triệu/tháng và giới hạn ví tiền                         |
|   +---------------------------------------------------------------------------------------------------+ |
|   | 💡 [!SUMMARY] BLUF: Mức phí lưu trú tại các cơ sở tư nhân hiện dao động 15-25 triệu/tháng...      | |
|   +---------------------------------------------------------------------------------------------------+ |
|   Bảng đối chiếu tài chính:                                                                              |
|   | Khoản mục thực tế | Mức tài chính (VNĐ) | Khả năng đáp ứng |                                         |
|   | ...               | ...                 | ...              |                                         |
|                                                                                                         |
|   ## 3/ Thoát bẫy tư duy nhị phân: Lối đi thứ ba từ mô hình bán trú & micro-care                         |
|   +---------------------------------------------------------------------------------------------------+ |
|   | 💡 [!SUMMARY] BLUF: Thay vì tự dồn mình vào thế cùng đường giữa nghỉ việc hoặc đưa vào viện...    | |
|   +---------------------------------------------------------------------------------------------------+ |
|   Giải pháp đề xuất: Nhà dưỡng lão bán trú & Điều dưỡng theo giờ tại gia...                              |
|                                                                                                         |
|   -------------------------------------------------------------------------------------------------     |
|   [LỜI KÊU GỌI HÀNH ĐỘNG - CONTEXTUAL CALL TO ACTION]                                                    |
|   "Nếu bạn đang bối rối giữa chữ Hiếu và sự quá tải của bản thân..."                                     |
|   [ Nút: Tải Bản Hướng Dẫn Chăm Sóc Bán Trú Tại Gia ]                                                    |
|                                                                                                         |
|   ## ❓ Câu hỏi thường gặp (FAQ - Schema.org Tương tác)                                                  |
|   +---------------------------------------------------------------------------------------------------+ |
|   | ▶ Quan điểm thực tế của thế hệ trẻ về việc đưa cha mẹ vào viện dưỡng lão?                          | |
|   | ▶ Gen Z và người độc thân có kế hoạch dưỡng lão như thế nào cho chính mình?                       | |
|   +---------------------------------------------------------------------------------------------------+ |
|                                                                                                         |
|   ## 📚 Tài liệu & Nguồn tham khảo (Public Citations)                                                    |
|   - [1] Dân trí: GenZ nói thật: "Chữ hiếu" như tảng đá vô hình... ↗                                      |
|   - [2] Fast Company: Gen Z could be facing an eldercare crisis... ↗                                    |
+---------------------------------------------------------------------------------------------------------+
| [BÀI VIẾT CÙNG CHỦ ĐỀ (RELATED ARTICLES)] (Lưới 2-3 cards cùng Quadrant/Tags kèm Thumbnail 16:9)         |
+---------------------------------------------------------------------------------------------------------+
```

---

## 4. ĐẶC TẢ CHI TIẾT CÁC COMPONENT (ASTRO COMPONENT SPECIFICATIONS)

Dựa trên cấu trúc dữ liệu thực tế tại `src/content/config.ts` của Kinship AI:

### 4.1. Component: `AuthorGeoBox.astro` (Khối Tác giả Tối ưu cho AI Search / GEO)
* **Mục đích:** Cung cấp thông tin định danh tác giả và người kiểm duyệt chuyên môn chuẩn SEO/GEO, sử dụng cấu trúc HTML Semantic kết hợp Microdata (`schema.org/Person`), giúp bot AI (ChatGPT, Google SGE, Perplexity) lập tức công nhận tính uy tín (E-E-A-T).
* **Cấu trúc HTML & Microdata Mẫu:**
```html
<div class="author-geo-box rounded-xl border border-teal-200 bg-teal-50/60 p-4 my-6" 
     itemscope itemtype="https://schema.org/Person">
  <div class="flex items-start gap-4">
    <!-- Avatar tác giả từ placehold.co -->
    <img src="https://placehold.co/160x160/0f766e/ffffff?text=Nhung+Pham" 
         alt="Nhung Pham - Tác giả Kinship AI" 
         class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0" 
         itemprop="image" />
    
    <div class="flex-1">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span class="text-xs uppercase tracking-wider font-semibold text-teal-800">Tác giả bài viết</span>
          <h4 class="text-base font-bold text-slate-900" itemprop="name">Nhung Pham</h4>
        </div>
        <span class="text-xs text-slate-500" itemprop="jobTitle">Founder & Caregiver Advocate</span>
      </div>

      <p class="text-xs text-slate-600 mt-1" itemprop="description">
        Kinh nghiệm thực tiễn đồng hành chăm sóc cha mẹ già tuổi 70+ tại gia; kết nối giải pháp tài chính và tâm lý lão khoa thế hệ Bánh Mì Kẹp.
      </p>

      <!-- Khối thẩm định chuyên môn (Medical & Financial Reviewers) -->
      <div class="mt-3 pt-2.5 border-t border-teal-200/80 flex flex-wrap gap-x-4 gap-y-1 text-xs text-teal-900">
        <span class="inline-flex items-center gap-1 font-medium">
          <span class="text-teal-600">✓</span> Thẩm định y khoa: 
          <strong class="font-semibold">TS. BS. Tâm</strong> (Lão khoa)
        </span>
        <span class="inline-flex items-center gap-1 font-medium">
          <span class="text-teal-600">✓</span> Thẩm định tài chính: 
          <strong class="font-semibold">Ông Minh</strong> (Quản trị chi phí dài hạn)
        </span>
      </div>
    </div>
  </div>
</div>
```

### 4.2. Component: `FeaturePhoto.astro` (Ảnh Bìa Bài Viết Chuẩn GEO/SEO)
* **Mục đích:** Hiển thị ảnh đại diện tiêu điểm bài viết với tỷ lệ chuẩn 16:9 hoặc 1.91:1 (1200x630 px). Tối ưu chỉ số LCP bằng thuộc tính `fetchpriority="high"` và `loading="eager"`.
* **Props:** 
  * `src`: string (Mặc định template dùng `https://placehold.co/1200x630/0f766e/ffffff?text={encodedTitle}`).
  * `alt`: string (Tiêu đề bài viết hoặc mô tả hình ảnh).
  * `caption`: string (Chú thích ảnh tùy chọn).
* **Cấu trúc HTML:**
```html
<figure class="feature-photo-container my-6">
  <img 
    src={src || "https://placehold.co/1200x630/0f766e/ffffff?text=Feature+Photo+1200x630"} 
    alt={alt}
    class="w-full aspect-[16/9] lg:aspect-[1.91/1] object-cover rounded-2xl shadow-sm border border-slate-100"
    loading="eager"
    fetchpriority="high"
    width="1200"
    height="630"
  />
  {caption && (
    <figcaption class="text-center text-xs text-slate-500 mt-2 italic">
      {caption}
    </figcaption>
  )}
</figure>
```

### 4.3. Component: `BlufCallout.astro` / Styling cho `> [!SUMMARY] BLUF`
* **Mục đích:** Làm nổi bật thông điệp cốt lõi mở đầu mỗi section `H2`, tối ưu để người đọc nắm bắt trong 3 giây và bot AI dễ dàng trích xuất (GEO).
* **Styling CSS:**
  * Khối container có nền `teal-50/70`, viền trái dày `4px` màu `teal-600` (`border-l-4 border-teal-600`), bo góc phải `rounded-r-xl`, padding `1rem 1.25rem`.
  * Biểu tượng mở đầu: Đèn ý tưởng 💡 hoặc huy hiệu `Tóm tắt trực diện (BLUF)`.
  * Kiểu chữ: Chữ `15px - 16px`, màu `slate-800`, font-weight `500`.

### 4.4. Component: `FaqAccordion.astro`
* **Mục đích:** Hiển thị mảng `faqSchema.mainEntity` từ Frontmatter thành các thẻ hỏi-đáp tương tác mượt mà mà không phụ thuộc JavaScript nặng.
* **Kỹ thuật Triển khai:** Sử dụng cặp thẻ HTML5 chuẩn `<details class="faq-item">` và `<summary class="faq-question">`.
  * Có biểu tượng mũi tên quay mượt mà khi mở rộng (`transition-transform duration-200`).
  * Tự động đồng bộ với thẻ `<script type="application/ld+json">` trong `<head>` của `Layout.astro` để Google hiển thị Rich Snippets trên kết quả tìm kiếm.

### 4.5. Component: `SourcesList.astro`
* **Mục đích:** Hiển thị mảng `sources: Array<{ title: string, url: string }>` ở cuối bài viết.
* **Thiết kế:** Danh sách liên kết gạch đầu dòng rõ ràng, mở tab mới (`target="_blank" rel="noopener noreferrer"`), có biểu tượng mũi tên trỏ ra ngoài `↗` minh bạch tính thực chứng khoa học.

### 4.6. Component: `ArticleCard.astro`
* **Props Đầu vào (Trích xuất từ `CollectionEntry<'blog'>`):**
  * `title`: string (Giới hạn tối đa 2 dòng `line-clamp-2`).
  * `description`: string (Giới hạn tối đa 3 dòng `line-clamp-3`).
  * `slug`: string (Liên kết tới `/blog/${slug}`).
  * `pubDate`: Date (Được định dạng tiếng Việt: `dd/mm/yyyy`).
  * `quadrant`: 'Educate' | 'Inspire' | 'Entertain' | 'Convince'.
  * `tags`: string[] (Hiển thị tối đa 3 tags tiêu biểu dưới dạng `#Tag`).
  * `thumbnailUrl`: string (Template sử dụng `https://placehold.co/600x338/f0fdfa/0f766e?text=Thumbnail+16%3A9`).
* **Hiệu ứng Hover:** Thẻ nhấc nhẹ lên `transform: translateY(-2px)`, viền chuyển từ `slate-200` sang `teal-300`, tiêu đề đổi màu sang `teal-800`.

---

## 5. ĐẶC TẢ KỸ THUẬT, HIỆU NĂNG & SEO/GEO TRÊN ASTRO 5.X

### 5.1. Chiến lược Xuất bản Tĩnh (Static Site Generation - SSG)
* **Chế độ Build:** Cấu hình `output: 'static'` trong `astro.config.mjs`.
* **Content Collections API:** Sử dụng `getCollection('blog')` để truy vấn, lọc và sắp xếp toàn bộ nội dung trong thời gian build:
  * Trang chủ `/`: Bố trí Hero 50/50, bài mới nhất và phân loại theo 4 góc phần tư.
  * Trang Blog Hub `/blog`: Hiển thị danh sách đầy đủ kèm Thumbnail tỷ lệ 16:9.
  * Trang Bài viết `/blog/[...slug]`: Sử dụng `getStaticPaths()` để sinh tĩnh 100% trang HTML độc lập có Feature Photo và Author GEO Box.
* **Quy trình Xuất bản Độc Lập:**
  - File nội dung được duyệt tại `KNOWLEDGE_VAULT/09_PublishContent/`.
  - Công cụ `pushtowebsite.py` đồng bộ sang `src/content/blog/` của repo website và đẩy lên GitHub.
  - Cloudflare Pages tự động kích hoạt tiến trình build SSG siêu tốc (< 1 phút).

### 5.2. Tự Động Hóa Dữ Liệu Có Cấu Trúc (Structured Data JSON-LD)
Trên Layout chính (`Layout.astro`), thẻ `<head>` được cấu hình tự động kết xuất JSON-LD chuẩn xác theo ngữ cảnh:
1. **Schema Tổ Chức & Website (Toàn trang):**
   * Định danh thực thể `Organization` Kinship AI và `WebSite` phục vụ xây dựng Knowledge Graph.
2. **Schema Bài Viết (`Article`):**
   * Khai báo: `headline`, `description`, `image` (URL Feature Photo), `datePublished`, `dateModified`.
   * Khai báo `author` (Person - Nhung Pham) và `reviewedBy` (Person - TS. BS. Tâm / Ông Minh), đồng bộ 100% với dữ liệu hiển thị trên `AuthorGeoBox`.
3. **Schema Hỏi Đáp (`FAQPage`):**
   * Tự động trích xuất nguyên vẹn khối `faqSchema` từ Frontmatter của bài viết và nhúng thẳng vào `<head>`, giúp đạt điểm GEO tuyệt đối trên Google SGE và Bing Copilot.
4. **Schema Điều Hướng (`BreadcrumbList`):**
   * Giúp bọ tìm kiếm lập chỉ mục cấu trúc phân cấp: `Trang chủ > Blog > [Tên bài viết]`.

### 5.3. Chỉ số Hiệu năng Mục tiêu (Core Web Vitals)
* **Zero JavaScript by Default:** Toàn bộ nội dung hiển thị tĩnh, không nạp runtime JS nặng nề (như React/Vue), đảm bảo tốc độ mở trang gần như tức thì.
* **LCP (Largest Contentful Paint):** `< 0.8 giây` trên mạng 4G nhờ tối ưu `fetchpriority="high"` cho Feature Photo và Hero Image.
* **CLS (Cumulative Layout Shift):** `0.00` nhờ khai báo cố định `aspect-ratio` (4:3 cho Hero và 16:9 cho Feature Photo/Thumbnail).
* **INP (Interaction to Next Paint):** `< 30ms`.
* **Điểm Google Lighthouse:** Đạt từ `98 - 100/100` điểm trên cả 4 tiêu chí: **Performance, Accessibility, Best Practices, SEO**.
