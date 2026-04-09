/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1b1b",
        paper: "#f6f3ee",
        accent: "#c4632d",
        accent2: "#2a7d6e",
        muted: "#87817a",
        surface: "#ffffff",
        divider: "#e2ddd6",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        body: ['"Manrope"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.4s cubic-bezier(.22,1,.36,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
