/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./views/**/*.{html,ejs}", // Sesuaikan dengan ekstensi file yang Anda gunakan di views
    "./views/*.{html,ejs}", // Sesuaikan dengan ekstensi file yang Anda gunakan di views
    "./public/js/**/*.js",
    "./views/**/*.{html,js}"
  ],
  // safelist: [
  //  {
  //   pattern: /./, // the "." means "everything"
  //  },
  // ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'heading': ['League Spartan', 'sans-serif'], // Gantikan dengan fallback font jika perlu
        'body': ['Bahnschrift', 'sans-serif'], // Gantikan dengan fallback font jika perlu
      },
      colors: {
        'green' : '#1E4011',
        'gold-light': '#957135',
        'gold-dark': '#DFBC6A',
      },
      backgroundImage: theme => ({
        'padi-pattern': "url('/images/padi.jpg')",
      }),
    },
  },
  plugins: [require("daisyui"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}