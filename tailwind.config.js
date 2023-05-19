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
      'secondary-color': '#A4A4A',
  
      'text': '#828282',
      'green': '#00DF5E',
      'gray': '#333333',
      'dark-gray': '#212121',
      'very-dark-gray': '#171717',
    },
    extend: {

    },
  },
  plugins: [],
}
