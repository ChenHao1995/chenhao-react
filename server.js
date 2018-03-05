var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware');


app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));
app.use('/a',function(req,res,next){
  res.send('hahahahaha')
})
app.use('/',express.static('./'))

app.listen(6868,function(err){
  if(err){
    throw err
  }else{
    console.log('==> 🌎  Listening on 6868. Open up http://localhost:6868/ in your browser.')
  }
})