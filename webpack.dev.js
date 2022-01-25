const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  //   Live Server Configuration
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    historyApiFallback: true,
    https: false,
    open: true,
    hot: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:3000",
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        //   CSS Loaders
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
});
