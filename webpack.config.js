const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./widget.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  }
};
