const merge = require('webpack-merge');
const base = require('./base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin()
  ]
});