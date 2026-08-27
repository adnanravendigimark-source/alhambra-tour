import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#0F5C56",
          50: "#f3f6f3",
          100: "#e4ece4",
          600: "#2d4932",
          700: "#0F5C56",
          800: "#0B4640",
          900: "#17251a",
        },
        terracotta: {
          DEFAULT: "#B8863B",
          50: "#fdf6f3",
          100: "#faeae3",
          500: "#B8863B",
          600: "#96702E",
          700: "#964123",
        },
        ivory: {
          DEFAULT: "#FAFAF8",
          50: "#fdfbf7",
          100: "#FAFAF8",
          200: "#f0e6d4",
        },
        gold: {
          DEFAULT: "#D4AF6A",
          300: "#E9D09C",
          400: "#d3ab67",
          500: "#D4AF6A",
          600: "#B0925A",
        },
        sandstone: {
          DEFAULT: "#E5D6BE",
          100: "#f4eee3",
          200: "#E5D6BE",
          300: "#d4c1a3",
        },
        sage: {
          DEFAULT: "#D6E8E4",
          100: "#f0f4ee",
          200: "#D6E8E4",
          300: "#c4cfbd",
        },
        charcoal: {
          DEFAULT: "#29302A",
          500: "#3d473e",
          800: "#29302A",
          900: "#1d221e",
        },
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#29302A",
          azure: "#D4AF6A",
          royal: "#0F5C56",
          sapphire: "#B8863B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-serif)", "var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(15, 92, 86,0.15) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(184, 134, 59,0.15) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(250, 250, 248,0.85) 0, transparent 50%)",
        "gold-gradient":
          "linear-gradient(135deg, #D4AF6A 0%, #E9D09C 50%, #B0925A 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(15, 92, 86, 0.30)",
        "red-glow": "0 0 35px -5px rgba(184, 134, 59, 0.35)",
        "gold-glow": "0 0 35px -5px rgba(212, 175, 106, 0.35)",
        "btn-glow": "0 10px 25px -5px rgba(15, 92, 86, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

