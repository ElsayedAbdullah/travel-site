var path = require("path");

module.exports = {
  entry: {
    script: "./app/assets/js/script.js",
    vendor: "./app/assets/js/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
