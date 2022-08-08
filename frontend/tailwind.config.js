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
    './Container/Research/**/*.{js,ts,jsx,tsx}',
    './Container/Publications/**/*.{js,ts,jsx,tsx}',
    './Container/Presentation/**/*.{js,ts,jsx,tsx}',
    './Container/ResearchInterset/**/*.{js,ts,jsx,tsx}',
    './Container/callForContribution/**/*.{js,ts,jsx,tsx}',
    
    
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
    fontSize: {
      'xs': '.75rem',
      'sm': '.78rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
    fontFamily:{
      poppins:["Poppins,sans-serif"]
    }
  },
  plugins: [],
}
