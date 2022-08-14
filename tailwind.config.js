/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
        Heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-autofill'),
    require('tailwindcss-text-fill'),
    require('tailwindcss-shadow-fill'),
  ],
};
