import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        "bg-secondary": "#161b22",
        "bg-tertiary": "#1c2128",
        accent: "#58a6ff",
        "accent-dim": "#1f3a5f",
        "text-primary": "#e6edf3",
        "text-secondary": "#8b949e",
        border: "#30363d",
        success: "#3fb950",
        warning: "#d29922",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
