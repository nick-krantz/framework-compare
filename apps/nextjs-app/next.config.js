/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["framework-compare-types"],
};

module.exports = nextConfig;
