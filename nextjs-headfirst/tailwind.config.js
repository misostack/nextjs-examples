const { safelist } = require("./tailwind.safelist");

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: safelist,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#1498d5",
      },
      fontFamily: {
        body: ["arial"],
        heading: ["'Merriweather', serif"],
      },
      textColor: {
        primary: "#1498d5",
      },
      backgroundColor: {
        primary: "#1498d5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/forms")({
    //   strategy: "base",
    //   strategy: "class",
    // }),
  ],
};
