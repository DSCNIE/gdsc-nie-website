const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "js/output.bundle.js",
  },
  //   This is to generate source maps
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      template: "./src/templates/index.pug",
      minify: true,
      publicPath: "./",
      meta: {
        author: "https://github.com/DSCNIE",
        language: "English",
        robots: "index, follow",
        keywords: "webpack,gdscnie,babel,sass,pug,api",
        description:
          "Official website of google developers student club, NIE Mysore",
        title: "GDSC-NIE",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
      chunkFilename: "css/[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].min.css" },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "../" },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
};
