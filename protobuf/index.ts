import { readFileSync } from "fs";
import * as pb from "protocol-buffers";

const schema = pb(readFileSync(__dirname + "/test.proto", "utf-8"));

console.log(schema);
const encoded = schema.Column.encode({
  id: 1,
  name: "nodejs",
  price: 80.1
});
console.log(encoded);
const decoded = schema.Column.decode(encoded);
console.log(decoded);
