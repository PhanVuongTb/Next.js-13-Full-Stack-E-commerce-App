/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGO_URI:
      "mongodb+srv://E-commerce-nextjs:nextjsApp@cluster0.upnltpl.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
