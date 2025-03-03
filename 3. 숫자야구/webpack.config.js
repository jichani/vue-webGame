const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const { devtools } = require("vue");

module.exports = {
  mode: "development", // 개발 중이라면 development, 배포용이라면 production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"],
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
