/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "pale-violet": "#D89EFF",
      "mod-violet": "#9241C8",
      "dark-violet": "#6E5D7E",
      "grayish-blue": "#C6CACD",
      "very-dark-violet": "#3E2753",
      "grayish-violet": "#A39DAA",
      "light-magenta": "#E942FF",
      "light-violet": "#8838FF",
      "light-grayish-violet": "#F5F3F7",
      "very-light-magenta": "#E570FF",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Sans serif"],
      },
    },
  },
  plugins: [],
};
