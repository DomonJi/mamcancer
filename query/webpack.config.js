'use strict';

var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg|opus)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }, {
        test: /\.vue$/,
        loader: "vue"
      }, {
        test: /.js$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ]
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })]
};
