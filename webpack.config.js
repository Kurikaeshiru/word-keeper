const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: false,
    filename: 'index_bundle.js',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        exclude: /node_modules/,
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.less$/,
        // loader: "less-loader",
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MiniCssExtractPlugin(),
  ],
};
