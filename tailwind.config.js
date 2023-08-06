/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      animation: {
        "rocket": "rocket 10s 4s",
        "engineering": "engineering 6s infinite",
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s  both",
        "tracking-in-expand": "tracking-in-expand 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "appear-gradually": "appear-gradually 4s linear",
        "slide-in-right": "slide-in-right 1.5s  3s both",
        "slide-in-left": "slide-in-left 1.5s  3.5s both",
        "fade-in": "fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)  2s both",
        "flip-in": "flip-in 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both",
        "flip-vertical-right": "flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both",
        "shine": "shine 1s",
        'waving-hand': 'wave 2s linear infinite',
        "heartbeat": "heartbeat 1.5s ease  infinite both",
        
      }
    },
    keyframes: {
      "rocket": {
        '0%': { transform: 'scale(1) rotate(10deg)'},
        '5%': { transform: 'scale(1.25) rotate-(-15deg)'},
        '10%': { transform: 'scale(1.5) rotate(5deg)' },
        '15%': { transform: 'scale(1.75) rotate(-10deg)' },
        '20%': { transform: 'scale(2) rotate(0)' },
        '100%': { transform: 'scale(20) translate3D(100vh, -100vh, 0) rotate(0)' },
      },
      "engineering": {
        '0%': { transform: 'rotate(0deg)' },
        '10%': { transform: 'rotate(40deg)' },
        '20%': { transform: 'rotate(80deg)' },
        '30%': { transform: 'rotate(120deg)' },
        '40%': { transform: 'rotate(160deg)' },
        '50%': { transform: 'rotate(200deg)' },
        '60%': { transform: 'rotate(240deg)' },
        '70%': { transform: 'rotate(280deg)' },
        '80%': { transform: 'rotate(320deg)' },
        '90%': { transform: 'rotate(360deg)' },
        '100%': { transform: 'rotate(deg)' },
      },
      "scale-in-center": {
        "0%": {
          transform: "scale(0)",
          opacity: "1"
        },
        to: {
          transform: "scale(1)",
          opacity: "1"
        }
      },      
      "tracking-in-expand": {
        "0%": {
            "letter-spacing": "-.5em",
            opacity: "0"
        },
        "40%": {
            opacity: ".6"
        },
        to: {
            opacity: "1"
        }
      },
      "appear-gradually": {
        "0%": {
          width: "0%"
        },
        "33%": {
          width: "30%"
        },
        "60%": {
          width: "70%"
        },
        to: {
          width: "100%"
        }
      },
      "slide-in-right": {
        "0%": {
            transform: "translateX(1000px)",            
            opacity: "0"
        },
        to: {
            transform: "translateX(0)",
            rotate: "-130deg",
            opacity: "1"
        }
      },
      "slide-in-left": {
        "0%": {
            transform: "translateX(-1000px)",
            opacity: "0"
        },
        to: {
            transform: "translateX(0)",
            rotate: "-20deg",
            opacity: "1"
        }
      },
      "fade-in" : {
        "0%": {
            opacity: "0"
        },
        to: {
            opacity: "1"
        }
      },
      "shine": {
        "100%": { left: "125%" }
      },
      "flip-in": {
        "0%": {
            transform: "rotateX(80deg)",
            opacity: "0"
        },
        to: {
            transform: "rotateX(0)",
            opacity: "1"
        }
      },
      "flip-vertical-right": {
        "0%": {
            transform: "rotateY(0)"
        },
        to: {
            transform: "rotateY(180deg)"
        }
      },
      "wave": {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
      "heartbeat": {
        "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out"
        },
        "10%": {
            transform: "scale(.91)",
            "animation-timing-function": "ease-in"
        },
        "17%": {
            transform: "scale(.98)",
            "animation-timing-function": "ease-out"
        },
        "33%": {
            transform: "scale(.87)",
            "animation-timing-function": "ease-in"
        },
        "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out"
        }
      },
    }
  },
  plugins: [],
}
