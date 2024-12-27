/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        grayish: "rgba(17, 17, 17, 0.05)",
        main: "#E527B2",
        blackish: "#111111",
        demain: "#b31589",
        whitish: "#F8F8F8",
      },
    },
  },
  plugins: [require("daisyui")],
};
