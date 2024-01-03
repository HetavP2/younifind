import getAllApprovedOpportunities from "@/actions/opportunity/get-opps/getAllApprovedOpportunities";
import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = "https://younifind.ca";
//   const approvedOpportunities = await getAllApprovedOpportunities();

//   const opportunitiesUrls = approvedOpportunities.map((opportunity) => ({
//     url: `${baseUrl}/opportunities/o/${opportunity.id}`,
//     lastModified: opportunity.updated_at !== null
//       ? opportunity.updated_at
//       : opportunity.created_at,
//   }));

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/search`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/login`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/community`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//     },
//     ...opportunitiesUrls,
//   ];
// }

const generateSitemap = async () => {
  const baseUrl = "https://younifind.ca";
  const approvedOpportunities = await getAllApprovedOpportunities();

  const opportunitiesUrls = approvedOpportunities.map((opportunity) => ({
    url: `${baseUrl}/opportunities/o/${opportunity.id}`,
    lastModified:
      opportunity.updated_at !== null
        ? opportunity.updated_at
        : opportunity.created_at,
  }));

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...opportunitiesUrls,
  ];

  // Build the XML content
  const xml2 = 'm';
  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) =>
            `<url><loc>${
              page.url
            }</loc><lastmod>${page.lastModified?.toString()}</lastmod></url>`
        )
        .join("")}
    </urlset>
  `;

  return xml;
};

export default generateSitemap;
