if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      require("postcss-preset-env"),
      require("autoprefixer"),
      require("cssnano"),
      require("rucksack-css"),
    ],
  };
} else {
  module.exports = {
    plugins: [
      require("postcss-preset-env"),
      require("autoprefixer"),
      require("rucksack-css"),
    ],
  };
}
