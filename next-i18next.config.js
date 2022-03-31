const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_LOCALE_DEFAULT || "vi",
    locales: ["vi", "ja", "en"],
    defaultNS: "common",
    localeDetection: false,
    localePath: path.resolve("./src/languages"),
    domains: [
      {
        domain: "*",
        defaultLocale: process.env.NEXT_PUBLIC_LOCALE_DEFAULT || "vi",
      },
    ],
  },
};
