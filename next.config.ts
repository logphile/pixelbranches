/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable full static export
  output: 'export',

  // (optional) ignore any lingering type errors so your Azure Functions TS doesn't block the build
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig