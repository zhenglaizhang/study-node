import * as koa from "koa";
// import * as mount from "koa-mount";
import * as kstatic from "koa-static";
// import * as fs from "fs";
import * as rpcClient from "./client";

import * as template from "./template";
const app = new koa();

app.use(kstatic(__dirname + "/static/home"));

const detailTemplate = (template as any)(__dirname + "/template/detail.html");
console.log(detailTemplate);

app.use(async ctx => {
  const result = await new Promise((resolve, reject) => {
    (rpcClient as any).write(
      {
        columnid: ctx.query.columnid
      },
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
    ctx.body = detailTemplate(result);
  });
});

// app.use(
//   mount("/favicon.ico", ctx => {
//     ctx.status = 200;
//   })
// );

// app.use(
//   mount("/file", ctx => {
//     ctx.status = 200;
//     ctx.body = fs.readFileSync(__dirname + "index.html", "utf-8");
//   })
// );

app.listen(3000);
