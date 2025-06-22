const nextConfig = {
  images: {
    domains: [
      'cdn.example.com',
      'images.unsplash.com',
      'pexlledn.vercel.app' ,// ✅ Add this line
      'i.pravatar.cc',
      'material-kit-pro-react.devias.io',
      'encrypted-tbn0.gstatic.com',
      'fakestoreapi.com'
    ],
  },
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
  typescript: {
    ignoreBuildErrors: true, // Allows build to proceed with TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Allows build to proceed with ESLint errors
  },
}

module.exports = nextConfig;