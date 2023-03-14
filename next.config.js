/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: { appDri: true },
  env: {
    BD_URI: "mongodb://127.0.0.1:27017/nextjs-ecommerce",
  },
};

module.exports = nextConfig;
