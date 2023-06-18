/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkblue: {
          0: "#1b242f",
          1: "#252934"
        },
        pink: "#e31b6d",
        golden: "#FFD100" 
      }
    },
  },
  plugins: [],
}
