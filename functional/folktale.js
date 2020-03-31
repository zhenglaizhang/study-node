const constant = require("folktale/core/lambda/constant");
const counter = {
  current: 0,
  next() {
    return ++this.current;
  }
};

["a", "b", "c"].map(constant(counter.next()));

console.log(counter.current);

const Maybe = require("folktale/maybe");
function find(xs, predicate) {
  for (const x of xs) {
    if (predicate(x)) {
      return Maybe.Just(x);
    }
    return Maybe.Nothing();
  }
}

const x = find([null, 1], x => true);
console.log(x);

const y = find([null, 1], x => false);
console.log(y);

const Result = require("folktale/result");
class DivisionByZero extends Error {
  get name() {
    return "DivisionByZero";
  }
}

class IllegalArgument extends Error {
  get name() {
    return "IllegalArgument";
  }
}

function divide(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return Result.Error(
      new IllegalArgument(`arguments to divide must be numbers`)
    );
  } else if (y === 0) {
    return Result.Error(new DivisionByZero(`${x} / ${y} is not computable.`));
  } else {
    return Result.Ok(x / y);
  }
}

console.log(divide(4, 2));
const err = divide(2, 0);
console.log(err);
