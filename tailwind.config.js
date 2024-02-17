/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'pinkyLight': '#ff8fd8',
        'pinky': '#ff52bf',
        'Darkcyan': '#00252e',
        'paleblue': '#F5FAFF'
      },
      fontSize: {
        v: "0.65rem"
        },
      fontFamily:{ 
        'heading':['Poppins'],
        'body':['Open Sans'] 
        
      }
    },
  },
  plugins: [],
}
