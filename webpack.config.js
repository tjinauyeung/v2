const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  target: 'web',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
