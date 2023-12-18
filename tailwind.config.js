/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        lightGreen: '#4EE1A0',
        white: '#ffffff',
        darkGrey: '#242424',
        grey: '#d9d9d9'

      },
      fontFamily: {
        SpaceGrotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: [],
}


