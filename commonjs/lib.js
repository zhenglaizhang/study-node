console.log("hello from lib.js");

exports.hello = "word";
exports.helloworld = function() {
  console.log("helloworld");
};
exports.someobj = {
  hello: "world"
};

// override exports with single function
module.exports = function minus(a, b) {
  return a - b;
};

setTimeout(() => {
  console.log(exports);
}, 2000);
