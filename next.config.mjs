/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For creating static export if needed, or simple local dev
  },
};

export default nextConfig;
