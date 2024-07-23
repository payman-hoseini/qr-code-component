/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Slate-300' : 'hsl(212, 45%, 89%)',
        'Slate-500' : 'hsl(216, 15%, 48%)',
        'Slate-900' : 'hsl(218, 44%, 22%)',
      },
      fontFamily : {
        Outfit : ["Outfit"]
      }
    },
  },
  plugins: [],
}

