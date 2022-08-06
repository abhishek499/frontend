/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine"],
        belleza: ["Belleza"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
