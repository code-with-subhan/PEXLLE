// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
  },

  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  }
}

module.exports = nextConfig

export default nextConfig;
