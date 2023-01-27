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
        // Cascading blues #1
        // 'veryDarkBlue' : '#0A2647',
        // 'darkBlue' : '#144272',
        // 'lightBlue' : '#205295',
        // 'lighterBlue' : '2C74B3',
        // Cascading blues #2
        'veryDarkBlue' : '#0b132b',
        'darkBlue' : '#1c2541',
        'grayishBlue' : '#3a506b',
        'lightBlue' : '#6fffe9'
        // Dark theme with Purple
        // 'veryDarkBlue' : '#03001C',
        // 'purple' : '#301E67',
        // 'lightBlue' : '#5B8FB9',
        // 'lighterBlue' : '#B6EADA',
      },
      backgroundImage : {
        'hero-pattern' : "url(/src/assets/hero.png)"
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