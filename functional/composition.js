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

const filterMarried = arr => filterEq("married", true, arr);
const filterNotMarried = arr => filterEq("married", false, arr);
const filterWomen = arr => filterEq("gender", "Female", arr);
const filterMen = arr => filterNotEq("gender", "Female", arr);

const marriedWomen = compose(filterWomen, filterMarried);
const out = marriedWomen(people);
console.log(out);
console.log("numRecords: ", typeof out === "string" ? 1 : out.length);
