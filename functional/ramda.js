const R = require("ramda");
const people = require("./people");
console.log("\n".repeat(40));

let out;

const filterEq = (propName, propVal) => R.filter(R.propEq(propName, propVal));
const filterNeq = (propName, propVal) =>
  R.filter(R.complement(R.propEq(propName, propVal)));
const male = filterEq("gender", "Male");

out = filterEq("married", true)(people);

const married = filterEq("married", true);
out = married(people);

const sortByProp = propName => R.sortBy(R.prop(propName));
const sortByPropDesc = propName =>
  R.compose(R.reverse, R.sortBy(R.prop(propName)));

out = sortByPropDesc("married")(people);

const chanied = R.compose(sortByProp("age"), married, male);
out = chanied(people);

const piped = R.pipe(male, married, sortByProp("age"));
out = piped(people);

const allBirthPlaces = R.map(item =>
  R.propOr("(not specified)", "birthplace", item)
);
out = allBirthPlaces(people);

const allMotherIds = R.map(val =>
  R.pathOr("(Not specified)", ["family", "motherId"], val)
);
out = allMotherIds(people);

const uniquePlaces = R.compose(R.uniq, allBirthPlaces);
const isSpecified = val => val !== "(not specified)";
const placeList = R.compose(
  R.sort((a, b) => a > b),
  R.filter(isSpecified),
  uniquePlaces
);

out = placeList(people);

console.log(out.toString());
