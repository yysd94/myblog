module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "piano-img": "url('/home-image.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
