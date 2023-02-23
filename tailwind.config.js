/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs' : '480px'
      },
      colors : {
        baby : {
          1 : '#423F8D',
          2 : '#4cd3e3',
          3 : '#38a4ff',
          4 : '#f4e700',
          5 : '#f44a40',
          6 : '#ED078B',
          7 : '#007bff',
        },
        babyTransparent : {
          1 : '#423F8D',
          2 : '#4cd3e31f',
          3 : '#38a4ff',
          4 : '#f4e700',
          5 : '#f44a40',
          6 : '#ed078b4d',
          7 : '#007bff'
        }
      }
    },
  },
  plugins: [],
}