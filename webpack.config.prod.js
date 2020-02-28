var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// module.exports = {
//   entry: './src/demo.js',
//   output: {
//     path: __dirname + '/build',
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         plugins: ['transform-runtime'],
//         presets: ['es2015', 'react', 'stage-2']
//       }
//     }, {
//       test: /\.css$/,
//       loader: "style-loader!css-loader"
//     }]
//   }
// };

module.exports = {
  // entry: {
  //   index: ["./src/router/index.js"]
  // },
  entry: {
    // react: "react",
    flexible: ['./js/index.min.js'],
    // redux: "redux",
    // reduxSagas: "redux-saga",
    // babelPolyfill: "babel-polyfill",
    highcharts: 'highcharts',
    index: ['./src/router/index.js'],
    vendor: ['react', 'redux', 'redux-saga', 'babel-polyfill']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash:8].min.js'
    //publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVCLIENT__: true,
      __DEVSERVER__: true,
      __DEVLOGGER__: true
      //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }),
    new ExtractTextPlugin({
      filename: function(getPath) {
        return './css/style.css'
      },
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      //favicon:path.join(__dirname,'../src/favicon.ico'),
      title: 'React',
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      inject: 'body',
      htmlContent: '',
      initialData: '',
      production: false,
      // chunks: ["index"],
      jsname: 'name',
      staticPath: ['style.css'],
      hash: false, //为静态资源生成hash值
      minify: {
        //压缩HTML文件
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),

    // 保证vendor的hash不会每次打包都变化
    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      names: [
        // "react",
        'flexible',
        // "redux",
        // "reduxSagas",
        // "babelPolyfill",
        'highcharts',
        'vendor'
      ],
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx?$/,
        loader: 'ts-loader',
        // include: path.join(__dirname, "./src"),
        exclude: [/ts/, /tscBuild/]
      },
      {
        test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions',
                      'Firefox ESR',
                      '> 1%',
                      'ie >= 9',
                      'iOS >= 8',
                      'Android >= 4'
                    ]
                  },
                  // debug: true,
                  useBuiltIns: true
                }
              ],
              'react',
              'stage-0'
            ],
            plugins: [
              'transform-decorators-legacy',
              [
                'import',
                [
                  {
                    libraryName: 'antd-mobile',
                    style: true
                  },
                  {
                    libraryName: 'antd',
                    style: true
                  }
                ]
              ]
            ]
          }
        },
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        })
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
      }
    ]
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  //   host: '127.0.0.1',
  //   historyApiFallback: true
  //   // historyApiFallback: {
  //   //   rewrites: [
  //   //     { from: /^\/hr/, to: '/hr.html' },
  //   //     { from: /^\/user/, to: '/user.html' },
  //   //     { from: /^\//, to: '/home.html' },
  //   //   ]
  //   // },
  //   // proxy: {
  //   //   '/index.html': {
  //   //     target: 'http://127.0.0.1:6868',
  //   //   },
  //   //   '/afbApi': {
  //   //     target: 'http://127.0.0.1:3000',
  //   //   },
  //   // },
  // },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }
}
