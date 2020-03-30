// next() => {value, done}

function myIterator(start, finish) {
  let index = start;
  let count = 0;
  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false };
        index++;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      };
    }
  };
}

const it = myIterator(0, 10);
let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}

const it3 = myIterator(0, 10);
for (let val, result; (result = it3.next()) && !result.done; ) {
  val = result.value;
  console.log(val);
}

const arr = [1, 2, 3, 4];
const it2 = arr[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
// it2.return(); // TypeError: it2.return is not a function

const map = new Map();
map.set("k1", "v1");
map.set("k2", "v1");
const mapIt = map[Symbol.iterator]();
console.log(mapIt.next());
console.log(mapIt.next());
console.log(mapIt.next());

// best practice - notice last element
/**
 * { value: [ 'k1', 'v1' ], done: false }
 * { value: [ 'k2', 'v1' ], done: false }
 * { value: undefined, done: true }
 */

for (const [k, v] of map) {
  console.log(`${k} => ${v}`);
}

const set = new Set();
set.add("a");
set.add("b");
const setIt = set[Symbol.iterator]();
for (const v of set) {
  console.log(v);
}
