/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave-animation 2.1s infinite",
      },
    },
  },
  variants:{},
  plugins: [],
};