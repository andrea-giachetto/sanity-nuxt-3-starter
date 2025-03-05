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
      fontFamily: {
        "brand-primary": "IBMPlexSans",
        "brand-secondary": "Fraunces",
      },
      colors: {
        brand: {
          "gray-50": "#FFFDFD",
          "gray-200": "#EAE8E8",
          "gray-300": "#BFBBBB",
          "gray-400": "#777676",
          "gray-500": "#363535",
          "gray-600": "#262424",
          "gray-700": "#1E1E1E",
          "red-500": "#8D0942",
        },
      },
    },
  },
};
