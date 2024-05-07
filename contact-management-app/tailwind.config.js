/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#fffbed', // Custom color value
        'custom-color-hover':'#FFF6e3',
      },
      fontFamily: {
        'myfont': ['myfont', 'sans-serif'],
      },
      height: {
        'custom-height': '96vh', // Custom height value
      },
    },

  },
  plugins: [],
});

