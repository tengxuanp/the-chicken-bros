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
                         'menu-pattern':"linear-gradient(40deg, rgba(12,209,81,1) 0%, rgba(55,124,135,1) 18%, rgba(129,6,142,1) 77%, rgba(187,18,120,1) 100%)",
                         'menu-pattern2':"linear-gradient(40deg, rgba(255,45,45,1) 0%, rgba(161,115,65,1) 14%, rgba(20,182,189,1) 77%, rgba(238,141,215,1) 100%)",
                         'faqBg':"linear-gradient(40deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%)",
                         'contact-pattern':"linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(208,208,208,1) 36%, rgba(0,0,0,1) 100%)",
                        },
      animation:{bounce1:"bounce1 5s infinite", 
                bounce2:"bounce1 6s infinite",
                rotate1:"rotate1 4s infinite",
                marquee1:"marquee1 10s linear infinite",
                marquee2:"marquee1 20s linear infinite",
                gradient1:"gradient 15s ease infinite",
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
        },
        gradient1:{
          "0%": {backgroundPosition : "0% 50%",},
          "50%": {backgroundPosition : "100% 50%",},
          "100%": {backgroundPosition : "0% 50%",},
        },

      }
    },
  
  plugins: [],
}
