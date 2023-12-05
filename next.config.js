/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qbfbghtpknhobofhpxfr.supabase.co", //put "**" for all hosts
      },
    ],
  },
};

module.exports = nextConfig;
