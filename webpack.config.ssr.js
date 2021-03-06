var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
let rewrite = require('express-urlrewrite')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

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
// console.log(__dirname + "/dist");
console.log(process.env.ENV)
module.exports = {
  entry: {
    // react: "react",
    // flexible: ["./js/index.min.js"],
    // redux: "redux",
    // reduxSagas: "redux-saga",
    // babelPolyfill: "babel-polyfill",
    // highcharts: "highcharts",
    index: ['./src/router/index.js']
  },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].min.js'
    // publicPath: "/"
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),

    // 强制devserver打包文件
    // new WriteFilePlugin(),

    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVCLIENT__: true,
      __DEVSERVER__: true,
      __DEVLOGGER__: true
      //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }),
    new ExtractTextPlugin({
      filename: function(getPath) {
        return 'css/style.css'
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
      chunks: [
        // "react",
        // "flexible",
        // "redux",
        // "reduxSagas",
        // "babelPolyfill",
        // "highcharts",
        'index'
      ],
      jsname: 'name',
      //staticPath: ['style.css'],
      hash: false, //为静态资源生成hash值
      minify: {
        //压缩HTML文件
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new webpack.LoaderOptionsPlugin({
      eslint: {
        configFile: path.join(__dirname, './.eslintrc.json')
      }
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: [
    //     "react",
    //     "flexible",
    //     "redux",
    //     "reduxSagas",
    //     "babelPolyfill",
    //     "highcharts"
    //   ],
    //   minChunks: Infinity
    // })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$/,
        loader: 'eslint-loader',
        options: {
          fix: true
        },
        exclude: [/node_modules/, /assets/]
      },
      {
        test: /\.js$|\.jsx$/,
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
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    //在公共路径下引入资源的路径
    //contentBase: '/',
    hot: true,
    host: '127.0.0.1',
    historyApiFallback: true,
    //压缩
    compress: true
    // before: function(app, server){
    //   // app.use(rewrite(/\.js$/,'/demo.js'))
    //   app.use(rewrite(/\.css$/,'/style.css'))
    //   // app.use(rewrite('/app/*','/index.html'))
    // }
    //publicPath:'/app/'
    // historyApiFallback: {
    //   rewrites: [
    //     // { from: /\.js$/, to: '/demo.js' },
    //     { from: /\.css$/, to: '/style.css' },
    //     // { from: /^\//, to: '/index.html' },
    //   ]
    // },
    // proxy: {
    //   '/index.html': {
    //     target: 'http://127.0.0.1:6868',
    //   },
    //   '/afbApi': {
    //     target: 'http://127.0.0.1:3000',
    //   },
    // },
    // setup:function(app){
    //   app.get('ab/style.css',function(req,res){
    //     console.log(res)
    //   })
    // }
  },
  // eslint: {
  //   configFile: path.join(__dirname, "./.eslintrc.json")
  // },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css']
  }
  // target: "node"
}
