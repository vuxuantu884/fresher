/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  presets: ["next/babel"],
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
