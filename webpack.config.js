var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
let rewrite = require('express-urlrewrite')
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
// console.log(process.env.ENV);
module.exports = {
  // entry: {
  //   // react: "react",
  //   // flexible: ['./js/index.min.js'],
  //   // redux: "redux",
  //   // reduxSagas: "redux-saga",
  //   // babelPolyfill: "babel-polyfill",
  //   // highcharts: 'highcharts',
  //   index: ['./src/router/index.js'],
  //   vendor: [
  //     'react',
  //     'redux',
  //     'redux-saga',
  //     'babel-polyfill',
  //     'immutable',
  //     'react-router-redux',
  //     'react-dom',
  //     'react-router-dom',
  //     'react-redux',
  //     'history'
  //   ]
  // },
  entry: './src/router/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVCLIENT__: true,
      __DEVSERVER__: true,
      __DEVLOGGER__: true
      //'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }),
    // new ExtractTextPlugin({
    //   filename: function(getPath) {
    //     return 'css/style.css'
    //   },
    //   disable: false,
    //   allChunks: true
    // }),
    new HtmlWebpackPlugin({
      //favicon:path.join(__dirname,'../src/favicon.ico'),
      title: 'React',
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      // chunks: [
      //   // "react",
      //   "flexible",
      //   // "redux",
      //   // "reduxSagas",
      //   // "babelPolyfill",
      //   "highcharts",
      //   // "vendor",
      //   "manifest",
      //   // "runtime",
      //   "vendor",
      //   "index"
      // ],
      //staticPath: ['style.css'],
      // hash: false, //为静态资源生成hash值
      minify: {
        //压缩HTML文件
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      eslint: {
        configFile: path.join(__dirname, './.eslintrc.json')
      }
    }),
    // node 调用devserver 这个必须有
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "runtime"
    // })
    new OpenBrowserPlugin({ url: 'http://localhost:8868/app/index' })
  ],
  module: {
    rules: [...baseConfig.rules]
  },
  devtool: 'source-map',
  devServer: {
    port: 8868,
    //在公共路径下引入资源的路径
    //contentBase: '/',
    hot: true,
    host: '0.0.0.0',
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
  //   configFile: path.join(__dirname, './.eslintrc.json')
  // },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }
}
