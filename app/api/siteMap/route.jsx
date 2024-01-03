export async function GET() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ...
  </urlset>`;

  return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
}
