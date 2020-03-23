// only pending -> resolved status for only once

// copy and paste into chrome console and view the detailed output
(function() {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 500);
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  console.log(promise); // pending

  setTimeout(() => {
    console.log(promise); // undefined
  }, 800);
})();

// copy and paste into chrome console and view the detailed output
(function() {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("boom"));
    }, 500);
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("finally"));

  console.log(promise); // pending

  setTimeout(() => {
    console.log(promise); // undefined
  }, 800);
})();

// Promise.all
// Promise.race

async function getPromise(): Promise<boolean> {
  return Promise.resolve(true);
}

async function getPromise2(): Promise<boolean | undefined> {
  return undefined;
}

async function getAll() {
  const [p1, p2] = await Promise.all([getPromise(), getPromise2()]);
  console.log(p1);
  console.log(p2);
}

const arr = [
  { a: 1, b: 2 },
  { a: 3, b: 1 }
];

const xx = { a: 1, b: 2 };

const includes = arr.includes(xx);
console.log(includes); // false

console.log(arr.findIndex(a => a.a === xx.a && a.b == xx.b) != -1);
