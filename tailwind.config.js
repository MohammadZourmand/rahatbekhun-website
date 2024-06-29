/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs' : '480px',
        '2xl' : '1400px',
        '3xl' : '1515px'
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
          9 : 'rgb(45, 105, 240)',
          10 : 'rgb(221, 36, 110)',
          11 : 'rgb(128, 7, 230)',
          12 : 'rgb(12, 174, 116)',
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
        comeFromTop : {
          '0%' : { 
            transform : 'translateY(-20px)',
            opacity : 0
          },
          '100%' : { 
            transform : 'translateY(0)',
            opacity : 1
          }
        },
        comeFromBottom : {
          '0%' : {
            transform : 'translateY(100px)',
            opacity : 0.7
          },
          '100%' : {
            transform : 'translateY(0)',
            opacity : 1
          }
        },
        fade : {
          '0%' : { opacity : 0 },
          '100%' : { opacity : 1 }
        },
        slowSpin : {
          '0%' :  {transform: 'rotate(0deg)'},
          '100%' :  {transform: 'rotate(360deg)'}
        },
        goAndBack : {
          '0%' :  { transform: 'translateY(0)'},
          '100%' :  { transform: 'translateY(5rem)'}
        },
        comeFromRight : {
          '0%' :  {
            transform: 'translateX(10rem)'
          },
          '50%' :  {
            transform: 'translateX(-2rem)'
          },
          '100%' :  {
            transform: 'translateX(0)'
          }      
        },
        scaleX : {
          '0%' :  {
            transform: 'scaleX(0.1)',
            right : '-40px'
          },
          '100%' :  {
            transform: 'scaleX(1)',
            right : '0'
          }      
        }
      },
      animation : {
        scaleToScreen : 'scaleToScreen 10s linear infinite',
        fade : 'fade .2s linear',
        comeFromTop : 'comeFromTop .4s ease both',
        comeFromBottom : 'comeFromBottom .4s ease',
        slowSpin : 'slowSpin 4s linear infinite',
        goAndBack : 'goAndBack 4s linear infinite alternate',
        comeFromRight : 'comeFromRight .7s ease-in-out alternate',
        scaleX : 'scaleX .3s alternate'
      },
      boxShadow : {
        'all-sm' : '0 0 10px #e2e8f0',
        'all-md' : '0 0 20px #e2e8f0',
        'all-lg' : '0 0 30px #e2e8f0',
      },
      fontFamily : {
        nozha : ['var(--font-nozha)']
      }
    },
  },
  plugins: [],
}