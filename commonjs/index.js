console.log("start require");
var lib = require("./lib.js");
console.log("end require: ", lib);
// lib.helloworld();

// lib is the same object as exports under lib.js
lib.additional = "test";
