/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // required for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
