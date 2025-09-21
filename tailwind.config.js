/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // você pode testar mudando essa cor
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // exemplo de fonte personalizada
      },
    },
  },
  plugins: [],
}
