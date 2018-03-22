var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware');
var consolidate = require('consolidate')

app.engine('html',consolidate.ejs)
app.set('view engine','html')
app.set('views',__dirname + '/dist')

app.use('/',express.static('./'))
//app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));
app.use('/chen',function(req,res,next){
  res.render('index.html')
})

app.listen(6868,function(err){
  if(err){
    throw err
  }else{
    console.log('==> 🌎  Listening on 6868. Open up http://localhost:6868/ in your browser.')
  }
})