module.exports = {
  plugins: {
    "postcss-font-magician": {
      variants: {
        Roboto: {
          400: [],
          500: [],
          700: [],
        },
      },
      foundries: ["google"],
    },
    autoprefixer: {},
  },
};
