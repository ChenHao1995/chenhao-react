var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware')
var consolidate = require('consolidate')
var open = require('open')
const fs = require('fs')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const chalk = require('chalk')
var clearConsole = require('react-dev-utils/clearConsole')

const isInteractive = process.stdout.isTTY
var port = 8848
var ENV = process.env.ENV
const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler, webpackConfig.devServer)

compiler.plugin('done', stats => {
  if (isInteractive) {
    clearConsole()
  }
  console.log(chalk.green('Compiled'))
})
server.listen(port, '127.0.0.1', err => {
  if (err) {
    return console.log(err)
  }
  clearConsole()
  console.log(chalk.green('Compiling......'))

  // console.log(chalk.cyan('Starting the development server...\n'))
})
;['SIGINT', 'SIGTERM'].forEach(function(sig) {
  process.on(sig, function() {
    devServer.close()
    process.exit()
  })
})

// compiler.hooks.invalid.tap('invalid', () => {
//   if (isInteractive) {
//     clearConsole()
//   }
//   console.log('Compiling...')
// })
