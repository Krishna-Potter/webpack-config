const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
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
  module: {
    rules: [
      {
        //   JS Loaders
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        //   CSS Loaders
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    //   HTML Template
    new HtmlWebpackPlugin({
      title: "Webpack Basic Config",
    }),
    // Minified CSS
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
