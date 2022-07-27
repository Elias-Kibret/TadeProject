/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Container/Home/**/*.{js,ts,jsx,tsx}',
    './Container/WhatsNew/News/**/*.{js,ts,jsx,tsx}',
    './Container/WhatsNew/Research/**/*.{js,ts,jsx,tsx}',
    './Container/Awards/**/*.{js,ts,jsx,tsx}',
    './Container/Navbar/**/*.{js,ts,jsx,tsx}',
    

  ],
  theme: {
    screens: {
      'xs':'450px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontFamily:{
      poppins:["Poppins,sans-serif"]
    }
  },
  plugins: [],
}
