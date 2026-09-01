import type { APIRoute } from "astro";
import { courses } from "../data/courses";

const siteUrl = "https://evolui.dev";

export const GET: APIRoute = () => {
  const urls = [
    `${siteUrl}/`,
    ...courses.map((course) => `${siteUrl}/curso/${course.id}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
