/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.25) 29%,rgba(20,20,20,.38) 44%,#141414e4 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    /* use public package : https://www.npmjs.com/package/tailwindcss-textshadow */
    require('tailwindcss-textshadow')
    /* or */
    /* use custom own : https://qiita.com/oedkty/items/067434af65a5d121742d */
    /* function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    } */
  ],
}
