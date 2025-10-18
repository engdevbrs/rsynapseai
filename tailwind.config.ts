import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional color palette - Primary: #18cade
        brand: {
          primary: "#18cade",    // Primary brand color - títulos
          light: "#4dd9e8",      // Lighter variant - subtítulos
          lighter: "#7ee3ef",    // Lightest variant - acentos
          dark: "#12a0b0",       // Darker variant
          darker: "#0d7580",     // Darkest variant
        },
        // Backgrounds - Azul marino oscuro
        bg: {
          primary: "#0a1128",      // Navy blue oscuro principal
          secondary: "#0f1936",    // Navy blue medio
          tertiary: "#152144",     // Navy blue claro
        },
        // Text Colors
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],  // Clean, professional
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      boxShadow: {
        "subtle": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        'gradient-h1': 'linear-gradient(135deg, #0d7580 0%, #18cade 50%, #4dd9e8 100%)',
        'gradient-h2': 'linear-gradient(135deg, #18cade 0%, #4dd9e8 100%)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-gradient-h1': {
          'background': 'linear-gradient(135deg, #6366f1 0%, #18cade 50%, #4dd9e8 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-h2': {
          'background': 'linear-gradient(135deg, #18cade 0%, #a78bfa 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    }),
  ],
};

export default config;
