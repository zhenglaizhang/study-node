const app = new (require("koa"))();
const mount = require("koa-mount");
const static = require("koa-static");
const graphqlHttp = require("koa-graphql");

// GET http://localhost:3000/?query={comment{name,id}}
/*
query GetCommentIdName {
  comment {
    id
    name
    praiseNum
  }
}

mutation Priaise {
  praise(id: 3)
}
*/
app.use(
  graphqlHttp({
    schema: require("./schema"),
    graphiql: true
  })
);

app.listen(3000);
