import { graphql, buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return "hello world";
  }
};

export const query = query => {
  return graphql(schema, query, root).then(resp => {
    // console.log(resp);
    return resp;
  });
};
