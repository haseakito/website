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
        "fade-in": "fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "shine": "shine 1s",
        'waving-hand': 'wave 2s linear infinite',        
      }
    },
    keyframes: {
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
    }
  },
  plugins: [],
}
