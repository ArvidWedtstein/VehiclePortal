/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "akhxphgocxpyoofvdqwi.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
