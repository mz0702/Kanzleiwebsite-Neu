/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#F7F6F2",
        "paper-2": "#EEECE6",
        ink: "#161514",
        "ink-soft": "#57534E",
        muted: "#7A756E",
        night: "#0F0E0D",
        accent: "#9D2119",
        "accent-deep": "#7E1912",
        "accent-bright": "#E0614F",
        // Haarlinien folgen dem Sektions-Thema (siehe [data-theme] in globals.css).
        line: "var(--line)",
      },
    },
  },
  plugins: [],
};
