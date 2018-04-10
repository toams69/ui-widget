var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var libName = 'vuewidget'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../../../dist'),
    filename: libName + '.vuecc.js',
    library: libName,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      mangle: false
    })
  ]
})
