module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-p': '#00A38B',
        'green-s': '#88CCAB',
        'purple': '#563078',
        'black': '#333333',
        'lime-p': '#DBE11F',
        'lime-s': '#CECF17',
      },
    },
    fontFamily: {
      open: ['Open Sans', 'sans-serif'],
      merri: ['Merriweather', 'sans-serif']
    },
  },
  plugins: [],
}
