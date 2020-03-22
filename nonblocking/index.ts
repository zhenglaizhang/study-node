const glob = require("glob");

// sync
// blocking
console.time("glob");
var result = glob.sync(__dirname + "/../**/*");
console.timeEnd("glob");
console.log(result);

// async call
// non blocking
console.time("globasync");
glob(__dirname + "/../**/*", function(err, res) {
  result = res;
  console.log(res);
});
console.timeEnd("globasync");
console.log(1 + 1);
