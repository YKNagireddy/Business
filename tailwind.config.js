/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        'custom-blue': 'invert(31%) sepia(27%) saturate(1156%) hue-rotate(207deg) brightness(93%) contrast(90%)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      }
    },
  },
  plugins: [],
}