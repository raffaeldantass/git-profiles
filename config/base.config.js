const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/App.js',
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: null
    })
  ],

  output: {
    path: path.dirname(__dirname, './dist'),
    filename: 'bundle.js'
  }
}