/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine"],
        belleza: ["Belleza"],
        montserrat: ["Montserrat"],
        dm: ["DM Sans"],
      },
      colors: {
        col1: "#fd7e14",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
