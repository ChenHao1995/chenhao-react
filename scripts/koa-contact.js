const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  next()
})

app.use(async ctx => {
  // console.log(ctx)
  // const err = new Error('name required')
  // err.status = 400
  // err.expose = true
  // throw err
  // ctx.throw(400, 'name required')
  // ctx.status = 401
  const buf2 = Buffer.from('chen')
  ctx.body = buf2.toString()
  ctx.response.headers['Content-Type'] = 'application/json;charset=UTF-8'
})

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
})

app.listen(8888)
