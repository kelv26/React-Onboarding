module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Bg : '#F6EFE8',
        Purple : '#4A154B',
        Blue : '#1B72E8',
        Black : '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
