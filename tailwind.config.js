module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayBlue: 'hsl(210, 10%, 33%)',
      grayBlue: 'hsl(201, 11%, 66%)',
      white: 'hsl(0, 100%, 100%)'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image-mobile': "url('/src/img/bg-header-mobile.png')",
        'hero-image-desktop': "url('/src/img/bg-header-desktop.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
