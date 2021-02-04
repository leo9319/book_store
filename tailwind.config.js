module.exports = {
  purge: {
      enabled: false,
      content: [
          '*.php'
      ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            ubu: ["Ubuntu", "sans-serif"]
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tailwindcss'),
      require('autoprefixer')
  ],
}
