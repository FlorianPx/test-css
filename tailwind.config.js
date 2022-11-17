/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#F5F5F5",
      },
      fontSize: {
        small: "13px",
      },
      boxShadow: {
        defaultBowShadow: "0px 8px 6px #000000",
      },
    },
  },
  plugins: [],
};
