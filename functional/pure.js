// pure
const func1 = (a, b) => a + b;

// not pure
const c = 5;
const func2 = (a, b) => a + b + c;

// not pure
const func3 = (a, b) => a + b + func1(a, b);

// not pure
const func4 = (a, b) => {
  c = a + b;
};

// not pure
const fun5 = (a, b) => console.log(a, b);

// not pure
const fun6 = (a, b) => {
  func1(a, b);
  return a + b;
};
