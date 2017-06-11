const path = require('path')


module.exports = {
  entry: './app/main.js',
  output: {
    filename : "./app/bundle.js"
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