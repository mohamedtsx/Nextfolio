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
      colors: {
        darkblue: {
          0: "#1b242f",
          1: "#252934"
        },
        pink: "#e31b6d",
        golden: "#FFD100",
        green: "#00FF00"
      }
    },
  },
  plugins: [],
}
