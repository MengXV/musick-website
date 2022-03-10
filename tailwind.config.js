module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'Arial', 'sans-serif']
      },
      colors:{
        'pink': '#FF006B',
      },
      backgroundImage: {
        'metal': "url('/metal.png')",
        'oneD': "url('/1direction.png')",
        'ts-img': "url('/ts-img.png')",
      }
    },
  },
  plugins: [],
}
