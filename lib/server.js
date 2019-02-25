/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _home = __webpack_require__(4);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(5);
var app = express();
var proxy = __webpack_require__(6);
var consolidate = __webpack_require__(7);
var open = __webpack_require__(8);
var fs = __webpack_require__(9);
var Webpack = __webpack_require__(1);
var WebpackDevServer = __webpack_require__(10);
var webpackConfig = __webpack_require__(11);
var webpackDevMiddleware = __webpack_require__(18);
var webpackHotMiddleware = __webpack_require__(19);

var port = 6868;
var ENV = process.env.ENV;
// const compiler = Webpack(webpackConfig)
// const server = new WebpackDevServer(compiler, webpackConfig.devServer)

app.engine("html", consolidate.ejs);
app.set("view engine", "html");
//app.set('view engine','css')
app.set("views", __dirname + "/dist");

// console.log(
//   webpackDevMiddleware(
//     compiler,
//     Object.assign({}, webpackConfig.devServer, { publicPath: "/" })
//   )
// );

// app.use(
//   webpackDevMiddleware(
//     compiler,
//     Object.assign({}, webpackConfig.devServer, {
//       // publicPath: "/",
//       writeToDisk: true
//       // serverSideRender: true
//     })
//   )
// )

// app.use(
//   webpackHotMiddleware(compiler, {
//     log: false,
//     heartbeat: 2000
//   })
// )

//app.use('/',express.static('./'))
//提供静态服务
app.use("/app", express.static("./dist"));
//app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));

// 为img提供静态服务
app.use("/img/:name", function (req, res) {
  var name = req.params.name;
  var picture = fs.readFileSync("./img/" + name);
  res.send(picture);
});

app.use("/ssr/index", function (req, res, next) {
  var htmlstr = fs.readFileSync("./ssr_page/index.html", "utf8");
  // const Component = renderToString(<Home />)
  var Component = "hahah";
  console.log(htmlstr);
  res.send(htmlstr.replace('<div class="root" id="root"></div>', '<div class="root" id="root">' + Component + "</div>"));
});

app.use("/app/index", function (req, res, next) {
  res.render("index.html");
});
app.use("*", function (req, res, next) {
  res.render("index.html");
});
// app.use('/app/style.css',function(req,res,next){
//   res.sendFile(__dirname + '/dist/style.css')
// })
// app.use('/app/demo.js',function(req,res,next){
//   res.sendFile(__dirname + '/dist/demo.js')
// })

// server.listen(port, "127.0.0.1", function(err) {
//   if (err) {
//     throw err;
//   } else {
//     if (ENV === "develop") {
//       // open(`http://127.0.0.1:${port}/app/index`);
//     }
//     console.log(
//       `==> 🌎  Listening on ${port}. Open up http://localhost:${port}/ in your browser.`
//     );
//   }
// });

app.listen(port, function (err) {
  if (err) {
    throw err;
  } else {
    if (ENV === "develop") {
      // open(`http://127.0.0.1:${port}/app/index`);
    }
    console.log("==> \uD83C\uDF0E  Listening on " + port + ". Open up http://localhost:" + port + "/ in your browser.");
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "\u8FD9\u662F\u4E00\u4E2Ahome",
        _react2.default.createElement("img", { src: "../img/hua.jpg" })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("consolidate");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("open");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(1);
var path = __webpack_require__(12);
var HtmlWebpackPlugin = __webpack_require__(13);
var ExtractTextPlugin = __webpack_require__(14);
var rewrite = __webpack_require__(15);
var CleanWebpackPlugin = __webpack_require__(16);
var WriteFilePlugin = __webpack_require__(17);

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
console.log(process.env.ENV);
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
  }), new ExtractTextPlugin({
    filename: function filename(getPath) {
      return 'css/style.css';
    },
    disable: false,
    allChunks: true
  }), new HtmlWebpackPlugin({
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
    'index'],
    jsname: 'name',
    //staticPath: ['style.css'],
    hash: false, //为静态资源生成hash值
    minify: {
      //压缩HTML文件
      removeComments: false, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  }), new webpack.LoaderOptionsPlugin({
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
    rules: [{
      enforce: 'pre',
      test: /\.js$|\.jsx$/,
      loader: 'eslint-loader',
      options: {
        fix: true
      },
      exclude: [/node_modules/, /assets/]
    }, {
      test: /\.js$|\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', {
            targets: {
              browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 9', 'iOS >= 8', 'Android >= 4']
            },
            // debug: true,
            useBuiltIns: true
          }], 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy', ['import', [{
            libraryName: 'antd-mobile',
            style: true
          }]]]
        }
      },
      include: path.join(__dirname, './src'),
      exclude: /node_modules/
    }, {
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
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:8].[name].[ext]'
        }
      }
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[hash:8].[name].[ext]'
        }
      }
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
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
    // target: "node"
  } };
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-urlrewrite");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("clean-webpack-plugin");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("write-file-webpack-plugin");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);