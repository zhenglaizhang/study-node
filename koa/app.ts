import * as koa from "koa";
import * as mount from "koa-mount";
import * as kstatic from "koa-static";
import * as fs from "fs";
const app = new koa();

app.use(kstatic(__dirname + "/static/home"));

app.use(
  mount("/", async ctx => {
    ctx.body = fs.readFileSync(__dirname + "/static/home/index.htm", "utf-8");
  })
);

app.use(
  mount("/favicon.ico", ctx => {
    ctx.status = 200;
  })
);

app.use(
  mount("/file", ctx => {
    ctx.status = 200;
    ctx.body = fs.readFileSync(__dirname + "index.html", "utf-8");
  })
);

app.listen(3000);
