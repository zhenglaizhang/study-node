const Koa = require("koa");
const mount = require("koa-mount");
const koaApp = new Koa();
const fs1 = require("fs");

koaApp.use(
  mount("/", ctx => {
    ctx.body = "Hello koa";
  })
);

koaApp.use(
  mount("/favicon.ico", ctx => {
    ctx.status = 200;
  })
);

koaApp.use(
  mount("/file", ctx => {
    ctx.status = 200;
    ctx.body = fs1.readFileSync(__dirname + "index.html", "utf-8");
  })
);

koaApp.listen(3000);
