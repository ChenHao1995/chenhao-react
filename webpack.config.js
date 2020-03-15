// var webpack = require('webpack')
// var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var OpenBrowserPlugin = require('open-browser-webpack-plugin')
// let rewrite = require('express-urlrewrite')
// var baseConfig = require('./webpack.config.base')

// module.exports = {
//   entry: './src/router/index.js',
//   output: {
//     // path: path.resolve(__dirname, 'dist'),
//     path: __dirname + '/dist',
//     filename: '[name].[hash].js',
//     chunkFilename: '[name].[chunkhash:8].min.js',
//     publicPath: '/'
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __CLIENT__: true,
//       __DEVCLIENT__: true,
//       __DEVSERVER__: true,
//       __DEVLOGGER__: true
//       //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
//     }),
//     // new ExtractTextPlugin({
//     //   filename: function(getPath) {
//     //     return 'css/style.css'
//     //   },
//     //   disable: false,
//     //   allChunks: true
//     // }),
//     new HtmlWebpackPlugin({
//       //favicon:path.join(__dirname,'../src/favicon.ico'),
//       title: 'React',
//       template: path.join(__dirname, './index.html'),
//       filename: 'index.html',
//       // chunks: [
//       //   // "react",
//       //   "flexible",
//       //   // "redux",
//       //   // "reduxSagas",
//       //   // "babelPolyfill",
//       //   "highcharts",
//       //   // "vendor",
//       //   "manifest",
//       //   // "runtime",
//       //   "vendor",
//       //   "index"
//       // ],
//       //staticPath: ['style.css'],
//       // hash: false, //为静态资源生成hash值
//       minify: {
//         //压缩HTML文件
//         removeComments: false, //移除HTML中的注释
//         collapseWhitespace: false //删除空白符与换行符
//       }
//     }),
//     // new webpack.HashedModuleIdsPlugin(),
//     // new webpack.NamedModulesPlugin(),
//     new webpack.LoaderOptionsPlugin({
//       eslint: {
//         configFile: path.join(__dirname, './.eslintrc.json')
//       }
//     }),
//     // node 调用devserver 这个必须有
//     new webpack.HotModuleReplacementPlugin(),
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: "runtime"
//     // })
//     new OpenBrowserPlugin({ url: 'http://localhost:8868/app/index' })
//   ],
//   module: {
//     rules: [...baseConfig.rules]
//   },
//   devtool: 'source-map',
//   devServer: {
//     port: 8868,
//     //在公共路径下引入资源的路径
//     //contentBase: '/',
//     hot: true,
//     host: '0.0.0.0',
//     historyApiFallback: true,
//     //压缩
//     compress: true
//     // before: function(app, server){
//     //   // app.use(rewrite(/\.js$/,'/demo.js'))
//     //   app.use(rewrite(/\.css$/,'/style.css'))
//     //   // app.use(rewrite('/app/*','/index.html'))
//     // }
//     //publicPath:'/app/'
//     // historyApiFallback: {
//     //   rewrites: [
//     //     // { from: /\.js$/, to: '/demo.js' },
//     //     { from: /\.css$/, to: '/style.css' },
//     //     // { from: /^\//, to: '/index.html' },
//     //   ]
//     // },
//     // proxy: {
//     //   '/index.html': {
//     //     target: 'http://127.0.0.1:6868',
//     //   },
//     //   '/afbApi': {
//     //     target: 'http://127.0.0.1:3000',
//     //   },
//     // },
//     // setup:function(app){
//     //   app.get('ab/style.css',function(req,res){
//     //     console.log(res)
//     //   })
//     // }
//   },
//   // eslint: {
//   //   configFile: path.join(__dirname, './.eslintrc.json')
//   // },
//   resolve: {
//     extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
//     alias: {
//       '@src': path.resolve(__dirname, 'src'),
//       '@store': path.resolve(__dirname, 'src/store')
//     }
//   }
// }
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/router/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: __dirname + '/dist',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
        include: path.join(__dirname, './src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                'import',
                { libraryName: 'antd', style: true, libraryDirectory: 'lib' },
                'antd'
              ],
              [
                'import',
                {
                  libraryName: 'antd-mobile',
                  style: true,
                  libraryDirectory: 'lib'
                },
                'antd-mobile'
              ]
            ]
            // plugins: [
            //   'transform-decorators-legacy',
            //   [
            //     'import',
            //     [
            //       {
            //         libraryName: 'antd-mobile',
            //         style: true
            //       },
            //       {
            //         libraryName: 'antd',
            //         style: true
            //       }
            //     ]
            //   ]
            // ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
        // loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:8].[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[hash:8].[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, './index.html') })
  ],
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8848
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }
}
