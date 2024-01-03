// module.exports = {
//   siteUrl: "https://younifind.ca",
//   generateRobotsTxt: true, // (optional)
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//       {
//         userAgent: "*",
//         disallow: ["/adminPanel"],
//       },
//     ],
//   },
// };

/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: "https://younifind.ca"
};