/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i02.appmifile.com", "telegra.ph"],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
};

module.exports = nextConfig;
