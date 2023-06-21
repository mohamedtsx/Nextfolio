/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        "min-75vw-400": "min(75vw, 400px)" 
      },
      keyframes: {
        drop: {
          "0%": { transform: "translateY(0) rotate(45deg)" },
          "50%": { transform: "translateY(30px) rotate(45deg)" },
          "100%": { transform: "translateY(10px) rotate(45deg)" }
        }, 
        menu: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0)"}
        },
        darkbg: {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        },
        light: {
          "0%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(20%)"},
          "100%": {transform: "translateY(0)"}
        }
      },
      animation: {
        drop: "drop 300ms forwards",
        menu:  "menu 300ms forwards",
        darkbg: "darkbg 250ms forwards",
        light: 'light 5s ease-in-out infinite'
      },
      colors: {
        darkblue: {
          0: "#0a192f",
          1: "#252934"
        },
        gold: "#FFD100",
        green: "#00FF00",
        graytext: "#616161",
        graytitle: "#444649"
      }
    }
  },
  plugins: [],
}
