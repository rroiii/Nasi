/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./views/**/*.{html,ejs}", // Sesuaikan dengan ekstensi file yang Anda gunakan di views
    "./views/*.{html,ejs}", // Sesuaikan dengan ekstensi file yang Anda gunakan di views
    "./public/js/**/*.js",
    "./views/**/*.{html,js}"
  ],
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
  theme: {
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