import * as app from "./app";
import * as Koa from "koa";

const koa = new Koa();
const mount = require("koa-mount");
const app = require("./app");

Object.keys(app).forEach(route => {
  koa.use(
    mount(route, async ctx => {
      ctx.status = 200;
      ctx.body = await app[route](ctx.query);
    })
  );
});

koa.listen(3000);
