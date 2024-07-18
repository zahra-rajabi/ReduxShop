/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#000000",
        BLUE: "#14213D",
        ORANGE: "#B1560F",
        GRAY: "#E5E5E5",
        TEXT_GRAY: "#2e2e2e",
        WHITE: "#FFFFFF",
        scrollbarGray: "#a0a0a0",
      },
      screens: {
        xsm: "385px",
        medium: "458px",
        xmd: "811px",
        large: "850px",
        lmd: "595px",
        average: "500px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      preferredStrategy: "pseudoelements",
    }),
  ],
};
