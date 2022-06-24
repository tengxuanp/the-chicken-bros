/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {'cbRed': '#F11A3E',
                'cbBg': '#FFFBEB'},
      backgroundImage: {'home-pattern':"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(225,102,176,1) 20%, rgba(123,255,176,1) 92%)",
                        'sub-pattern':"hsla(0, 0%, 0%, 1)",
                         'menuBg': 'url(./assets/menuBg.jpg)', 
                         'aboutBg': 'url(./assets/logo.png)', 
                        },
      animation:{bounce1:"bounce1 5s infinite", 
                bounce2:"bounce1 6s infinite",
                rotate1:"rotate1 4s infinite",
                marquee1:"marquee1 10s linear infinite",
                marquee2:"marquee1 20s linear infinite",
                },
      },

      keyframes:{
        bounce1:{
          "0%": {transform: "translateY(-2%)",},
          "50%": {transform: "translateY(0%)",},
          "100%": {transform: "translateY(-2%)",},
        },
        bounce2:{
          "0%": {transform: "translateY(3%)",},
          "63%": {transform: "translateY(0%)",},
          "100%": {transform: "translateY(3%)",},
        },
        rotate1:{
          "0%": {transform: "rotate(1.5deg)",},
          "50%": {transform: "rotate(0deg)",},
          "100%": {transform: "rotate(1.5deg)",},          
        },
        marquee1:{
          "100%": {transform:"translate(-100%,0)",},
        }  
      }
    },
  
  plugins: [],
}
