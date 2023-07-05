/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-why-to-learn-js',
    'bg-how-git-works',
    'bg-cs-toolkit',
    'bg-high-performance-website',
    'bg-omnifood',
    'bg-crown-clothing',
    'bg-nextfolio',
    'bg-nextblog',
    'bg-notes-app',
    'bg-job-board'
  ],
  theme: {
    container: {
      center: true
    },
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
        },
        opacity: {
          "0%": {opacity: "0"},
          "50%": {opacity: "0"},
          "100%": {opacity: "1"}
        }
      },
      animation: {
        drop: "drop 300ms forwards",
        menu:  "menu 300ms forwards",
        darkbg: "darkbg 250ms forwards",
        light: 'light 5s ease-in-out infinite',
        opacity: 'opacity 2s ease-in-out forwards',
      },
      colors: {
        darkblue: {
          0: "#0a192f",
          1: "#252934"
        },
        gold: "#FFD100",
        green: "#00FF00",
        graybg: "rgba(153, 153, 153, 0.2)",
        gray: {
          title: "#444649",
          text: "#616161",
          light: "#f5f5f5"
        }
      },
      backgroundImage: {
        'omnifood': "url('/static/projects/omnifood.webp')",
        'crown-clothing': "url('/static/projects/crown-clothing.webp')",
        'nextfolio': "url('/static/projects/nextfolio.webp')",
        'nextblog': "url('/static/projects/nextblog.webp')",
        'notes-app': "url('/static/projects/notes-app.webp')",
        'job-board': "url('/static/projects/job-board.webp')",
        'why-to-learn-js': "url('/static/blogs/why-to-learn-js.webp')",
        'how-git-works': "url('/static/blogs/how-git-works.webp')",
        'high-performance-website': "url('/static/blogs/high-performance-website.webp')",
        'cs-toolkit': "url('/static/blogs/cs-toolkit.webp')"
      },
      gridTemplateColumns: {
        "minmax390": "repeat(auto-fit, minmax(390px, 1fr))",
        "minmax280": "repeat(auto-fit, minmax(280px, 1fr))"
      }
    }
  },
  plugins: [],
}
