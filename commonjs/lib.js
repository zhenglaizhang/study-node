console.log("hello from lib.js");

exports.hello = "word";
exports.helloworld = function() {
  console.log("helloworld");
};
exports.someobj = {
  hello: "world"
};

setTimeout(() => {
  console.log(exports);
}, 2000);
