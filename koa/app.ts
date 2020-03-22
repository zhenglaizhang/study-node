const Koa = require("koa");
const koaApp = new Koa();

koaApp.use(ctx => {
  ctx.body = "Hello koa";
});

koaApp.listen(3000);
