import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
// import App from "./src/router";
var express = require("express");
var app = express();
var proxy = require("http-proxy-middleware");
var consolidate = require("consolidate");
var open = require("open");
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

var port = 6868;
var ENV = process.env.ENV;
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackConfig.devServer);

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
app.use(
  webpackDevMiddleware(
    compiler,
    Object.assign({}, webpackConfig.devServer, { publicPath: "/" })
  )
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
  })
);

//app.use('/',express.static('./'))
//提供静态服务
app.use("/app", express.static("./dist"));
//app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));

// app.use('/app/index',function(req,res,next){
//   res.render('index.html')
// })
app.use("/ssr/index", function(req, res, next) {
  res.send("服务端渲染");
});
app.use("*", function(req, res, next) {
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

app.listen(port, function(err) {
  if (err) {
    throw err;
  } else {
    if (ENV === "develop") {
      // open(`http://127.0.0.1:${port}/app/index`);
    }
    console.log(
      `==> 🌎  Listening on ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});
