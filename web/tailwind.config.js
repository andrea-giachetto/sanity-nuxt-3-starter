const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./slices/**/*.vue",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      // fontFamily: {
      //   // "brand-primary": "GTPressura",
      //   // "brand-secondary": "Agrandir",
      //   // "brand-tertiary": "PostGrotesk",
      // },
      colors: {
        brand: {
          "primary-400": "#7D6D63",
          "primary-500": "#4a4441",
          "primary-600": "#2D2A2A",
        },
      },
    },
  },
};
