/** @type {import('next').NextConfig} */

const nextConfig = {
  // Tells Next.js to create a static export
  output: "export",

  // Required for Next.js <Image> component on GitHub Pages
  images: { unoptimized: true },

  // Optional: Ensures clean URLs like /about/
  trailingSlash: true,

  // DO NOT include basePath or assetPrefix for a user website
};

export default nextConfig;