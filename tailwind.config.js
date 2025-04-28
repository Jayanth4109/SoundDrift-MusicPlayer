/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softCream: "#eaecc6",
        skyWave: "#2bc0e4",
        myBlue:"#001128",
        desertSand:"#f87060",
        lightBack :"#fff6e0"
      },
      fontFamily: {
        faculty: ['"Faculty Glyphic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

