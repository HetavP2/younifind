import getAllApprovedOpportunities from "@/actions/opportunity/get-opps/getAllApprovedOpportunities";

export default async function sitemap() {
    const baseUrl = "https://www.younifind.ca";
    const approvedOpportunities = await getAllApprovedOpportunities();
    
    const opportunitiesUrls = approvedOpportunities.map(opportunity => ({
        url: `${baseUrl}/opportunities/o/${opportunity.id}`,
        lastModified: opportunity.updated_at || opportunity.created_at
    }))
  
  
    return [
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
}
