var express = require("express");
var app = express();
var proxy = require("http-proxy-middleware");
var consolidate = require("consolidate");
var open = require("open");

var port = 6868;

app.engine("html", consolidate.ejs);
app.set("view engine", "html");
//app.set('view engine','css')
app.set("views", __dirname + "/dist");

//app.use('/',express.static('./'))
//提供静态服务
app.use("/app", express.static("./dist"));
//app.use('/', proxy({target: 'http://127.0.0.1:8868/', changeOrigin: true}));

// app.use('/app/index',function(req,res,next){
//   res.render('index.html')
// })
app.use("*", function(req, res, next) {
  res.render("index.html");
});
// app.use('/app/style.css',function(req,res,next){
//   res.sendFile(__dirname + '/dist/style.css')
// })
// app.use('/app/demo.js',function(req,res,next){
//   res.sendFile(__dirname + '/dist/demo.js')
// })

app.listen(port, function(err) {
  if (err) {
    throw err;
  } else {
    open(`http://127.0.0.1:${port}/app/index`);
    console.log(
      `==> 🌎  Listening on ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});
