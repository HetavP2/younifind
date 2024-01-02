import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/adminPanel"],
        },
      ],
      sitemap: `https://younifind.ca/sitemap.xml`,
    };
}

