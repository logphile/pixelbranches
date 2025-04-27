/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js to produce a static “out/” folder
  output: 'export',
  experimental: {
    // Keep App Router enabled
    appDir: true,
  },
}
module.exports = nextConfig