import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  // Ưu tiên domain từ astro.config.mjs, fallback về domain chính thức giupchame.info.vn
  const siteUrl = (site ? site.toString() : 'https://giupchame.info.vn').replace(/\/$/, '');

  // 1. Quét danh sách bài viết từ Content Collections (src/content/blog)
  const posts = await getCollection('blog');

  // Sắp xếp bài viết mới nhất lên đầu
  posts.sort((a, b) => {
    const dateA = new Date(a.data.updatedDate || a.data.pubDate).getTime();
    const dateB = new Date(b.data.updatedDate || b.data.pubDate).getTime();
    return dateB - dateA;
  });

  // 2. Danh mục các trang tĩnh cố định
  const staticRoutes = [
    {
      path: '',
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      path: '/cam-nang-cham-soc',
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      path: '/blog',
      changefreq: 'daily',
      priority: '0.8',
    },
  ];

  const staticXml = staticRoutes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  const postsXml = posts
    .map((post) => {
      const date = post.data.updatedDate || post.data.pubDate;
      const lastmod =
        date instanceof Date && !isNaN(date.getTime())
          ? date.toISOString()
          : new Date().toISOString();

      return `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${postsXml}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};

