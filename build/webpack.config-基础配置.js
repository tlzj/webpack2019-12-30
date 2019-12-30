// webpack.config.js
// 加载模块
// 1.单入口模板
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log('文件路径: ', path.resolve(__dirname, ''))
// module.exports = {
//   mode: 'development', // 开发模式
//   entry: path.resolve(__dirname, '../src/main.js'), // 入口文件
//   output: {
//     filename: '[name].[hash:8].js',
//     path: path.resolve(__dirname, '../dist') // 打包后的目录
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/index.html')
//     })
//   ]
// }


// 2.多入口配置 清空文件夹
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// console.log('文件路径: ', path.resolve(__dirname, ''))
// module.exports = {
//   mode: 'development', // 开发模式
//   entry: {
//     main: path.resolve(__dirname, '../src/main.js'),
//     header: path.resolve(__dirname, '../src/header.js')
//   }, // 入口文件
//   output: {
//     filename: '[name].[hash:8].js',
//     path: path.resolve(__dirname, '../dist') // 打包后的目录
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/index.html'),
//       filename: 'index.html',
//       chunks: ['main'], // 与入口文件对应的模块名
//     }),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/header.html'),
//       filename: 'header.html',
//       chunks: ['header']
//     }),
//     new CleanWebpackPlugin()
//   ]
// }


// 3.less文件打包
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// console.log('文件路径: ', path.resolve(__dirname, ''))
// module.exports = {
//   mode: 'development', // 开发模式
//   entry: {
//     main: path.resolve(__dirname, '../src/main.js'),
//     header: path.resolve(__dirname, '../src/header.js')
//   }, // 入口文件
//   output: {
//     filename: '[name].[hash:8].js',
//     path: path.resolve(__dirname, '../dist') // 打包后的目录
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/index.html'),
//       filename: 'index.html',
//       chunks: ['main'], // 与入口文件对应的模块名
//     }),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/header.html'),
//       filename: 'header.html',
//       chunks: ['header']
//     }),
//     new CleanWebpackPlugin()
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'], // 从右向左解析原则
//       },
//       {
//         test: /\.less$/,
//         use: ['style-loader', 'css-loader', {
//           loader: 'postcss-loader',
//           options: {
//             plugins: [require('autoprefixer')]
//           }
//         }, 'less-loader']
//       }
//     ]
//   }
// }


// 4.拆分css
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('文件路径: ', path.resolve(__dirname, ''))
// module.exports = {
//   mode: 'development', // 开发模式
//   entry: {
//     main: path.resolve(__dirname, '../src/main.js'),
//     header: path.resolve(__dirname, '../src/header.js')
//   }, // 入口文件
//   output: {
//     filename: '[name].[hash:8].js',
//     path: path.resolve(__dirname, '../dist') // 打包后的目录
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/index.html'),
//       filename: 'index.html',
//       chunks: ['main'], // 与入口文件对应的模块名
//     }),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '../public/header.html'),
//       filename: 'header.html',
//       chunks: ['header']
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       filename: 'style/[name].[hash].css', // 输出到style文件夹
//       chunkFilename: '[id].css'
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'], // 从右向左解析原则
//       },
//       {
//         test: /\.less$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', {
//           loader: 'postcss-loader',
//           options: {
//             plugins: [require('autoprefixer')]
//           }
//         }, 'less-loader']
//       }
//     ]
//   }
// }


// 5.文件解析，路径解析, js转换
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('文件路径: ', path.resolve(__dirname, ''))
module.exports = {
  mode: 'development', // 开发模式
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
    header: path.resolve(__dirname, '../src/header.js')
  }, // 入口文件
  output: {
    filename: 'js/[name].[hash:8].js', // 文件名加js后，对应的js文件打包到了js目录下
    path: path.resolve(__dirname, '../dist') // 打包后的目录, 对应的是文件的根目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      chunks: ['main'], // 与入口文件对应的模块名
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/header.html'),
      filename: 'header.html',
      chunks: ['header']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash].css', // 输出到style文件夹
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 从右向左解析原则
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }, 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]', // 打包之后的文件名
                    limit: 5,
                    outputPath: 'imagesNew', // 输出之后的文件夹
                    publicPath: '../imagesNew', // 会在打包后图片路径拼接上该设置
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', // 将 ES6/7/8语法转换为ES5语法,但是对新的api并不会转换，例如(promise、Generator、Set、Maps、Proxy等)，借助babel-polyfill来转换
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: 'usage', // babel-polyfill启用
            }]]
          },
        },
        exclude: /node_modules/
      }
    ]
  }
}