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
<<<<<<< HEAD
    // screens:{
    //   'ssm': '376.51px',
    //    // => @media (min-width: 376.51px){...}
    // },
=======
    screens:{
      'ssm': '376.51px',
       // => @media (min-width: 376.51px){...}
    },
>>>>>>> aaaa828340c75ad9cf2cabbb9a6bcac6c1de702e
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


