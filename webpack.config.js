const path = require("path")

module.exports = {
  entry: "./source/foreMost.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "source"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 7700,
    static: {
        directory: path.resolve(__dirname, 'source'),
    },
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}