import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Home from './ssr_page/home'
var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware')
var consolidate = require('consolidate')
var open = require('open')
const fs = require('fs')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.ssr')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

var port = 6868
var ENV = process.env.ENV
const compiler = Webpack(webpackConfig)
// const server = new WebpackDevServer(compiler, webpackConfig.devServer)

app.engine('html', consolidate.ejs)
app.set('view engine', 'html')
//app.set('view engine','css')
app.set('views', __dirname + '/dist')

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
app.use(
  '/jsStatic',
  express.static('./dist', {
    setHeaders: function(res, path, stat) {
      res.set(
        'Cache-Control',
        path.includes('.js') || path.includes('.css')
          ? 'max-age=31104000000'
          : 'no-store'
      )
    }
  })
)
//app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));

// 为img提供静态服务
app.use('/img/:name', function(req, res) {
  var name = req.params.name
  var picture = fs.readFileSync(`./img/${name}`)
  res.send(picture)
})

app.use('/ssr/index', function(req, res, next) {
  var htmlstr = fs.readFileSync('./ssr_page/index.html', 'utf8')
  const Component = renderToString(<Home />)
  console.log(htmlstr)
  res.send(
    htmlstr.replace(
      '<div class="root" id="root"></div>',
      '<div class="root" id="root">' + Component + '</div>'
    )
  )
})

// app.use("/app/index", function(req, res, next) {
//   res.render("index.html");
// });
app.use('*', function(req, res, next) {
  res.render('index.html')
})
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
    throw err
  } else {
    if (ENV === 'develop') {
      // open(`http://127.0.0.1:${port}/app/index`);
    }
    console.log(
      `==> 🌎  Listening on ${port}. Open up http://localhost:${port}/ in your browser.`
    )
  }
})
