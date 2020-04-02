const { create, env } = require("sanctuary");
const people = require("./people.json");

const S = create({
  checkTypes: true, // disable for prod
  env: env
});
