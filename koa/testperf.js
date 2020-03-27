const mount = require("koa-mount");
const koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new koa();

app.use(
  mount("/", async ctx => {
    ctx.body = fs.readFileSync(
      path.join(__dirname, "static/home/index.htm"),
      "utf-8"
    );
  })
);

app.listen(3000);
