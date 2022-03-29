const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/libraries/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#B61E42",
        second: "#47817E",
        black: "#000000",
        bodyText: "#333333",
        gray_1: "#828282",
        gray_2: "#BDBDBD",
        gray_3: "#E0E0E0",
        gray_4: "#F2F2F2",
        gray_5: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
