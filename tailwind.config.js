const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#C5D9FF",
          "200": "#4781EC"
        },
        secondly: {
          "100": "#E8EAEF",
          "200": "#D4D5D8",
          "300": "#707070",
          "400": "#444444",
          "500": "#333333",
          "600": "#222224"
        },
        basicOrange: "#FF9B70",
        basicRed: "#FF5A5A",

        icon: {
          "100": "#2FBAF7",
          "200": "#A09F9F"
        }
      },
      fontFamily: {
        typo: ["Spoqa Han Sans", ...defaultTheme.fontFamily.sans]
      },
      minWidth: {
        "400": "400px"
      },
      maxWidth: {
        "1190": "1190px"
      }
    }
  },
  variants: {},
  plugins: []
};
