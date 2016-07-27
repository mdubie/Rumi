let path = require('path')

module.exports = {
  entry: "./client/App.jsx",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }, 
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
};
