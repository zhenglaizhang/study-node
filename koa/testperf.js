const mount = require("koa-mount");
const koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new koa();

const body = fs.readFileSync(
  path.join(__dirname, "static/home/index.htm"),
  "utf-8"
);

app.use(
  mount("/", async ctx => {
    ctx.body = body;
  })
);

app.listen(3000);
