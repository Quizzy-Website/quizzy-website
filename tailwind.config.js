/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#F7D047",
        "secondary-yellow": "#F3E24D",
        "primary-grey": "#2C2D2D",
        black: "#040404",
        white: "#ffffff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
