// 开发环境配置文件(热更新，不压缩代码，完整的sourceMap)
const Webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackMerge = require('webpack-merge');
module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
})