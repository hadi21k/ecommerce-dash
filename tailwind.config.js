/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Neue Haas Grotesk Text Pro", "sans-serif"],
      },
      backgroundColor: {
        primary: "#84CC16",
        dark: "#141514",
        light: "#F6F7FB",
      },
      borderColor: {
        gray: "#222222",
      },
      textColor: {
        dark: "#F6F7FB",
        primary: "#84CC16",
        light: "#141514",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
