const mount = require("koa-mount");
const koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new koa();

// ab -c100 -t15 "http://localhost:3000/"

// by default return buf instead of utf-8
const body = fs.readFileSync(path.join(__dirname, "static/home/index.htm"));

const leak = [];

app.use(
  mount("/", async ctx => {
    ctx.status = 200;
    ctx.stype = "html";
    ctx.body = body;
    const nb = new Buffer(body.length);
    leak.push(body.copy(nb));
  })
);

app.listen(3000);
