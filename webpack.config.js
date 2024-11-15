const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Cambiado a .tsx
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Agregado soporte para .ts y .tsx
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"], // Agregado ts-loader
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Agregadas extensiones .tsx y .ts
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development",
};
