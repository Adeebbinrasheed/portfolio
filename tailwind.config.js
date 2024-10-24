/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        new:["Caveat", "cursive"],
        new1:["Bricolage Grotesque", "sans-serif"]
       },
    },
  },
 
  plugins: [],
}

