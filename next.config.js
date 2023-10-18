/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
