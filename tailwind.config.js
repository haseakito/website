/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "rocket": "rocket 10s",
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s  both",        
        "fade-in": "fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "shine": "shine 1s",
        'waving-hand': 'wave 2s linear infinite',
        "heartbeat": "heartbeat 1.5s ease  infinite both"
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
      "fade-in" : {
        "0%": {
            opacity: "0"
        },
        to: {
            opacity: "1"
        }
      },
      shine: {
        "100%": { left: "125%" }
      },
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
      heartbeat: {
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
      }
    }
  },
  plugins: [],
}
