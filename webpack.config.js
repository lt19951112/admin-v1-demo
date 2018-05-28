const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, 'src/page')
    }
  },
  module: {
    // react语法处理
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/, // 不包括node_modules中的js
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'] // 自动根据环境来打包
        }
      }
    },
    // css文件处理
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    // sass文件处理
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/[name].[ext]'
          }
        }
      ]
   }]
  },

  plugins: [
      new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin("css/[name].css"),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      filename: "js/base.js",
    }
  },
  devServer: {
    port: 8086,
  },
}
