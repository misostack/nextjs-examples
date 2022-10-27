const tailwindColors = require("./node_modules/tailwindcss/colors");
const safelist = [];

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue;
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const pallette = tailwindColors[colorName];

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        safelist.push(`text-${colorName}-${shade}`);
        safelist.push(`bg-${colorName}-${shade}`);
      }
    });
  }
}
module.exports = { safelist };
