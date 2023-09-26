/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        124: "124px",
        450: "450px",
        20: "20px",
      },
      boxShadow: {
        "3xl":
          "0px 0px 100px 47px rgb(0 0 0 / 0.1), 4px 2px 4px -2px rgb(0 0 0 / 0.1);",
      },
      colors: {
        blue: "#0d2b4e",
        "light-blue":"#4a5f78",
        purple: "#6b46c1",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        "light-gray":"#ccd6e0",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
}

