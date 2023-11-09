/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#A259FF",
      },
      fontFamily: {
        Space_mono: ["Space Mono", "monospace"],
        Work_sance: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
