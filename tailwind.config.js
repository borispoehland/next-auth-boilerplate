const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/data/classNames.ts',
    ],
    options: {
      safelist: [/^bg-/, /^text-/, /^border-/],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    nightwind: {
      transitionDuration: false,
    },
    extend: {
      colors: {
        primary: colors.purple,
        base: colors.gray,
      },
      width: {
        152: '38rem',
      },
      spacing: {
        26: '6.5rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      translate: ['dark'],
    },
  },
  plugins: [require('nightwind')],
};
