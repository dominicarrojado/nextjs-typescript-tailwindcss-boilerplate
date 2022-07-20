/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  trailingSlash: true,
  basePath: isProd ? '/nextjs-typescript-tailwindcss-boilerplate' : '',
};

module.exports = nextConfig;
