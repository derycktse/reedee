const path = require('path')


module.exports = {
  entry: './main.js',
  output: {
    filename : "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader : 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}