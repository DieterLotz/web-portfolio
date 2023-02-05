/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono' : ['Roboto Mono', 'monospace']
      },
      screens: {
        'sm' : '480px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1200px',
      },
      colors : {
        'veryDarkPrimaryAccent' : '#0b132b',
        'darkPrimaryAccent' : '#1c2541',
        'secondaryAccent' : '#3a506b',
        'lightSecondaryAccent' : '#6fffe9'
      },
      backgroundImage : {
        'hero-pattern' : "url(/src/assets/hero.png)",
        'radial-dots' : "radial-gradient(#49494a 0.8px, #0b132b 0.8px)",
      },
      keyframes : {
        fade : {
          '0%' : { opacity: '0'},
          '100%' : { opacity: '1'}
        },
        fadeFromLeft : {
          '0%' : { opacity: '0', transform: 'translate3d(-50px, 0, 0)'},
          '100%' : { opacity: '1'}
        },
      },
      animation: {
        'fade150': 'fade 0.15s linear',
        'fade250': 'fade 0.25s linear',
        'fadeFromLeft300': 'fadeFromLeft 0.3s linear',
      }
    },
  },
  plugins: [],
}