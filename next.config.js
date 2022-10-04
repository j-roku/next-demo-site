/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true, // フォントの最適化

  distDir: 'build',
}

module.exports = nextConfig
