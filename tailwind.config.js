const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        custom: {
          background: "#252627",
          title: "#FFF",
          content: "#BEBEBE",
          cards: "#A0A0A1",
        },
      },
      fontFamily: {
        mono: ["ChakraPetch", defaultTheme.fontFamily.mono],
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
