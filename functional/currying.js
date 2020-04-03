const people = require("./people.json");

//#region Supporting
console.log("\n".repeat(250));
//#endregion
const filterEq = (prop, value, arr) => {
  return arr.filter(elem => elem[prop] === value);
};

const filterNotEq = (prop, value, arr) => {
  return arr.filter(elem => elem[prop] !== value);
};

const compose = (...funcs) => {
  return data => {
    return funcs.reduceRight((value, func) => {
      return func(value);
    }, data);
  };
};

const isMarried = (val, arr) => filterEq("married", val, arr);
const married = arr => isMarried(true, arr);
const single = arr => isMarried(false, arr);

const out = married(people);
console.log(out);
console.log("numRecords: ", typeof out === "string" ? 1 : out.length);

// the currying function is a function that returns another function which takes only one parameter at a time
// Arrow function
const add = x => y => x + y;
// Normal function
function add(x) {
  return function(y) {
    return x + y;
  };
}
