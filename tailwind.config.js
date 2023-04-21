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
          8 : '#4255A4',
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
      },
      keyframes: {
        scaleToScreen: {
          '0%' : { transform : 'scale(1)' },
          '100%' : { transform : 'scale(1.08)' }
        },
        fade : {
          '0%' : { opacity : 0 },
          '100%' : { opacity : 1 }
        },
      },
      animation : {
        scaleToScreen : 'scaleToScreen 10s linear infinite',
        fade : 'fade .2s linear'
      },
      boxShadow : {
        'all-sm' : '0 0 10px #e2e8f0',
        'all-md' : '0 0 20px #e2e8f0',
        'all-lg' : '0 0 30px #e2e8f0',
      }
    },
  },
  plugins: [],
}