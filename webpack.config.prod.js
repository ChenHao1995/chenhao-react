var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var baseConfig = require('./webpack.config.base')
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
  entry: {
    index: ['./src/router/index.js'],
    vendor: [
      'react',
      'redux',
      'redux-saga',
      'babel-polyfill',
      'immutable',
      'react-router-redux',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'history'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash:8].min.js',
    publicPath: '/jsStatic/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      __isProd: true
      //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }),
    // new ExtractTextPlugin({
    //   filename: function(getPath) {
    //     return './css/style.css'
    //   },
    //   disable: false,
    //   allChunks: true
    // }),
    new HtmlWebpackPlugin({
      //favicon:path.join(__dirname,'../src/favicon.ico'),
      title: 'React',
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      // chunks: ["index"],
      // staticPath: ['style.css'],
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
        'index',
        'vendor'
        // "react",
        // 'flexible',
        // "redux",
        // "reduxSagas",
        // "babelPolyfill",
        // 'highcharts',
      ],
      minChunks: Infinity
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  module: {
    rules: [...baseConfig.rules]
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }
}
