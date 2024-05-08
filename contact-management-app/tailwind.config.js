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
        //Moon Phases theme
        'custom-white':'#d3d9d4',
        'custom-gray':'#748d92',
        'custom-blue':'#124e66',
        'custom-dark-gray':'#2e3944',
        'custom-black2':'#212a31',

        //blue-gray theme
        'custom-off-white':'#f0ebdb',
        'custom-light-blue':'#c5e2fb',
        'custom-gray2':'#3e5c76',
        'custom-dark-gray2':'#1d2d44',
        'custom-black':'#od1321',
        'custom-color': '#f0f8ff',

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

