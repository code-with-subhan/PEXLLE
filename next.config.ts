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
  }
}

module.exports = nextConfig;