module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'sma1-img': "url('/aset/bg1.jpeg')",
        'sma2-img': "url('/aset/bg2.jpeg')",
        'bulat-img': "url('/aset/bulat.png')",
      }),
      colors:{
        lb:'#CE9400',
        fc:'#FFFBEB',
      },
    },
  },
  plugins: [],
}
