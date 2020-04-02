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

const x = find([1, null], x => true)
  .map(x => {
    data: x;
  })
  // .chain(x => Maybe.Nothing())
  .chain(x => Maybe.Just("None"))
  .matchWith({
    Just: ({ value }) => {
      console.log(`data: ${value}`);
    },
    Nothing: () => {
      console.log("Nothing");
      return "boom";
    }
  });

const y = find([null, 1], x => false)
  .orElse(() => Maybe.Just(12))
  .getOrElse("we");
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
const xx = divide(4, 2)
  .map(x => x + 2)
  .chain(x => divide(x, 2))
  .matchWith({
    Ok: ({ value }) => value,
    Error: ({ value }) => {
      console.log(value);
      return 0;
    }
  });
console.log(xx);
const err = divide(2, 0);
console.log(err);

// Validation
//  map/mapFailure/matchWith/concat/collect

const F = require("folktale");

const minLength = (fieldName, minLen, value) =>
  value && value.length && value.length > minLen
    ? F.validation.Success(value)
    : F.validation.Failure([
        `${fieldName} must be more then ${minLen} chars long`
      ]);

const noSpaces = (fieldName, value) =>
  value.indexOf(" ") === -1
    ? F.validation.Success(value)
    : F.validation.Failure([`${fieldName} cannot contain a space`]);

const pwdValid = pwd =>
  F.validation
    .Success()
    .concat(noSpaces("Password", pwd))
    .concat(minLength("Password", 5, pwd));
const nameValid = name => F.validation.Success().concat(noSpaces("Name", name));

console.log(pwdValid(""));
console.log(pwdValid("abcd"));
console.log(nameValid("abcd daf"));

console.log("-".repeat(10));
out = F.validation.collect([pwdValid("ab f"), nameValid("dave")]);
console.log(out);
console.log("-".repeat(10));
out = F.validation.collect([pwdValid("ab f"), nameValid("dave")]).matchWith({
  Success: ({ value }) => `Success: ${value}`,
  Failure: ({ value }) => `Failure: ${value}`
});
console.log(out);
