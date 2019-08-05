const path = require('path')
console.log(path.resolve(__dirname, '../dist'))
module.exports = {
  mode: 'production',
  entry: {
    index: ['../src/router/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js'
  }
}
