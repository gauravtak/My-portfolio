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
      'sm':'340px',
      'md': '1360px',
      'mmd': '1280px',
      'lg': '1920px',
      'llg':  '3840px'
      
     },
    extend: {
      fontFamily:{
      "Rubik":["Rubik", ...defaultTheme.fontFamily.sans],
      "Labrada": ["Labrada", ...defaultTheme.fontFamily.sans],
      "Comfortaa": ["Comfortaa", ...defaultTheme.fontFamily.sans],
      "Nunito":["Nunito", ...defaultTheme.fontFamily.sans ],
        },

    },
    
  },
  plugins: [],
}


