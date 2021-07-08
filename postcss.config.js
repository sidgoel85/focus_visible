module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-focus-visible"),
    require("postcss-prepend-selector")({
      selector: "#md ",
    }),
    require("autoprefixer"),
  ],
};
