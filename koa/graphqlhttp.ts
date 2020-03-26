const app = new (require("koa"))();
const mount = require("koa-mount");
const static = require("koa-static");
const graphqlHttp = require("koa-graphql");

// GET http://localhost:3000/?query={comment{name,id}}
app.use(
  graphqlHttp({
    schema: require("./schema")
  })
);

app.listen(3000);
