function* tsGenerator() {
  console.log(Date.now());
  yield;
  console.log("execution continued");
}

const it = tsGenerator();
it.next();
console.log("---");
for (const val of it) {
  console.log(val);
}

function* tsGenerator2() {
  let ts = Date.now();
  console.log("original ts: ", ts);
  yield ts;
  console.log("foo");
  let additionalTime = yield;
  console.log("additional time: ", additionalTime);
  if (additionalTime) {
    ts = ts + additionalTime;
  }
  console.log("updated ts: ", ts);
}

console.log("xxxxx");
const it2 = tsGenerator2();
const original = it2.next();
console.log(original);
console.log("xxxx");
it2.next();
it2.next();
it2.next();
it2.next();
console.log("xxxx");
it.next(100);
