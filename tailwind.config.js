/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        this: "#1C283A",
        that: "#222831",
        in: "#76ABAE",
        out: "#B4F6FA",
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [require("rippleui")],
};
