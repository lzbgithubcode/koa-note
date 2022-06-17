
const Koa = require('../lib/application')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

// response
router.get('/', ctx => {
  ctx.body = 'Hello Koa'
  console.log('执行get次数=========')
})
router.get('/mine', ctx => {
  ctx.body = '我是个人中心'
})
router.get('/home', ctx => {
  ctx.body = '我是主页'
})

app.use((ctx, next) => {
  console.log('我中间件1=====')
  next()
  console.log('我中间件-next1=====')
})
app.use((ctx, next) => {
  console.log('我中间件2=====')
  next()
  console.log('我中间件-next2=====')
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3001, () => {
  console.log('服务已经启动=======')
})
