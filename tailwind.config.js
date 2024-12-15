/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f4c81',
        secondary: '#2c7da0',
      }
    },
  },
  plugins: [],
}