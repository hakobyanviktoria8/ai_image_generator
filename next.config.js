/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["aiimagegeneratorap2d5141.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
