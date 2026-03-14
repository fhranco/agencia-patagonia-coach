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
          red: "#F0140A",
          void: "#0F1729",
          surface: "#1F2937",
          cyan: "#00E5FF",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
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
