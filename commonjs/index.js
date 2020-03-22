console.log("start require");
var lib = require("./lib.js");
console.log("end require: ", lib);

// lib.helloworld();

// lib is the same object as exports under lib.js
console.log(lib.helloworld); // undefined
console.log(lib(2, 3));
lib.additional = "test";
