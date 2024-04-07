/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}