import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Mar de Gloria
        burdeos: {
          DEFAULT: "#6d0000",
          deep: "#4a0000",
          ink: "#2a0000",
          wine: "#5a0202",
          glow: "#8a0a0a"
        },
        oro: {
          DEFAULT: "#9b8548",
          light: "#c8ad6b",
          pale: "#d9c089",
          deep: "#6f5d2e"
        },
        crema: {
          DEFAULT: "#c9d9d6",
          warm: "#e8e1d1",
          paper: "#f3ead7",
          deep: "#a8b6b3"
        },
        tinta: "#020202"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        "ultra": "0.6em",
        "menu": "0.45em"
      },
      backgroundImage: {
        "papel":
          "radial-gradient(ellipse at 30% 20%, rgba(155,133,72,0.10), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(74,0,0,0.18), transparent 60%)",
        "telon":
          "linear-gradient(180deg, #6d0000 0%, #5a0202 50%, #4a0000 100%)",
        "oro-stripe":
          "linear-gradient(90deg, transparent 0%, #c8ad6b 50%, transparent 100%)"
      },
      animation: {
        "drift": "drift 14s ease-in-out infinite",
        "curtain": "curtain 1.6s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "ink": "ink 2s ease-out forwards"
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" }
        },
        curtain: {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0% 0)" }
        },
        ink: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};
export default config;
