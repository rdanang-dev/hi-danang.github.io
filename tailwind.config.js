module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
