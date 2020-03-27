const g = require("graphql");
const schema = g.buildSchema(`
  type Comment {
    id: Int
    avatar: String
    name: String
    isTop: Boolean
    content: String
    publishDate: String
    commentNum: Int
    praiseNum: Int
  }
  type Query {
    comment: [Comment]
  }

  type Mutation {
    praise(id: Int): Int
  }
`);

const mockDb = {
  1: {
    id: 1,
    name: "one",
    avatar: "asd.jpg",
    isTop: true,
    content: "xxx",
    publishDate: "2010-01-01",
    commentNum: 12,
    praiseNum: 12
  },
  2: {
    id: 2,
    name: "two",
    avatar: "asd.jpg",
    isTop: true,
    content: "xxx",
    publishDate: "2010-01-01",
    commentNum: 12,
    praiseNum: 12
  },
  3: {
    id: 3,
    name: "three",
    avatar: "asd.jpg",
    isTop: true,
    content: "xxx",
    publishDate: "2010-01-01",
    commentNum: 12,
    praiseNum: 12
  }
};

schema.getQueryType().getFields().comment.resolve = () => {
  return Object.keys(mockDb).map(key => {
    return mockDb[key];
  });
  return null;
};

schema.getMutationType().getFields().praise.resolve = (src, { id }) => {
  mockDb[id].praiseNum++;
};

module.exports = schema;
