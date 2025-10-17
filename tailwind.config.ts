import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        card: {
          primary: "var(--card-bg-primary)",
          secondary: "var(--card-bg-secondary)",
          accent: "var(--card-bg-accent)",
        },
        // Neon Colors
        neon: {
          cyan: "var(--neon-cyan)",
          "cyan-glow": "var(--neon-cyan-glow)",
          "cyan-subtle": "var(--neon-cyan-subtle)",
        },
        electric: {
          blue: "var(--electric-blue)",
          "blue-glow": "var(--electric-blue-glow)",
          "blue-subtle": "var(--electric-blue-subtle)",
        },
        purple: {
          neon: "var(--neon-purple)",
          "neon-glow": "var(--neon-purple-glow)",
          "neon-subtle": "var(--neon-purple-subtle)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        // Status Colors
        success: "var(--success-green)",
        warning: "var(--warning-orange)",
        error: "var(--error-red)",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-space-grotesk)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(91, 124, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.8)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(91, 124, 255, 0.5)",
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(217, 70, 239, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
