/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'bg-color': 'background-color'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
