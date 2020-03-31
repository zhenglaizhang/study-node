const I = require("immutable");
const people = require("./people.json");
// Nested - for deep copy

let out = "no output";

out = I.List([1, 2, 3]);

out = I.Map({ a: "a", b: "b" });

const ip = I.List(people);
out = ip;

const p2 = I.fromJS(people);
out = p2.first();
out = p2.first().get("surname", "(none)");
out = p2.first().getIn(["family", "fatherId"], "(none)"); // nested accessor

const filterEq = (propName, propVal) => data =>
  data.filter(item => item.get(propName) === propVal);

const married = filterEq("married", true);
const withoutDnaTest = filterEq("dnaTestId", "");
out = married(p2);

const filterPathEq = (propPath, propVal) => data =>
  data.filter(item => item.getIn(propPath) === propVal);
const fatherIdIs = id => filterPathEq(["family", "fatherId"], id);
const fatherIdIs2 = fatherIdIs(2);
out = fatherIdIs2(p2);

// push returns a copy
out = I.List([1, 2, 3]);
out.push(4);
out = out.push(6);

//#region Supporting
console.log("\n".repeat(40));
console.log(out.toString());
//#endregion
