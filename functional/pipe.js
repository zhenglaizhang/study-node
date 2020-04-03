// A closure is a function that returns a reference to the outer function that is already finished executing.
// the pipe returns another function that takes v. Until the return function takes v, it doesn’t fulfill reduce
const pipe = (...funcs) => v => {
  return funcs.reduce((res, func) => {
    return func(res);
  }, v);
};

const minusFive = v => v - 5;
const addFour = v => v + 4;
const multiplyByTen = v => v * 10;
const identity = v => v;

const res = pipe(minusFive, addFour, multiplyByTen, Math.abs, identity)(0);
console.log(res);

const total = [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0);
console.log(total);
