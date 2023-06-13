/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-white': '#F9F9F9',
      'primary-black': '#212429',
      'primary-gray': '#A4A4A4',
      'secondary-gray': '#828282',
      'gray': '#333333',
      'green': '#00DF5E',
      'dark-gray': '#212121',
      'very-dark-gray': '#171717',
    },
    extend: {
      screens: {
        '2xl': '1366px',
        '3xl': '1700px',
        'laptop': {
          'raw': '(max-height: 720px)'
        },
        'max-md': {'max': '767px'},
      }
    },
  },
  plugins: [],
}
