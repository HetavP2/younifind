import { createClient } from "@supabase/supabase-js";

export async function GET() {
  // date conversion fcuntion
  function convertTimestamp(timestamp: any, oppId: any) {
    console.log(typeof timestamp + "date is", timestamp, " ======> ", oppId);
    console.log("\n");
    const dateObj = new Date(timestamp);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  // supabase fetch
  const supabase = createClient(
    "https://qbfbghtpknhobofhpxfr.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZmJnaHRwa25ob2JvZmhweGZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTEzNjU3OSwiZXhwIjoyMDE2NzEyNTc5fQ.eymQ9qmRDREZE3faHIN3ukCC6a68DpxSxej8BsIUDdg",
    {
      db: {
        schema: "public",
      },
    }
  );
  const { data, error } = await supabase.from("opportunities").select(
    `
    id,
  created_at,
  updated_at,
    opportunity_statuses (approved)
  `
  ); // Retrieve all fields for opportunities

  if (error) {
    throw error;
  }

  // Filter the data in JavaScript for opportunity_statuses approved as true
  const allApprovedOpportunities = data.filter((opportunity:any) => {
    return (
      opportunity.opportunity_statuses &&
      opportunity.opportunity_statuses.approved === true
    );
  });

  console.log(allApprovedOpportunities);

  if (error) {
    console.error(error);
  }

  const approvedOpportunities = allApprovedOpportunities;
  const baseUrl = "https://younifind.ca";

  const opportunitiesUrls = approvedOpportunities.map((opportunity) => ({
    url: `${baseUrl}/opportunities/o/${opportunity.id}`,
    lastModified: convertTimestamp(opportunity.created_at, opportunity.id),
    // ? convertTimestamp(opportunity.updated_at)
    // : convertTimestamp(opportunity.created_at),
  }));

  function formatDate(date:any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

  const pages = [
    {
      url: baseUrl,
      lastModified: formatDate(new Date()),
    },
    {
      url: `${baseUrl}/search`,
      lastModified: formatDate(new Date()),
    },
    ...opportunitiesUrls,
  ];

  // Build the XML content
  const xml = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(
            (page) =>
              `<url><loc>${page.url}</loc><lastmod>${page.lastModified}</lastmod></url>`
          )
          .join("")}
      </urlset>
    `;

  const xmlContent = xml;

  return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
}
