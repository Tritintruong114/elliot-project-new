/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {},
    // fontSize: {'10xl':['100px','100px']},
  },
  display: ["responsive", "hover", "focus", "active", "group-hover"],
  plugins: [],
};
