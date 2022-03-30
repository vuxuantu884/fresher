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
};

module.exports = nextConfig;
