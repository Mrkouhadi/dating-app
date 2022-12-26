/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    // join(__dirname, './app/**/*.{js,ts,jsx,tsx}'),
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f856a6', 
        secondary:"#6b81f9",
        dark:"#343c4f",
        accent:"#4cc2ef",
      }
    },
  },
  plugins: [],
}

