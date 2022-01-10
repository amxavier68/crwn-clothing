const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  devtool: "inline-source-map",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    clean: true
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "CRWN - Clothing",
      template: "./public/index.html",
      filename: "index.html"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader",
          "postcss-loader" 
        ]
      }
    ]
  },

  resolve: {
    extensions: [ ".js", ".jsx" ]
  }
};