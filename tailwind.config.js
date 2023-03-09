/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
    //   'ssm': '376.51px',
    //    // => @media (min-width: 376.51px){...}
        // 'lgs' : '1920px',
         // => @media (min-width: 1920px)
     },
    extend: {
      fontFamily:{
      "Rubik":["Rubik", ...defaultTheme.fontFamily.sans],
      "Labrada": ["Labrada", ...defaultTheme.fontFamily.sans],
      "Comfortaa": ["Comfortaa", ...defaultTheme.fontFamily.sans],
        },

    },
    
  },
  plugins: [],
}


