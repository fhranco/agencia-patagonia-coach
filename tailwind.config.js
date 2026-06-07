/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        patagonia: {
          gold: "hsl(45, 100%, 50%)",
          black: "hsl(0, 0%, 3%)",
          surface: "hsl(0, 0%, 8%)",
          red: "#ff1721",
          white: "hsl(0, 0%, 98%)",
          secondary: "hsl(0, 0%, 60%)",
          cyan: "#00e5ff",
        },
      },
      fontFamily: {
        heading: ["'Outfit'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'card': '1.5rem', // 24px
        'btn': '0.75rem', // 12px
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}
