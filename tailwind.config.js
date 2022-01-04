module.exports = {
  content: [
    "./index.html",
    "./src/assets/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge:"./src/assets/**/*.{ts,tsx}"
}