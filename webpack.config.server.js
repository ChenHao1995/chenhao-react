var webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.js",
  output: {
    path: __dirname + "/lib",
    filename: "server.js"
  },
  plugins: [
    new CleanWebpackPlugin(["lib"])
    // new HtmlWebpackPlugin({
    //   //favicon:path.join(__dirname,'../src/favicon.ico'),
    //   title: "ssr",
    //   template: path.join(__dirname, "./index.html")
    //   // filename: "index.html",
    //   // inject: "body",
    //   // htmlContent: "",
    //   // initialData: "",
    //   // production: false,
    //   // chunks: [
    //   //   "react",
    //   //   "flexible",
    //   //   "redux",
    //   //   "reduxSagas",
    //   //   "babelPolyfill",
    //   //   "highcharts",
    //   //   "index"
    //   // ],
    //   // jsname: "name",
    //   // //staticPath: ['style.css'],
    //   // hash: false, //为静态资源生成hash值
    //   // minify: {
    //   //   //压缩HTML文件
    //   //   removeComments: false, //移除HTML中的注释
    //   //   collapseWhitespace: false //删除空白符与换行符
    //   // }
    // })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$|\.jsx$/,
        loader: "eslint-loader",
        options: {
          fix: true
        },
        exclude: [/node_modules/, /assets/]
      },
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015",
              "env",
              // {
              //   targets: {
              //     browsers: [
              //       "last 2 versions",
              //       "Firefox ESR",
              //       "> 1%",
              //       "ie >= 9",
              //       "iOS >= 8",
              //       "Android >= 4"
              //     ]
              //   },
              //   // debug: true,
              //   useBuiltIns: true
              // }
              "react",

              "stage-0"
            ]
            // plugins: [
            //   "transform-decorators-legacy",
            //   [
            //     "import",
            //     [
            //       {
            //         libraryName: "antd-mobile",
            //         style: true
            //       }
            //     ]
            //   ]
            // ]
          }
        },
        include: path.join(__dirname),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "images/[hash:8].[name].[ext]"
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "fonts/[hash:8].[name].[ext]"
          }
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      }
    ]
  },
  target: "node",
  externals: [nodeExternals()]
};
