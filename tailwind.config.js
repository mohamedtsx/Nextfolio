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
        }
      },
      animation: {
        drop: "drop 300ms forwards"
      },
      colors: {
        darkblue: {
          0: "#1b242f",
          1: "#252934"
        },
        pink: "#e31b6d",
        gold: "#FFD100",
        green: "#00FF00"
      }
    }
  },
  plugins: [],
}
