const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('NODE ENV IS ->', process.env.NODE_ENV);

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src/index.js')],
  },
  mode: process.env.NODE_ENV,
  devtool:
    process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: '/node_modules/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
