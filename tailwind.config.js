const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', '/posts/*.{md, mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        green: colors.green,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        teal: colors.teal,
        yellow: colors.yellow,
      },
      fontFamily: {
        "bot": ["Roboto",],
      },
    },
  },
  variants: {
    extend: {
      scale: ["active",]
    },
  },
  plugins: [],
}
