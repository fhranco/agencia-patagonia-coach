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
          black: "#05070A",      // Basalto Austral (Fondo principal)
          surface: "#0B0F17",    // Pizarra Oscura (Fondo secundario / tarjetas)
          gold: "#F59E0B",       // Ámbar Patagónico (Acento principal de identidad)
          amberDark: "#D97706",  // Ámbar Profundo (Interacciones y bordes)
          white: "#F8FAFC",      // Blanco Escarcha (Texto principal)
          secondary: "#94A3B8",  // Niebla Austral (Texto secundario / técnico)
          cyan: "#38BDF8",       // Cian Glaciar (Exclusivamente señal técnica/datos)
          red: "#cc111a",        // Legacy preserve
        },
      },
      fontFamily: {
        heading: ["'Outfit'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
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
