/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
      gridTemplateColumns:{
        '70-30': '70% 28%'
      }
    },
  },
  plugins: [],
}
