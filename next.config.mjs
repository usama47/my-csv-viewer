/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Ensures correct file paths
  images: {
    unoptimized: true, // Disable image optimization for static builds
  },
};

export default nextConfig;
