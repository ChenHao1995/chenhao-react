// var webpack = require('webpack')
// var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// var baseConfig = require('./webpack.config.base')
// // module.exports = {
// //   entry: './src/demo.js',
// //   output: {
// //     path: __dirname + '/build',
// //     filename: "bundle.js"
// //   },
// //   module: {
// //     rules: [{
// //       test: /\.js$/,
// //       exclude: /node_modules/,
// //       loader: 'babel-loader',
// //       query: {
// //         plugins: ['transform-runtime'],
// //         presets: ['es2015', 'react', 'stage-2']
// //       }
// //     }, {
// //       test: /\.css$/,
// //       loader: "style-loader!css-loader"
// //     }]
// //   }
// // };

// module.exports = {
//   entry: {
//     index: ['./src/router/index.js'],
//     vendor: [
//       'react',
//       'redux',
//       'redux-saga',
//       'babel-polyfill',
//       'immutable',
//       'react-router-redux',
//       'react-dom',
//       'react-router-dom',
//       'react-redux',
//       'history',
//       'prop-types'
//     ],
//     antd: 'antd',
//     antdMobile: 'antd-mobile',
//     antDesignIcons: '@ant-design/icons',
//     axios: 'axios',
//     action: '@store/actions'
//   },
//   output: {
//     path: __dirname + '/dist',
//     filename: '[name].[chunkhash].js',
//     chunkFilename: '[name].[chunkhash:8].min.js',
//     publicPath: '/jsStatic/'
//   },
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new webpack.DefinePlugin({
//       __isProd: true
//       //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
//     }),
//     // new ExtractTextPlugin({
//     //   filename: function(getPath) {
//     //     return './css/style.css'
//     //   },
//     //   disable: false,
//     //   allChunks: true
//     // }),
//     new HtmlWebpackPlugin({
//       //favicon:path.join(__dirname,'../src/favicon.ico'),
//       title: 'React',
//       template: path.join(__dirname, './index.html'),
//       filename: 'index.html',
//       // chunks: ["index"],
//       // staticPath: ['style.css'],
//       hash: false, //为静态资源生成hash值
//       minify: {
//         //压缩HTML文件
//         removeComments: false, //移除HTML中的注释
//         collapseWhitespace: false //删除空白符与换行符
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         //压缩代码
//         dead_code: true, //移除没被引用的代码
//         warnings: false //当删除没有用处的代码时，显示警告
//         // loops: true //当do、while 、 for循环的判断条件可以确定是，对其进行优化
//       }
//       // except: ['$super', '$', 'exports', 'require'] //混淆,并排除关键字
//     }),

//     // 保证vendor的hash不会每次打包都变化
//     new webpack.HashedModuleIdsPlugin(),

//     new webpack.optimize.CommonsChunkPlugin({
//       names: [
//         'index',
//         'vendor',
//         'antdMobile',
//         'antd',
//         'antDesignIcons',
//         'axios',
//         'action'
//         // "react",
//         // 'flexible',
//         // "redux",
//         // "reduxSagas",
//         // "babelPolyfill",
//         // 'highcharts',
//       ],
//       minChunks: Infinity
//     }),
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'manifest'
//     // }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'runtime'
//     })
//   ],
//   module: {
//     rules: [...baseConfig.rules]
//   },
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
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/router/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: __dirname + '/dist',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].min.js',
    publicPath: '/jsStatic/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxAsyncRequests: 100,
      maxInitialRequests: 100,
      minChunks: 1,
    },
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
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                'import',
                { libraryName: 'antd', style: true, libraryDirectory: 'lib' },
                'antd',
              ],
              [
                'import',
                {
                  libraryName: 'antd-mobile',
                  style: true,
                  libraryDirectory: 'lib',
                },
                'antd-mobile',
              ],
            ],
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
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true },
          },
        ],
        // loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:8].[name].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[hash:8].[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: path.join(__dirname, './index.html') }),
  ],
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
}
