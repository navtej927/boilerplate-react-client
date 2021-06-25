const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src/index.js')]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  watchOptions: {
    ignored: '/node_modules/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({}),
  ]
}
