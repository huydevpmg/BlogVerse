/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainLayout: "#16537e",
      },
      height: {
        hsmall: "1px",
      },
    },
  },
  plugins: [],
};
